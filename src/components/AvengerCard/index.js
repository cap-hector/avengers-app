import React from 'react';
import PropTypes from 'prop-types';

import AvengerName from './Name';
import AvengerWrapper from './Wrapper';

function AvengerCard(props) {
  return (
    <AvengerWrapper>
      <AvengerName name={props.name} />
    </AvengerWrapper>
  );
}

AvengerCard.prototype = {
  id: PropTypes.number.isRequired,
  name : PropTypes.string.isRequired,
};

export default AvengerCard;
