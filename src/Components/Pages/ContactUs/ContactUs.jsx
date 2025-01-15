import { Helmet } from "react-helmet";

const ContactUs = () => {
  const handleRegisterAccount = (e) => {
    e.preventDefault();
    const username = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    window.reload();
    console.log(` username: ${username}, email: ${email}, message: ${message}`);
  };

  return (
    <div>
      <Helmet>
        <title>Contact Us - Home Lengo</title>
      </Helmet>
      <div className="container mx-auto py-10">
        <div className="w-2/4 p-10 rounded-3xl mb-10 mx-auto shadow-lg">
          <h1 className="text-center mb-10 font-extrabold text-2xl">
            Contact With Us
          </h1>
          <form onSubmit={handleRegisterAccount}>
            <div className="mb-5">
              <label className="input input-bordered rounded-full flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter Your Name"
                  name="name"
                />
              </label>
            </div>{" "}
            <div className="mb-5">
              <label className="input input-bordered rounded-full flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="email"
                  className="grow"
                  placeholder="Enter your e-mail Address"
                  name="email"
                />
              </label>
            </div>
            <div className="mb-5">
              <div>
                <textarea
                  className="textarea textarea-bordered w-full rounded-full resize-none"
                  placeholder="Write your message"
                  name="message"
                ></textarea>
              </div>
            </div>
            <div className="mb-5">
              <button
                type="submit"
                className="text-white hover:text-[#161e2d] hover:bg-white btn btn-outline w-full px-8 font-bold border-2 rounded-full bg-[#1563df] border-[#1563df]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
