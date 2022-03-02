const loadData = () => {
  const parent = document.getElementById('parent-phone');
  parent.innerHTML = '';
  const inputFieldValue = document.getElementById('input-field').value;
  if (inputFieldValue == '') {
    const errorMsg = document.getElementById('error-msg')
    const div = document.createElement('div')
    div.innerHTML = `
      <div class="alert alert-danger" role="alert">
          This is a danger alert—check it out!
      </div>
    `
  errorMsg.appendChild(div)
  } else {
    const url = `
    https://openapi.programming-hero.com/api/phones?search=${inputFieldValue}
  `
    fetch(url)
      .then(response => response.json())
      .then(data => displayPhone(data.data))
  }
};
const displayPhone = (phones) => {
  for (const phone of phones) {
    const parent = document.getElementById('parent-phone')
    const div = document.createElement('div')
    div.innerHTML = `
      <div class="col">
        <div class="card border-0 h-100 shadow-lg p-2 rounded">
          <img class="mx-auto mt-3 mb-4" id="image-size" src="${phone.image}" class="card-img-top" alt="...">
          <div class="card-body">
          <h3 class="card-title">${phone.phone_name}</h3>
          <h6 id="brand-name" class="card-title text-bold">Brand: ${phone.brand}</h6>
            <p class="card-text"></p>
          </div>
          <div>
            <button class="btn btn-warning my-2 mx-3 text-bold">Details</button>
          </div>
        </div>
      </div>
    `
    parent.appendChild(div)

  }
}