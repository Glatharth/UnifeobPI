import styled from 'styled-components';

var configs = require('./../../config');
var config = configs.config.masterPage.adminPanel;
var width = config.header.width;

export const Section = styled.section`
    max-height: 100%;
    max-width: 100%;
    height: auto;
    width: auto;
    background-color: #444;
    position: relative;
    margin-left: ${width};
`;
