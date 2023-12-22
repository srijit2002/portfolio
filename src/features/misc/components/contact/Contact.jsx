import { useState } from "react";
import "./Contact.css";
import axios from "@/lib/axios";

export const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", description: "" });
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsSending(true)
      await axios.post("/post-form", {
        ...form,
        timestamp: new Date().toISOString(),
      });
      setIsSending(false)
      setShowAlert(true);
      setForm({ name: "", email: "", description: "" });
      window.setTimeout(() => setShowAlert(false), 10000);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  return (
    <footer className="footer" id="hire">
      <h1 className="footer__heading">Let&apos;s Talk</h1>
      <div className="footer__data">
        <ul className="social__icons__wrapper">
          <li className="flex--center social__links">
            <i className="fas fa-envelope"></i>
            <a href="mailto: srijitm906@gmail.com">srijitm906@gmail.com</a>
          </li>
          <li className="flex--center social__links">
            <i className="fab fa-github"></i>
            <a target="__blank" href="https://github.com/srijit2002">
              srijit2002
            </a>
          </li>
        </ul>
        <form className="form" id="form" onSubmit={handleSubmit}>
          <div className="form__contact">
            <input
              required={true}
              className="form__name input"
              name="name"
              type="text"
              placeholder="What's your name?"
              onChange={handleChange}
              value={form.name}
            />
            <input
              required={true}
              className="form__email input"
              name="email"
              type="email"
              placeholder="And your email address"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="form__desc">
            <textarea
              required={true}
              className="form__des input"
              name="description"
              cols="30"
              rows="10"
              placeholder="And how can I help you?"
              onChange={handleChange}
              value={form.description}
            ></textarea>
            {showAlert && (
              <div className="alert">
                I am excited to read your thoughts and will get back to you faster than a shooting star! 🚀
              </div>
            )}
          </div>
          <button
            className="btn btn--submit"
            type="submit"
            disabled={isSending}
          >
           { isSending?"Please wait...":"Send It!"}
          </button>
        </form>
      </div>
    </footer>
  );
};
