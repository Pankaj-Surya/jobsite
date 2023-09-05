import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/download.png'

const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16 dark:bg-gray-800'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <div className='w-full h-[50vh] mt-10 shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4'>
                        <Image src={AboutImg} className='rounded-xl w-full h-full' alt='/' />

                    </div>
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
                        My goal as a Junior Full Stack Web Developer is to continue to develop my skills and expertise while creating impactful software solutions. I am excited about the opportunity to work with other talented developers and designers to create innovative and user-focused web applications.
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