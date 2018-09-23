import React from 'react';
import { Card } from 'material-ui/Card';
import { ViewTitle } from 'admin-on-rest';
import CardText from 'material-ui/Card/CardText';
import { serviceStyle } from './styles.js'

const Word = () => (
    <Card style={serviceStyle}>
        <ViewTitle title="Microsoft Word" />
        <CardText>
            Пока тут пустенько
        </CardText>
    </Card>
);

export default Word;