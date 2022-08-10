const urlApi = `https://rickandmortyapi.com/api/character/`;

const getData = (apiURL) => {
  return fetch(apiURL)
        .then(response => response.json())
        .then(json => {
            printData(json),
            printPagination(json.info)
          })
        .catch(error => {console.error('Error: ', error)})
}

const printData = (data) => {
  let body = ``;
  data.results.forEach(c => {
    body += `
        <div class="col">
            <div class="card text-center m-3">            
                <img src="${c.image}" alt="${c.name}" class="card-img-top">
                <h5 class="card-header text-bg-dark">${c.name}</h5>
                <div class="card-body">
                    <ul class="list-unstyled">
                        <li>Species: ${c.species}</li>
                        <li>Status: ${c.status}</li>
                        <li>Gender: ${c.gender}</li>
                        <li>Origin: ${c.origin.name}</li>
                        <li>Location: ${c.location.name}</li>
                    </ul>
                </div>
            </div>             
        </div>`;
  });
  document.getElementById('fetch-characters').innerHTML = body
}

const printPagination = (data) => {
    let body = `<li class="page-item"><span class="page-link" onclick="getData('${data.prev}')">Previous</span></li>`
    body += `<li class="page-item"><span class="page-link" onclick="getData('${data.next}')"> Next</span></li>`
    document.getElementById('pagination').innerHTML = body;
}

getData(urlApi);