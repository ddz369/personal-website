import React from 'react'
import './style.css'

const INITIAL_STATE = {
    email: '',
    subject: '',
    comment: '',
    error: null,
}

const Contact = () =>
  <div className="contact">
    <form>
      <label for="name-field">email</label>
      <input type="text" id="name-field"/>
      <label for="subject-field">subject</label>
      <input type="text" id="subject-field"/>
      <label for="comment-field">comment</label>
      <textarea id="comment-field" rows="10"></textarea>
      <button> send email </button>
      <button> clear </button>
    </form>
  </div>

export default Contact