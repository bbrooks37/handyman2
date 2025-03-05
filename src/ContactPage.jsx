import React from 'react';
import './App.css'; // Import your CSS

function ContactPage() {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>
        We're here to help with all your handyman needs in Lakeland, Florida!
      </p>
      <div className="contact-info">
        <p><strong>Phone:</strong> 813-503-5735</p>
        <p><strong>Email:</strong> <a href="mailto:brandon37.brooks@gmail.com">brandon37.brooks@gmail.com</a></p>
        {/* Add a contact form here if you'd like */}
        {/* Add a map of your service area here if you'd like */}
        {/* Add a link to your Calendly or Acuity Scheduling page here if you'd like */}
      </div>
    </div>
  );
}

export default ContactPage;