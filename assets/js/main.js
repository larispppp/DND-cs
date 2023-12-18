var btns = document.getElementsByClassName("a");

function onload() {
  var inv = document.getElementById("inv");
  var chSh = document.getElementById("chSh");
  var spell = document.getElementById("spell");
  var appe = document.getElementById("appe");
  var blank = document.getElementById("blank");

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
}

function showCharacterSheet() {
  inv.style.display = "none";
  chSh.style.display = "flex";
  spell.style.display = "none";
  appe.style.display = "none";
  blank.style.display = "none";
}

function showInventory() {
  inv.style.display = "flex";
  chSh.style.display = "none";
  spell.style.display = "none";
  appe.style.display = "none";
  blank.style.display = "none";
}

function showSpells() {
  inv.style.display = "none";
  chSh.style.display = "none";
  spell.style.display = "flex";
  appe.style.display = "none";
  blank.style.display = "none";
}

function showAppearance() {
  inv.style.display = "none";
  chSh.style.display = "none";
  spell.style.display = "none";
  appe.style.display = "flex";
  blank.style.display = "none";
}

function showBlank() {
  inv.style.display = "none";
  chSh.style.display = "none";
  spell.style.display = "none";
  appe.style.display = "none";
  blank.style.display = "flex";
}
