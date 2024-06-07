import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Typography, Button } from 'antd';
import '../../assets/styles/ThesisDetail.css'; // Import custom CSS

const { Title, Paragraph } = Typography;

const thesisData = [
   { title: 'واقعة الإدارة  الاستراتيجية في التعليم العالي ', author: ['مرقـــاق وردة'], date: '2023-05-01',year :'2016', institute: 'جامعة 8 ماي 1945', description: 'دراسة ميدانية بمجمع سويداني بوجمعة - 8 ماي 1945 قالمة نموذجا' , url:'bachelor1' , type:"ليسانس" },
   { title: 'دور تسيير الكفاءات المهنية في تحسين الأداء المؤسسي في المؤسسة الاقتصادية', author: ['بركاني بثينة','حفيظي حنان'], date: '2022-12-15',year :'2017', institute: 'جامعة 8 ماي 1945', description: '-دور تسيير الكفاءات المهنية في تحسين الأداء المؤسسي في المؤسسة الاقتصادية دراسة ميدانية بمؤسسة سونمغاز - قالمة ',url:'bachelor2' , type:"ليسانس" },
   { title: 'تأثير تطبيق إدارة الجودة الشاملة على جودة الخدمات الفندقية من وجهة نظر العاملين ', author: ['طابوش عبد اللطيف'], date: '2023-01-10',year :'2018', institute: 'جامعة 8 ماي 1945', description: ' تأثير تطبيق إدارة الجودة الشاملة على جودة الخدمات الفندقية من وجهة نظر العاملين دراسة ميدانية بفندق صبري - عنابة -',url:'master1', type:"ماستر"  },
   { title: 'أثر الدعم الفلاحي على سوق العمل في الجزائر', author:[ 'زكريا جرفي'], date: '2022-09-20',year :'2020', institute: 'جامعة محمد خيضر', description: 'أثر الدعم الفلاحي على سوق العمل في الجزائر  دراسة تحليلية قياسية' ,url:'doctorat1', type:"دكتوراه"  }
]   
;

const ThesisDetail = () => {
  const { id } = useParams();
  const thesis = thesisData[id-1];

  return (
    <div className="thesis-detail">
      <Card dir='rtl'>
        <Title>{thesis.title}</Title>
        <Paragraph><strong>المؤلف:</strong> {thesis.author.join(' ,')}</Paragraph>
        <Paragraph><strong >تاريخ النشر:</strong> {thesis.date}</Paragraph>
        <Paragraph><strong>السنة:</strong> {thesis.date}</Paragraph>
        <Paragraph><strong>المؤسسة:</strong> {thesis.institute}</Paragraph>
        <Paragraph>{thesis.description}</Paragraph>
        <Button type="default" shape='round'  size='large' href={`/pdfs/${thesis.url}.pdf`} target="_blank" rel="noopener noreferrer">تحميل </Button>
      </Card>
    </div>
  );
};

export default ThesisDetail;
