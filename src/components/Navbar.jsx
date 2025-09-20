import { Link } from 'react-router-dom';
export default function Navbar(){
    return (
        <>
            <nav className="navbar mx-auto p-5 flex justify-between items-center bg-gray-800 text-white text-lg">
                <Link to='/' className="text-gray-900 dark:text-white font-bold text-xl">MY PORTFOLIO</Link>
                <div className="links flex gap-5 mr-10 font-bold text-xl">
                    <Link to="/">About</Link>
                    <Link to="/skills">Skills</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </nav>
        </>
    );
}