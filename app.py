from flask import Flask, render_template

app = Flask(__name__)

# Example movie data
movie = [
    {"name" : "nour einy" , "age" : "+16" , "price" : "10LE" , "image" : "images/images (3).jpeg"} ,
    {"name" : "bahebak" , "age" : "+18" ,"price" : "10LE" , "image" : "images/images (2).jpeg"} ,
    {"name" : "chucky" , "age" : "+18" ,"price" : "200LE" , "image" : "images/images.jpeg"} ,
    {"name" : "it ends with us" , "age" : "+18" ,"price" : "100LE" , "image" : "images/cSMdFWmajaX4oUMLx7HEDI84GkP-683x1024.jpg"} ,
    {"name" : "tom & jerry" , "age" : "+10" , "price" : "15LE" ,"image" : "images/images (1).jpeg"} ,
    {"name" : "captain hema" , "age" : "+15" , "price" : "20LE" ,"image" : "images/Captain_Hema_Poster.jpg"} ,
]

@app.route("/")
def index():
    return render_template('index.html', movies=movie)

@app.route('/contact')
def contact():
    return render_template('contact.html')


@app.route('/payment')
def payment():
    return render_template('payment.html')

if __name__ == "__main__":
    app.run(debug=True)

  