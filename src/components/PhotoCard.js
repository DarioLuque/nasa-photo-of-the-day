import React from "react";

import "./photocard.css"

import {
  Card, CardImg, CardText, CardBody,
  CardHeader, CardSubtitle
} from 'reactstrap';

import styled from "styled-components";
import img from './images/galaxy3.jpg';

const BackGround = styled.body`
    background: url(${img});
    background-size: cover;
`;
const CardSize = styled.div`
    margin: 0 auto;
    width: 75%;
    text-align: center;
`;


const PhotoCard = props => {
  return (
    
    <BackGround>
    <CardSize>
      <Card body>
      <CardHeader tag="h3">{props.title}</CardHeader>
      <CardImg src={props.hdurl} alt="pod"></CardImg>
        <CardBody>
        <CardSubtitle>Copyright: {props.copyright}</CardSubtitle>
        </CardBody> 
        <CardBody>
        <CardText>{props.date}</CardText>
        <CardText>{props.explanation}</CardText>

        </CardBody>
      </Card>
    </CardSize>
    </BackGround>
    
  );
};
export default PhotoCard;
