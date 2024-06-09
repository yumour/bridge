import React from 'react';
import { Row, Col, Card, Button,Typography } from 'antd';
import '../../assets/styles/Templates.css'; // Import custom CSS
const { Title } = Typography;

const { Meta } = Card;

const templatesData = [
  { id: 1, title: '1 نموذج', cover: '/images/templates.jpeg', docx: '/docx/temp1.docx', latex: '/latex/temp1.tex' },
  { id: 2, title: '2 نموذج', cover: '/images/templates2.jpeg', docx: '/images/temp2.docx', latex: '/latex/temp2.tex' },
];

const Templates = () => {
  return (
    <div className="templates-page">
      <Title level={1 } >نماذج الدكتوراه</Title>
      <br/>
      <Row gutter={[16, 16]}>
        {templatesData.map(template => (
          <Col xs={24} sm={12} md={8} lg={6} key={template.id}>
            <Card
              hoverable
              cover={<img alt={template.title} src={template.cover} />}
            >
              <Meta title={template.title} />
              <div className="download-buttons">
                <Button type="default" href={template.docx} target="_blank" shape='round' size='middle'>
                  DOCX
                </Button>
               
                <Button type="default" href={template.latex} target="_blank" shape='round' size='middle'>
                   LaTeX
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Templates;
