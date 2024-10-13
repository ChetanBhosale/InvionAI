import { FileIcon, LayoutDashboardIcon } from 'lucide-react';
import React from 'react';

import { TbPlayerTrackNext } from 'react-icons/tb';

const Sidebar = () => {
    return (
        <aside className='w-16 h-screen bg-back flex flex-col border border-y-0 border-gray-600 shadow-lg border-l-0'>
            <div className='w-full h-16 flex items-center justify-center'>
                <TbPlayerTrackNext className='text-color cursor-pointer shadow-lg text-4xl animate-pulse' />
            </div>

            <div className='w-full py-5 space-y-5 flex-grow'>
                <LayoutDashboardIcon className='mx-auto cursor-pointer transition-all duration-500 hover:text-color' />
                <FileIcon className='mx-auto cursor-pointer hover:text-color transition-all duration-500' />
            </div>

            <div className='h-12 mt-auto flex items-center justify-center'>
                q
            </div>
        </aside>
    );
};

export default Sidebar;
