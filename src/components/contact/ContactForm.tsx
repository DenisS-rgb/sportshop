function ContactForm() {
    return (
        <div className="max-w-6xl mx-auto py-12 px-4">
            <form className="w-full max-w-4xl mx-auto bg-white p-6" method="post" role="form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mb-1 text-sm text-gray-700">
                            Nume
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Introduceți numele"
                            className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-1 text-sm text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Introduceți email"
                            className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                    </div>
                </div>
                <div className="mb-6">
                    <label htmlFor="subject" className="mb-1 block text-sm text-gray-700">
                        Subiect
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Introduceți subiectul"
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="mb-1 block text-sm text-gray-700">
                        Mesajul
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={8}
                        placeholder="Introduceți Mesajul"
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md resize-y focus:outline-none focus:ring-2 focus:ring-blue-300"
                    ></textarea>
                </div>
                <div className="text-right">
                    <button
                        type="submit"
                        className="bg-[#59ab6e] text-white px-6 py-3 rounded-md text-lg hover:bg-green-700 transition"
                    >
                        Începe conversația
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;
