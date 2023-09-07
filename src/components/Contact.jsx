import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formStatus, setFormStatus] = useState(false);
  const [query, setQuery] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.name || !query.email || !query.message) {
      return;
    }

    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });

    axios
      .post(
        "https://getform.io/f/de3dc868-82b1-444a-a0d4-1ac040f98b64",
        formData,
        { headers: { Accept: "application/json" } }
      )
      .then(function (response) {
        setFormStatus(true);
        setQuery({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <section name="contact" className="bg-primary py-24">
      <div className="w-[90%] max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl text-f-primary font-semibold pb-6">
          Contact
        </h2>
        <div className="min-h-[60vh] w-full grid place-items-center ">
          <form
            onSubmit={handleSubmit}
            className="max-w-md w-full mx-auto flex flex-col gap-4 ">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Full name"
                value={query.name}
                onChange={handleChange()}
                className="w-full h-10 px-2"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={query.email}
                onChange={handleChange()}
                className="w-full h-10 px-2"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Message"
                value={query.message}
                onChange={handleChange()}
                className="w-full p-2"
                rows="10"></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-btn-green py-2 rounded-md hover:shadow-lg duration-300 hover:text-white">
              Send
            </button>
            {formStatus && (
              <p className="text-center">Message sent successfully.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
