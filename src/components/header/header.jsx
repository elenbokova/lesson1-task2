import logo from "/src/assets/logomain.svg";
import PropTypes from "prop-types";
import styles from "./header.module.css";

function Header({ title }) {
  return (
    <header className={styles.header}>
      <img src={logo} alt="/" width="200px" />
      <p>{title}</p>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
