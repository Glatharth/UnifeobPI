import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import api from "../../services/api";
import { getCompanyId } from "../../services/auth";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();

  const adminData = useSelector(state => state.dataAdmin);
  const dispatch = useDispatch();

  // Dados do admin
  const [data, setData] = useState(adminData);
  // alert(JSON.stringify(data));
  alert(JSON.stringify(data.admin.email));

  // Buscar admin na API
  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`/auth/admin/${getCompanyId()}`);
      setAdminData(response.data);
    }
    fetchData();
  }, []);

  function setAdminData(admin) {
    dispatch({ type: "SET_ADMIN", admin: admin });
  }

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Editar Perfil</h4>
              <p className={classes.cardCategoryWhite}>Complete seu perfil</p>
            </CardHeader>
            <CardBody>

              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText={data.company}
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: true
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={7}>
                  <CustomInput
                    labelText="E-mail"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>

              </GridContainer>

              {/* <GridContainer>

                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Primeiro Nome"
                    id="first-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Ultimo Nome"
                    id="last-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>

              </GridContainer> */}

              <GridContainer>

                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Cidade"
                    id="city"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Estado"
                    id="country"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="CEP"
                    id="postal-code"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>

              </GridContainer>

              <GridContainer>

                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Descricao..."
                    id="about-me"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5
                    }}
                  />
                </GridItem>

              </GridContainer>

            </CardBody>

            <CardFooter>
              <Button color="primary">Atualizar Perfil</Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
              <h4 className={classes.cardTitle}>Alec Thompson</h4>
              <p className={classes.description}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button color="primary" round>
                Follow
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
