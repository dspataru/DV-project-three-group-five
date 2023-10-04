# Import dependencies
from pymongo import MongoClient


# Create an instance of MongoClient
mongo = MongoClient(port=27017)

# confirm that our new database was created
db = mongo.portfolios_db

# assign each collection to a variable
etf_list = ['bond','spy','vgk','sche','vong']
portfolio_list = ['conservative', 'balanced', 'growth']

portfolio_data = {}
for portfolio in portfolio_list:
    portfolio_data[portfolio] = db[f"{portfolio}_portfolio_data"]
    
price_info = {}
for etf in etf_list:
    price_info[etf] = db[f"{etf}_price_info"]
    
etf_return_risk = db["etf_return_risk"]
etf_additional_info = db['etf_additional_info']
portfolio_weights = db['portfolio_weights']

# import flask
from flask import Flask, jsonify
from flask_cors import CORS

# creating an app
app = Flask(__name__)
CORS(app)

###############################
       # flask routes #
###############################


@app.route("/")
def home():
    return (
        f"Welcome to the Portfolio API!<br/>"
        f"Available Routes:<br/>"
        f"/api/portfolio_weights/[portfolio]<br/>"
        f"/api/portfolio_data/[portfolio]<br/>"
        f"/api/portfolio_data/[portfolio]/[start_date]<br/>"
        f"/api/portfolio_data/[portfolio]/[start_date]/[end_date]<br/>"
        f"/api/return_risk/[etf]<br/>"
        f"/api/price_info/[etf]<br/>"
        f"/api/price_info/[etf]/[start_date]<br/>"
        f"/api/additional_info/[etf]"
    )


@app.route("/api/portfolio_weights/<portfolio>")
def portfolioweights(portfolio):
    """Return the ETF allocation for each portfolio"""
    if portfolio.lower() in portfolio_list:
        weights = portfolio_weights.find({'portfolio':portfolio.lower()}, {"_id": 0})[0]
        return jsonify(weights)
    else:
        return jsonify({"error": f"Portfolio not found."}), 404

        
@app.route("/api/portfolio_data/<portfolio>")
def portfoliodata(portfolio):
    """Return the data for each portfolio"""
    if portfolio.lower() in portfolio_list:
        portfolio_data_obj = portfolio_data[portfolio.lower()].find({}, {"_id": 0})
        portfolio_data_list = []
        for data in portfolio_data_obj:
            portfolio_data_list.append(data)
    
        return jsonify(portfolio_data_list)
    else:
        return jsonify({"error": f"Portfolio not found."}), 404

@app.route("/api/portfolio_data/<portfolio>/<start_date>")
def portfoliodata_startdate(portfolio, start_date):
    """Return the data for each portfolio after the given start date"""
    if portfolio.lower() in portfolio_list:
            portfolio_data_obj = portfolio_data[portfolio.lower()].find({"date" :{'$gte': start_date}}, {"_id": 0})
            portfolio_data_list = []
            for data in portfolio_data_obj:
                portfolio_data_list.append(data)

            if not portfolio_data_list:
                return jsonify({"error": f"Invalid Date"}), 404
            else:
                return jsonify(portfolio_data_list)
            
    else:
        return jsonify({"error": f"Portfolio not found."}), 404

@app.route("/api/portfolio_data/<portfolio>/<start_date>/<end_date>")
def portfoliodata_startdate_enddate(portfolio, start_date, end_date):
    """Return the data for each portfolio between a given start and end date"""
    if portfolio.lower() in portfolio_list:
            portfolio_data_obj = portfolio_data[portfolio.lower()].find({"date" :{'$gte':start_date, '$lte':end_date}}, {"_id": 0})
            portfolio_data_list = []
            for data in portfolio_data_obj:
                portfolio_data_list.append(data)

            if not portfolio_data_list:
                return jsonify({"error": f"Invalid Date"}), 404
            else:
                return jsonify(portfolio_data_list)
            
    else:
        return jsonify({"error": f"Portfolio not found."}), 404

@app.route("/api/return_risk/<etf>")
def returnrisk(etf):
    """Return the ETF annualized return and risk values in %"""
    if etf.lower() in etf_list:
        return_risk = etf_return_risk.find({'ticker':etf.upper()}, {"_id": 0})[0]
        return jsonify(return_risk)
    else:
        return jsonify({"error": f"Invalid ticker entry."}), 404
    
@app.route("/api/price_info/<etf>")
def priceinfo(etf):
    """Return all historical price data on given ETF"""
    if etf.lower() in etf_list:
        etf_price_info_obj = price_info[etf.lower()].find({}, {"_id": 0})
        etf_price_info_list = []
        for info in etf_price_info_obj:
            etf_price_info_list.append(info)
        return jsonify(etf_price_info_list)
    else:
        return jsonify({"error": f"Invalid ticker entry."}), 404

@app.route("/api/price_info/<etf>/<start_date>")
def priceinfo_startdate(etf, start_date):
    """Return all historical price data on given ETF after given start date"""
    if etf.lower() in etf_list:
        etf_price_info_obj = price_info[etf.lower()].find({"date" :{'$gte': start_date}}, {"_id": 0})
        etf_price_info_list = []
        for info in etf_price_info_obj:
            etf_price_info_list.append(info)

        if not etf_price_info_list:
            return jsonify({"error": f"Invalid Date"}), 404
        else:
            return jsonify(etf_price_info_list)
    else:
        return jsonify({"error": f"Invalid ticker entry."}), 404

@app.route("/api/additional_info/<etf>")
def additionalinfo(etf):
    """Return the additional etf info"""
    if etf.lower() in etf_list:
        etf_info = etf_additional_info.find({'ticker':etf.upper()}, {"_id": 0})[0]
        return jsonify(etf_info)
    else:
        return jsonify({"error": f"Invalid ticker entry."}), 404

if __name__ == "__main__":
    app.run(port=9000, debug=True)