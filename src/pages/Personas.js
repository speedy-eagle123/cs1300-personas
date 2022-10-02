import styles from '../css/Personas.module.css'
import AssignmentSummary from '../components/AssignmentSummary'
import PartSection from '../components/PartSection'
import { colors } from '../constants/Colors'
import sketch from '../assets/persona-sketch.png'
import ian from '../assets/persona-ian.png'

export default function Personas() {
	return (
		<div id={styles.container}>
			<AssignmentSummary
				description="Step into a user’s shoes. Individually, you will observe real users interacting with an interface, interview these individuals about their experiences, create personas based on these users, and illustrate a storyboard for one of your personas. This is a classic UX task."
			/>
			<PartSection title='Part 1'>
				<div id={styles.titleWrapper}>
					<h2 style={{ color: colors.text }}>Sketch:</h2>
				</div>
				<div>
					<img src={sketch} class={styles.image} />
				</div>
			</PartSection>

			<PartSection title='Part 3'>
				<div id={styles.titleWrapper}>
					<h2 style={{ color: colors.text }}>Indecisive Ian:</h2>
				</div>
				<div>
					<img src={ian} class={styles.image} />
				</div>
			</PartSection>
		</div>
	)
}