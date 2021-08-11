import Button from "./Button"
const Header = ({ title ,onAdd,showAdd}) => {

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={showAdd? 'rgb(255, 70, 70)':'green'} text = {showAdd? 'close':'add'} onClick ={onAdd}/>
        </header>
    )
}


Header.defaultProps ={
    title: 'Task Tracker',
}
export default Header
