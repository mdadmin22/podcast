import './MenuBar.css';

type Props = {
    id: number;
    MenuName: string;
    userName: string;
    email: string;
    MenuimageUrl: string;
  };
  
  function MenuBar(props: Props) {
    const { id, MenuName, userName, email, MenuimageUrl } = props;
    return (
      <li key={id}>
        <h2>{MenuName}</h2>
        <p>ID: {id}</p>
        <div>
            <img src={MenuimageUrl} alt="MenuImagen" style={{ width: '100px', height: 'auto' }} /> 
        </div>
        <p>Usuario: {email}</p>
        <p>Perfil de: {userName}</p>
        
      </li>
    );
  }
  
export default MenuBar;