import { useEffect, useState } from "react";
import Skills2 from "./Skills2";

const Skills = () => {
const [skills, setSkills] = useState([])
useEffect(() =>{
    fetch('datas.json')
    .then(res => res.json())
    .then(data => setSkills(data));

},[])
console.log(skills);

    return (
        <div className="my-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-center mb-10 text-gray-600">My Skills</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {skills.map(skill => 
                <Skills2 
                key={skill._id}
                skill={skill}>
                </Skills2>)}
            </div>
        </div>  
    );
};

export default Skills;