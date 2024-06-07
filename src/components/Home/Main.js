import React from 'react';
import { Row, Col, Card, } from 'antd';
import { Link } from 'react-router-dom';
import '../../assets/styles/MainSection.css';  // Import custom CSS
import Title from 'antd/es/typography/Title';

const { Meta } = Card;

const pages = [
  { title: 'المذكرات', description: 'مذكرات و ابحاث تنقل بحثك لمتسوى اعلى ', link: '/thesis' },
  { title: 'محاضرات ودروس', description: 'زد رصيدك المعرفي عبر  احسن اساتذة', link: '/lectures' },
  { title: 'كتب', description: ' مكتبة عالية الجودة من اهم الكتب واشهرها', link: '/books' },
  { title: 'ملتقيات', description: 'اطلع على ما هو حديث الساعة في المجتمع العلمي', link: '/events' },
  { title: 'نماذج', description: 'نماذج مختارة و منقحة لتحترف بحثك', link: '/templates' },
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
