import {Link} from 'react-router-dom'
export default function Header() {
  return (
    <div className="flex justify-between">
        <h1 className="font-main text-4xl  font-bold  text-hijau ">Dad joking hazard</h1>
        <ul>
            <li className="flex ">
                <h3 className="font-main mx-3 text-hijau text-2xl"><Link to="/about">about</Link></h3>
                <h3 className="font-main mx-3 text-hijau text-2xl"><a href="#">Github</a></h3>
            </li>
        </ul>
    </div>
  )
}