
import React from 'react';
import { TbPlayerTrackNext } from 'react-icons/tb';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { getServerSession } from 'next-auth';
import { authConfig } from '@/lib/auth';
import AuthButton from '@/components/ui/custom/auth/AuthButton';
const Home = async () => {

  const session = await getServerSession(authConfig);
  console.log(session);

  let StartWithButtons = [
    {
      icons: FcGoogle,
      name: "Google",
    },
    {
      icons: FaGithub,
      name: "Github",
    }
  ]

  return (
    <div className="w-full md:px-0 px-6 md:max-w-[80%] md:mx-auto py-4">
      <nav className="w-full flex items-end gap-8 md:gap-16">
        <span className="flex text-xl items-center cursor-pointer gap-2">
          <TbPlayerTrackNext className="text-color" size={25} />
          <p className="font-bold font-mono">Invion AI</p>
        </span>
        <span className="flex gap-8">
          <a href="" className="hover:underline">
            Demo
          </a>
          <a href="" className="hover:underline">
            Blogs
          </a>
          <a href="" className="hover:underline">
            Dashboard
          </a>
        </span>
      </nav>
      <div className="h-[70vh] my-8 text-center flex flex-col justify-center gap-6  ">
        <h1 className="text-6xl query font-extrabold text-transparent bg-clip-text bg-gradient-to-b  from-white to-gray-500">
          Ace every interview with <span className="text-color">AI</span> by your side
        </h1>
        <p className='md:mx-36'><strong className='font-semibold'>Invion AI</strong> is an intelligent interview assistant designed to help you prepare and excel in interviews. Powered by advanced AI, it provides tailored questions, insightful feedback, and personalized tips to boost your confidence and performance, ensuring you're ready to impress every time.</p>
        <div className='w-full flex justify-center'>
          {
            StartWithButtons.map((ele, index) => (
              <AuthButton Icon={<ele.icons className='text-3xl group-hover:p-1 transition-all duration-300' />} name={ele.name} index={index} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
