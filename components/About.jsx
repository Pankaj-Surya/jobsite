import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/download.png'

const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16 dark:bg-gray-800'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                <img className='w-{750px} h-{550px}' src={"https://fresherbro.com/wp-content/uploads/2023/09/GlobalLogic-is-hiring-Associate-Analyst-jpg-1024x512.webp"} alt={"ddd"} className="w-full h-48 object-cover" />
                    <p className='mt-2'>September 4, 2023</p>
                    <h2 className='mt-2'>GlobalLogic Off Campus Hiring: Associate Analyst Roles</h2>
                    <p className='mt-2'> GlobalLogic is a renowned multinational company specializing in software product engineering, digital transformation, and consulting services. Founded in </p>

                </div>

                <div className='col-span-1'>

                    <h2 className='py-4 dark:text-[#a6b595]'>Who I Am</h2>
                    <p className='py-2 text-gray-600 dark:text-gray-300'>
                        As a Junior Full Stack Web Developer, I am passionate about building dynamic and intuitive web applications that enhance the user experience. My experience includes working with programming languages such as HTML, CSS, JavaScript, and server-side technologies like Node.js. I have also worked with databases such as MySQL and MongoDB, and I am familiar with web frameworks like React js.
                    </p>
                    <p className='py-2 text-gray-600 dark:text-gray-300'>
                        In addition to my technical skills, I am committed to staying up-to-date with industry trends and learning new technologies. I enjoy working in a team environment and have strong problem-solving and communication skills.
                    </p>
                    <Link href='/#projects'>
                        <p className='py-2 text-gray-600 underline cursor-pointer dark:text-blue-400'>
                            Check out some of my latest projects.
                        </p>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default About;