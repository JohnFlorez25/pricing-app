import React from 'react';
import ReactDOM from 'react-dom';
import PricingPage from './containers/PricingPage';
/*
ReactDOM.render( 
    ¿Qué voy a renderizar? , 
    ¿Dónde lo voy a renderizar?
);
*/
ReactDOM.render(
    <PricingPage />
    ,
    document.getElementById('app-pricing')
);

