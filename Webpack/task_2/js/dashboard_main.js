import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';
import Logo from '../assets/holberton-logo.jpg';

$(document).ready(function () {
  const logo = $('<div id="logo"></div>');
  logo.css({
    backgroundImage: `url(${Logo})`,
    backgroundSize: '200px 200px',
    width: '200px',
    height: '200px'
  });
  $('body').append(logo);

  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="startButton">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  let count = 0;

  function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
  }

  $('#startButton').on('click', _.debounce(updateCounter, 500));
});
