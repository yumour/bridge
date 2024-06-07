import { BookOutlined, LinkOutlined, SecurityScanOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import React from 'react';


const items = [
  {
    key: '1',
    icon: <BookOutlined />,
    title: 'التحضير',
    content: 'نحن نساعد الطلاب على إتقان تعلمهم والتواصل مع أقرانهم وتبادل المعرفة في جميع مجالات الدراسة',
  },
  {
    key: '2',
    icon: <SecurityScanOutlined />,
    title: 'حماية الملكية الفكرية',
    content: 'نحن نأخذ حقوق الطبع والنشر على محمل الجد. نواصل حماية حقوق المؤلفين والناشرين من خلال التصرف بسرعة بناءً على الإخطارات الصحيحة المتعلقة بانتهاك حقوق الطبع والنشر.',
  },
  {
    key: '3',
    icon: <LinkOutlined />,
    title: 'دعم الباحثيين',
    content: 'نوفر بيئة ملائمة للباحثيين لنشر مقالاتهم مع توفير الدعم المطلوب  ,ومنصة لربطهم بمختلف المؤسسات والمعاهد ',
  },
]

function AppAbout() {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>من نحن ؟</h2>
          <p></p>
        </div>
        <div className="contentHolder">
          <p>نحن شركة ناشئة نريد ان نساعد طلاب العلم والباحثين  على عبور جسر المعرفة نحو تعليم عالي ,عبر توفير موارد علمية منتقاة و متاحة للجميع.</p>
        </div>
        <Row gutter={[16, 16]}>
          {items.map((item) => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            )
          })}
        </Row>
      </div>
    </div>
  )
}

export default AppAbout;