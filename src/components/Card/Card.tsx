import './styles.css';
import { IProduct } from '/src/entities/IProduct.ts';
import emptyImage from '../../images/empty.jpg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Tooltip from '@mui/material/Tooltip';

const Product = ({
  name,
  description,
  category,
  quantity,
  unit,
  image,
  onClick,
}: IProduct & { onClick: () => void }) => {
  return (
    <Tooltip title={description}>
      <Card className="card" onClick={onClick}>
        <CardContent className="card-content">
          <h3 className="card-title">{name}</h3>
          <p className="card-category">{category}</p>
          <CardMedia className="card-image" image={image || emptyImage} />
          <p className="card-quantity">
            {quantity} {unit}
          </p>
          <p className="card-description">{description}</p>
        </CardContent>
      </Card>
    </Tooltip>
  );
};

export default Product;
