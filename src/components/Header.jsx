import { useState } from "react";
import { Link } from "react-router";

function Header() {
    // const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="flex justify-between px-4 py-2 bg-white shadow">
            <h1>Brandku</h1>
            
            <button 
                className="md:hidden text-2xl"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? "x" : "≡"}
            </button>

            <div className={` ${isOpen ? 'flex' : 'hidden'} flex gap-5`}>
            {/* <p className="text-gray-700 hover:text-gray-900" onClick={() => navigate("/")} >Home</p>
            <p className="text-gray-700 hover:text-gray-900" onClick={() => navigate("/about")} >About</p>
            <p className="text-gray-700 hover:text-gray-900" onClick={() => navigate("/pricing")} >Pricing</p> */}
                <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
                <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
                <Link to="/pricing" className="text-gray-700 hover:text-gray-900">Pricing</Link>
            </div>
        </header>
    );
}

export default Header;