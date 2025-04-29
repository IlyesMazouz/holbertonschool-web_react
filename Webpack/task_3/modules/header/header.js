import $ from 'jquery';
import '../header/header.css';
import Logo from '../../assets/holberton-logo.jpg';

console.log('Init header');

$(document).ready(function () {
  const logo = $('<div id="logo"></div>');
  logo.css({
    backgroundImage: `url(${Logo})`,
    backgroundSize: '200px 200px',
    width: '200px',
    height: '200px'
  });

  $('body').append(logo);
  $('body').append('<h1>Holberton Dashboard</h1>');
});
