# freeze.py
from flask_frozen import Freezer
from load_flask import app

freezer = Freezer(app)

if __name__ == '__main__':
    freezer.freeze()
