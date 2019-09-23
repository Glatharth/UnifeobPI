import styled from 'styled-components';
import "./style.css";

var configs = require('./../../../../config');
var config = configs.config.masterPage.adminPanel;
var width = config.sidebar.width;
var height = config.header.height;

export const Container = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  height: ${height};
`;

export const SiteTitle = styled.div`
  width: ${width};
`;