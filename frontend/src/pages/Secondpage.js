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
  font-size: 28pt;
  font-weigth : 700;
  height : 100px;
`;

const Column = styled.div`
    width : 50%;
    float : left;
    padding :3px;
`;

const Column2 = styled.div`
    width : 50%;
    float : left;
    padding :3px;
    text-align: right;
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

const Input = styled.input.attrs({
    required: true
})
    `
    background-color : #E9E9E9;
    width : 40%;
    text-align: left;
    font-size : 15px;
    padding : 10px;
    margin : 2px;
    border : none;
    border-radius : 10px;
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
                    <Column>VOICE is all you need🎤</Column>
                </HeaderContainer>
                <Main>
                    <Container>
                        <Title1>Convert a Singer!</Title1>
                        <Title2>Converted song will be sent by e-mail in an hour</Title2>
                        <Title2>
                            Song : <Input2 type="file" placeholder="Song" onChange={this.fileHandler_1}/>
                            Singer : <Input2 type="file" placeholder="Singer"onChange={this.fileHandler_1}/>
                            <Button type="primary" onClick={this.onClickHandler} style={{fontSize : "20px", padding: "10px", height: "55px", width: "120px", borderRadius:"10px",margin:"10px"}}>Convert</Button>
                        </Title2>
                        <Title2 style={{marginTop : "50px"}}>
                            <Input2 type="email" placeholder="set your email"/>
                            <Button type="primary">Click</Button>
                        </Title2>
                        
                    </Container>
                </Main>
            </BigContainer>
        )
    }

}

export default withRouter(Secondpage);