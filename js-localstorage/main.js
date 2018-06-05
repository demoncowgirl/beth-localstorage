


// wait for page to load, then add button stuff
document.onreadystatechange = function() {
  if (document.readyState == "interactive"){
    // Load some stuff here
    add.onclick = saveFoot;
    //show everything that has been saved
    loadSavedFeet();
  }
  function saveFoot() {
    // saves the contents of the form
    //to local storage

    var  name = document.getElementById('name');
    var favoriteFoot = document.getElementById('favoriteFoot');

    var list =JSON.parse(localStoarge.getItem('list'));

    if (list == null){
      list = {};
    }

    // var list ={}; // empty object
    list[name.value] = favoriteFoot.value;

    //textual representation (a string), not an object
    // must be parsed back into object
    localStorage.setItem('list',JSON.stringify(list));

    name.value = '';
    favoriteFoot = '';
    // add new
    loadSavedFeet();

    }

  function loadSavedFeet() {
    // Pull from localStorage// and update the saved Feet list on the page
    var list =JSON.parse(localStoarge.getItem('list'));

    if (list == null){
      list = {
        'Default: ': 'No feet have been saved.'
      };
    }

      var savedFeet = document.getElementById('savedFeet');
      savedFeet.innerHTML = "";

      // everything in list is assigned a key
      for (var key in list){
        // iterate through list
        // list is an object
        if (list.hasOwnProperty(key)){
          console.log(key);
          // for each key found, an empty node list item is created
          var node = document.createElement('li');
          // contents are being created for node created above
          var textnode = document.createTextNode(key + ' - ' + list[key]);
          // associates textnode with empty node created
          node.appendChild(textnode);
          //applies list item created
          savedfeet.appendChild(node);
        }
      }
    console.log(savedFeet);    
}
      // don't forget to use JSON parst to read back 'list' from localStorage
