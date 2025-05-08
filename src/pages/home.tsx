import { Input, Row, Col, Pagination, Spin, Empty } from 'antd';
import { useAnimeList } from '@/hooks/use-anime-list';
import AnimeCard from '@/components/anime-card';

const { Search } = Input;

const Home = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    state: { search, page },
    handler: { handlePageChange, handleSearchChange },
  } = useAnimeList();

  const animeList = data?.data ?? [];
  const totalItems = data?.pagination.items.total ?? 0;

  if (isError) {
    return <div>Error: {String(error)}</div>;
  }

  return (
    <>
      <Search
        placeholder="Search anime..."
        enterButton
        allowClear
        size="large"
        style={{ marginBottom: 24 }}
        value={search}
        onChange={(e) => handleSearchChange(e.target.value)}
      />

      {isLoading ? (
        <div style={{ textAlign: 'center', padding: 50 }}>
          <Spin size="large" />
        </div>
      ) : animeList.length === 0 ? (
        <Empty description="No anime found" />
      ) : (
        <>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Row
              gutter={[16, 16]}
              justify="center"
              style={{ maxWidth: 1200 }}
            >
              {animeList.map((anime) => (
                <Col key={anime.mal_id} xs={12} sm={8} md={6} lg={4}>
                  <div style={{ maxWidth: 225, margin: '0 auto' }}>
                    <AnimeCard anime={anime} />
                  </div>
                </Col>
              ))}
            </Row>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 32 }}>
            <Pagination
              current={page}
              pageSize={25}
              total={totalItems}
              onChange={(newPage) => handlePageChange(newPage)}
              showSizeChanger={false}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Home;
