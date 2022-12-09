import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Spinner from '../components/icons/spinner';
import Toast from '../components/Toast';

const initialFormValue = {
  user_name: '',
  user_email: '',
  message: ''
}

export const Support = () => {
  const timer = useRef(null)
  const form = useRef()

  const [isSending, setIsSending] = useState(false)
  const [inputData, setInputData] = useState(initialFormValue)
  const [isShowToast, setIsShowToast] = useState(false)

  const onInputChange = (e) => {
    const { id, value } = e.target
    setInputData({ ...inputData, [id]: value })
  }


  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true)

    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
        setIsSending(false)
        setInputData(initialFormValue)
        setIsShowToast(true)
        // console.log(result.text);
      }, (error) => {
        setIsSending(false)
        setInputData(initialFormValue)
        // console.log(error.text);
      });
  };

  useEffect(() => {
    timer.current = setTimeout(() => {
      setIsShowToast(false)
    }, 2000)

    return () => {
      clearTimeout(timer.current)
    }
  }, [isShowToast])

  return (
    <div className=''>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>

            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Send a message to us
            </h2>

          </div>

          <form ref={form} onSubmit={sendEmail} className="mt-8 space-y-6">
            <div className="-space-y-px rounded-md shadow-sm">

              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="user_name"
                  name="user_name"
                  type="name"
                  autoComplete="current-name"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Name"
                  value={inputData.user_name}
                  onChange={onInputChange}
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="user_email"
                  name="user_email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Your email address"
                  value={inputData.user_email}
                  onChange={onInputChange}
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  type="message"
                  autoComplete="current-message"
                  rows={6}
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Add your message..."
                  value={inputData.message}
                  onChange={onInputChange}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                </span>
                {!isSending ? 'Send' : <Spinner />}
              </button>
            </div>
          </form>

          <Toast isShowToast={isShowToast} />
        </div>
      </div>
    </div>
  );
};

export default Support