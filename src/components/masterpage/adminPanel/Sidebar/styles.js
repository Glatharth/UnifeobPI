import styled from 'styled-components';
var configs = require('./../../../../config');
var config = configs.config.masterPage.adminPanel.sidebar;


var width = config.width;
console.log(width);

export const Aside = styled.aside`
    max-width: 100%;
    width: ${width};
    height: 95%;
    background-color: #000;
`;
