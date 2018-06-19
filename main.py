from flask import Flask, render_template, request
import sendgrid, re

app = Flask(__name__)


@app.route('/about/')
@app.route('/portfolio/')
@app.route('/contact/')
@app.route('/')
def hello_world():
    return render_template('build/index.html')


@app.route('/api/send_mail', methods=["POST"])
def send_mail():
    email = request.form['email'].encode('ascii', 'ignore')
    subject = request.form['subject'].encode('ascii', 'ignore')
    comment = request.form['comment'].encode('ascii', 'ignore')

    if not re.match(r"[^@]+@[^@]+\.[^@]+", email):
        raise GenericException("error: invalid email format detected.", 401)

    response = sendgrid.send(email, subject, comment)
    if response.status_code not in {200, 201, 204}:
        raise GenericException(response.body, 402)

    return


if __name__ == '__main__':
    app.run()
