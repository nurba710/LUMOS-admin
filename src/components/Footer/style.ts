import styled from "styled-components";

export const FooterStyle = styled.div`
  background-color: #689CD2;
  position: relative;
  bottom: 0;
  padding: 70px 0;
`

export const Block = styled.div`
  max-width: 1170px;
  margin: auto;
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Column = styled.div`
  width: 25%;
  padding: 0 15px;
`


export const HeadLines = styled.h4`
  font-size: 18px;
  color: #fff;
  text-transform: capitalize;
  margin-bottom: 35px;
  font-weight: 500;
  position: relative;

  :before {
    content: ' ';
    position: absolute;
    left: 0;
    bottom: -10px;
    background-color: #ff9900;
    height: 2px;
    box-sizing: border-box;
    width: 50px;
  }
`

export const Ul = styled.ul`
  list-style: none;
`

export const ListLinks = styled.a`
  font-size: 16px;
  text-transform: capitalize;
  color: #fff;
  text-decoration: none;
  font-weight: 300;
  display: block;
  transition: all 0.3s ease;

  :hover {
    color: #ff9900;
    padding-left: 8px;
  }
`

export const SocialLink = styled.div`
  display: inline-block;
  height: 40px;
  width: 40px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0 10px 10px 0;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  color: #fff;
  transition: all 0.5s ease;
  
  :hover {
    color: #ff9900;
    background-color: #fff;
  }

`


export const TextP = styled.p`
  color: #fff;
  text-align: center;
  margin-top: 50px;
`
