import React from 'react';
import './styles.css';
import { IProduct } from '/src/entities/IProduct.ts';
import emptyImage from '../../images/empty.jpg';
import { Box, Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface IModalWindow {
  isOpen: boolean;
  onClose: () => void;
  product: IProduct | null;
}

const ModalWindow: React.FC<IModalWindow> = ({ isOpen, onClose, product }) => {
  if (!isOpen || !product) return null;
  return (
    // Выбрала Modal, потому что как-то логичнее. Dialog особо не изучала даже...
    <Modal open={isOpen} onClose={onClose} className="modal">
      <Box // В условии размер окна фикс., но это несуразно на вид, если у товара нет описания, поэтому я сделала окно с адаптивной высотой
        className="modal-content"
        sx={{
          position: 'absolute' as 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          overflowY: 'auto',
          maxHeight: '90vh',
        }}
      >
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <div className="modal-header">
          <h3>{product.name}</h3>
        </div>
        <div className="modal-body">
          <p>{product.category}</p>
          <img
            src={product.image || emptyImage}
            alt={product.name}
            className="modal-image"
          />
          <p>{product.description}</p>
          <br />
          <h1>
            В наличии {product.quantity} {product.unit}
          </h1>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalWindow;
