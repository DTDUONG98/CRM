import React, { Component } from 'react';
import './App.css';
import logo from '../src/img_logo/ptit.jpg'
import { Row, Col, } from 'reactstrap';
import { IoMdPerson } from "react-icons/io";
import { IoMdPodium } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaAlignJustify } from "react-icons/fa";
class Island1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoten: "",
      email: "",
      tieude: "",
      noidung: "",
      checked: true,
    }
    this.inputHoten = this.inputHoten.bind(this)
    this.inputEmail = this.inputEmail.bind(this)
    this.inputTieude = this.inputTieude.bind(this)
    this.inputNoidung = this.inputNoidung.bind(this)
  }

  inputHoten(e) {
    let name = e.target.value
    console.log('Họ Tên:', name)
    this.setState({
      hoten: name
    })
  }
  inputEmail(e) {
    let email = e.target.value
    this.setState({
      Email: email
    })
  }
  inputTieude(e) {
    let title = e.target.value
    this.setState({
      Tieude: title
    })
  }
  inputNoidung(e) {
    let content = e.target.value
    this.setState({
      noidung: content
    })
  }

  Submid() {
    let name = this.state.hoten
    console.log('Name', name)
    let email = this.state.Email
    console.log('Email', email)
    alert('Cảm ơn bạn đã gửi tin nhắn cho chúng tôi, Chúng tôi sẽ phản hồi sớm nhất cho bạn qua Email')
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
                  onClick={() => this.Island()}
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
        <Row className="body">
        </Row>
      </div>
    );
  }
}

export default Island1;