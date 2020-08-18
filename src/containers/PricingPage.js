import React from 'react';
import Header from '../components/Header';
import MainPricing from '../components/MainPricing';

class PricingPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <MainPricing />
      </React.Fragment>
    );
  }
}

export default PricingPage;
