import React from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import "../styles.css";

const cards = ({ postdata }) => {
  return (
    <div className="mb-2 col-md-4 h-25">
      <Card className="customcard">
        <CardBody>
          <CardText>{postdata.id}</CardText>
          <CardTitle>
            <b> {postdata.title.slice(0, 20)}</b>
          </CardTitle>
          <CardTitle>
            <b> {postdata.body.slice(0, 35)}</b>
          </CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default cards;
