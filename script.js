// =====================================================
// YOUR WHATSAPP NUMBER
// =====================================================
//
// Example:
// UAE number: +971 50 491 5900
//
// Write it like this:
// 971504915900
//
// NO +
// NO spaces
// NO -
// =====================================================

const WHATSAPP_NUMBER = "971504915900";


// =====================================================
// COMPANY INFO
// =====================================================

const COMPANY_INFO = {

  name: "Safe Land Tourism LLC",

  email: "smrasel15@yahoo.com",

  facebook: "https://www.facebook.com/share/19UsNYTzxk/",

  instagram: "https://www.instagram.com/safelandtourism?stkn=a2NpMXB2ZnE1OTFp",

  youtube: "https://www.youtube.com/@Safeland123",

  tiktok: "https://vm.tiktok.com/ZS9SNMjVVBP92-HotAH/"

};


// =====================================================
// ATTRACTIONS
// =====================================================
//
// এখান থেকেই attraction add/edit করবেন.
//
// price = Adult price
// childPrice = Child price
//
// image = ছবি
// =====================================================

const attractions = [

  {
    id: 1,

    name: "Burj Khalifa",

    category: "landmark",

    categoryName: "Landmark",

    location: "Downtown Dubai",

    price: 159,

    childPrice: 129,

    image:
      "images/burj-khalifa-1.jpg",

    description:
      "Enjoy breathtaking views from one of Dubai's most iconic landmarks."
  },


  {
    id: 2,

    name: "Dubai Aquarium & Underwater Zoo",

    category: "aquarium",

    categoryName: "Aquarium",

    location: "Dubai Mall",

    price: 125,

    childPrice: 99,

    image:
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=1000&q=80",

    description:
      "Discover amazing marine life at Dubai Aquarium and Underwater Zoo."
  },


  {
    id: 3,

    name: "Museum of the Future",

    category: "museum",

    categoryName: "Museum",

    location: "Sheikh Zayed Road",

    price: 149,

    childPrice: 149,

    image:
      "images/museum-of-future.jpg",

    description:
      "Explore the future of technology, innovation and human possibility."
  },


  {
    id: 4,

    name: "Dubai Frame",

    category: "landmark",

    categoryName: "Landmark",

    location: "Zabeel Park",

    price: 55,

    childPrice: 30,

    image:
      "images/dubai-frame.jpg",

    description:
      "Enjoy spectacular views connecting old and modern Dubai."
  },


  {
    id: 5,

    name: "Dubai Parks & Resorts",

    category: "themepark",

    categoryName: "Theme Park",

    location: "Dubai Parks & Resorts",

    price: 295,

    childPrice: 245,

    image:
      "https://images.unsplash.com/photo-1597466599360-3b9775841aec?auto=format&fit=crop&w=1000&q=80",

    description:
      "Enjoy exciting rides and entertainment for the whole family."
  },


  {
    id: 6,

    name: "Dubai Marina Cruise",

    category: "cruise",

    categoryName: "Cruise",

    location: "Dubai Marina",

    price: 89,

    childPrice: 59,

    image:
      "images/dubai-marina-cruise.jpg",

    description:
      "Enjoy Dubai Marina's skyline from a relaxing cruise."
  },


  {
    id: 7,

    name: "Desert Safari",

    category: "adventure",

    categoryName: "Adventure",

    location: "Dubai Desert",

    price: 149,

    childPrice: 99,

    image:
      "images/desert-safari.jpg",

    description:
      "Experience dune bashing, desert views and traditional Arabian entertainment."
  },


  {
    id: 8,

    name: "Dubai Dolphinarium",

    category: "show",

    categoryName: "Show",

    location: "Creek Park, Bur Dubai",

    price: 50,

    childPrice: 30,

    image:
      "images/dubai-dolphinarium.webp",

    description:
      "Watch dolphins and seals perform in the Middle East's first indoor, air-conditioned dolphinarium."
  },


  {
    id: 9,

    name: "Ferrari World",

    category: "themepark",

    categoryName: "Theme Park",

    location: "Yas Island, Abu Dhabi",

    price: 345,

    childPrice: 295,

    image:
      "images/ferrari-world.jpg",

    description:
      "Ride the world's fastest roller coaster inside the largest indoor theme park on the planet."
  },


  {
    id: 10,

    name: "Dubai Miracle Garden",

    category: "garden",

    categoryName: "Garden",

    location: "Al Barsha South, Dubailand",

    price: 55,

    childPrice: 40,

    image:
      "images/dubai-miracle-garden.jpg",

    description:
      "Walk through the world's largest natural flower garden, with over 150 million blooms."
  },


  {
    id: 11,

    name: "Atlantis Aquaventure Waterpark",

    category: "waterpark",

    categoryName: "Water Park",

    location: "Palm Jumeirah",

    price: 350,

    childPrice: 300,

    image:
      "images/atlantis-aquaventure.jpg",

    description:
      "Slide, splash and swim through record-breaking water rides at one of the region's biggest waterparks."
  },


  {
    id: 16,

    name: "IMG Worlds of Adventure",

    category: "themepark",

    categoryName: "Theme Park",

    location: "Sheikh Mohammed Bin Zayed Road, Dubai",

    price: 365,

    childPrice: 365,

    image:
      "images/img-world-dubai.jpg",

    description:
      "Explore the world's largest indoor theme park, with Marvel, Cartoon Network and Lost Valley dinosaur zones. Children under 105cm enter free."
  },


  {
    id: 17,

    name: "Aya Universe",

    category: "experience",

    categoryName: "Experience",

    location: "Wafi Mall, Oud Metha, Dubai",

    price: 140,

    childPrice: 120,

    image:
      "images/aya-universe.jpg",

    description:
      "Walk through 12 immersive light, sound and mirror-filled zones in this digital art experience."
  },


  {
    id: 18,

    name: "Dubai Safari Park",

    category: "zoo",

    categoryName: "Zoo & Safari",

    location: "Al Warqa, Dubai",

    price: 50,

    childPrice: 20,

    image:
      "images/dubai-safari-park.jpg",

    description:
      "See around 3,000 animals across African, Asian and Arabian themed villages, with a desert safari ride included."
  },


  {
    id: 19,

    name: "Dubai Butterfly Garden",

    category: "garden",

    categoryName: "Garden",

    location: "Al Barsha South, Dubailand",

    price: 55,

    childPrice: 40,

    image:
      "images/dubai-butterfly-garden.jpg",

    description:
      "Walk through climate-controlled domes home to over 15,000 butterflies from around 45 species."
  },


  {
    id: 20,

    name: "Dhow Cruise Dubai Marina",

    category: "cruise",

    categoryName: "Cruise",

    location: "Dubai Marina",

    price: 150,

    childPrice: 120,

    image:
      "images/dhow-cruise.webp",

    description:
      "Sail Dubai Marina at night on a traditional wooden dhow with a buffet dinner and live entertainment."
  },


  {
    id: 12,

    name: "The Palm View",

    category: "landmark",

    categoryName: "Landmark",

    location: "Palm Tower, Palm Jumeirah",

    price: 100,

    childPrice: 75,

    image:
      "images/the-palm-view.jpg",

    description:
      "See the Palm Jumeirah's iconic shape from an open-air observation deck 240 metres up."
  },


  {
    id: 13,

    name: "Sky Views Dubai",

    category: "landmark",

    categoryName: "Landmark",

    location: "Address Sky View, Downtown Dubai",

    price: 130,

    childPrice: 100,

    image:
      "images/sky-views-dubai.webp",

    description:
      "Cross a glass sky bridge and glass slide with Burj Khalifa views from Downtown Dubai."
  },


  {
    id: 14,

    name: "Ski Dubai",

    category: "adventure",

    categoryName: "Adventure",

    location: "Mall of the Emirates",

    price: 210,

    childPrice: 185,

    image:
      "images/ski-dubai.jpg",

    description:
      "Ski, snowboard and play in real snow at the Middle East's first indoor ski resort."
  },


  {
    id: 15,

    name: "Global Village",

    category: "entertainment",

    categoryName: "Entertainment",

    location: "Sheikh Mohammed Bin Zayed Road",

    price: 30,

    childPrice: 15,

    image:
      "images/global-village.png",

    description:
      "Explore pavilions from over 75 countries, with rides, shows and street food, open seasonally."
  }

];


