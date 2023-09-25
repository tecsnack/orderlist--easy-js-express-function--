from flask import Flask, render_template, request, redirect

app = Flask(__name__)

order_list = []

@app.route('/')
def index():
    return render_template('index.html', order_list=order_list)

@app.route('/add_order', methods=['POST'])
def add_order():
    order_text = request.form.get('orderInput')
    if order_text:
        order_list.append(order_text)
    return redirect('/')

@app.route('/clear_orders', methods=['POST'])
def clear_orders():
    order_list.clear()
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)
