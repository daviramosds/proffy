import React, { SelectHTMLAttributes } from 'react'

import './styles.css'

interface selectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string
    label: string
    options: Array<{
        value: string
        label: string
    }>
}

const Select: React.FC<selectProps> = ({ label, name, options, ...rest}) => {
    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select value="" id={name} {...rest}>
                    <option value="" disabled hidden>Selecione uma opção</option>
                {options.map(option => {

                    return <option key={option.label} value={option.value}>{option.label}</option>
                })}
            </select>
        </div>
    )
}

export default Select