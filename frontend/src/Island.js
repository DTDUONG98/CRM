import React, { Component } from 'react'
import './App.css'
import logo from '../src/img_logo/ptit.jpg'
import island1 from '../src/img-island/island1.jfif'
import island2 from '../src/img-island/island2.jfif'
import island3 from '../src/img-island/island3.jpg'
import island4 from '../src/img-island/island4.jfif'
import island5 from '../src/img-island/island5.jfif'
import { Row, Col, } from 'reactstrap'
import { IoMdPerson } from "react-icons/io"
import { IoMdPodium } from "react-icons/io"
import { IoMdInformationCircleOutline } from "react-icons/io"
import { FaAlignJustify } from "react-icons/fa"
import { TiStarFullOutline } from "react-icons/ti"
import { TiStar } from "react-icons/ti"
class Island extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  Island(){
    console.log("this props", this.props)
    this.props.history.push('/Island/1')
  }
  Rank(){
    console.log("this props", this.props)
    this.props.history.push('/Rank/2')
  }
  Lienhe(){
    console.log("this props", this.props)
    this.props.history.push('/Lienhe/3')
  }
  Tintuc(){
    console.log("this props", this.props)
    this.props.history.push('/Tintuc/4')
  }
  Island1(){
    console.log('this.prosps', this.props)
    this.props.history.push('/Island1/11')
  }

  render() {
    return (
      <div>
        <Row className="sticky-top">
          <Col xs={{ size: 1, offset: 1 }} lg={{ size: 1, offset: 1 }}>
            <a href="/" style={{ color: "black" }}>
              <img src={logo} className="img-slider" style={{ borderRadius: "50%" }} />
            </a>
          </Col>
          <Col xs={{ size: 8, offset: 2 }} lg={{ size: 8, offset: 2 }}>
            <Row>
              <Col xs={{ size: 2, offset: 3 }} lg={{ size: 2, offset: 3 }}>
                <a
                  onClick={() => this.Island1()}
                  style={{ fontSize: "20px" }}
                >
                  <IoMdPerson/> My project
                </a>
              </Col>
              <Col xs="2" lg="2">
                <a
                  onClick={() => this.Rank()}
                  style={{ fontSize: "20px" }}
                >
                 <IoMdPodium />Ranking
                </a>
              </Col>
              <Col xs="2" lg="2">
                <a
                  onClick={() => this.Tintuc()}
                  style={{ fontSize: "20px" }}
                >
                  <IoMdInformationCircleOutline />Tin tức
                </a>
              </Col>
              <Col xs="2" lg="2">
                <a
                  onClick={() => this.Lienhe()}
                  style={{ fontSize: "20px" }}
                >
                  <FaAlignJustify />Lien hệ
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="island1">
          <Col xs={{size: 4, offset: 4}} style={{textAlign: "center"}}>
              <TiStar /><TiStarFullOutline/><TiStar/>
          </Col>
          <Col xs={{size: 4 , offset: 4}}>
            <img src={island1}  className="img-slider" onClick={() => this.Island1()}/> 
          </Col>
        </Row>
        <Row className="island2">
        <Col xs={{size: 4, offset: 4}} style={{textAlign: "center"}}>
              <TiStar /><TiStarFullOutline/><TiStar/>
          </Col>
          <Col xs={{size: 4 , offset: 4}}>
            <a>
              <img src={island2} className="img-slider" /> 
            </a>
          </Col>
        </Row>
        <Row className="island3">
          <Col xs={{size: 4, offset: 1}} >
            <a>
              <img src={island3} className="img-slider" />
            </a>
          </Col>
          <Col xs={{size: 4, offset: 2}} >
            <a>
              <img src={island4} className="img-slider" />
            </a>
          </Col>
        </Row>
        <Row className="island5">
          <Col xs={{size: 4, offset: 4}} style={{textAlign: "center"}}>
              <TiStar /><TiStarFullOutline/><TiStar/>
          </Col>
          <Col xs={{size: 4 , offset: 4}}>
            <a >
              <img src={island5}  className="img-slider"/>
            </a>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Island;