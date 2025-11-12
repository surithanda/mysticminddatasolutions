"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import RevealWrapper from "../animation/RevealWrapper";
import axios from "axios";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string().matches(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"),
    subject: Yup.string(),
    message: Yup.string().required("Message is required"),
  });

  const onSubmit = async (values: any, { resetForm }: any) => {
    try {
      setLoading(true);

      const userFormData = {
        replacements: [
          { name: "USERNAME", replacement: values.name },
          { name: "NAME", replacement: values.name },
          { name: "EMAIL", replacement: values.email },
          { name: "SUBJECT", replacement: values.subject },
          { name: "MESSAGE", replacement: values.message },
        ],
        to: values.email,
      };

      const res = await axios.post(
        "https://mail-sender.accurateweb.in/api/template/930c3d470c93484b/send",
        userFormData,
        {
          headers: {
            "Content-Type": "application/json",
            "mail-token":
              "13dfca8c710e889ccf4db5cdc79cac874620f105b581d2ab57b70e30f4afe8b8",
          },
        }
      );

      if (res && res?.data) {
        console.log("Form Data Submitted:", values);
        toast.success("Message sent to admin!");
        resetForm();
      }
    } catch (error) {
      console.error("Error Submitting The Form:", error);
      toast.error("❌ Failed to send your message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]  overflow-hidden lg:overflow-visible">
      <img
        src="/images/patterns/rotating.gif"
        alt="logo-spinner"
        className="pointer-events-none absolute -right-[60%] xl:-right-[26%] top-48  w-[500px] md:w-[800px] opacity-50 z-40"
      />
      <div className="container">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {() => (
            <RevealWrapper
              as={Form}
              className="reveal-me mx-auto grid max-w-[800px] grid-cols-1 gap-[30px] md:grid-cols-2"
            >
              {/* Full Name */}
              <div className="md:col-span-full">
                <label
                  htmlFor="name"
                  className="text-2xl text-[#000000b3] dark:text-dark-100"
                >
                  Full Name*
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  className="mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl text-colorText focus:border-primary focus:outline-none dark:border-dark dark:bg-dark"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="mt-1 text-sm text-red-500"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="text-2xl text-[#000000b3] dark:text-dark-100"
                >
                  Email*
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="name@company.com"
                  className="mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl text-colorText focus:border-primary focus:outline-none dark:border-dark dark:bg-dark"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="mt-1 text-sm text-red-500"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phone"
                  className="text-2xl text-[#000000b3] dark:text-dark-100"
                >
                  Phone Number
                </label>
                <Field
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+91 123 456 7890"
                  className="mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl text-colorText focus:border-primary focus:outline-none dark:border-dark dark:bg-dark"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="mt-1 text-sm text-red-500"
                />
              </div>

              {/* Subject */}
             <div className="md:col-span-full">
  <label
    htmlFor="subject"
    className="text-2xl text-[#000000b3] dark:text-dark-100"
  >
    Subject
  </label>
  <Field
    as="select"
    id="subject"
    name="subject"
    className="mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl text-colorText focus:border-primary focus:outline-none dark:border-dark dark:bg-dark"
  >
    
    <option value="suggestions">Our Suggestions</option>
    <option value="query">Query</option>
    <option value="services">List of Services</option>
    <option value="job-openings">Job Openings</option>
    <option value="website">Website</option>
  </Field>
  <ErrorMessage
    name="subject"
    component="div"
    className="mt-1 text-sm text-red-500"
  />
</div>


              {/* Message */}
              <div className="md:col-span-full">
                <label
                  htmlFor="message"
                  className="text-2xl text-[#000000b3] dark:text-dark-100"
                >
                  Message*
                </label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  placeholder="Type your message..."
                  className="mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl text-colorText focus:border-primary focus:outline-none dark:border-dark dark:bg-dark"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="mt-1 text-sm text-red-500"
                />
              </div>

              {/* reCAPTCHA Placeholder */}
              <div className="md:col-span-full">
                <div className="mt-5 flex justify-center">
                  <div className="h-20 w-full max-w-sm rounded border bg-gray-100 text-center leading-[80px] text-gray-600 dark:bg-dark">
                    reCAPTCHA Placeholder
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="col-span-full sm:mt-14 md:mx-auto">
                <button
                  type="submit"
                  disabled={loading}
                  className={`rv-button rv-button-primary block w-full md:inline-block md:w-auto ${
                    loading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  <div className="rv-button-top">
                    <span>{loading ? "Sending..." : "Send Message"}</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span className="text-nowrap">
                      {loading ? "Sending..." : "Send Message"}
                    </span>
                  </div>
                </button>
              </div>
            </RevealWrapper>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default ContactForm;
