
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import call_icon from '../../assets/call_icon.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);

    formData.append("access_key", "e5d99ff2-a61d-4723-9ac7-cc78d3394c38");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        alert(data.message);
        event.target.reset();
      } else {
        console.error("Error:", data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="contact-sections">
        <div className="contact-left">
          <h1>Lets talk</h1>
          <div className="paracont">
            <p className="contact-left-para">
              I am currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.
            </p>
          </div>
          <div className="contact-info">
            <div className="allinfo">
              <img src={mail_icon} alt="Mail Icon" />
              <p>ap991348@gmail.com</p>
            </div>
            <div className="allinfo">
              <img src={call_icon} alt="Call Icon" />
              <p>6352150233</p>
            </div>
            <div className="allinfo">
              <img src={location_icon} alt="Location Icon" />
              <p>Gujarat, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" required />
          <label htmlFor="email">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" required />
          <label htmlFor="message">Write your message here</label>
          <textarea placeholder="Enter your message" name="message" rows="8" required></textarea>
          <button className="contact-submit" type="submit">Submit Now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
