import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MdShoppingBasket } from 'react-icons/md';

import { connect } from 'react-redux';
import { Container, Cart } from './styles';

import logo from '../../assets/images/logo.svg';

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>My cart</strong>
          <span>{cartSize} items</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}

Header.propTypes = {
  cartSize: PropTypes.number.isRequired,
};

export default connect((state) => ({
  cartSize: state.cart.length,
}))(Header);
