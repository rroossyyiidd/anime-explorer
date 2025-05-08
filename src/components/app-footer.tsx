import { Layout, Row, Col, Typography } from 'antd';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

const { Footer } = Layout;
const { Text, Link } = Typography;

const AppFooter = () => {
  return (
    <Footer style={{ background: '#8B5CF6', color: 'white', padding: '20px 0' }}>
      <Row justify="center" align="middle">
        <Col span={24} style={{ textAlign: 'center' }}>
          <Text style={{ fontSize: '14px', color: 'white' }}>
            <span>Powered by <Link href="https://github.com/your-profile" target="_blank" style={{ color: 'white' }}>Muhammad Rosyid</Link></span>
          </Text>
          <div style={{ marginTop: '10px' }}>
            <Link href="https://github.com/rroossyyiidd" target="_blank">
              <GithubOutlined style={{ fontSize: '18px', color: 'white', margin: '0 10px' }} />
            </Link>
            <Link href="https://linkedin.com/in/rroossyyiidd" target="_blank">
              <LinkedinOutlined style={{ fontSize: '18px', color: 'white', margin: '0 10px' }} />
            </Link>
          </div>
        </Col>
      </Row>
    </Footer>
  );
};

export default AppFooter;
