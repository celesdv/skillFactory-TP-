const urlUsers = "https://jsonplaceholder.typicode.com/users";

fetch(urlUsers)
  .then((response) => response.json())
  .then((data) =>  userData(data));

const userData = (data) => {
    let user = data;
    let body = ``;
    user.forEach(({ id, name, email, address, phone, company }) => {
      body += `
        <tr>
          <td>${id}</td>
          <td>${name}</td>
          <td>${email}</td>
          <td>${address.city}</td>
          <td>${phone}</td>
          <td>${company.name}</td>
        </tr>`;
    });

    document.getElementById("fetch-users").innerHTML = body;
};