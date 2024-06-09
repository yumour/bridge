import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  Input,
  Select,
  Typography,
  Tooltip,
  Button,
} from "antd";
import "../../assets/styles/Books.css"; // Import custom CSS
const { Meta } = Card;
const { Title } = Typography;
const { Search } = Input;
const { Option } = Select;

const booksData = [
  {
    id: 1,
    title: "مناهج البحث في العلوم الاجتماعية والانسانية",
    author: "بوحوش عمار",
    category: "المنهجية",
    description: " ",
    cover: "/images/cover1.jpg",
    url : "/pdfs/book1.pdf"
  },
  {
    id: 2,
    title: "القانون والمجتمع: دراسة في علم الاجتماع القانوني عند إميل دوركايم",
    author: "فيصل محمد البحيري",
    category: "علم الاجتماع القانوني",
    description: "",
    cover: "/images/cover3.jpg",
  },
  // Add more books here
];

const categories = ["الكل", "المنهجية", "علم الاجتماع القانوني", "الاحصاء"];

const Books = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("الكل");

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  const filteredBooks = booksData.filter((book) => {
    return (
      (selectedCategory === "الكل" || book.category === selectedCategory) &&
      (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div className="books-page">
       <Title level={1 } >الكتب</Title>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={8} lg={8} xl={6}>
          <div className="sidebar">
            <Title level={4}>البحث</Title>
            <Search placeholder="ابحث" onSearch={handleSearch} enterButton />
            <Title level={4} style={{ marginTop: "20px" }}>
              المجالات
            </Title>
            <Select
              defaultValue="الكل"
              style={{ width: "100%" }}
              onChange={handleCategoryChange}
            >
              {categories.map((category) => (
                <Option key={category} value={category}>
                  {category}
                </Option>
              ))}
            </Select>
          </div>
        </Col>
        <Col xs={24} sm={24} md={16} lg={15} xl={18}>
          <Row gutter={[16, 16]}>
            {filteredBooks.map((book) => (
              <Col xs={24} sm={12} md={8} lg={8} xl={7} key={book.id}>
                {" "}
                <Tooltip title={book.title}>
                  <Card
                    hoverable
                    cover={<img alt={book.title} src={book.cover} />}
                    title={book.title}
                    extra={<span>{book.category}</span>}
                  >
                    <Meta title={book.author}>
                     
                    </Meta>
                    <br/>
                    <Button
                        type="default"
                        size="large"
                        shape="round"
                        href={book.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        تحميل
                      </Button>
                  </Card>{" "}
                </Tooltip>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Books;
