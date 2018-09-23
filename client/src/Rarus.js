import React from 'react';
import { Card } from 'material-ui/Card';
import { ViewTitle } from 'admin-on-rest';
import { serviceStyle } from './styles.js'

const Rarus = () => (
    <Card style={serviceStyle}>
        <ViewTitle title="1С:Предприятие 8" />
        <iframe width="100%" height="500" frameborder="0" src="http://trade.demo.1c.ru/trade/ru_RU/"/>
    </Card>
);

export default Rarus;