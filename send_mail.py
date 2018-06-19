import sendgrid
# hidden secret API key that git ignores
from sendgrid_key import *
from sendgrid.helpers.mail import *

receiver = "darvin.zhang@gmail.com"


# function that looks to send an email via sendgrid
def send(sender, subject, comment):
    # initializing the sendgrid class with our api key
    sg = sendgrid.SendGridAPIClient(apikey=SENDGRID_API_KEY)

    # mail declaration
    from_email = Email(sender)
    to_email = Email(receiver)
    content = Content("text/plain", comment)
    mail = Mail(from_email, subject, to_email, content)

    # attempt to send the mail
    response = sg.client.mail.send.post(request_body=mail.get())
    print(response.status_code)
    return response
