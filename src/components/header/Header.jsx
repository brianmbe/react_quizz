function Header({ title }) {
  return (
    <header className="app-header">
      <img src="logo512.png" alt="React logo" />
      <h1 style={{ textDecoration: "underline" }}>{title}</h1>
    </header>
  );
}

export default Header;
