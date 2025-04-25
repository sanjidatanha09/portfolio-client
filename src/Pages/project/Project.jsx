import { useEffect, useState } from "react";
import Project2 from "./Project2";

const Project = () => {
    const [projects, setProject] = useState([])
    useEffect(() => {
        fetch('datas2.json')
            .then(res => res.json())
            .then(data => setProject(data));

    }, [])
    return (
        <div className="my-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-center mb-10 text-gray-600">My Project</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {projects.map(project => 
                <Project2 
                key={project._id}
                project={project}>
                </Project2>)}
            </div>
        </div>
    );
};

export default Project;