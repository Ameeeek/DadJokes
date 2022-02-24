import {Link} from 'react-router-dom'
export default function Header() {
  return (
    <div className="flex justify-between ">
        <h1 className="font-main text-4xl hp:text-xl hp:text-hitam font-bold  text-hijau ">Dad joking hazard</h1>
        <ul>
            <li className="flex ">
                <h3 className="font-main mx-3 hp:mx-0 text-hijau text-2xl"><Link to="/">Main</Link></h3>
                <h3 className="font-main mx-3 hp:mx-0 text-hijau text-2xl"><Link to="/about">about</Link></h3>
                <h3 className="font-main mx-3 hp:mx-0 hp:hidden text-hijau text-2xl"><a href="https://github.com/Ameeeek/DadJokes">Github</a></h3>
            </li>
        </ul>
    </div>
  )
}