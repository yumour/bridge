import React, { useState } from 'react';
import { Badge, Calendar, Modal, Typography } from 'antd';
import '../../assets/styles/Events.css'; // Import custom CSS

const { Title, Paragraph } = Typography;

const eventsData = {
  '2024-06-10': {
    title: 'ملتقى الذكاء الاصطناعي',
    description: 'ملتقى يتحدث عن استعمالات الذكاء الصناعي',
    location: 'Fac Central',
    time: '10:00 - 14:00 ',
  },
  '2024-06-15': {
    title: 'ملتقى المؤسسات الناشئة',
    description: 'ملتقى هدفه دعم الافكار المبتكرة ووصل بالعالم المادي ',
    location: 'Campus',
    time: '9:00  - 13:00 ',
  },
  '2024-06-20': {
    title: 'مسابقة الحساب الذهني',
    description: 'مسابقة ودية لاظهار اصحاب المواهب في الحساب الذهني',
    location: 'دار الثقافة',
    time: '12:00  - 15:00 ',
  },
};

const Events = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const onSelect = (date) => {
    const formattedDate = date.format('YYYY-MM-DD');
    if (eventsData[formattedDate]) {
      setSelectedEvent(eventsData[formattedDate]);
      setIsModalVisible(true);
    }
  };
  const dateCellRender = (date) => {
    const formattedDate = date.format('YYYY-MM-DD');
    if (eventsData[formattedDate]) {
      return <Badge status="success" text={eventsData[formattedDate].title} />;
    }
    return null;
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="events-page">
      <Title level={2}>Events Calendar</Title>
      <Calendar onSelect={onSelect} dateCellRender={dateCellRender}  />
      <Modal
        title={selectedEvent?.title}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Paragraph><strong>الوصف:</strong> {selectedEvent?.description}</Paragraph>
        <Paragraph><strong>الموقع:</strong> {selectedEvent?.location}</Paragraph>
        <Paragraph><strong>الوقت:</strong> {selectedEvent?.time}</Paragraph>
      </Modal>
    </div>
  );
};

export default Events;
