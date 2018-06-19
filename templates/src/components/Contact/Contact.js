import React, { Component } from 'react'
import axios from 'axios'
import './style.css'

const INITIAL_STATE = {
    email: '',
    subject: '',
    comment: '',
    error: null,
}

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = { ...INITIAL_STATE }
    }

    onSubmit = e => {
        e.preventDefault()
        const { email, subject, comment } = this.state

        let data = new FormData()
        data.append('email', email)
        data.append('subject', subject)
        data.append('comment', comment)

        axios.post('/api/send_mail', data)
            .then(r => this.setState({ error: r }))
            .catch(e => { this.setState({ error: e }); console.log(e.response);
            })

    }

    render() {
        const { email, subject, comment, error, } = this.state
        const isInvalid = email === ''|| subject === '' || comment == ''

        return (
            <div className="contact">
            <form onSubmit={this.onSubmit}>
              <label htmlFor="email-field">email (required)</label>
              <input
                value={email}
                onChange={e => this.setState({ email: e.target.value })}
                type="text"
                id="email-field"
              />
              <label htmlFor="subject-field">subject (required)</label>
              <input
                value={subject}
                onChange={e => this.setState({ subject: e.target.value })}
                type="text"
                id="subject-field"
              />
              <label htmlFor="comment-field">comment (required)</label>
              <textarea
                value={comment}
                onChange={e => this.setState({ comment: e.target.value })}
                id="comment-field"
                rows="10">
              </textarea>
              <button type="submit" disabled={isInvalid}>
                send message
              </button>
              {error && <p style={{ color: 'red' }}>{error.message}</p>}
            </form>
          </div>
        );
    }
}

export default Contact