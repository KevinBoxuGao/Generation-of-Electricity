import 'bootstrap';
import $ from 'jquery';

import './index.scss';

$(document).ready(function() {
  //header button
  $('.closeHeaderButton').click(function() {
    $('#intro').slideUp(1000);
  });
});
