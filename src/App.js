import PropTypes from "prop-types";
import './App.css';
 
function checknext() {
  if (document.querySelector(".last:checked")) {
    document.querySelector(".first").checked = true;
  } else {
    document.querySelector(".nav:checked").nextElementSibling.checked = true;
  }
}

setInterval(function () {
  checknext();
}, 5000);


function App({ post, messageOne, messageTwo, messageThree, messageFour, messageFive, messageSix, messageSeven, messageEight,}) {
  return (
<div className="App" >
<input class="n1 nav first" name="nav" type="radio" checked />
<input class="n2 nav" name="nav" type="radio"  />
<input class="n3 nav" name="nav" type="radio"  />
<input class="n4 nav" name="nav" type="radio"  />
<input class="n5 nav" name="nav" type="radio"  />
<input class="n6 nav" name="nav" type="radio"  />
<input class="n7 nav" name="nav" type="radio"  />
<input class="n8 nav last" name="nav" type="radio"  />

<section class="s1">{messageOne}</section>
<section class="s2">{messageTwo}</section>
<section class="s3">{messageThree}</section>
<section class="s4">{messageFour}</section>
<section class="s5">{messageFive}</section>
<section class="s6">{messageSix}</section>
<section class="s7">{messageSeven}</section>
<section class="s8">{messageEight}</section>
    </div>
  );
}

App.propTypes = {
  post: PropTypes.string,
  messageOne: PropTypes.string,
  messageTwo: PropTypes.string,
  messageThree: PropTypes.string,
  messageFour: PropTypes.string,
  messageFive: PropTypes.string,
  messageSix: PropTypes.string,
  messageSeven: PropTypes.string,
  messageEight: PropTypes.string
}

App.defaultProps = {
  post: '',
  messageOne: 'your welcome message',
  messageTwo: 'an introduction',
  messageThree: 'some more detail',
  messageFour: 'a nice anecdote',
  messageFive: 'personal message',
  messageSix: 'from personal other',
  messageSeven: 'closing statement',
  messageEight: 'thanks',
}

export default App;
