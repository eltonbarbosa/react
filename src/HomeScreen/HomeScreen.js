import React, { Component } from 'react';
import { Container, Content, Header, Body, Title, Fab, Right, Icon, Text } from 'native-base';
import Style from '../layout/Styles';

class HomeScreen extends Component{
    
    constructor(props){
        super(props)

        this.state = {
            title:"DM122"
        }

        //bindings
        this.goToAdd = this.goToAdd.bind(this);
    }

    goToAdd(){
        this.props.navigation.navigate('Details',{add: true});
    }

    render(){
        const { header, color } = Style;
        return (
            <Container>
                <Header style={[header, color]}>
                    <Body>
                        <Title>{this.state.title}</Title>
                    </Body>
                </Header>
                <Content padder>
                    <Text>{this.state.title}</Text>
                </Content>
                <Fab position="bottomRight" style={color}
                     onPress={() => {this.goToAdd()}}>
                 <Icon name="add"/>   
                </Fab>
            </Container>
        )
    }
}

export default HomeScreen;