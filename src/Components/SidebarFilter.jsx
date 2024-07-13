import { MdKeyboardArrowDown } from 'react-icons/md'

const SidebarFilter = ({ icon: Icon, text }) => {
    return (
        <li className='flex justify-between items-center py-2 px-5 hover:bg-[#CE787B] rounded-md transition-colors duration-300 hover:cursor-pointer'>
            <p className='text-xl flex justify-center items-center gap-x-3'> <Icon size={22} className='mt-1' />  {text}</p>
            <MdKeyboardArrowDown className='mt-1' size={25} />
        </li>
    )
}

export default SidebarFilter