// =====================================================
// ELEMENTS
// =====================================================

const attractionGrid =
  document.getElementById("attractionGrid");

const searchInput =
  document.getElementById("searchInput");

const categoryFilter =
  document.getElementById("categoryFilter");

const emptyMessage =
  document.getElementById("emptyMessage");

const bookingModal =
  document.getElementById("bookingModal");

const closeModal =
  document.getElementById("closeModal");

const bookingForm =
  document.getElementById("bookingForm");

const modalTitle =
  document.getElementById("modalTitle");

const modalLocation =
  document.getElementById("modalLocation");

const bookingDate =
  document.getElementById("bookingDate");

const adultQty =
  document.getElementById("adultQty");

const childQty =
  document.getElementById("childQty");

const customerName =
  document.getElementById("customerName");

const customerPhone =
  document.getElementById("customerPhone");

const customerNote =
  document.getElementById("customerNote");

const totalPrice =
  document.getElementById("totalPrice");


let selectedAttraction = null;


// =====================================================
// TODAY'S DATE
// =====================================================

const today = new Date();

const year = today.getFullYear();

const month =
  String(today.getMonth() + 1).padStart(2, "0");

const day =
  String(today.getDate()).padStart(2, "0");

const todayString =
  `${year}-${month}-${day}`;

