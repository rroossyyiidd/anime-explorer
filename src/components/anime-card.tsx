import { Card, Rate, Tag } from 'antd';
import type { TAnime } from '@/entities/type';
import { Link } from 'react-router-dom';

const { Meta } = Card;

type Props = {
  anime: TAnime;
};

const AnimeCard = ({ anime }: Props) => {
  return (
    <Link to={`/detail/${anime.mal_id}`}>
      <Card
        hoverable
        cover={
          <img
            alt={anime.title}
            src={anime.images.webp?.image_url ? anime.images.webp.image_url : anime.images.jpg?.image_url}
            style={{ height: 250, objectFit: 'cover' }}
          />
        }
        style={{ width: '100%' }}
      >
        <Meta title={anime.title} />
        <div style={{ marginTop: 8 }}>
          <Tag color="blue">{anime.type}</Tag>
          {anime.episodes !== null && (
            <Tag color="purple">{anime.episodes} eps</Tag>
          )}
        </div>
        <div style={{ marginTop: 8, fontSize: 12 }}>
          <Rate disabled allowHalf defaultValue={anime.score ? anime.score / 2 : 0} />
          <div>{anime.members.toLocaleString()} members</div>
        </div>
      </Card>
    </Link>
  );
};

export default AnimeCard;
