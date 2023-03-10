import React from 'react'
import styles from '../styles/Loading.module.scss'
import { CircleLoader } from 'react-spinners'
import UbuntuPage from './Ubuntu'

type Props = { props: boolean }

const Loading = ({ props }: Props) => {
	if (props)
		return (
			<div className={styles.loader}>
				<CircleLoader size={40} />
			</div>
		)
	return (
		<div id={styles.loader}>
			<div className={styles.title__container}>
				<h1 className={styles.title}>pr</h1>
				<div className={styles.loading__container}>
					<CircleLoader size={40} />
				</div>
			</div>
			<UbuntuPage />
		</div>
	)
}

export default Loading
