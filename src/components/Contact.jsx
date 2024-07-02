import React from "react";

function Contact() {
  return (
    <section id="contact" className="mb-20 flex-col justify-center px-4">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-white shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="text-white relative px-4 py-10 bg-[#d70926] shadow-lg sm:rounded-3xl sm:p-20">
          <div className="text-center pb-6">
            <h1 className="text-3xl font-medium">Contact Us!</h1>
            <p className="text-gray-300 font-medium">
              Fill up the form below to send us a message.
            </p>
          </div>

          <form>
            <input
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Name"
              name="name"
            />

            <input
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email"
              name="email"
            />

            <input
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Subject"
              name="_subject"
            />

            <textarea
              className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Type your message here..."
              name="message"
              style={{ height: "121px" }}
            />

            <div className="flex justify-between">
              <input
                className="shadow bg-white text-[#d70926] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                value="Send ➤"
              />
              <input
                className="shadow bg-white  text-[#d70926] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="reset"
                value="Reset"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
