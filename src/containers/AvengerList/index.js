import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';

import AvengerCard from 'components/AvengerCard';

export function AvengerList(props) {
  return (
    <AvengerCard>

    </AvengerCard>
  );
}

const mapStateToProps = createStructuredSelector({

});