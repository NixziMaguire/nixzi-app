import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <table className="d">
        <tbody>
            <tr>
                <th><Link to='/'>Home</Link></th>
                <th><Link to='/joanna'>Joanna</Link></th>
                <th><Link to='/tictactoe'>TicTacToe</Link></th>
                <th><Link to='/1'>1</Link></th>
                <th><Link to='/2'>2</Link></th>
                <th><Link to='/3'>3</Link></th>
                <th><Link to='/4'>4</Link></th>
                <th><Link to='/5'>5</Link></th>
            </tr>
        </tbody>
    </table>
  </header>
)

export default Header
