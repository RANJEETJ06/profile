import "./portfoliolist.scss";

export default function Portfoliolist({id,title,active,setSelected,link}) {
    return (
    <li 
    className={ active ? "portfolioList active":"portfolioList"}
    onClick={()=>setSelected(id)}>
        <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
    </li>
    )
}
