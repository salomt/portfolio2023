import React, { useState } from "react";

export default function ContactForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation
  const [errors, setErrors] = useState({});

  //   Setting button text
  const [buttonText, setButtonText] = useState("Send");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
        setButtonText("Sending");

        const res = await fetch("/api/sendgrid", {
            body: JSON.stringify({
            email: email,
            fullname: fullname,
            subject: subject,
            message: message,
        }),
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");

        // Reset form fields
        setFullname("");
        setEmail("");
        setMessage("");
        setSubject("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
      // Reset form fields
      setFullname("");
      setEmail("");
      setMessage("");
      setSubject("");
    }

   console.log(fullname, email, subject, message);

  };

  return (
    <form
        onSubmit={handleSubmit}
        className='rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500'
  >
    <h1 className='text-2xl font-bold dark:text-gray-50'>
      Send a message!
    </h1>

    <label
      htmlFor='fullname'
      className='text-gray-500 font-light mt-8 dark:text-gray-50'
    >
      Full name<span className='text-red-500 dark:text-gray-50'>*</span>
    </label>
    <input
      type='text'
      value={fullname}
      onChange={(e) => {
        setFullname(e.target.value);
      }}
      name='fullname'
      className='bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500'
    />
   
    <label
      htmlFor="email"
      className="text-gray-500 font-light mt-4 dark:text-gray-50"
    >
      E-mail<span className="text-red-500">*</span>
    </label>
    <input
      type="email"
      name="email"
      value={email}
      onChange={(e) => {
        setEmail(e.target.value);
      }}
      className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
    />
    

    <label
      htmlFor="subject"
      className="text-gray-500 font-light mt-4 dark:text-gray-50"
    >
      Subject<span className="text-red-500">*</span>
    </label>
    <input
      type="text"
      name="subject"
      value={subject}
      onChange={(e) => {
        setSubject(e.target.value);
      }}
      className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
    />
   
    <label
      htmlFor="message"
      className="text-gray-500 font-light mt-4 dark:text-gray-50"
    >
      Message<span className="text-red-500">*</span>
    </label>
    <textarea
      name="message"
      value={message}
      onChange={(e) => {
        setMessage(e.target.value);
      }}
      className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
    ></textarea>
    
    <div className="flex flex-row items-center justify-start">
      <button
        type="submit"
        className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
      >
        {buttonText}
      </button>
    </div>
    <div className="">
        {showSuccessMessage && (
            <p className="text-green-500 font-semibold text-sm my-2">
                Thank you! Your Message has been delivered.
            </p>
        )}
        {showFailureMessage && (
            <p className="text-red-500">
                Oops! Something went wrong, please try again.
            </p>
        )}
    </div>
  </form>

  )

}