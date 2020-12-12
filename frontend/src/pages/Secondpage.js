import React from 'react';
import {withRouter} from 'react-router-dom'
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import axios from 'axios';


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
    font-size : 50pt;
    width : 80%;
    margin : 0 auto;
    text-align : center;
    color : #2C3947;
    background-color : white;
    font-weight : 800;
    
`;

const Title2 = styled.div`
    font-size : 24pt;
    width : 100%;
    margin : 0 auto;
    margin-top: 20px;
    margin-bottom : 20px;
    text-align : center;
    color : #737373;
    background-color : white;
    font-weight : 400;
    
`;


const Input2 = styled.input.attrs({
    required: true
})
    `
    background-color : #E9E9E9;
    width : 30%;
    text-align: left;
    font-size : 15px;
    padding : 10px;
    margin : 4px;
    border : none;
    border-radius : 10px;
`;



class Secondpage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            song : null,
            singer : null
        }
        this.fileHandler_1 = this.fileHandler_1.bind(this);
        this.fileHandler_2 = this.fileHandler_2.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    fileHandler_1 = (e) =>{
        const files = e.target.files;
        this.setState({song : files})
    };

    fileHandler_2 = (e) =>{
        const files = e.target.files;
        this.setState({singer : files})
    };

    onClickHandler = (e) => {
        const formData = new FormData();
        console.log(this.state.song);
        formData.append( "song", this.state.song);
        formData.append("singer", this.state.singer);
        const config= {
            headers : {
                "Content-Type" : "multipart/form-data"
            }
        };
        axios.post("http://34.64.145.248:5000/fileUpload", formData, config);
    }
    render() {
        return(
            <BigContainer>
                <HeaderContainer>
                    <Column>VOICE is all you need🎤</Column>
                </HeaderContainer>
                <Main>
                    <Container>
                        <Title1>Convert a Singer!</Title1>
                        <Title2>Converted song will be sent by e-mail in an hour</Title2>
                        <Title2>
                                <form action = "http://34.64.145.248:5000/fileUpload" method = "POST"
                                    enctype = "multipart/form-data">
                            Song:
                                    <Input2 type = "file" name = "song"/>
                            Singer:
                                    <Input2 type = "file" name = "singer"/><br></br><br></br>
                                    <Button type = "primary" htmlType="submit" style={{fontSize:'20px', height: '60px', width : "150px", padding : "5px"}}>Convert</Button>
                                </form>
    
                        </Title2>
                    </Container>
                </Main>
            </BigContainer>
        )
    }

}

export default withRouter(Secondpage);