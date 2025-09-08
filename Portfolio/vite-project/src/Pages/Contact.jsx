import { useState, useEffect } from "react";
import Profile from "../assets/image.png";
import Style from "./Contact.module.css";

function Contact() {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });


  useEffect(() => {
    const savedData = localStorage.getItem("contactForm");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("contactForm", JSON.stringify(formData));
  }, [formData]);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully ");

    
    localStorage.setItem("contactForm", JSON.stringify(formData));

    setFormData({ fullName: "", email: "", phone: "", message: "" });
  };

  return (
    <div className={Style.container}>
      <div className={Style.wrapper}>
        <img src={Profile} alt="Usama" className={Style.profileImg} />
        <h1>Contact Us</h1>
        <h2>Phone no: 6388086156</h2>
        <h2>Email: mohdusama23062004@gmail.com</h2>

        <form className={Style.form} onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            className={Style.input}
            placeholder="Full name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            className={Style.input}
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            className={Style.input}
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label>Send Message</label>
          <textarea
            name="message"
            className={Style.textarea}
            placeholder="Write your message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className={Style.btn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
