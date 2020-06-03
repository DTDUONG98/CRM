import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './App.css';
import logo from '../src/img_logo/ptit.jpg'
import img1 from '../src/img_slider/code_for_kid_1.jpg'
import img2 from '../src/img_slider/code_for_kid.jpg'
import { Row, Col } from 'reactstrap';
import Slider from "react-slick";
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import { IoMdPerson } from "react-icons/io";
import { IoMdPodium } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaAlignJustify } from "react-icons/fa";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      hoten: "",
      email: "",
      tieude: "",
      noidung: "",
      checkedNam: false,
      checkedNu: false,
    }
    this.inputUser = this.inputUser.bind(this)
    this.inputPass = this.inputPass.bind(this)
    this.inputHoten = this.inputHoten.bind(this)
    this.inputEmail = this.inputEmail.bind(this)
    this.inputTieude = this.inputTieude.bind(this)
    this.inputNoidung = this.inputNoidung.bind(this)
  }


  inputUser(e) {
    let userName = e.target.value
    console.log("user Name", userName)
    this.setState({
      userName: userName
    })
  }
  inputPass(e) {
    let pass = e.target.value
    console.log("Password", pass)
    this.setState({
      password: pass
    })
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
  setChecked(){
    console.log('checkedNam', this.state.checkedNam)
    this.setState({
      checkedNam: !this.state.checkedNam
    })
  }
  Island() {
    console.log("this props", this.props)
    this.props.history.push('./Island/1')
  }
  Rank() {
    console.log("this props", this.props)
    this.props.history.push('./Rank/2')
  }
  Lienhe() {
    console.log("this props", this.props)
    this.props.history.push('./Lienhe/3')
  }
  Tintuc() {
    console.log("this props", this.props)
    this.props.history.push('./Tintuc/4')
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
          <Col xs={{ size: 12 }} lg={{ size: 6 }}>
            <img src={img1} className="img-slider" />
          </Col>
          <Col xs={{ size: 12 }} lg={{ size: 6 }} >
            <Row style={{ backgroundColor: "white", paddingTop: "15px" }}>
              <Col xs={{ size: 4 }} lg={{ size: 4 }}>
                <span>Tài khoản</span>
                <Input
                  value={this.state.userName}
                  placeholder="Tài khoản"
                  onChange={(e) => this.inputUser(e)}
                />
              </Col>
              <Col xs={{ size: 4 }} lg={{ size: 4 }}>
                <span>Mật khẩu</span>
                <Input
                  value={this.state.password}
                  placeholder="Mật khẩu"
                  onChange={(e) => this.inputPass(e)}
                  type="password"
                />
                <span>quên mật khẩu</span>
              </Col>
              <Col xs={{ size: 4 }} lg={{ size: 4 }} style={{ paddingTop: "20px" }}>
                <Button
                  type="submit"
                  color="secondary"
                  onClick={() => this.Island()}
                >
                  Đăng nhập
                </Button>
              </Col>
            </Row>
            <Row style={{ paddingTop: "10px" }}>
              <Col xs={{ size: 10, offset: 1 }} lg={{ size: 10, offset: 1 }}>
                <p
                  style={{ textAlign: 'center', fontSize: '20px', paddingTop: '20px' }}
                >TẠO TÀI KHOẢN</p>
              </Col>
              <Col xs={{ size: 10, offset: 1 }} lg={{ size: 10, offset: 1 }}>
                <TextField
                  fullWidth
                  label="tên đăng nhập"
                  value={this.state.newUser}
                  placeholder="tên đăng nhập"
                  onChange={(e) => this.inputUser(e)}
                />
              </Col>
              <Col xs={{ size: 10, offset: 1 }} lg={{ size: 10, offset: 1 }}>
                <TextField
                  fullWidth
                  label="email"
                  value={this.state.Email}
                  placeholder="ABC@gamil.com"
                  onChange={(e) => this.inputEmail(e)}
                />
              </Col>
              <Col xs={{ size: 10, offset: 1 }} lg={{ size: 10, offset: 1 }}>
                <TextField
                  fullWidth
                  label="password"
                  value={this.state.newPass}
                  placeholder="mật khẩu"
                  type="password"
                  onChange={(e) => this.inputPass(e)}
                />
              </Col>
              <Col xs={{ size: 10, offset: 1 }} lg={{ size: 10, offset: 1 }}>
                <TextField
                  fullWidth
                  label="repeate password"
                  value={this.state.newPass}
                  placeholder="Nhập lại mật khẩu"
                  type="password"
                  onChange={(e) => this.inputPass(e)}
                />
              </Col>
              <Col xs={{ size: 10, offset: 1 }} lg={{ size: 10, offset: 1 }} style={{paddingTop: '20px'}}>
                <span>Ngày tháng năm sinh</span>
                <Row>
                  <Col xs={{ size: 2, offset: 1 }} lg={{ size: 2, offset: 1 }}>
                    <TextField
                      select
                      fullWidth
                      textAlign="center"
                      label="1"
                      value={this.state.day}
                      onChange={() => this.selectDay()}
                    />
                  </Col>
                  <Col xs={{ size: 3 }} lg={{ size: 3 }}>
                    <TextField
                      select
                      fullWidth
                      textAlign="center"
                      value={this.state.month}
                      label="tháng 1"
                    />
                  </Col>
                  <Col xs={{ size: 3 }} lg={{ size: 3 }}>
                    <TextField
                      select
                      fullWidth
                      textAlign="center"
                      value={this.state.year}
                      label="1990"
                    />
                  </Col>
                </Row>
              </Col>
              <Col xs={{ size: 10, offset: 1 }} lg={{ size: 10, offset: 1 }} style={{paddingTop: "20px"}}>
                <span>Giới tính</span>
                <br />
                <span>Nam</span>
                <Radio
                  checked={this.state.checkedNam}
                  onChange={() => this.setChecked()}
                  value={this.state.checkedNam}
                  name="radio-button-demo"
                />
                <span>Nữ</span>
                <Radio
                  checked={this.state.checkedNu}
                  onChange={() => this.setState({checkedNu: !this.state.checkedNu})}
                  value={this.state.checkedNu}
                  name="radio-button-demo"
                />
              </Col>
              <Col xs={{ size: 2, offset: 5 }} lg={{ size: 2, offset: 5 }} style={{ paddingBottom: "10px", paddingTop: "10px" }}>
                <button type="submit" className="btn btn-primary">Đăng ký</button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="footer">
          <Col lg={{ size: 10, offset: 1 }} md={{ size: 10, offset: 1 }}>
            <Row>
              <Col lg={{ size: 6 }} md={{ size: 6 }} >
                <h3>THÔNG TIN LIÊN HỆ </h3>
                <br />
                <br />
                <span>Tên: </span> <br />
                <span>fb :</span> <br />
                <sp>Email :</sp>
              </Col>
              <Col lg="6" md="12">
                <h3>GỬI TIN NHẮN CHO CHÚNG TÔI </h3>
                <br />
                <br />
                <Row className="in-put">
                  <Col lg="6" md="6">
                    <input
                      type="input"
                      value={this.state.hoten}
                      onChange={(e) => this.inputHoten(e)}
                      className="inputt"
                      placeholder="Họ Tên*"
                    />
                  </Col>
                  <Col lg="6" md="6">
                    <input
                      type="input"
                      value={this.state.Email}
                      onChange={(e) => this.inputEmail(e)}
                      className="inputt"
                      placeholder="Email*"
                    />
                  </Col>
                </Row>
                <Row className="in-put">
                  <Col lg="12" md="12">
                    <input
                      type="input"
                      value3={this.state.Tieude}
                      onChange={(e) => this.inputTieude(e)}
                      className="inputt"
                      placeholder="Tiêu đề*"
                    />
                  </Col>
                </Row>
                <Row className="in-put">
                  <Col lg="12" md="12">
                    <input
                      type="input"
                      value4={this.state.noidung}
                      onChange={(e) => this.inputNoidung(e)}
                      className="input-nd"
                      placeholder="nhập nội dung*"
                    />
                  </Col>
                </Row>
                <Row className="in-put">
                  <Col lg="12">
                    <button type="button" className="btn btn-outline-secondary" onClick={() => this.Submid()} style={{ color: "white" }} >GỦI TIN NHẮN</button>
                  </Col>
                </Row>
              </Col>
            </Row>
            <hr
              style={{
                color: "white"
              }}
            />
            <p style={{
              padding: "10px",
              textAlign: "center"
            }}>Copyright © 2019 - All rights reserved. Powered by Code For Kid</p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(App);