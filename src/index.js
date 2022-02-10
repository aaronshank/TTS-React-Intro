import React from 'react'
import reactDom from 'react-dom'
import './index.css'

// const render = () => {
// 	document.getElementById('mountNode').innerHTML = `
//         <div>
//             Hello HTML
//             <input />
//             <pre>${new Date().toLocaleTimeString()}</pre>
//         </div>
//     `

// 	ReactDOM.render(
// 		React.createElement(
// 			'div',
// 			null,
// 			'Hello React',
// 			React.createElement('input'),
// 			React.createElement('pre', null, new Date().toLocaleTimeString())
// 		),
// 		document.getElementById('mountNode2')
// 	)
// }

// setInterval(render, 1000)

// This wasn't in the notes but I just made it to not cause erros in the code
let mountNode = document.getElementById('mountNode')

// jsdrops.com/bx1
// function Button(props) {
//     // Returns a DOM/React element here. For example:
//     return <button type="submit">{props.label}</button>
// }
// // To render a Button element in the browser
// ReactDOM.render(<Button label="Save" />, mountNode)



// jsdrops.com/bx2
// function Button(props) {
// 	return React.createElement('button', { type: 'submit' }, props.label)
// }
// ReactDOM.render(React.createElement(Button, { label: 'Save' }), mountNode)



// jsdrops.com/bx3
// WRONG:
// function button() {
//     return <div>My Fancy Button</div>
// }
// The following will render an HTML button
// (and ignore the fancy button function)
// ReactDOM.render(<button />, mountNode)

// Destructuring a component props
// const Button = ({ label }) => (
//     <button type="submit">{label}</button>
// )



// jsdrops.com/bx4
// const RandomValue = () => (
//     <div>
//         { Math.floor(Math.random() * 100) }
//     </div>
// )
// ReactDOM.render(<RandomValue />, mountNode)



// jsdrops.com/bx5
// const ErrorDisplay = ({ message }) => (
//     <div style={ { color: 'red', backgroundColor: 'yellow' } }>
//         {message}
//     </div>
// )
// ReactDOM.render(
//     <ErrorDisplay
//         message="These aren't the droids you're looking for"
//     />,
//     mountNode
// )



// jsdrops.com/bx6
// class ConditionalStyle extends React.Component {
//     render() {
//         return (
//             <div style={{ color: Math.random() < 0.5 ? 'green' : 'red' }}>
//                 How do you like this?
//             </div>
//         )
//     }
// }
// ReactDOM.render(
//     <ConditionalStyle />,
//     mountNode
// )


// jsdrops.com/bx7
// class Button extends React.Component {
//     render() {
//         return (
//             <button>{this.props.label}</button>
//         )
//     }
// }
// // Use it (same syntax)
// ReactDOM.render(<Button label="Save" />, mountNode)


// Make sure the React components are READABLE
// In HTML
// <a href="http://facebook.com">
//     <img src="facebook.png" />
// </a>
// OR you can make a component
// <ClickableImage />
// const ClickableImage = ({ href, src }) => {
//     return (
//         <a href={href}>
//             <img src={src} alt=''/>
//         </a>
//     )
// }
// <ClickableImage href="http://google.com" src="google.png" />
// <ClickableImage href="http://bing.com" src="bing.png"/>

// Can also nest components
// const SearchEngines = () => {
//     return (
//         <div className="search-engines">
//             <ClickableImage href="http://google.com" src="google.png" />
//             <ClickableImage href="http://bing.com" src="bing.png"/>
//         </div>
//     )
// }

// Or can iterate over an array
// const data = [
//     { href: "http://google.com", src: "google.png" },
//     { href: "http://yahoo.com", src: "yahoo.png" },
//     { href: "http://bing.com", src: "bing.png" }
// ]
// const  SearchEngines = ({ engines }) => {
//     return (
//         <List>
//             {engines.map(engine => <ClickableImage {...engine} />)}
//         </List>
//     )
// }

// ReactDOM.render(
//     <SearchEngines engines={data} />,
//     mountNode
// )


// Another example
// <TweetBox>
//     <TextAreaWithLimit limit="280" />
//     <RemainingCharacters />
//     <TweetButton />
// </TweetBox>



// jsdrops.com/bx8
// const Button = ({ clickAction, clickValue }) => {
//     return (
//         <button onClick={() => clickAction(clickValue)}>
//             +{clickValue}
//         </button>
//     )
// }
// const Display = ({ content }) => (
//     <pre>{content}</pre>
// )
// const CountManager = () => {
//     const [count, setCount] = React.useState(0)

//     const incrementCounter = (incrementValue) => {
//         setCount(count + incrementValue)
//     }

//     return (
//         <>
//             <Button clickAction={incrementCounter} clickValue={1} /> {/* +1 */}
//             <Button clickAction={incrementCounter} clickValue={5} /> {/* +5 */}
//             <Button clickAction={incrementCounter} clickValue={10} /> {/* +10 */}
//             <Display content={count} />
//         </>
//     )
// }
// ReactDOM.render(<CountManager />, mountNode)


// jsdrops.com/bx10
const CharacterCounter = () => {
    const [inputValue, setInputValue] = React.useState('')

    const handleChange = (event) => {
        const element = event.target
        setInputValue(element.value)
    }

    return (
        <div>
            <textarea cols={80} rows={10} value={inputValue} onChange={handleChange} />
            <div>Count: {inputValue.length}</div>
        </div>
    )
}
reactDom.render(<CharacterCounter />, mountNode)