import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, ...otherProps}) => (
    <button>{children}</button>
);

export default CustomButton;
