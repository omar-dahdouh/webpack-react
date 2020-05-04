import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const element = React.createElement('p', {className: 'red'}, 'Hello K3');

ReactDOM.render(element, document.getElementById('root'));