import "../styles/contact.css";
import illustration from "../assets/contact-illustration.png";

function Contact() {
  return (
    <>
      <div className="contact-container" data-aos="fade-right">
        <div className="illustration-holder">
          <img src={illustration} alt="" />
        </div>
        <div className="input-holder">
          <form action="contact">
            <input type="text" placeholder="FullName" name="" id="" />
            <input type="email" name="" id="" placeholder="Email" />
            <input type="text" placeholder="Subject" name="" id="" />
            <textarea
              rows="1"
              type="text"
              placeholder="Message"
              className="message"
              name=""
              id=""
            />
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Contact;
