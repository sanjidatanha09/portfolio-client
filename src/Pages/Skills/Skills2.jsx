
const Skills2 = ({ skill }) => {
    const { bio_id, bio_img, bio_name } = skill;
    console.log(skill)
    return (
        <div className="p-5">
            <div className="card card-compact w-52 bg-base-100 shadow-xl">
                <div className="h-[100px] w-[150px] mx-auto mt-10"><img className="w-full h-full" src={bio_img} alt="Shoes" /></div>
                <div className="card-body">
                    <p className="text-2xl font-bold text-gray-500 text-center">{bio_name}</p>
                </div>
            </div>
        </div>
    );
};

export default Skills2;