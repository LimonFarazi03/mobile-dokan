const loadData = () => {
  const parent = document.getElementById('parent-phone');
  parent.innerHTML = '';
  const inputFieldValue = document.getElementById('input-field').value;
  if (inputFieldValue == '') {
    const errorMsg = document.getElementById('error-msg')
    const div = document.createElement('div')
    div.innerHTML = `
      <div class="text-center alert alert-danger" role="alert">
          input field fill up koren vai
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
    // console.log(phone);
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
            <button onclick="details('${phone.slug}')" class="btn btn-warning my-2 mx-3 text-bold">Details</button>
          </div>
        </div>
      </div>
    `
    parent.appendChild(div)

  }
}
const details = (info) =>{
  const url = `
    https://openapi.programming-hero.com/api/phone/${info}
  `
  fetch(url)
  .then(response => response.json())
  .then(data => setOnDisplay(data.data))
}

const setOnDisplay = onTop => {
  console.log(onTop);
  const displayPhSpec = document.getElementById('displayPhSpec').innerHTML = `
    <div>
      <h2 class="my-4" id="price-in-bangladesh">
        <center>Price in Bangladesh</center>
      </h2>
      <figure id="price-chat" class="mb-5 wp-block-table aligncenter mx-auto">
        <div class="border">
          <table>
            <tbody>
              <tr id="font-mobile">
                <td class="border"><strong>Official</strong>✭</td>
                <td class="mx-auto"><span class="fw-bold">৳34,999</span> 8/128 GB</td>
              </tr>
            </tbody>
          </table>
        </div>
      </figure>
      <div class="text-center my-5">
        <img height="200px" width="auto" src="./images/logo.png" alt="">
      </div>
      <table class="mx-auto">
        <tbody id="tab">
          <tr>
            <td><strong>First Release</strong></td>
            <td></td>
          </tr>
          <tr>
            <td><strong>Colors</strong></td>
            <td>Awesome Black, Awesome White, Awesome Violet, Awesome Blue</td>
          </tr>
          <tr>
            <th>&nbsp;
              Connectivity</th>
            <th></th>
          </tr>
          <tr>
            <td>Network</td>
            <td>2G, 3G, 4G</td>
          </tr>
          <tr>
            <td>SIM</td>
            <td>Hybrid Dual Nano SIM</td>
          </tr>
          <tr>
            <td>WLAN</td>
            <td>✅&nbsp;dual-band, Wi-Fi direct, Wi-Fi hotspot</td>
          </tr>
          <tr>
            <td>Bluetooth</td>
            <td>✅ v5.0 – A2DP, LE</td>
          </tr>
          <tr>
            <td>GPS</td>
            <td>✅ A-GPS, GLONASS, BDS, Galileo</td>
          </tr>
          <tr>
            <td>Radio</td>
            <td>✅ FM</td>
          </tr>
          <tr>
            <td>USB</td>
            <td>v2.0</td>
          </tr>
          <tr>
            <td>OTG</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>USB Type-C</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>NFC</td>
            <td>✅ (market dependent)</td>
          </tr>
          <tr>
            <th>&nbsp;
              Body</th>
            <th></th>
          </tr>
          <tr>
            <td>Style</td>
            <td>Punch-hole</td>
          </tr>
          <tr>
            <td>Material</td>
            <td>Gorilla Glass 5 front, plastic body</td>
          </tr>
          <tr>
            <td>Water Resistance</td>
            <td>✅ IP67 dust/water resistant (up to 1m for 30 mins)</td>
          </tr>
          <tr>
            <td>Dimensions</td>
            <td>159.9 x 75.1 x 8.4 millimeters</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>189 grams</td>
          </tr>
          <tr>
            <th>&nbsp;
              Display</th>
            <th></th>
          </tr>
          <tr>
            <td>Size</td>
            <td>6.5 inches</td>
          </tr>
          <tr>
            <td>Resolution</td>
            <td>Full HD+ 1080 x 2400 pixels (405 ppi)</td>
          </tr>
          <tr>
            <td>Technology</td>
            <td>Super AMOLED Touchscreen</td>
          </tr>
          <tr>
            <td>Protection</td>
            <td>✅ Corning Gorilla Glass 5</td>
          </tr>
          <tr>
            <td>Features</td>
            <td>90Hz refresh rate, 800 nits (max)</td>
          </tr>
          <tr>
            <th>&nbsp;
              Back Camera</th>
            <th></th>
          </tr>
          <tr>
            <td>Resolution</td>
            <td>Quad 64+12+5+5 Megapixel</td>
          </tr>
          <tr>
            <td>Features</td>
            <td>PDAF, 1/1.7X”, 0.8µm, OIS, macro, 123º ultrawide, depth, LED flash &amp; more</td>
          </tr>
          <tr>
            <td>Video Recording</td>
            <td>Ultra HD 4K (2160p), gyro-EIS (1080p)</td>
          </tr>
          <tr>
            <th>&nbsp;
              Front Camera</th>
            <th></th>
          </tr>
          <tr>
            <td>Resolution</td>
            <td>32 Megapixel</td>
          </tr>
          <tr>
            <td>Features</td>
            <td>F/2.2, 1/2.8″, 0.8µm, HDR &amp; more</td>
          </tr>
          <tr>
            <td>Video Recording</td>
            <td>Ultra HD 4K (2160p)</td>
          </tr>
          <tr>
            <th>&nbsp;
              Battery</th>
            <th></th>
          </tr>
          <tr>
            <td>Type and Capacity</td>
            <td>Lithium-polymer 4500 mAh (non-removable)</td>
          </tr>
          <tr>
            <td>Fast Charging</td>
            <td>✅ 25W Fast Charging (50% in 30 minutes)</td>
          </tr>
          <tr>
            <th>&nbsp;
              Performance</th>
            <th></th>
          </tr>
          <tr>
            <td>Operating System</td>
            <td>Android 11 (One UI 3.1)</td>
          </tr>
          <tr>
            <td>Chipset</td>
            <td>Qualcomm Snapdragon 720G (8 nm)</td>
          </tr>
          <tr>
            <td>RAM</td>
            <td>8 GB</td>
          </tr>
          <tr>
            <td>Processor</td>
            <td>Octa core, up to 2.3 GHz</td>
          </tr>
          <tr>
            <td>GPU</td>
            <td>Adreno 618</td>
          </tr>
          <tr>
            <th>&nbsp;
              Storage</th>
            <th></th>
          </tr>
          <tr>
            <td>ROM</td>
            <td>128 GB</td>
          </tr>
          <tr>
            <td>MicroSD Slot</td>
            <td>✅&nbsp;Uses SIM2 slot</td>
          </tr>
          <tr>
            <th>&nbsp;
              Sound</th>
            <th></th>
          </tr>
          <tr>
            <td>3.5mm Jack</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Features</td>
            <td>Loudspeaker (stereo speakers)</td>
          </tr>
          <tr>
            <th>&nbsp;
              Security</th>
            <th></th>
          </tr>
          <tr>
            <td>Fingerprint</td>
            <td>✅ In-display (optical)</td>
          </tr>
          <tr>
            <td>Face Unlock</td>
            <td>✅</td>
          </tr>
          <tr>
            <th>&nbsp;
              Others</th>
          </tr>
          <tr>
            <td>Notification Light</td>
            <td></td>
          </tr>
          <tr>
            <td>Sensors</td>
            <td>Fingerprint, Accelerometer, Gyroscope, Proximity, E-Compass</td>
          </tr>
          <tr>
            <td>Manufactured by</td>
            <td>Samsung</td>
          </tr>
          <tr>
            <td>Made in</td>
            <td>Bangladesh</td>
          </tr>
          <tr>
            <td>Sar Value</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  `
}