/*eslint-disable*/
import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import api from "../../services/api";

// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classnames from "classnames";

import imagine1 from "assets/img/sidebar-1.jpg";
import imagine2 from "assets/img/sidebar-2.jpg";
import imagine3 from "assets/img/sidebar-3.jpg";
import imagine4 from "assets/img/sidebar-4.jpg";

export default function FixedPlugin(props) {
  // Dados do admin
  const [data, setData] = useState();

  const [classes, setClasses] = useState("dropdown show");
  const [bg_checked, setBg_checked] = useState(true);
  const [bgImage, setBgImage] = useState(props.bgImage);
  const handleClick = () => {
    props.handleFixedClick();
  };

  const dispatch = useDispatch();
   
  const adm = useSelector(state => state.admin);

  useEffect(() => {
    async function fetchData() {
      setData(adm);
    }
    fetchData();
  }, [])

  async function handleColor(color) {
    await setData({ ...data, color: color })
    dispatch({ type: "SET_COLOR", color: color });
    pushColor();
  }

  async function pushColor() {
    const response = await api.put(`/auth/admin/${data._id}`, data);
  }

  return (
    <div
      className={classnames("fixed-plugin", {
        "rtl-fixed-plugin": props.rtlActive
      })}
    >
      <div id="fixedPluginClasses" className={props.fixedClasses}>
        <div onClick={handleClick} style={{ cursor: "pointer", userSelect: "none" }}>
          <i className="fa fa-cog fa-2x" />
        </div>
        <ul className="dropdown-menu">
          <li className="adjustments-line" />
          <li className="header-title">Filtros do Site</li>
          <li className="adjustments-line">
            <a className="switch-trigger">
              <div>
                <span
                  className={
                    props.bgColor === "purple"
                      ? "badge filter badge-purple active"
                      : "badge filter badge-purple"
                  }
                  data-color="purple"
                  onClick={() => {
                    props.handleColorClick("purple");
                    handleColor("purple");
                  }}
                />
                <span
                  className={
                    props.bgColor === "blue"
                      ? "badge filter badge-blue active"
                      : "badge filter badge-blue"
                  }
                  data-color="blue"
                  onClick={() => {
                    props.handleColorClick("blue");
                    handleColor("blue");
                  }}
                />
                <span
                  className={
                    props.bgColor === "green"
                      ? "badge filter badge-green active"
                      : "badge filter badge-green"
                  }
                  data-color="green"
                  onClick={() => {
                    props.handleColorClick("green");
                    handleColor("green");
                  }}
                />
                <span
                  className={
                    props.bgColor === "red"
                      ? "badge filter badge-red active"
                      : "badge filter badge-red"
                  }
                  data-color="red"
                  onClick={() => {
                    props.handleColorClick("red");
                    handleColor("red");
                  }}
                />
                <span
                  className={
                    props.bgColor === "orange"
                      ? "badge filter badge-orange active"
                      : "badge filter badge-orange"
                  }
                  data-color="orange"
                  onClick={() => {
                    props.handleColorClick("orange");
                    handleColor("orange");
                  }}
                />
              </div>
            </a>
          </li>
          <li className="header-title">Imagens</li>
          <li className={bgImage === imagine1 ? "active" : ""}>
            <a
              className="img-holder switch-trigger"
              onClick={() => {
                setBgImage(imagine1);
                props.handleImageClick(imagine1);
              }}
            >
              <img src={imagine1} alt="..." />
            </a>
          </li>
          <li className={bgImage === imagine2 ? "active" : ""}>
            <a
              className="img-holder switch-trigger"
              onClick={() => {
                setBgImage(imagine2);
                props.handleImageClick(imagine2);
              }}
            >
              <img src={imagine2} alt="..." />
            </a>
          </li>
          <li className={bgImage === imagine3 ? "active" : ""}>
            <a
              className="img-holder switch-trigger"
              onClick={() => {
                setBgImage(imagine3);
                props.handleImageClick(imagine3);
              }}
            >
              <img src={imagine3} alt="..." />
            </a>
          </li>
          <li className={bgImage === imagine4 ? "active" : ""}>
            <a
              className="img-holder switch-trigger"
              onClick={() => {
                setBgImage(imagine4);
                props.handleImageClick(imagine4);
              }}
            >
              <img src={imagine4} alt="..." />
            </a>
          </li>

          <li className="adjustments-line" />
        </ul>
      </div>
    </div>
  );
}

FixedPlugin.propTypes = {
  bgImage: PropTypes.string,
  handleFixedClick: PropTypes.func,
  rtlActive: PropTypes.bool,
  fixedClasses: PropTypes.string,
  bgColor: PropTypes.oneOf(["purple", "blue", "green", "orange", "red"]),
  handleColorClick: PropTypes.func,
  handleImageClick: PropTypes.func
};
