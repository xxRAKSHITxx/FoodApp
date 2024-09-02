import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h1>FoodApp</h1>
        </div>
        <div className="footer-links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/orders">Orders</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAYFBMVEU7V53///81U5vv8vhOZqRRaabN0uP29/onSpc0UZt6irmYo8dCXaG+xduBkbzm6fJrfbG4wNijrs0cRJYRPZFXbqlJYqONm8La3upec6wgRpV0hrevudScqMnGzeDS2OelhVJeAAADWUlEQVR4nO3cbXOiMBiF4RhUCK+CCghY//+/XNvt7ra7sgE0PAfm3F860xlmchVETVLUJmrUKmqijfKP0qN4VUdf5SfpQbyqU65CIz2IV2VCtdPSg3hVeic9AsYYY4wxxhhjjA1Km+Bnv34GQfP5C7OsmYqgadS5ra5Fl3/WdV1RXKMqDdvDuVSmOS5iIkkHJ9MWb3Xmeb6/+Z3/kXcvy7L6ts8v0gO1Z04mTbwviN5S9IvNHM/5EMgCMEYfbgMl6Jg75W04BRqjza4YeoGhY7QOR1xh2BgTX72RFliMKbtxlxgwxpTJaAoqRqt8ggUUY7opFkxMc51kgcQE7TQLIkar0fdkXEwz5UYGignC8W8wqBgd11MteJggmnxi4DCmHPvpEhjzzIlBw2g16tsYNiYIs/VgdPGEBQxjdvsVYdpnrjIwjI6esWxSqPnZePj3GP99TvZ7Xoh0ZvTAl4yXFFXYHv6plAZ8zRyGvGSy6lIqbR4kPf5v6XCApbtDkC6nvkxlt6TNEiTv2d8yq0B6jEOLrRNMiVrKeVGl7VOmv5wt47q0fcncL2fLuC5td+ZiMRY7xq8Wc5UpvbVMmGXLecnYMfVhRZjbZU2Y84JuADbMgu7MxMBGDGrEoEYMasSgRgxqxKBGDGrECPdwaeWeDkobZhv0HWyE/uvkEvaV2qaaqt5D39vOTtHxM3sw/pffzj8RFU/eG2dJYIpQO8PczivCJOXstwB3mG5uiktMMf/r3x0mmn/t1hnGS1eEkViJcoapBRZvnGEkPoU6wySzUxxicoElQmeYQmBXjSuML/GITFcYibcZZ5hMYo+AK0w9/xcAd5hbLDAH4Aqzl9i84QqTS+x3dITxJd5mnGFEdqI6wnjtijCZyO4tV5j5p2bcYWqRmWZHmDeRneiOMJ3MY+Xj/PMhSw+yDbn3QE9gnukDE16jnmyPmcmKviOji9Ay1J+nk/1VE9sWm+Km71i8JbUFLgP2RgxqxKBGDGrEoEYMasSgRgxqxKBGDGrEoEYMasSgRgxqxKBGDGrEoEYMasSgRgxqxKBGDGrEoEYMasSgRgxqxKBGDGrEoEYMasSgRgxqxKBGzKhm/GM4xuidmvEJSI4xJlTJ6WWDteUYc0qUP99/czrGBP4PH6dI4aq3PEcAAAAASUVORK5CYII=" alt="Facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKss4Zzlw84Eyt_-MbZZoxIrZPUdE38MefzQ&s" alt="Twitter" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwH--J-ZMUg8puNfUxE6YXQi3yVHuAORDxow&s" alt="Instagram" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 FoodApp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
