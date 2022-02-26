import React, { useRef, useState } from "react";
import classes from "./Contact.module.css";
import phone from "../../images/phone.png";
import email from "../../images/email.png";
import address from "../../images/address.png";
import emailjs from "@emailjs/browser";

function Contact() {
  const [done, setDone] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kn05kh9",
        "template_10wk9oq",
        formRef.current,
        "user_pXeHFo405uJH6by8Tkksm"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className={classes.contactPage}>
      <div className={classes.contactBackground}></div>
      <div className={classes.wrapper}>
        <div className={classes.contactLeft}>
          <h1 className={classes.contactTitle}>
            {" "}
            Let's get to know each other!{" "}
          </h1>
          <div className={classes.contactInfo}>
            <div className={classes.contactItem}>
              <img src={phone} alt="" className={classes.contactImage}></img>
              <div className={classes.contactPhone}> 0751 937 261</div>
            </div>
            <div className={classes.contactItem}>
              <img src={email} alt="" className={classes.contactImage}></img>
              <div className={classes.contactEmail}>xensandra3@gmail.com</div>
            </div>
            <div className={classes.contactItem}>
              <img src={address} alt="" className={classes.contactImage}></img>
              <div className={classes.contactAddress}>
                {" "}
                Cluj-Napoca, Cluj, Romania
              </div>
            </div>
          </div>
        </div>
        <div className={classes.contactRight}>
          <p className={classes.contactDescription}>
            <b>Speaking of opportunities?</b> Let's get in touch. I am always
            ready to talk about my work or future oportunities. Also, if the
            right project comes along, I am willing to help.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you! I will get back to you ASAP"}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
