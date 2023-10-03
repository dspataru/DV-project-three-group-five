# Import dependencies
from pymongo import MongoClient
from pprint import pprint
import pandas as pd
import json
from datetime import datetime

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

# creating an app
app = Flask(__name__)

@app.route("/")
def home():
    return (
        f"Welcome to the Portfolio API!<br/>"
        f"Available Routes:<br/>"
        f"/api/portfolio_weights/[portfolio]<br/>"
        f"/api/portfolio_data/[portfolio]<br/>"
        f"/api/portfolio_data/[portfolio]/[start_date]<br/>"
        f"/api/portfolio_data/[portfolio]/[start_date]/[end_date]<br/>"
        f"/api/v1.0/justice-league/Barry%20Allen<br/>"
        f"/api/v1.0/justice-league/Hal%20Jordan<br/>"
        f"/api/v1.0/justice-league/Clark%20Kent/Kal-El<br/>"
        f"/api/v1.0/justice-league/Princess%20Diana"
    )

# flask routes
@app.route("/api/portfolio_weights/<portfolio>")
def portfolioweights(portfolio):
    """Return the ETF allocation for each portfolio"""
    if portfolio in portfolio_list:
        weights = portfolio_weights.find({'portfolio':portfolio}, {"_id": 0})[0]
        return jsonify(weights)
    else:
        return jsonify({"error": f"Portfolio not found."}), 404

        
@app.route("/api/portfolio_data/<portfolio>")
def portfoliodata(portfolio):
    """Return the data for each portfolio"""
    if portfolio in portfolio_list:
        portfolio_data_obj = portfolio_data[portfolio].find({}, {"_id": 0})
        portfolio_data_list = []
        for data in portfolio_data_obj:
            portfolio_data_list.append(data)
    
        return jsonify(portfolio_data_list)
    else:
        return jsonify({"error": f"Portfolio not found."}), 404

@app.route("/api/portfolio_data/<portfolio>/<start_date>")
def portfoliodata_startdate(portfolio, start_date):
    """Return the data for each portfolio"""
    if portfolio in portfolio_list:
            portfolio_data_obj = portfolio_data[portfolio].find({"date" :{'$gte': start_date}}, {"_id": 0})
            portfolio_data_list = []
            for data in portfolio_data_obj:
                portfolio_data_list.append(data)

            if not portfolio_list:
                return jsonify({"error": f"Invalid Date"}), 404
            else:
                return jsonify(portfolio_data_list)
            
    else:
        return jsonify({"error": f"Portfolio not found."}), 404

@app.route("/api/portfolio_data/<portfolio>/<start_date>/<end_date>")
def portfoliodata_startdate_enddate(portfolio, start_date, end_date):
    """Return the data for each portfolio"""
    if portfolio in portfolio_list:
            portfolio_data_obj = portfolio_data[portfolio].find({"date" :{'$gte':start_date, '$lte': end_date}}, {"_id": 0})
            portfolio_data_list = []
            for data in portfolio_data_obj:
                portfolio_data_list.append(data)

            if not portfolio_list:
                return jsonify({"error": f"Invalid Date"}), 404
            else:
                return jsonify(portfolio_data_list)
            
    else:
        return jsonify({"error": f"Portfolio not found."}), 404


if __name__ == "__main__":
    app.run(port = 9000, debug=True)