import React from 'react';
import { Row, Col, Card, } from 'antd';
import { Link } from 'react-router-dom';
import '../../assets/styles/MainSection.css';  // Import custom CSS
import Title from 'antd/es/typography/Title';

const { Meta } = Card;

const pages = [
  { title: 'المذكرات', description: 'مذكرات و ابحاث تنقل بحثك لمستوى اعلى ', link: '/thesis' },
  { title: 'محاضرات ومقاييس', description: 'زد رصيدك المعرفي عبر احسن الاساتذة', link: '/lectures' },
  { title: 'كتب', description: ' مكتبة عالية الجودة متخصصة في علم الاجتماع', link: '/books' },
  { title: 'ملتقيات', description: 'اطلع على ما هو حديث الساعة في المجتمع العلمي', link: '/events' },
  { title: 'نماذج', description: 'نماذج دكتوراه مختارة و منقحة لتحترف بحثك', link: '/templates' },
  { title: 'التواصل معنا', description: 'لنشر بحثك  او استفسار اتصل بنا', link: '/contact' }
];

const MainSection = () => {
  return (
    <div id="main-section" className="main-section">
      <Title level={2} className="main-section-title">اعبر جسرك نحو المعرفة </Title>
      <Row gutter={[18, 18]}>
        {pages.map(page => (
          <Col xs={24} sm={12} md={8} key={page.title}>
            <Link to={page.link}>
              <Card hoverable>
                <Meta title={page.title} description={page.description} />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MainSection;
