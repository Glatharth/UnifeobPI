import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import api from "../../services/api";

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

export default function UserProfile(props) {
  const classes = useStyles();

  const dispatch = useDispatch();

  // Dados do admin
  const [data, setData] = useState(useSelector(state => state.admin));

  async function handleClick(e) {
    e.preventDefault();

    await api.put(`/auth/admin/${data._id}`, data);
    dispatch({ type: "SET_ADMIN", admin: data });

    props.history.push("/");
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
                    inputProps={{
                      value: `${data.email}`,
                      onChange: e => setData({ ...data, email: e.target.value })
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Cidade"
                    id="city"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value: `${data.city}`,
                      onChange: e => setData({ ...data, city: e.target.value })
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
                    inputProps={{
                      value: `${data.state}`,
                      onChange: e => setData({ ...data, state: e.target.value })
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
                    inputProps={{
                      value: `${data.cep}`,
                      onChange: e => setData({ ...data, cep: e.target.value })
                    }}
                  />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Descricao..."
                    id="description"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                      value: `${data.description}`,
                      onChange: e =>
                        setData({ ...data, description: e.target.value })
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>

            <CardFooter>
              <Button color="primary" fullWidth onClick={handleClick}>
                Atualizar Perfil
              </Button>
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
