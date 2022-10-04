import styles from '../css/Personas.module.css'
import AssignmentSummary from '../components/AssignmentSummary'
import PartSection from '../components/PartSection'
import { colors } from '../constants/Colors'
import sketch from '../assets/persona-sketch.png'
import ian from '../assets/persona-ian.png'
import harry from '../assets/persona-harry.png'
import andrews from '../assets/persona-andrews.png'
import Carousel from 'react-material-ui-carousel'

import SB1 from '../assets/personas-1.png'
import SB2 from '../assets/personas-2.png'
import SB3 from '../assets/personas-3.png'
import SB4 from '../assets/personas-4.png'
import SB5 from '../assets/personas-5.png'
import SB6 from '../assets/personas-6.png'
import SB7 from '../assets/personas-7.png'
import SB8 from '../assets/personas-8.png'
import SB9 from '../assets/personas-9.png'
import SB10 from '../assets/personas-10.png'

export default function Personas() {
	const questions = [
		'What are your immediate expectations when you first walk up to the machine?',
		'What is your thought process when you see your first choice grayed out?',
		'On average, how long does it take you to find a drink choice?',
		'I noticed you tapped on more than one drink, tell me about that',
		'Let\'s pretend I gave you a magic wand. When you wave that magic wand, you can change anything about how the drink machine functions. What would it be and why?',
	]

	const observations = [
		[
			'Approach drink machine',
			'Grab cup',
			'Fills with ice',
			"Immediately taps on ‘Root Beer’",
			'Dispenses drink',
			'Grabs top and straw',
			'Leaves',
		],

		[
			'Approach drink machine',
			'Grab cup',
			"Taps on ‘Powerade’ (note: some of the options were grayed out)",
			"Taps back",
			"Taps on ‘Minute Maid’ (note: some of the options were grayed out)",
			'Taps back',
			"Taps on ‘Coke’",
			'Fills cup with ice',
			'Dispenses Coke',
			'Grabs top and straw',
			'Leaves'
		],

		[
			'Approach drink machine',
			"Taps on ‘Root Beer’ (note: none of the options were grayed out)",
			'Taps back',
			"Taps on ‘Aha’ (note: none of the options were grayed out)",
			"Taps back",
			'Taps on water',
			'Grabs cup',
			'Fills with ice',
			'Fills with water',
			'Grabs top and straw',
			'Leaves',

		]
	]

	const responses = [
		[
			'I will be able look through a variety of drink options',
			'Hopefully, my first choice drink will be available (or will clearly be labeled as sold out)',
			'When I select a drink, the correct beverage will be displayed on the screen',
			'When I press the dispense button, the drink I selected on the interface will dispense',
		],

		[
			'Immediate disappointment and possibly anger',
			'I reluctantly start to search for a different drink',
			"Often I will just get water if my first drink is sold out as I don't want to waste time searching for a replacement",
		],

		[
			'If I know the drink ahead of time, about 3-5 seconds',
			'If I do not know the drink ahead of time and need to choose something, about 10-20 seconds',
			'If my drink is sold out and I want to keep looking, about 30 seconds',
		],

		[
			'I wanted to get a certain flavor of a drink, but it was sold out when I tapped on the default version',
			'I wanted to see what other flavors were available for a certain option',
			'I changed my mind after selecting the drink',
			'I thought I pressed on the diet version, but accidentally selected the original flavor',

		],

		[
			'The sensitivity of the touch screen. It often takes two to three presses for the screen to register a selection. Additionally, it is not uncommon for the screen to select the wrong option. This really slows down the line when a lot of people are waiting.',
			'Knowing which flavors are sold out before selecting the original flavor. Wastes time having to select original, go back, and select another flavor.'
		]
	]

	const storyboards = [
		SB1, SB2, SB3, SB4, SB5, SB6, SB7, SB8, SB9, SB10
	]

	return (
		<div id={styles.container}>
			<AssignmentSummary
				description="Step into a user’s shoes. Individually, you will observe real users interacting with an interface, interview these individuals about their experiences, create personas based on these users, and illustrate a storyboard for one of your personas. This is a classic UX task."
			/>

			<PartSection title='Part 1'>
				<div id={styles.titleWrapper} style={{ flexDirection: 'row', alignItems: 'center' }}>
					<h2 style={{ color: colors.text }}>Interface:</h2>
					<h3 style={{ color: colors.text, fontWeight: '500', marginLeft: 20 }}>Drink Machine in Andrews Dining Hall</h3>
				</div>
				<div>
					<img src={andrews} class={styles.image} />
				</div>

				<div id={styles.titleWrapper}>
					<h2 style={{ color: colors.text }}>Sketch:</h2>
				</div>
				<div>
					<img src={sketch} class={styles.image} />
					<h4 style={{ color: colors.text }}>The interface on the drink machine at Andrews dining hall has two main functions: allow the user to view different drink options (displaying which ones are in stock) and to select a drink to dispense. The physical interface is a touch screen which displays multiple drink options. After selecting a drink option, the interface displays different flavor options that are available for the selected beverage.</h4>
				</div>

				<div id={styles.titleWrapper}>
					<h2 style={{ color: colors.text }}>Questions:</h2>
				</div>
				<div style={{
					textAlign: 'left'
				}}>
					<ol>
						{questions.map((q, idx) => (
							<li style={{ color: colors.text }}>{q}</li>
						))}
					</ol>
				</div>
			</PartSection>

			<PartSection title='Part 2'>
				<div id={styles.titleWrapper}>
					<h2 style={{ color: colors.text, marginBottom: 0 }}>Observations:</h2>
				</div>
				<div>
					{observations.map((o, idx) => (
						<div style={{ textAlign: 'left' }}>
							<h3 style={{ color: colors.text, marginBottom: 0 }}>{`Person ${idx + 1}:`}</h3>
							<ul>
								{o.map((item) => (
									<li style={{ color: colors.text }}>{item}</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div id={styles.titleWrapper}>
					<h2 style={{ color: colors.text, marginBottom: 0 }}>Responses:</h2>
				</div>
				<div>
					{questions.map((o, idx) => (
						<div style={{ textAlign: 'left' }}>
							<h3 style={{ color: colors.text, marginBottom: 0 }}>{o}</h3>
							<ul>
								{responses[idx].map((item) => (
									<li style={{ color: colors.text }}>{item}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</PartSection>

			<PartSection title='Part 3'>
				<div id={styles.titleWrapper}>
					<h2 style={{ color: colors.text, marginBottom: 0 }}>Indecisive Ian:</h2>
					<h4 style={{ color: colors.text, marginBottom: '40px' }}>
						Indecisive Ian is a freshman eating at Andrews for the first time. Ian is used to the manual soda dispenser at his high school, and can’t quite decide which drink, of the many options, to choose from. To make the problem worse, the touch screen doesn’t seem to pick up his selections. Indecisive Ian is a great example of first time users interacting with the soda touch screen.
					</h4>
				</div>
				<div>
					<img src={ian} class={styles.image} />
				</div>

				<div id={styles.titleWrapper}>
					<h2 style={{ color: colors.text, marginBottom: 0 }}>Hungry Harry:</h2>
					<h4 style={{ color: colors.text, marginBottom: '40px' }}>
						Hungry Harry is a senior who is still on the meal plan. Having eaten at Andrews for three years, Harry knows how the dispenser works. He does not want to spend time looking through the options, Harry simply wants to grab a drink and start eating. Hungry Harry is a good example of a seasoned user who is in a rush and does want to explore all that the interface has to offer.
					</h4>
				</div>
				<div>
					<img src={harry} class={styles.image} />
				</div>
			</PartSection>

			<PartSection title='Part 4'>
				<div id={styles.titleWrapper}>
					<h2 style={{ color: colors.text, marginBottom: 0 }}>Storyboard:</h2>
				</div>
				<div style={{ marginTop: 30, height: 'auto', width: '100%' }}>
					<Carousel
						autoPlay={false}
						navButtonsAlwaysVisible={true}
						navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
							style: {
								backgroundColor: colors.main,
							}
						}}
						activeIndicatorIconButtonProps={{
							style: {
								color: colors.main       // 3
							}
						}}
					>

						{storyboards.map((i) => (
							<img src={i} class={styles.image} />
						))}
					</Carousel>
				</div>
			</PartSection>
		</div>
	)
}