bookingDate.min = todayString;

bookingDate.value = todayString;


// =====================================================
// DISPLAY ATTRACTIONS
// =====================================================

function displayAttractions() {

  const search =
    searchInput.value
      .toLowerCase()
      .trim();

  const category =
    categoryFilter.value;


  const filtered =
    attractions.filter(function (attraction) {

      const matchesSearch =
        attraction.name
          .toLowerCase()
          .includes(search)

        ||

        attraction.location
          .toLowerCase()
          .includes(search)

        ||

        attraction.categoryName
          .toLowerCase()
          .includes(search);


      const matchesCategory =
        category === "all"

        ||

        attraction.category === category;


      return matchesSearch && matchesCategory;

    });


  attractionGrid.innerHTML = "";


  filtered.forEach(function (attraction) {

    const card =
      document.createElement("article");

    card.className = "card";


    card.innerHTML = `

      <div
        class="card-image"
        style="background-image:url('${attraction.image}')"
      ></div>


      <div class="card-body">

        <span class="badge">
          ${attraction.categoryName}
        </span>


        <h3>
          ${attraction.name}
        </h3>


        <p class="location">
          📍 ${attraction.location}
        </p>


        <p class="description">
          ${attraction.description}
        </p>


        <div class="card-bottom">

          <div class="price">

            <small>
              From
            </small>

            <strong>
              AED ${attraction.price}
            </strong>

          </div>


          <button
            class="book-btn"
            onclick="openBooking(${attraction.id})"
          >
            Book Now
          </button>

        </div>

      </div>

    `;


    attractionGrid.appendChild(card);

  });


  if (filtered.length === 0) {

    emptyMessage.style.display = "block";

  } else {

    emptyMessage.style.display = "none";

  }

}


// =====================================================
// OPEN BOOKING
// =====================================================

function openBooking(id) {

  selectedAttraction =
    attractions.find(function (item) {

      return item.id === id;

    });


  if (!selectedAttraction) {
    return;
  }


  modalTitle.textContent =
    selectedAttraction.name;


  modalLocation.textContent =
    "📍 " + selectedAttraction.location;


  adultQty.value = 1;

  childQty.value = 0;

  customerName.value = "";

  customerPhone.value = "";

  customerNote.value = "";


  updateTotal();


  bookingModal.classList.add("show");

  document.body.style.overflow = "hidden";

}


// =====================================================
// CLOSE BOOKING
// =====================================================

function closeBookingModal() {

  bookingModal.classList.remove("show");

  document.body.style.overflow = "";

}


closeModal.addEventListener(
  "click",
  closeBookingModal
);


bookingModal.addEventListener(
  "click",
  function (event) {

    if (event.target === bookingModal) {

      closeBookingModal();

    }

  }
);


document.addEventListener(
  "keydown",
  function (event) {

    if (event.key === "Escape") {

      closeBookingModal();

    }

  }
);


