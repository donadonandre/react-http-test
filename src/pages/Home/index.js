import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1>Página principal</h1>
            <Link to="/sobre">Sobre</Link>
        </div>
    )
}