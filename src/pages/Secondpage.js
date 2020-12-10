import React from 'react';
import {withRouter} from 'react-router-dom'
import styled, {css} from 'styled-components';
import 'antd/dist/antd.css';
import { Button } from 'antd';


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



class Secondpage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedFile_1 : null,
            selectedFile_2 : null
        }
        this.fileHandler_1 = this.fileHandler_1.bind(this);
        this.fileHandler_2 = this.fileHandler_2.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    fileHandler_1 = (e) =>{
        const files = e.target.files;
        this.setState({selectedFile_1 : files})
    };

    fileHandler_2 = (e) =>{
        const files = e.target.files;
        this.setState({selectedFile_2 : files})
    };

    onClickHandler = (e) => {
        const formData = new FormData();
        formData.append(
            this.state.selectedFile_1,
            this.state.selectedFile_2
        )
    }
    render() {
        return(
            <BigContainer>
                <HeaderContainer>
                    <Column>Voice is All you need!</Column>
                    <Column>
                        <input placeholder="set your email"/>
                        <Button>Click</Button>
                    </Column>
                </HeaderContainer>
                <Main>
                    <Container>
                        <Title>Convert a Singer!</Title>
                        <input type="file" onChange={this.fileHandler_1}/>
                        <input type="file" onChange={this.fileHandler_1}/>
                        <Button onClick={this.onClickHandler}>Convert!</Button>
                    </Container>
                </Main>
            </BigContainer>
        )
    }

}

export default withRouter(Secondpage);