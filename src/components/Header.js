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
            </tr>
        </tbody>
    </table>
  </header>
)

export default Header
