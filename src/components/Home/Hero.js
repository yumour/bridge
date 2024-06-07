import React from 'react';
import { Row, Col, Typography, Button , Image } from 'antd';
import '../../assets/styles/HeroSection.css';  // Import custom CSS
import logo from "../../assets/images/logo.png";
const { Title, Paragraph } = Typography;

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Row justify="center" align="middle" className="hero-content">
        <Col span={24} style={{ textAlign: 'center' }}>
          <Title level={1} style={{color: "#04bb83"}} >مرحبا بكم في  <br/><br/><Image style={{width: "30%", height:"40%"}} preview={false}  src={logo}/></Title>
          <Paragraph style={{ fontSize: '1.2em' }}>
          هذا الموقع موجه للطلبة الجامعيين و الباحثين في مجال علم الإجتماع، يوفر هذا الموقع كل ما يحتاجه الطالب و الباحث من دروس ،محاضرات ، مذكرات و ملتقيات.
          </Paragraph>
          <Button type="text"  id="button" size="large"  href='#main-section'>اكتشف</Button>
        </Col>
      </Row>
    </div>
  );
};

export default HeroSection;
