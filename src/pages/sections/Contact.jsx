const Contact = () => {
    return (
        <div className="bg-gray-100 py-16 px-6" id="contact">
            <div className="max-w-4xl mx-auto text-center">
                {/* Section Header */}
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
                <p className="text-lg text-gray-600 mb-8">
                    Whether you want to collaborate or just say hi, feel free to reach out!
                </p>

                {/* Contact Form */}
                <form
                    action="https://formspree.io/f/yourFormID" // Replace with your Formspree URL or other backend
                    method="POST"
                    className="space-y-6"
                >
                    <div className="flex flex-col md:flex-row md:space-x-4">
                        {/* Name Field */}
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                            required
                        />
                        {/* Email Field */}
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                            required
                        />
                    </div>

                    {/* Message Field */}
                    <textarea
                        name="message"
                        rows="5"
                        placeholder="Your Message"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                        required
                    ></textarea>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>

            {/* Social Links */}
            <div className="mt-12 text-center">
                <p className="text-gray-600">Or connect with me on:</p>
                <div className="flex justify-center space-x-6 mt-4">
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 hover:text-green-700"
                    >
                        Twitter
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 hover:text-green-700"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 hover:text-green-700"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
