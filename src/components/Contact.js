import React from 'react';
import { Form, Input, Button, Row, Col, Typography } from 'antd';
import '../assets/styles/Contact.css'; // Import custom CSS

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const ContactUs = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
    // You can handle form submission here, e.g., send data to a server
  };

  return (
    <div className="contact-us-page">
      <Title level={2}>تواصل معنا</Title>
      <Row gutter={16}>
        <Col xs={24} md={12}>
          <Form
            name="contact"
            layout="vertical"
            onFinish={onFinish}
          >
            <Form.Item
              name="name"
              label="الاسم"
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input placeholder="Your name" />
            </Form.Item>
            <Form.Item
              name="email"
              label="البريد الالكتروني"
              rules={[{ required: true, message: 'Please enter your email' }, { type: 'email', message: 'Please enter a valid email' }]}
            >
              <Input placeholder="Your email" />
            </Form.Item>
            <Form.Item
              name="subject"
              label="الموضوع"
              rules={[{ required: true, message: 'Please enter the subject' }]}
            >
              <Input placeholder="Subject" />
            </Form.Item>
            <Form.Item
              name="message"
              label="الرسالة"
              rules={[{ required: true, message: 'Please enter your message' }]}
            >
              <TextArea rows={4} placeholder="Your message" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">ارسل</Button>
            </Form.Item>
          </Form>
        </Col>
        <Col xs={24} md={12}>
          <div className="contact-info">
            <Title level={4}> معلومات الاتصال</Title>
            <Paragraph>
              <strong>العنوان:</strong> Sidi Bel Abbes , ALgeria
            </Paragraph>
            <Paragraph>
              <strong>الرقم:</strong> 06 - XX - XX - XX
            </Paragraph>
            <Paragraph>
              <strong>البريد الالكتروني:</strong> contact@example.com
            </Paragraph>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactUs;
