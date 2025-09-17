import { Test } from "./Test";

const Hello = ({ name, data }) => {
    return (
        <div>
            <h1>Witaj w aplikacji książkowej {name}</h1>
            <Test filteredData={data} />
        </div>
    )
}

Hello.defaultProps = {
    name: 'Nieznajomy'
}

export default Hello;