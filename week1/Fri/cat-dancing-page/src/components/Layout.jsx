function Layout({ children }) {
  return (
    <div className="layout">
      <header className="header">
        <h1>🐱 댄싱 캣</h1>
        <p>고양이를 클릭하거나 버튼으로 춤을 제어해 보세요!</p>
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <small>Made with React + Vite</small>
      </footer>
    </div>
  )
}

export default Layout
