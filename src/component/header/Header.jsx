function Header({nama}) {
  return (
    <nav>
        <h1>{nama}</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}

export default Header;