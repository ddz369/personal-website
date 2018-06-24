from flask import Flask, render_template, request, jsonify
from send_mail import send
import re as re

app = Flask(__name__)


@app.route('/about/')
@app.route('/portfolio/')
@app.route('/contact/')
@app.route('/')
def hello_world():
    return render_template('build/index.html')


# api that looks to send a message to our sendgrid
@app.route('/api/send_mail', methods=["POST"])
def send_mail():
    email = request.form['email'].encode('ascii', 'ignore')
    subject = request.form['subject'].encode('ascii', 'ignore')
    comment = request.form['comment'].encode('ascii', 'ignore')

    if not re.match(r"[^@]+@[^@]+\.[^@]+", email):
        return jsonify({'response': "error: invalid email format detected."})

    response = send(email, subject, comment)

    if response.status_code not in { 200, 201, 202, 203, 204, 205 }:
        return jsonify({'response': "error: message could not be delivered."})

    return jsonify({'response': "message has successfully been delivered!"})


if __name__ == '__main__':
    app.run()
