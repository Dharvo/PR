import React, { ReactNode } from 'react'
// impo
// import styles from '../../styles/Admin/Admin.module.scss'

type InputProps = {
	label: string
	placeholder: string
	value: string
	setValue: Function
	focus: boolean
	setFocus: Function
	icon: ReactNode
	pass: boolean
}

const Input = ({
	label,
	placeholder,
	value,
	setValue,
	focus,
	setFocus,
	icon,
	pass = false,
}: InputProps) => {
	return (
		<div className='form__group'>
			<label htmlFor={label} className={`form__label ${focus ? 'focused' : ''}`}>
				{label}
			</label>

			<input
				type={`${pass ? 'password' : 'text'}`}
				name={label}
				value={value}
				placeholder={placeholder}
				onClick={() => setFocus(true)}
				onBlur={() => setFocus(false)}
				onChange={(e) => setValue(e.target.value)}
			/>
			<span>
				{icon}
				{/* <BsPersonBoundingBox /> */}
			</span>
		</div>
	)
	// 		const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => console.log(event)

	// 		return <input type={`text`} value={props.value} onChange={handleInputChange} />
}

export default Input
