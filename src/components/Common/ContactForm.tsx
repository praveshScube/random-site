import React, { useState } from "react";
import Button from "./Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const googleFormURL =
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf8TMP4ah4GtVgqUUYyHqigeOIbdBLDE7Ht32L36uXBtER4fw/formResponse"; // Replace FORM_ID with your form's ID.

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const form = new FormData();
    form.append("entry.807390002", formData.name); // Replace with actual field names
    form.append("entry.461721901", formData.email);
    form.append("entry.504276721", formData.phone);
    form.append("entry.1719004816", formData.message);

    fetch(googleFormURL, {
      method: "POST",
      body: form,
      mode: "no-cors", // Required for Google Forms
    })
      .then(() => {
        alert("Form submitted successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch((error) => {
        alert("Failed to submit the form");
        console.error(error);
      });
  };

  return (
    <div className="bg-orangeLight sm:p-8 p-4 flex flex-col sm:gap-6 gap-4 rounded-2xl mt-6 sm:mt-0">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter Name"
        className="w-full rounded-lg px-4 sm:py-3 py-2"
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        placeholder="Enter Email"
        className="w-full rounded-lg px-4 sm:py-3 py-2"
      />

      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Enter Phone Number"
        className="w-full rounded-lg px-4 sm:py-3 py-2"
      />

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Enter Message"
        className="w-full rounded-lg px-4 sm:py-3 py-2"
      />

      <div className="w-full flex justify-center items-center">
      <div className="w-fit">
      <Button
        color={"text-orangeDark"}
        text={"Send Message"}
        onClick={() => {}}
      />
      </div>
      </div>
    </div>
  );
};

export default ContactForm;
