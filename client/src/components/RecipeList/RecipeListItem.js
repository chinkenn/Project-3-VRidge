import React from "react";
import { Grid, Row, Col } from 'react-bootstrap';
 import { CardTitle } from 'reactstrap';
import Thumbnail from "../Thumbnail";
// import { Container, Row, Col } from "../Grid";
import "./RecipeList.css";





export const RecipeListItem = props => (

  <div>
    <li className="list-group-item">
  <Grid>
  <Row className="show-grid ">
    <Col sm={6} md={4}>
    <CardTitle>
      <h3><a target="_blank" href={props.url}>{props.title}</a></h3></CardTitle>
     <Thumbnail src={props.thumbnail || "https://placehold.it/300x300"} />
    </Col>
    <Col sm={6} md={4}>
    

        <p className="ingredients"><br></br><strong>Ingredients:</strong> {props.ingredients.map(ingredient => (
            <p key={ingredient}>{ingredient}</p>
          ))}</p>
         
        </Col>
    <Col sm={6} md={4}>
    <button href={props.url}>GET THE RECIPE</button>
    </Col>
  </Row>
</Grid>
</li>
</div>
)
