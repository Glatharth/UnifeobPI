import styled from 'styled-components';

var configs = require('../../../../config');
var config = configs.config.masterPage.adminPanel;
var width = config.header.width;
var height = config.header.height;

export const Aside = styled.aside`
    width: ${width};
    min-height: 100%;
    background-color: #222;
    margin: 0px;
    float:left;
`;

export const Div = styled.div`
    margin-top: ${height};
`;