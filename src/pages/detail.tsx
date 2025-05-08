import { useAnimeDetail } from "@/hooks/use-anime-detail";
import { Card, Typography, Row, Col, Tag, Image, Skeleton, Space } from "antd";

const { Title, Text, Paragraph } = Typography;

const Detail = () => {
  const { data: anime, isLoading } = useAnimeDetail();

  if (isLoading || !anime) return <Skeleton active />;

  return (
    <Card style={{ maxWidth: 900, margin: "0 auto" }}>
      <Row gutter={[24, 24]}>
        <Col xs={24} md={8}>
          <Image
            alt={anime.title}
            src={anime.images.jpg.image_url}
            width="100%"
            style={{ borderRadius: 8 }}
          />
        </Col>

        <Col xs={24} md={16}>
          <Title level={3}>{anime.title}</Title>

          <Space size="middle" wrap>
            <Text>Type: <strong>{anime.type}</strong></Text>
            {anime.episodes && (
              <Text>Episodes: <strong>{anime.episodes}</strong></Text>
            )}
            <Text>Members: <strong>{anime.members.toLocaleString()}</strong></Text>
            {anime.rank && (
              <Text>Ranked: <strong>#{anime.rank}</strong></Text>
            )}
            {anime.popularity && (
              <Text>Popularity: <strong>#{anime.popularity}</strong></Text>
            )}
            {anime.users && (
              <Text>Users: <strong>{anime.users.toLocaleString()}</strong></Text>
            )}
          </Space>


          {anime.status && (
            <div style={{ marginTop: 12 }}>
              <Text>Status: <strong>{anime.status}</strong></Text>
            </div>
          )}

          {anime.duration && (
            <div>
              <Text>Duration: <strong>{anime.duration}</strong></Text>
            </div>
          )}

          {anime.season && (
            <div>
              <Text>Season: <strong>{anime.season}</strong></Text>
            </div>
          )}

          {anime.genres && anime.genres.length > 0 && (
            <div style={{ marginTop: 12 }}>
              <Text>Genres: </Text>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 2, marginTop: 8 }}>
                {anime.genres.map((genre) => (
                  <Tag key={genre.mal_id}>{genre.name}</Tag>
                ))}
              </div>
            </div>
          )}

          {anime.synopsis && (
            <div style={{ marginTop: 24 }}>
              <Title level={4}>Synopsis</Title>
              <Paragraph>{anime.synopsis}</Paragraph>
            </div>
          )}

          {anime.trailer?.embed_url && (
            <div style={{ marginTop: 24 }}>
              <Title level={4}>Trailer</Title>
              <iframe
                width="100%"
                height="315"
                src={`${anime.trailer.embed_url.replace('autoplay=1', 'autoplay=0')}`}
                title={`Trailer of ${anime.title}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </Col>
      </Row>
    </Card>
  );
};

export default Detail;
