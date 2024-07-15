import Checkbox from 'antd/es/checkbox'

export const FilterLabel = ({ text }) => <span className='text-xl flex justify-between items-center font-semibold gap-x-3 text-white'>{text}</span>

export const OperationType = ({ data, setData }) => {
    return (
        <div>
            {[{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }, { label: 'Option 3', value: '3' }].map((option) => (
                <Checkbox key={option.value} checked={data === option.value} onChange={() => setData(option.value)}>{option.label}</Checkbox>
            ))}
        </div>
    )
}


