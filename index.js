function addingEventListener() {
  const button = document.getElementById('button');

  function clickAlert() {
      alert('I was clicked!');
  }

  button.addEventListener('click', clickAlert);
}

// Call the function to activate the listener
addingEventListener();
