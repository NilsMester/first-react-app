import React from "react";
import styled from "styled-components";

const ArticleButton = styled.button`
    
    display: inline-block;
    width: 150px;
    height: 30px;
    vertical-align: top;
    margin: 20px 20px 20px 35px;
    border-radius:  50px;
    border-color: transparent;
    background-color: white;
    color: black;
    font-family: "Product Sans";
    font-weight: bold;
    
    :hover:not(:disabled){
    color: #fff;
    display: inline-block;
    animation: blinkingBackground 0.4s infinite;
    }
    
    @keyframes blinkingBackground{
    0%{ background-color: #10c018;}
    25%{ background-color: #1056c0;}
    50%{ background-color: #ef0a1a;}
    75%{ background-color: #254878;}
    100%{ background-color: #04a1d5;}
    }
    
    :disabled{
    color: dimgrey;
    background-color: white;
    }

   
 `
export default ArticleButton;