import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function NavBAr(){
    return (
    <nav className="nav">
        <Link to = "/" className="site-tittle">
            AquaSoft 
        </Link>
        <ul>
            <CustomLink to="/projects"> Projects </CustomLink>
            <CustomLink to="/candidates"> Candidates </CustomLink>
        </ul>
    </nav>
    )
}

function CustomLink ({to, children,  ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to}{...props}>
                {children}
            </Link>
        </li>
    )
}