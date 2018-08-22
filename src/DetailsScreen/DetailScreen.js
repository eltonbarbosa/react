import React, { Component } from 'react';
import { Container, Content, Header, Body, Title, Text } from 'native-base';
import Style from '../layout/Styles';

class DetailScreen extends Component{
    constructor(props){
        super(props);

        this.state = {
            title:"Screen Details"
        }
    }

    render() {
        const { header, color } = Style;
        return (
            <Container>
                <Content padder>
                    <Text>{this.state.title}</Text>
                </Content>
            </Container>
        )
    }
}

export default DetailScreen;