// =================> in react <================= 
const element = React.createElement('p', null, 'Hello, React!');
// in js in object
// {
//     type: 'p',
//     props: {
//         children: 'Hello, React!',
//     },
// }

// =================> with property id or class <=================
const element1 = React.createElement(
    'p',
    {
        id: 'myParagraph',
        className: 'red-paragraph'
    },
    'Hello, React!'
);

// =================> Nested React Element <=================
const heading = React.createElement('h1', null, 'React');
const strong = React.createElement('strong', null, 'best tool');
const paragraph = React.createElement('p', null, ['The ', strong, ' for building UI'])
const divContainer = React.createElement('div', { className: 'container' }, [heading, paragraph]);

// In HTML
<div class="container">
    <h1>React</h1>
    <p>The <strong>best tool</strong> for building UI</p>
</div>