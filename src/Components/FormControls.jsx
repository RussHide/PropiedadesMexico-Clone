import { forwardRef, useState } from 'react'
import Select from 'antd/es/select'
import { AiOutlineCalendar, AiFillFileExcel, AiOutlineSearch } from 'react-icons/ai';
const { Option } = Select
import Spin from 'antd/es/spin'
import DatePicker, { registerLocale } from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import es from 'date-fns/locale/es'
import { DateTime } from 'luxon';
import { IoIosRemove } from "react-icons/io"
import Input from 'antd/es/input'

registerLocale('es', es)


const CustomDatePicker = forwardRef(({ value, extraClasses, onClick, placeholer = '', label = '' }, ref) => (
    <div className={`w-full ${extraClasses}`}>
        <div>
            <label className="text-gray-700 font-semibold px-1 text-sm">{label}</label>
        </div>
        <button className='inline-flex w-full justify-between p-[4.7px]  bg-white border border-gray-300 hover:border-blue-200 transition-colors duration-150 items-center rounded-md ' onClick={onClick} ref={ref}>
            <p className={`text-xs  ${value ? 'text-gray-700' : 'text-gray-400'}`} >
                {!value ? placeholer : value}
            </p>
            <AiOutlineCalendar className='h-5 ml-6 ' />
        </button>
    </div>
))
CustomDatePicker.displayName = 'CustomDatePicker'

export const CustomDateInput = ({ data, setData, keyName, isSingle = false, isInitialDate, placeholder, label, extraClasses }) => {
    const newDate = data[keyName] ? new Date(data[keyName]) : ''
    const formattedDate = newDate === '' ? '' : `${newDate.getUTCMonth() + 1}-${newDate.getUTCDate()}-${newDate.getUTCFullYear()}, ${newDate.getUTCHours()}:${newDate.getUTCMinutes()}:${newDate.getUTCSeconds()}`
    return (
        <div className='w-full'>
            <DatePicker
                popperPlacement='bottom-end'
                wrapperClassName='w-full'
                dateFormat="dd-MM-yyyy"
                locale="es"
                startDate={isSingle ? null : data.initialDate}
                endDate={isSingle ? null : data.finalDate}
                selectsStart={isInitialDate ? true : null}
                selectsEnd={!isInitialDate ? true : null}
                selected={(isSingle && newDate) ? formattedDate : (!isSingle && isInitialDate) ? data.initialDate : (!isSingle && !isInitialDate) ? data.finalDate : ''}
                onChange={e => { setData(prev => ({ ...prev, [keyName]: e })) }}
                customInput={<CustomDatePicker placeholer={placeholder} label={label} extraClasses={extraClasses} />}
            />
        </div>
    )
}

export const CustomInput = ({ label, numeric = false, password = false, keyName, placeholder, setData, data, disabled = false, colSpan = 1 }) => {
    const colSpanClass = colSpan !== 1 ? `col-span-${colSpan}` : 'col-span-1';

    const handleInputChange = (e) => {
        let value = e.target.value;
        if (numeric) {
            // Filtrar caracteres no numéricos
            value = value.replace(/[^0-9]/g, '');
        }
        // Establecer el valor filtrado en el estado
        setData(prevData => ({ ...prevData, [keyName]: value }));
    };

    return (
        <div className={`w-full ${colSpanClass}`}>
            <div><label className="text-gray-700 font-semibold px-1  text-sm">{label}</label></div>
            <input disabled={disabled}
                onChange={handleInputChange}
                value={data && keyName && data[keyName] ? data[keyName] : ''}
                placeholder={placeholder}
                type={password ? 'password' : 'text'}
                className="focus:border-blue-400 outline-[#D0DEEB] focus:outline-offset-[2px] border hover:border-blue-400 text-sm placeholder-[#BFBFBF] text-[#1F1F1F] border-gray-300 w-full px-3 rounded py-1 tradu"
            />
        </div>
    );
};


export const CustomSelect = ({ label, keyName, placeholder, setData, data, options, tagMode = false, onChange = () => { }, searchMode = false, keyLabel = '', extraClasses, disabled = false, firstValue = false }) => {
    return (
        <div className={`w-full ${extraClasses}`}>
            <div><label className="text-gray-700 font-semibold px-1 text-sm">{label}</label></div>
            <div className="col-span-1" >
                {
                    tagMode ?
                        (<Select mode="tags" className='w-full' value={firstValue ? options[0] : null} placeholder={placeholder} onChange={onChange} options={options} />) : searchMode ?
                            ((<Select disabled={disabled} value={data[keyName] !== '' ? data[keyName] : null} onChange={(e) => setData(prev => ({ ...prev, [keyName]: e }))} filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())} placeholder={placeholder} showSearch notFoundContent="Registro no encontrado" optionFilterProp="children" className="w-full">
                                {options.map((item, index) => (<Option key={index} value={item[keyName]}>{item[keyLabel]}</Option>))}
                            </Select>)) :
                            (<Select className='w-full' placeholder={placeholder} onChange={e => setData(prevData => ({ ...prevData, [keyName]: e }))} value={data[keyName] !== '' ? data[keyName] : null}>
                                {options.map((item, index) => <Option key={index} value={item.value}>{item.label}</Option>)}
                            </Select>)
                }
            </div>
        </div>
    );
};

