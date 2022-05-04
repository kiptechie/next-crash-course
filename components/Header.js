import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Kiptechie</span> News
      </h1>
      <p className={headerStyles.description}>
        Keep up with the latest kiptechie news
      </p>
    </div>
  );
};

export default Header;
