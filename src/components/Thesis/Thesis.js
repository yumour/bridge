import React, { useState } from 'react';
import { Tabs, Select, List, Card, Tooltip,Typography } from 'antd';
import { Link } from 'react-router-dom';
import '../../assets/styles/Thesis.css'; // Import custom CSS
import data from "../../utils/data"
const {thesisData}= data;
const {Title}= Typography
const { TabPane } = Tabs;
const { Option } = Select;
const { Meta } = Card;

const Thesis = () => {
  const [sortOrder, setSortOrder] = useState('date');

  const handleSortChange = (value) => {
    setSortOrder(value);
  };

  const sortTheses = (theses) => {
    if (sortOrder === 'date') {
      return theses.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortOrder==='year')
      {
        return theses.sort((a, b) => b.year-a.year)
      }
      else{
      return theses.sort((a, b) => a.title.localeCompare(b.title));
    }
  };

  const renderTheses = (theses) => (
    <List
      grid={{ gutter: 10,
        xs: 1,
        sm: 1,
        md: 2,
        lg: 3,
         }}
      dataSource={sortTheses(theses)}
      renderItem={item => (
        <List.Item>
          <Link to={`/thesis/${item.id}`}>
            <Card>
              <Tooltip title={item.title}>
              <Meta
                title={item.title}
                description={
                  <div>
                    <p><strong>الكاتب:</strong> {item.author.join(' ,')}</p>
                    <p><strong> تاريخ النشر:</strong> {item.date}</p>
                    <p><strong>السنة:</strong> {item.year}</p>
                    <p><strong>المؤسسة:</strong> {item.institute}</p>
                    <p>{item.description}</p>
                  </div>
                }
              />
              </Tooltip>
            </Card>
          </Link>
        </List.Item>
      )}
    />
  );

  return (
    <div className="thesis-page">
       <Title level={1 } >المذكرات</Title>
      <Select defaultValue="date" style={{ width: 200, marginBottom: 20 }} onChange={handleSortChange}>
        <Option value="date">تاريخ النشر</Option>
        <Option value="year">السنة</Option>
        <Option value="a-z">ابجدي</Option>
      </Select>
      <Tabs defaultActiveKey="bachelor">
        <TabPane tab="Licence" key="bachelor">
          {renderTheses(thesisData.bachelor)}
        </TabPane>
        <TabPane tab="Master" key="masters">
          {renderTheses(thesisData.masters)}
        </TabPane>
        <TabPane tab="Doctorate" key="doctorate">
          {renderTheses(thesisData.doctorate)}
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Thesis;
