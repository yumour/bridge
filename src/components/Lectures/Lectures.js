import React from "react";
import { Tabs, List, Card,Typography } from "antd";
import { Link } from "react-router-dom";
import "../../assets/styles/Lectures.css"; // Import custom CSS
const { Title } = Typography;

const { TabPane } = Tabs;
const { Meta } = Card;

const modulesData = {
  licence2: [
    {
      id: 1,
      title: "منهجية البحث الاجتماعي",
      description:
        "مناهج البحث الاجتماعي تهدف إلى اكتشاف العوامل والأسباب التي ينجم عنها السلوك الاجتماعي، الأمر الذي يؤدّي إلى اكتشاف القوانين العلميّة التي تفسر لنا النواحي المختلفة للاستجابات الاجتماعية، ممّا يساعد على فهم السلوك الاجتماعي للفرد وللجماعة والتنبّؤ به، ويترتب البحث الاجتماعي على عدّة طرق ممنهجة من البحث الوصفي، والبحث التجريبي، والبحث التاريخي.",
      instructor: "استاذ 1",
    },
    {
      id: 2,
      title: "المشكلات الاجتماعية",
      description: "تعاني الكثير من المجتمعات من بعض المشاكل كالفقر والعنف وكذلك التنمر وغيرها من المشاكل التي تؤثر في كيان المجتمع وتهدد استقرار الدولة، وعلى هذا سوف نعرض مشكلات اجتماعية أسبابها وحلولها مع عرض أنواعها بصورة شاملة ",
      instructor: "استاذ 2",
    },
    // Add more Licence 2 modules here
  ],
  licence3: [
    {
      id: 3,
      title: "التنمية المستدامة",
      description: "التنمية المستدامة وأبعادها الاجتماعية والاقتصادية والبيئية",
      instructor: "3 استاذ ",
    },
    {
      id: 4,
      title: "سويولوجيا الربط الاجتماعي",
      description: "Explore lectures and lessons in Biology",
      instructor: "استاذ 2",
    },
    {
      id: 5,
      title: "التحليل الاجتماعي لقضايا حقوق الانسان",
      description: "Explore lectures and lessons in Biology",
      instructor: "استاذ 5",
    },

    // Add more Licence 3 modules here
  ],
  master1: [
    {
      id: 6,
      title: "نظريات التنظيم",
      description: "Explore lectures and lessons in Computer Science",
      instructor: "استاذ 1",
    },
    {
      id: 7,
      title: "علم الاجتماع وقضايا الوطن العربي",
      description: "Explore lectures and lessons in Engineering",
      instructor: "استاذ 3",
    },
    // Add more Master 1 modules here
  ],
  master2: [
    {
      id: 8,
      title: "تشريعات قانون العمل",
      description: "Explore lectures and lessons in Economics",
      instructor: "استاذ 4",
    },
    {
      id: 9,
      title: "العمل الاجتماعي ",
      description: "Explore lectures and lessons in Engineering",
      instructor: "استاذ 2",
    },
    // Add more Master 2 modules here
  ],
};

const Lectures = () => {
  const renderModules = (modules) => (
    <List
      grid={{ gutter: 16, column: 1 }}
      dataSource={modules}
      renderItem={(item) => (
        <List.Item>
          <Link to={`/module/${item.id}`}>
            <Card hoverable>
              <Meta
                title={item.title}
                description={
                  <div>
                    <p>
                      <strong>من اعداد :</strong> {item.instructor}
                    </p>
                    <p>{item.description}</p>
                  </div>
                }
              />
            </Card>
          </Link>
        </List.Item>
      )}
    />
  );

  return (
    <div className="lectures-and-lessons-page">
      <Title level={1 } >المواد</Title>
      
      <Tabs defaultActiveKey="licence2">
        <TabPane tab="Licence 2" key="licence2">
          {renderModules(modulesData.licence2)}
        </TabPane>
        <TabPane tab="Licence 3" key="licence3">
          {renderModules(modulesData.licence3)}
        </TabPane>
        <TabPane tab="Master 1" key="master1">
          {renderModules(modulesData.master1)}
        </TabPane>
        <TabPane tab="Master 2" key="master2">
          {renderModules(modulesData.master2)}
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Lectures;
