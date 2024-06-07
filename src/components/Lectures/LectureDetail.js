import React from "react";
import { useParams } from "react-router-dom";
import { Tabs, Typography, List, Card, Button } from "antd";
import "../../assets/styles/Lectures.css"; // Import custom CSS

const { Title, Paragraph } = Typography;
const { TabPane } = Tabs;

const modulesData = {
  1: {
    title: "منهجية البحث الاجتماعي",
    description:
      "مناهج البحث الاجتماعي تهدف إلى اكتشاف العوامل والأسباب التي ينجم عنها السلوك الاجتماعي، الأمر الذي يؤدّي إلى اكتشاف القوانين العلميّة التي تفسر لنا النواحي المختلفة للاستجابات الاجتماعية، ممّا يساعد على فهم السلوك الاجتماعي للفرد وللجماعة والتنبّؤ به، ويترتب البحث الاجتماعي على عدّة طرق ممنهجة من البحث الوصفي، والبحث التجريبي، والبحث التاريخي.",
    instructor: "استاذ 1",
    resources: {
      pdfs: [
        { id: 1, title: "الدرس الأول", link: "/pdfs/lect.pdf" },
        { id: 2, title: "الدرس الثاني", link: "pdfs/lect.pdf" },
      ],
      ppts: [],
      word: [{ id: 1, title: "امتحان  الفصل الاول", link: "docs/lecture.docx" }],
      others: [{ id: 1, title: "مقالات خاصة", link: "misc/quiz.zip" }],
    },
    videos: [
      "https://www.youtube.com/embed/dQw4w9WgXcQ",
      "https://www.youtube.com/embed/xyz123",
    ],
  },
  2: {
    title: "المشكلات الاجتماعية",
    description: "",
    instructor: "استاذ 2",
    resources: {
      pdfs: [
        { id: 1, title: "المشكلة الاجتماعية PDF", link: "/pdfs/lect.pdf" },
      ],
      ppts: [
        {
          id: 1,
          title: "المشكلة الاجتماعية PPT",
          link: "/ppt/lect1.ppt",
        },
      ],
      word: [],
      others: [],
    },
    videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],
  },
  3: {
    title: "التنمية المستدامة",
    description: "التنمية المستدامة وأبعادها الاجتماعية والاقتصادية والبيئية",
    instructor: "3 استاذ ",
    resources: {
      pdfs: [
        { id: 1, title: "1 PDF", link: "/pdfs/lect.pdf" },
      ],
      ppts: [
        {
          id: 1,
          title: " 1 PPT",
          link: "/ppt/lect1.ppt",
        },
      ],
      word: [  {
        id: 1,
        title: "1 docx",
        link: "/docx/lecture.docx",
      },],
      others: [{ id: 1, title: "مقالات خاصة", link: "misc/quiz.zip" }],
    },
    videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],
  },
  4: {
    title: "سويولوجيا الربط الاجتماعي",
    description: "Explore lectures and lessons in Biology",
    instructor: "استاذ 2",
    resources: {
      pdfs: [
        { id: 1, title: "1 PDF", link: "/pdfs/lect.pdf" },
      ],
      ppts: [
        {
          id: 1,
          title: " 1 PPT",
          link: "/ppt/lect1.ppt",
        },
      ],
      word: [  {
        id: 1,
        title: "1 docx",
        link: "/docx/lecture.docx",
      },],
      others: [{ id: 1, title: "مقالات خاصة", link: "misc/quiz.zip" }],
    },
    videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],
  },
  5: {
    title: "سويولوجيا الربط الاجتماعي",
    description: "Explore lectures and lessons in Biology",
    instructor: "استاذ 2",
    resources: {
      pdfs: [
        { id: 1, title: "1 PDF", link: "/pdfs/lect.pdf" },
      ],
      ppts: [
        {
          id: 1,
          title: " 1 PPT",
          link: "/ppt/lect1.ppt",
        },
      ],
      word: [  {
        id: 1,
        title: "1 docx",
        link: "/docx/lecture.docx",
      },],
      others: [{ id: 1, title: "مقالات خاصة", link: "misc/quiz.zip" }],
    },
    videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],
  },
  7: {
    title: "علم الاجتماع وقضايا الوطن العربي",
      description: "",
      instructor: "استاذ 3",
    resources: {
      pdfs: [
        { id: 1, title: "1 PDF", link: "/pdfs/lect.pdf" },
      ],
      ppts: [
        {
          id: 1,
          title: " 1 PPT",
          link: "/ppt/lect1.ppt",
        },
      ],
      word: [  {
        id: 1,
        title: "1 docx",
        link: "/docx/lecture.docx",
      },],
      others: [{ id: 1, title: "مقالات خاصة", link: "misc/quiz.zip" }],
    },
    videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],
  },
  6: {
    title: "نظريات التنظيم",
    description: "Explore lectures and lessons in Computer Science",
    instructor: "استاذ 1",
    resources: {
      pdfs: [],
      ppts: [],
      word: [
        {
          id: 1,
          title: "نظريات التنظيم docx",
          link: "/docx/lecture.docx",
        },
      ],
      others: [],
    },
    videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],
  },
  8: {
    title: "تشريعات قانون العمل",
    description: "Explore lectures and lessons in Economics",
    instructor: "استاذ 4",
    resources: {
      pdfs: [],
      ppts: [],
      word: [
        {
          id: 1,
          title: "نظريات التنظيم docx",
          link: "/docx/lecture.docx",
        },
      ],
      others: [],
    },
    videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],
  },
  9: {
    title: "العمل الاجتماعي ",
      description: "Explore lectures and lessons in Engineering",
      instructor: "استاذ 2",
    resources: {
      pdfs: [],
      ppts: [],
      word: [
        {
          id: 1,
          title: "نظريات التنظيم docx",
          link: "/docx/lecture.docx",
        },
      ],
      others: [],
    },
    videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],
  },
  // Add more modules here
};

const LectureDetail = () => {
  const { id } = useParams();
  const module = modulesData[id];

  const renderResources = (resources) => (
    <div>
      <Tabs defaultActiveKey="pdfs">
        {Object.keys(resources).map((key) => (
          <TabPane tab={key.toUpperCase()} key={key}>
            <List
              grid={{ gutter: 16, column: 1 }}
              dataSource={resources[key]}
              renderItem={(item) => (
                <List.Item>
                  <Card>
                    <Button
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.title}
                    </Button>
                  </Card>
                </List.Item>
              )}
            />
          </TabPane>
        ))}
      </Tabs>
    </div>
  );

  const renderVideos = (videos) => (
    <List
      grid={{ gutter: 16, column: 1 }}
      dataSource={videos}
      renderItem={(video) => (
        <List.Item>
          <div className="video-container">
            <iframe
              width="100%"
              height="480"
              src={video}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Video"
            ></iframe>
          </div>
        </List.Item>
      )}
    />
  );

  return (
    <div className="lecture-detail-page">
      <Title>{module.title}</Title>
      <Title level={5}>{module.instructor}</Title>

      <Tabs defaultActiveKey="description">
        <TabPane tab="تفاصيل" key="description">
          <Paragraph>{module.description}</Paragraph>
        </TabPane>
        <TabPane tab="موارد " key="resources">
          {renderResources(module.resources)}
        </TabPane>
        <TabPane tab="فيديوهات" key="video">
          {renderVideos(module.videos)}
        </TabPane>
      </Tabs>
    </div>
  );
};

export default LectureDetail;
