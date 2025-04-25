
const Experience = () => {
    return (
        <div>
            <h1 className="text-2xl lg:text-4xl font-bold text-center mb-10 text-gray-600">My Experience</h1>
            <div className="lg:w-[800px] mx-auto ">
                <div className="card  bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-gray-500 font-bold text-2xl text-center">School Teacher</h2>
                    </div>
                    <div><img className="w-[250px] mx-auto rounded-xl" src="https://static.vecteezy.com/system/resources/thumbnails/004/297/596/small/education-logo-open-book-dictionary-textbook-or-notebook-with-sunrice-icon-modern-emblem-idea-concept-design-for-business-libraries-schools-universities-educational-courses-vector.jpg" alt="Shoes" /></div>
                    <div className="text-center">
                        <p className="text-gray-500 font-bold text-2xl">2019-2020</p>
                        <p className="text-gray-500 font-bold text-2xl">Khaja Goribe Newaj School</p>
                        <p className="lg:w-[500px] mx-auto mb-10 text-gray-500 lg:text-xl">During my school experience, I consistently
                            excelled in challenging subjects, earning high
                            grades and developing a strong foundation.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;