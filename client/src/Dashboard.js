import React, { Component } from 'react';
import { TextField } from 'admin-on-rest';
import { Card, CardText } from 'material-ui/Card';
import { ViewTitle } from 'admin-on-rest/lib/mui';
import FlatButton from 'material-ui/FlatButton';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import { cardStyle, toolbarStyle, container, oopsStyle } from './styles.js'
import { pictures } from './pictures.js'

const currentUrl = document.baseURL;

function compareTitle(A, B) {
      if (A.title < B.title) return -1;
      if (A.title > B.title) return 1;
      return 0;
    }


class Services extends Component {
    constructor(props) {
      super(props);  
      this.state = {
        services: [],
        accesses: [],
        page: 1,
        perPage: 7,
        total: 7,
        last: 1
      };
    }
  
    componentDidMount() {
        let username = localStorage.getItem('username');
        let url = `http://localhost:3000/api/employees/findOne?filter[include][roles][accesses][processes]&filter[where][email]=${username}`;
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            return data.roles.accesses;
        })
        .then(data => {
            let services = [];
            console.log('получил и нарисовал сервисы');
            services = data.map(access => {
                return access.processes;
            });
            services.sort(compareTitle);
            localStorage.setItem('services', JSON.stringify(services));
            this.setState({ services: services });

        })
        .catch(e => console.log(e));
    }
  
    render() {
        const services = this.state.services;
        const nbPages = Math.ceil(this.state.total / this.state.perPage) || 1;
        if (services.length == 0) {
            return (
                <div style={oopsStyle}>
                    Oops!
                </div>
            )
        }
        else
        return (
            <Card title={"Все сервисы"} >
            <ViewTitle title="Все сервисы" />
            <div style={container}>
            {services.map(service => {
                
                if(service.id >= this.state.last && service.id < this.state.last + this.state.perPage)

                return(
                <a href={currentUrl + service.url} title={service.text}>
                <Card key={service.id} style={cardStyle}>
                    <CardText>
                        <p />
                        <img src={pictures[service.id].url} height="70"/>
                        <p></p>
                        <TextField record={service} source="title" />
                    </CardText>
                </Card>
                </a>)
            })}
            </div>
            <p />
            <Toolbar>
            <div style={toolbarStyle}>
                <ToolbarGroup>
                <span style={spanStyle}>
                {this.state.last}-{this.state.last + this.state.perPage - 1 <= this.state.total ? this.state.last + this.state.perPage - 1 : this.state.total} из {this.state.total}
                </span>
                {this.state.page > 1 &&
                    <FlatButton primary key="prev" label="Prev" icon={<ChevronLeft />} onClick={() => { this.setState({ last: this.state.last - this.state.perPage }); this.setState({ page: this.state.page - 1 }) } } />
                }
                {this.state.page !== nbPages &&
                    <FlatButton primary key="next" label="Next" icon={<ChevronRight />} onClick={() => { this.setState({ last: this.state.last + this.state.perPage }); this.setState({ page: this.state.page + 1 }) } } labelPosition="before" />
                }
                </ToolbarGroup>
            </div>
            </Toolbar>
            </Card>
        );
      }
  }

export default () => (   
    
    <Services />

);