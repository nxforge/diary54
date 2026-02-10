async function loadHomework() {
  const response = await fetch("https://raw.githubusercontent.com/zzzzzzzzzzzz-del/schedule.xml/refs/heads/main/schedule.xml");
  const xmlText = await response.text();

  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, "text/xml");

  const names = xmlDoc.getElementsByTagName("name");
  const homeworks = xmlDoc.getElementsByTagName("homework");

  const objectLessons = document.getElementsByClassName("lesson");
  const objectHomeworks = document.getElementsByClassName("homework");

  for (let i = 0; i < 6; i++) {
    objectLessons[i].innerHTML = names[i].textContent;
    objectHomeworks[i].innerHTML = homeworks[i].textContent;
  }
}

loadHomework();

setInterval(() => {
  loadHomework();
}, 10000);
