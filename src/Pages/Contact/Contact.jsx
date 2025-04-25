
const Contact = () => {
    return (
        <div className="mt-10">
            <h1 className="text-4xl font-bold text-center mb-10 text-gray-600">Contact Me</h1>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className="text-center lg:text-left lg:w-1/2 ">
                        <img src="https://i.ibb.co/4KT3mDD/login2.jpg" alt="" />
                    </div>
                    <div className="card w-full lg:max-w-sm shadow-2xl lg:w-1/2 ">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-600 text-bold text-xl">Name</span>
                                </label>
                                <input type="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-600 text-bold text-xl">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-bold text-xl text-gray-600">Message Here</span>
                                </label>
                                <textarea placeholder="Bio" className="textarea textarea-bordered textarea-xs w-full max-w-xs"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-neutral">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;