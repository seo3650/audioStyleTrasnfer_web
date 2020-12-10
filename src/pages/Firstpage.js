import React from 'react';
import {withRouter} from 'react-router-dom'
import styled, {css} from 'styled-components';
import {Button} from 'antd';
import 'antd/dist/antd.css';

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
  font-size: 30px;
  font-weigth : 700;
  color : #FDC959;
  height : 100px;
  background-color: grey;
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
  width : 400px;
  height: 400px;
  padding : 15px;
  margin : 0 auto;
  background-color: white;

`;

const Title = styled.div`
    font-size : 30px;
    width : 80%;
    margin : 0 auto;
    margin-Top : 70px;
    margin-Bottom : 15px;
    text-align : center;
    color : #2C3947;
    background-color : white;
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
                    <Column>Voice is All you need</Column>
                    <Column>
                        <input placeholder="set your email"/>
                        <Button>Click</Button>
                    </Column>
                </HeaderContainer>
                <Main>
                    <Container>
                        <Title>Cover by your self</Title>
                        <Title>You can select any song's singer!</Title>
                        <Button type="primary" onClick={this.ChangePage}>Convert here!</Button>
                    </Container>
                </Main>
            </BigContainer>
        )
    }

}

export default withRouter(Firstpage);