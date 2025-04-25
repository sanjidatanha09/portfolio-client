import React from 'react';

const Project2 = ({ project }) => {
    const { bio_id, bio_img, bio_name,bio_link } = project;
    console.log(project)
    return (
        <div className='mt-10'>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className='h-[300px]' src={bio_img} alt="Shoes" /></figure>
                <div className="card-body">
                    <p className='text-xl font-bold text-gray-500 my-5'>{bio_name}</p>
                    <div className="card-actions justify-end">
                        <a href={bio_link} className="btn btn-neutral mb-5 text-xl">View Website</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project2;