import React, { useState, useRef } from 'react';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import emailjs from 'emailjs-com';

const Contact = () => {
  const formRef = useRef(null);

  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = async (e) => {
    e.preventDefault();

    if (
      username.trim() === '' ||
      phoneNumber.trim() === '' ||
      email.trim() === '' ||
      subject.trim() === '' ||
      message.trim() === ''
    ) {
      setErrMsg('All fields are required!');
      return;
    }

    if (!emailValidation()) {
      setErrMsg('Give a valid Email!');
      return;
    }

    try {
      const templateParams = {
        from_name: username,
        phone_number: phoneNumber,
        from_email: email,
        subject,
        message,
      };

      await emailjs.send(
        'service_9pp9uqc', 
        'template_5r2wfvw', 
        templateParams,
        'qUlLTVdCgm8n2rngW', 
      );

      setSuccessMsg(`Thank you dear ${username}, Your Messages has been sent Successfully!`);
      setErrMsg('');
      formRef.current.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setErrMsg('An error occurred while sending the message.');
    }
  };

  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form ref={formRef} className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="grid grid-cols-1 lgl:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="username" className="text-sm text-gray-400 uppercase tracking-wide">
                    Your name
                  </label>
                  <input
                    id="username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className={`${errMsg === 'All fields are required!' && 'outline-designColor'} contactInput`}
                    type="text"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phoneNumber" className="text-sm text-gray-400 uppercase tracking-wide">
                    Phone Number
                  </label>
                  <input
                    id="phoneNumber"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`${errMsg === 'All fields are required!' && 'outline-designColor'} contactInput`}
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm text-gray-400 uppercase tracking-wide">
                  Email
                </label>
                <input
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`${errMsg === 'All fields are required!' && 'outline-designColor'} contactInput`}
                  type="email"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="subject" className="text-sm text-gray-400 uppercase tracking-wide">
                  Subject
                </label>
                <input
                  id="subject"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`${errMsg === 'All fields are required!' && 'outline-designColor'} contactInput`}
                  type="text"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-sm text-gray-400 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  id="message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`${errMsg === 'All fields are required!' && 'outline-designColor'} contactTextArea`}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  onClick={handleSend}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
