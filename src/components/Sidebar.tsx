import { Link } from 'react-router-dom';


const menuItems = [
    { titulo: "Inicio", path: "/" },
    { titulo: "Mercados", path: "/mercados" },
    { titulo: "Noticias", path: "/noticias" },
    { titulo: "Análisis", path: "/analisis" },
    { titulo: "Solicitud", path: "/contacto" }
];


const Sidebar  = () => {
    return (
        <>
            <nav className="sidebar p-3 vh-100">
                <ul className="nav flex-column">
                    {menuItems.map((item, index) => (
                        <li className="nav-item" key={index}>
                            <Link className="nav-link" to={item.path}>
                                {item.titulo}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Sidebar;