import { Card, Button } from "react-bootstrap";
import React from "react";

const PendingCard = ({ pending }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{ pending.title }</Card.Title>
                <Card.Subtitle>
                    Priority: { pending.priority }
                </Card.Subtitle>
                <Card.Text>{ pending.description }</Card.Text>
                <Button variant="danger">Delete</Button>
                <Button variant="danger">Done</Button>
            </Card.Body>
        </Card>
    );
}

export default PendingCard;