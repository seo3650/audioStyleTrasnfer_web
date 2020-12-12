

import React from 'react';
import {withRouter} from 'react-router-dom'
import styled from 'styled-components';
import {Button} from 'antd';
import 'antd/dist/antd.css';
import "../App.css"

const BigContainer = styled.div`
&,
& * {
  box-sizing: border-box;
}
background-color: white;
height: 100%;
`;

const HeaderContainer = styled.header`
padding: 20px;
  font-size: 28pt;
  font-weigth : 700;
  height : 100px;
`;

const Column = styled.div`
    width : 50%;
    float : left;
    padding :3px;
`;


const Main = styled.div`
  width : 100%;
  height: 100%;
  padding: 15px;
  padding-top : 100px;
  background-color: white; 
`;

const Container = styled.div`
  width : 80%;
  height: 400px;
  padding : 15px;
  margin : 0 auto;
  background-color: white;

`;

const Title1 = styled.div`
    font-size : 58pt;
    width : 80%;
    margin : 0 auto;
    margin-Top : 70px;
    margin-Bottom : 15px;
    text-align : center;
    color : #2C3947;
    background-color : white;
    font-weight : 900;
    
`;

const Title2 = styled.div`
    font-size : 24pt;
    width : 80%;
    margin : 0 auto;
    margin-Top : 40px;
    margin-Bottom : 15px;
    text-align : center;
    color : #2C3947;
    background-color : white;
    font-weight : 500;
    
`;





class Firstpage extends React.Component{
    constructor(props){
        super(props);
        this.ChangePage = this.ChangePage.bind(this);
    }

    ChangePage = () => {
        this.props.history.push(`/convert`);
    }

    render() {

        return(
            <BigContainer>
                <HeaderContainer>
                    <Column>VOICE is all you need🎤</Column>
                </HeaderContainer>
                <Main>
                    <Container>
                        <Title1 class=".font">Cover by yourself</Title1>
                        <Title2>You can select any song's singer!</Title2>
                        <Title2>
                            <Button style={{fontSize:'30px', height: '80px', width : "350px", padding : "10px"}} type="primary"  size="large" onClick={this.ChangePage}>Convert here!</Button>
                        </Title2>
                    </Container>
                </Main>
            </BigContainer>
        )
    }

}

export default withRouter(Firstpage);