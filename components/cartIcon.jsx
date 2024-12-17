'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation'; 
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useCartStore from '@/app/store/store';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function CartIcon() {
  const router = useRouter();
  const { cart } = useCartStore();
  const totalItems = cart.reduce((total, item) => total + item.count, 0);

  const handleClick = () => {
    router.push('/cart');
  };

  return (
    <IconButton aria-label="cart" onClick={handleClick} sx={{color:'skyblue'}} >
      <StyledBadge badgeContent={totalItems} color="error">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
