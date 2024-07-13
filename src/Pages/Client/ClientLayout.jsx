import { Outlet, useNavigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Dropdown from 'antd/es/dropdown'
import { Collapse } from 'antd';
import { FilterLabel } from '../../Components/FilterControls'
const { Panel } = Collapse
import { MdKeyboardArrowDown, MdGpsFixed } from "react-icons/md";
import { FaRegSquare, FaWhatsapp, FaDollarSign, FaCar } from "react-icons/fa";
import { FaHelmetSafety } from "react-icons/fa6";
import { FiLayout } from "react-icons/fi";
import { PiHouseLine, PiBathtub, PiToiletDuotone } from "react-icons/pi";
import { LiaBedSolid } from "react-icons/lia";

function ClientLayout() {
    const navigate = useNavigate()


    const btnLogOut = () => {
        sessionStorage.clear()
        navigate('/dash2023/login')
    }

    const text = (
        <p
            style={{
                paddingLeft: 24,
            }}
        >
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found
            as a welcome guest in many households across the world.
        </p>
    );


    const filterOptions = [
        { key: '1', label: 'Tipo de operación', children: text, icon: <FiLayout size={22} color='white' className='mr-2' /> },
        { key: '2', label: 'Tipo de propiedad', children: text, icon: <PiHouseLine size={22} color='white' className='mr-2' /> },
        { key: '3', label: 'Ubicación (es)', children: text, icon: <MdGpsFixed size={22} color='white' className='mr-2' /> },
        { key: '4', label: 'Precio total', children: text, icon: <FaDollarSign size={22} color='white' className='mr-2' /> },
        { key: '5', label: 'Contrucción', children: text, icon: <FaHelmetSafety size={22} color='white' className='mr-2' /> },
        { key: '6', label: 'Terreno', children: text, icon: <FaRegSquare size={22} color='white' className='mr-2' /> },
        { key: '7', label: '$/m2 Contruscción', children: text, icon: <FaHelmetSafety size={22} color='white' className='mr-2' /> },
        { key: '8', label: '$/m2Terreno', children: text, icon: <FaRegSquare size={22} color='white' className='mr-2' /> },
        { key: '9', label: 'Recámaras', children: text, icon: <LiaBedSolid size={22} color='white' className='mr-2' /> },
        { key: '10', label: 'Baños completos', children: text, icon: <PiBathtub size={22} color='white' className='mr-2' /> },
        { key: '11', label: 'Medios baños', children: text, icon: <PiToiletDuotone size={22} color='white' className='mr-2' /> },
        { key: '12', label: 'Estadionamientos', children: text, icon: <FaCar size={22} color='white' className='mr-2' /> }
    ];

    const items = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    1st menu item
                </a>
            ),
        },
    ];

    return (
        <div className="lg:flex bg-gray-100 w-full min-h-screen">
            <div className="w-80 bg-[#B3282D] rounded shadow-lg fixed left-0 top-0 overflow-y-auto">
                <div className='space-y-2 flex flex-col justify-between h-screen py-4 px-2'>
                    <div>
                        <img src='https://www.propiedadesmexico.com/_next/static/media/pm-logo-rojo.89d5ee4f.svg' className='bg-white rounded-md p-3 ' alt="" />
                    </div>
                    <div className='max-h-[660px] min-w-[304px] overflow-y-auto' >
                        <p className='w-full font-semibold text-lg text-white pb-2 px-4'>Filtrar por:</p>
                        <Collapse bordered={false} defaultActiveKey={['1']} expandIconPosition='right' className="bg-[#B3282D]"
                            expandIcon={({ isActive }) => <MdKeyboardArrowDown className={`transform transition-transform  ${isActive ? 'rotate-180' : ''}`} color='white' size={30} />}>
                            {filterOptions.map(item => (<Panel key={item.key} header={<div className="flex items-center">{item.icon}<FilterLabel text={item.label} /></div>} className="hover:bg-[#CE787B] transition-colors duration-200">{item.children}</Panel>))}
                        </Collapse>
                    </div>
                    <div className='bg-[#D25B5F] rounded-md p-4'>
                        <div className='border-b-[3px] flex justify-center items-center gap-x-3 pb-3'>
                            <Dropdown menu={{ items }} placement="topRight" arrow>
                                <div className='flex justify-center items-center text-white font-semibold space-x-1'>
                                    <img src="https://www.propiedadesmexico.com/MX.svg" alt="" />
                                    <p className='flex justify-center items-center'>Es <MdKeyboardArrowDown className='mt-1' /></p>
                                </div>
                            </Dropdown>
                            <p className='text-white font-semibold flex justify-center items-center border-x-[3px] px-4 '>$MXN <MdKeyboardArrowDown className='mt-1' /></p>
                            <p className='text-white font-semibold flex justify-center items-center'><FaRegSquare className='mr-0.5' /> M2 <MdKeyboardArrowDown className='mt-1' /></p>
                        </div>
                        <button className='text-[#B3282D] flex justify-center items-center w-full font-semibold mt-3 py-1 text-lg rounded-md bg-white'><FaWhatsapp className='mr-2' /> Acceder </button>
                    </div>
                </div>
            </div>
            <div className="w-full lg:pl-56">
                <div className={`p-6 text-gray-500 relative `}>
                    <Toaster />
                    <Outlet />
                </div>
            </div>
        </div >
    )
}

export default ClientLayout