export const CustomButton = ({ onClick, text, isFull = false, withSearchIcon = true, color = "bg-[#f9362d] hover:bg-[#b5241d]", disabled = false, extraClasses }) => {
    return (
        <div className={`${isFull ? 'w-full' : 'w-2/3'} ${extraClasses}`}>
            <button disabled={disabled} className={`w-full flex justify-center items-center ${color} transition-colors duration-300 px-5 lg:px-10 py-1.5 rounded-md text-white font-semibold tracking-wide cursor-pointer`} onClick={onClick}>
                <p className='text-sm'>{text}</p>
                {withSearchIcon && <AiOutlineSearch className='h-5 w-5 ml-2 mt-0.5' />}
            </button>
        </div>
    )
}

export const CustomIconButton = ({ onClick, disabled = false, isFull = true, color = 'bg-[#11D578] hover:bg-[#0FBE66]', icon: Icon }) => {
    return (
        <button disabled={disabled} onClick={onClick} className={`${color} ${isFull ? 'w-1/3' : 'px-3'} flex justify-center items-center  transition-colors duration-300 py-1.5 rounded-md text-white font-semibold tracking-wide cursor-pointer`} >
            {Icon ? <Icon className='h-5 w-5' /> : <AiFillFileExcel className='h-5 w-5' />}
        </button>
    )
}

export const LoaderSpinner = ({ text = 'Cargando...' }) => {
    return (
        <div className='w-full h-44 mt-10 flex items-center justify-center'>
            <div className='flex w-full justify-center items-center flex-col'>
                <Spin size='large' />
                <p className="mt-1">{text}</p>
            </div>
        </div>

    )
}



export const CustomRoomInput = ({ data, setData, keyName }) => {
    const handleInputChange = (index, fieldName, event) => {
        const newFields = [...data.Salas[keyName]];
        newFields[index][fieldName] = event.target.value;
        // Verificar si el valor está vacío
        if (event.target.value === '') {
            // Si está vacío, eliminar el sufijo
            newFields[index].value = '';
        } else {
            // Si no está vacío, verificar si el sufijo aún no se ha agregado
            if (keyName === 'layout') {
                // Agregar '_layout' al valor de 'value' solo si keyName es 'layout'
                if (fieldName === 'label') {
                    newFields[index].label = `${event.target.value}`;

                } else if (fieldName === 'value') {
                    newFields[index].value = `${event.target.value}_layout`;
                }

            }
        }

        setData(prevData => ({ ...prevData, Salas: { ...prevData.Salas, [keyName]: newFields } }));
    };
    const handleAddField = () => {
        setData(prevData => ({ ...prevData, Salas: { ...prevData.Salas, [keyName]: [...prevData.Salas[keyName], { value: '', label: '' }] } }));
    };
    const handleRemoveField = (index) => {
        if (data.Salas[keyName].length <= 1) return;
        const newFields = [...data.Salas[keyName]];
        newFields.splice(index, 1);
        setData(prevData => ({ ...prevData, Salas: { ...prevData.Salas, [keyName]: newFields } }));
    };
    return (
        <div className='w-full'>
            {data.Salas[keyName].map((field, idx) => (
                <div key={idx} className="flex w-full justify-center items-center gap-x-2 mb-2.5 ">
                    <Input placeholder="Clave" value={field.value.endsWith('_layout') ? field.value.slice(0, -7) : field.value} onChange={(e) => handleInputChange(idx, 'value', e)} className="w-full" />
                    <Input placeholder="Nombre" value={field.label} onChange={(e) => handleInputChange(idx, 'label', e)} className="w-full" />
                    {data.Salas[keyName].length > 1 && <IoIosRemove onClick={() => handleRemoveField(idx)} className="w-12 h-6  border border-red-400 transition-colors duration-300 cursor-pointer hover:text-white hover:bg-red-500 rounded-md" />}
                </div>
            ))}
            <button onClick={handleAddField} className="bg-green-300 px-4 w-full py-1 rounded-md font-semibold text-white" >Agregar campo</button>
        </div>
    );
};


export const DynamicFields = ({ label, data, setData }) => {
    const handleInputChange = (index, fieldName, event) => {
        const newFields = [...data.Salas];
        newFields[index][fieldName] = event.target.value;

        setData({ ...data, Salas: newFields });
    };

    const handleAddField = () => {
        setData({ ...data, Salas: [...data.Salas, { value: '', label: '' }] });
    };

    const handleRemoveField = (index) => {
        if (data.Salas.length <= 1) return;

        const newFields = [...data.Salas];
        newFields.splice(index, 1);
        setData({ ...data, Salas: newFields });
    };

    return (
        <div className='w-full col-span-3'>
            <div className='text-center mb-3'><label className="text-gray-700 font-semibold px-1  text-sm">{label}</label></div>
            {data.Salas.map((field, idx) => (
                <div key={idx} className="flex w-full justify-center items-center gap-x-2 mb-2.5 ">
                    <Input placeholder="Prefijo" value={field.value} onChange={(e) => handleInputChange(idx, 'value', e)} className="w-full" />
                    <Input placeholder="Nombre" value={field.label} onChange={(e) => handleInputChange(idx, 'label', e)} className="w-full" />
                    {data.Salas.length > 1 && <IoIosRemove onClick={() => handleRemoveField(idx)} className="w-12 h-6  border border-red-400 tradu cursor-pointer hover:text-white hover:bg-red-500 rounded-md" />}
                </div>
            ))}
            <button onClick={handleAddField} className="bg-green-300 px-4 w-full py-1 rounded-md font-semibold text-white" >Agregar campo</button>
        </div>
    );
}