// =====================================================
// QUANTITY BUTTONS
// =====================================================

document
  .querySelectorAll(".qty-btn")
  .forEach(function (button) {

    button.addEventListener(
      "click",
      function () {

        const target =
          document.getElementById(
            button.dataset.target
          );


        let value =
          Number(target.value) || 0;


        if (
          button.dataset.action === "plus"
        ) {

          value++;

        }


        if (
          button.dataset.action === "minus"
        ) {

          value--;

        }


        if (
          target.id === "adultQty"
        ) {

          value =
            Math.max(1, value);

        }


        if (
          target.id === "childQty"
        ) {

          value =
            Math.max(0, value);

        }


        target.value = value;


        updateTotal();

      }
    );

  });


// =====================================================
// UPDATE TOTAL
// =====================================================

function updateTotal() {

  if (!selectedAttraction) {
    return;
  }


  const adults =
    Math.max(
      1,
      Number(adultQty.value) || 1
    );


  const children =
    Math.max(
      0,
      Number(childQty.value) || 0
    );


  const total =
    (
      adults *
      selectedAttraction.price
    )

    +

    (
      children *
      selectedAttraction.childPrice
    );


  totalPrice.textContent =
    "AED " + total;

}


adultQty.addEventListener(
  "input",
  updateTotal
);


childQty.addEventListener(
  "input",
  updateTotal
);


// =====================================================
// SEARCH
// =====================================================

searchInput.addEventListener(
  "input",
  displayAttractions
);


categoryFilter.addEventListener(
  "change",
  displayAttractions
);


// =====================================================
// BOOKING → WHATSAPP
// =====================================================

bookingForm.addEventListener(
  "submit",
  function (event) {

    event.preventDefault();


    if (!selectedAttraction) {
      return;
    }


    const adults =
      Math.max(
        1,
        Number(adultQty.value) || 1
      );


    const children =
      Math.max(
        0,
        Number(childQty.value) || 0
      );


    const total =
      (
        adults *
        selectedAttraction.price
      )

      +

      (
        children *
        selectedAttraction.childPrice
      );


    const date =
      bookingDate.value;


    const name =
      customerName.value.trim();


    const phone =
      customerPhone.value.trim();


    const note =
      customerNote.value.trim();


    const message =

`Hello DubaiTickets 👋

I would like to book:

🎟️ Attraction:
${selectedAttraction.name}

📍 Location:
${selectedAttraction.location}

📅 Date:
${date}

👨 Adults:
${adults} × AED ${selectedAttraction.price}

👧 Children:
${children} × AED ${selectedAttraction.childPrice}

💰 Estimated Total:
AED ${total}

👤 Customer Name:
${name}

📱 Customer Phone:
${phone}

📝 Special Request:
${note || "None"}

Please confirm availability and booking details.

Thank you!`;


    const whatsappURL =
      "https://wa.me/" +
      WHATSAPP_NUMBER +
      "?text=" +
      encodeURIComponent(message);


    window.open(
      whatsappURL,
      "_blank"
    );

  }
);


// =====================================================
// HEADER / CONTACT WHATSAPP
// =====================================================

function setupWhatsAppLinks() {

  const message =
    encodeURIComponent(
      "Hello DubaiTickets 👋 I would like to know more about attraction tickets."
    );


  const url =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    message;


  document.getElementById(
    "headerWhatsApp"
  ).href = url;


  document.getElementById(
    "contactWhatsApp"
  ).href = url;


  const emailLink =
    document.getElementById("contactEmail");

  if (emailLink) {

    emailLink.href =
      "mailto:" + COMPANY_INFO.email;

    emailLink.textContent =
      COMPANY_INFO.email;

  }


  const socialIds = {

    facebookLink: COMPANY_INFO.facebook,

    instagramLink: COMPANY_INFO.instagram,

    youtubeLink: COMPANY_INFO.youtube,

    tiktokLink: COMPANY_INFO.tiktok

  };


  Object.keys(socialIds).forEach(function (id) {

    const link =
      document.getElementById(id);

    if (link) {

      link.href = socialIds[id];

    }

  });

}


// =====================================================
// START WEBSITE
// =====================================================

displayAttractions();

setupWhatsAppLinks();
