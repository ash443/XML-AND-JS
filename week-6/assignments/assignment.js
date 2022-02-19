const htmlToElement = (html) => {
    const template = document.createElement("template");
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
  };
  
  const loadData = (path, callback) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ({ target }) => {
      if (target.readyState == 4 && target.status == 200) {
        callback(target.responseXML);
      }
    };
    xhttp.open("GET", path, true);
    xhttp.send();
  };
  
  const generateTableRow = (item) => {

    const id = Array.from(item.getElementsByTagName(`id`))[0].textContent;
 /*   let name = Array.from(item.getElementsByTagName(`first_name`)).map(
      ({ textContent }) => textContent
    );

    name.push (Array.from(item.getElementsByTagName(`last_name`)).map(
      ({ textContent }) => textContent
    ));*/
    const fname = Array.from(item.getElementsByTagName(`first_name`))[0].textContent;
    const lname = Array.from(item.getElementsByTagName(`last_name`))[0].textContent;
    const email = Array.from(item.getElementsByTagName(`email`))[0].textContent;
    const gender = Array.from(item.getElementsByTagName(`gender`))[0].textContent;
    const ip = Array.from(item.getElementsByTagName(`ip_address`))[0].textContent;
    
    return `<tr>
      <td>${id}</td>
      <td>${fname} ${lname}</td>
      <td>${email}</td>
      <td>${gender}</td>
      <td>${ip}</td>
    </tr>`;
  };
  
  const renderTable = (xmlData) => {
    const table = document.getElementById("table-people");
  
    if (!table) {
      throw new Error("No table element found");
    }
  
    const nodes = Array.from(xmlData.documentElement.childNodes).filter(
      ({ nodeName }) => nodeName === `persons`
    );
  
    nodes.map((studentNode) =>
      table.appendChild(htmlToElement(generateTableRow(studentNode)))
    );
  };
  
  loadData(`  http://127.0.0.1:8080/people.xml`, renderTable);
  
  const onReset = () => {
    window.location.replace(window.location.pathname);
  };