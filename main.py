from flask import Flask, render_template

app = Flask(__name__)


@app.route('/about/')
@app.route('/portfolio/')
@app.route('/contact/')
def hello_world():
    return render_template('build/index.html')


if __name__ == '__main__':
    app.run()
