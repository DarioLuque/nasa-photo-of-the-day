import React from "react";

import "./photocard.css"

import {
  Card, CardImg, CardText, CardBody,
  CardHeader, CardSubtitle
} from 'reactstrap';

const PhotoCard = props => {
  return (
    <div className="card-size">
      <Card body outline color="danger">
      <CardHeader tag="h2">{props.title}</CardHeader>
      <CardImg src={props.hdurl} alt="pod"></CardImg>
        <CardBody>
        <CardSubtitle>Copyright: {props.copyright}</CardSubtitle>
        </CardBody> 
        <CardBody>
        <CardText>{props.explanation}</CardText>
        <CardText>{props.date}</CardText>
        </CardBody>
        
      </Card>
    </div>
    
  );
};
export default PhotoCard;
