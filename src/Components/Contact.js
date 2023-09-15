import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

export default function Contact() {
  const [successMessage, setSuccessMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const form = useRef();

  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "7u9P7Q0a8N3DchwLG";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    );
    r.target.reset();
  };

  const sendEmail = (e) => {
    // e.preventDefault();
    emailjs
      .sendForm(serviceID, templateID, form.current, userID)
      .then((result) => {
        setSuccessMessage(
          "form sent Successfully! I'll contact you as soon as possible."
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="contacts"  id="contactme">
      <div className="text-center">
        <h1>contact me</h1>
        <p>
          Please fill out the form and describe your project needs and I'll
          contact you as soon as possible
        </p>
        <span className="success-message">
            {successMessage}
        </span>
      </div>
      <div className="container">
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* NAME INPUT */}
              <div className="text-center">
                <input
                  id="name"
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  {...register("name", { required: true, maxLength: 30 })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.name && <span>Please enter your name</span>}
              </span>
              {/* PHONE INPUT */}
              <div className="text-center">
                <input
                  id="phone"
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phone"
                  {...register("phone", { required: true })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.phone && <span>Please add your phone number</span>}
              </span>
              {/* EMAIL INPUT */}
              <div className="text-center">
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  {...register("email", { required: true })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.email && <span>Please enter your email id</span>}
              </span>
              {/* SUBJECT INPUT */}
              <div className="text-center">
                <input
                  id="subject"
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  {...register("subject", { required: true })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.name && <span>OOPS you forgot to add subject.</span>}
              </span>
            </div>

            <div className="col-md-6 col-xs-12">
              {/* Description INPUT */}
              <div className="text-center">
                <textarea
                  id="description"
                  type="textarea"
                  className="form-control"
                  placeholder="Please describe shortly your project..."
                  name="description"
                  {...register("description", { required: true })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.name && <span>Please describe shortly your project needs...</span>}
              </span>
              <button className="btn-main-offer contacts-btn" type="submit">
                contact me
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
