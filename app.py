from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__, static_folder='Grocery', template_folder='Grocery')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/shop')
def shop():
    return render_template('shop.html')

@app.route('/cart')
def cart():
    return render_template('cart.html')

@app.route('/<path:filename>')
def static_files(filename):
    return send_from_directory('Grocery', filename)

if __name__ == '__main__':
    app.run(debug=True)
