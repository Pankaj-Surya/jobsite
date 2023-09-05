import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/download.png'

const ListItem = () => {
    const items = [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        // Add more items as needed
    ];

    return (
        <div id='ListItem' className='w-full md:h-screen p-2 flex items-center py-16 dark:bg-gray-800'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    {/* <div className='w-full h-[50vh] mt-10 shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4'>
                        <Image src={AboutImg} className='rounded-xl w-full h-full' alt='/' />

                    </div>
                    <p className='mt-2'>September 4, 2023</p>
                    <h2 className='mt-2'>GlobalLogic Off Campus Hiring: Associate Analyst Roles</h2>
                    <p className='mt-2'> GlobalLogic is a renowned multinational company specializing in software product engineering, digital transformation, and consulting services. Founded in </p> */}


                    <div class="container mx-auto p-4">
                        <div class="grid grid-cols-2 gap-4">
                            {/* <!-- First Column --> */}
                            <div class="col-span-1 bg-gray-200 p-4 border border-red-400">
                                {/* <!-- Content for the first column goes here --> */}
                                <div className='w-full h-[50vh] mt-10 shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4'>
                                    <Image src={AboutImg} className='rounded-xl w-full h-full' alt='/' />

                                </div>
                                <p className='mt-2'>September 4, 2023</p>
                                <h2 className='mt-2'>GlobalLogic Off Campus Hiring: Associate Analyst Roles</h2>
                                <p className='mt-2'> GlobalLogic is a renowned multinational company specializing in software product engineering, digital transformation, and consulting services. Founded in </p>
                            </div>

                            {/* <!-- Second Column --> */}
                            <div class="col-span-1 bg-blue-200 p-4">
                                {/* <!-- Content for the second column goes here --> */}
                                <div className='w-full h-[50vh] mt-10 shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4'>
                                    <Image src={AboutImg} className='rounded-xl w-full h-full' alt='/' />

                                </div>
                                <p className='mt-2'>September 4, 2023</p>
                                <h2 className='mt-2'>GlobalLogic Off Campus Hiring: Associate Analyst Roles</h2>
                                <p className='mt-2'> GlobalLogic is a renowned multinational company specializing in software product engineering, digital transformation, and consulting services. Founded in </p>
                            </div>
                        </div>
                    </div>



                    <div className="container mx-auto p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">

                            <div className="bg-white rounded-lg overflow-hidden shadow-md">
                                <img src={"https://fresherbro.com/wp-content/uploads/2023/09/GlobalLogic-is-hiring-Associate-Analyst-jpg-1024x512.webp"} alt={"ddd"} className="w-full h-48 object-cover" />

                                <div className="p-4">
                                    <p className="text-gray-500 text-sm">September 4, 2023</p>
                                    <h2 className="text-xl font-semibold mt-2">Honeywell Software Eng Recruitment 2023 | Apply Here</h2>
                                    <p className="mt-2"> Honeywell is a global, Fortune 100 technology company that has been at the forefront of innovation for more than a century. With a rich history dating ba</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg overflow-hidden shadow-md">
                                <img src={"https://fresherbro.com/wp-content/uploads/2023/09/GlobalLogic-is-hiring-Associate-Analyst-jpg-1024x512.webp"} alt={"ddd"} className="w-full h-48 object-cover" />

                                <div className="p-4">
                                    <p className="text-gray-500 text-sm">September 4, 2023</p>
                                    <h2 className="text-xl font-semibold mt-2">Honeywell Software Eng Recruitment 2023 | Apply Here</h2>
                                    <p className="mt-2"> Honeywell is a global, Fortune 100 technology company that has been at the forefront of innovation for more than a century. With a rich history dating ba</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg overflow-hidden shadow-md">
                                <img src={"https://fresherbro.com/wp-content/uploads/2023/09/GlobalLogic-is-hiring-Associate-Analyst-jpg-1024x512.webp"} alt={"ddd"} className="w-full h-48 object-cover" />

                                <div className="p-4">
                                    <p className="text-gray-500 text-sm">September 4, 2023</p>
                                    <h2 className="text-xl font-semibold mt-2">Honeywell Software Eng Recruitment 2023 | Apply Here</h2>
                                    <p className="mt-2"> Honeywell is a global, Fortune 100 technology company that has been at the forefront of innovation for more than a century. With a rich history dating ba</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* xxx */}
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

export default ListItem;