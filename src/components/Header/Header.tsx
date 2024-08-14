// src/components/Header.tsx
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo"><img src="public\on_platform_logo_dark 1.svg" alt="logo"/> </div>
      <input type="text" className="search" placeholder="Buscar..." />
      <div className="profile">
        <img src="public\perfil react (1).png" alt="Perfil" />
      </div>
    </header>
  );
};

export default Header;
