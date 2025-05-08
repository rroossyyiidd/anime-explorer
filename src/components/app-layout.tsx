import { Layout, Typography, Button } from 'antd';
import type { ReactNode } from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import AppFooter from '@/components/app-footer';

const { Header, Content } = Layout;

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const showBackButton = location.pathname !== '/';

  return (
    <Layout>
      <Header
        style={{
          backgroundColor: '#8B5CF6',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          paddingInline: 24,
          gap: 16,
        }}
      >
        {showBackButton && (
          <Button
            type="link"
            icon={<ArrowLeftOutlined style={{ fontWeight: 'bold' }} />}
            onClick={() => navigate(-1)}
            style={{ color: 'white' }}
          />
        )}
        <Typography.Text
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: 'white',
            flex: 1,
            textAlign: showBackButton ? 'left' : 'center',
          }}
        >
          Anime Explorer
        </Typography.Text>
      </Header>
      <Content style={{ padding: '24px 16px 4px', minHeight: '100vh' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
          {children}
        </div>
      </Content>
      <AppFooter />
    </Layout>
  );
};

export default AppLayout;
