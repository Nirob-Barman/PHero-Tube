// alert();

const loadButtons = () => {
  const buttonsContainer = document.getElementById("buttons-container");

  fetch("https://openapi.programming-hero.com/api/videos/categories")
    .then((res) => res.json())
    // .then((data) => console.log(data.data));
    .then((data) => displayButtons(data.data));
};

const displayButtons = (categories) => {
  //   console.log(categories);
  const buttonsContainer = document.getElementById("buttons-container");
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.innerText = category.category;
    button.classList.add("category-button", "m-2");

    // button.addEventListener("click", function () {
    //   // Toggle the 'clicked' class on the button
    //   button.classList.toggle("clicked");

    //   // Call the function to load news based on the clicked category
    //   loadNews(category.category_id);
    // });

    button.addEventListener("click", function () {
      loadNews(category.category_id);
      //   console.log(category.category_id);
    });
    buttonsContainer.appendChild(button);
  });
};

loadButtons();

const loadNews = (id) => {
  //   console.log(id);
  fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    .then((res) => res.json())
    // .then((data) => console.log(data.status));
    // .then((data) => console.log(data.data));
    .then((data) => displayNews(data.data));
};

// const displayNews = (news) => {
//   const newsContainer = document.getElementById("news-container");
//   newsContainer.innerHTML = "";

//   if (news.length === 0) {
//     const noDataDiv = document.createElement("div");
//     // noDataDiv.classList.add("col");
//     noDataDiv.innerHTML = `
//     <div class="col text-center noDivBorder">
//         <img class="noDivImg" src="./icon.png" class="card-img-top" style="width:100px; height:100px" alt="No Data">
//         <h3>Oops!! Sorry, There is no content here</h3>
//     </div>`;

//     newsContainer.appendChild(noDataDiv);
//   } else {
//     news.forEach((newss) => {
//       console.log(newss);
//       const newsDiv = document.createElement("div");
//       newsDiv.classList.add("col-sm-3");
//       newsDiv.innerHTML = `
//               <div class="card">
//             <div class="position-relative">
//                         <img src="${
//                           newss.thumbnail
//                         }" style="width:auto; height:200px">
//                         <div class="position-absolute bottom-0 end-0">${formatPostedDate(
//                           newss?.others?.posted_date
//                         )}
//                         </div>

//               </div>
//                   <div class="card-body card-text">

//                   <div class="d-flex justify-content-start gap-2">
//                   <img src="${
//                     newss?.authors[0]?.profile_picture
//                   }" style="width: 30px; height: 30px;" class="rounded-circle">

//                   <div>
//                   <h5 class="card-title">${newss.title}</h5>
//                       <div style="color:#5D5D5D;" class="d-flex justify-content-start align-content-center gap-3">
//                         <p>${newss?.authors[0]?.profile_name}</p>
//                         ${
//                           newss?.authors[0]?.verified
//                             ? '<p><i style="background-color: #2568EF;" class="fa-regular fa-circle-check"></i></p>'
//                             : ""
//                         }
//                         </div>
//                         <p style="color:#5D5D5D;" class="card-text">${
//                           newss?.others?.views
//                         } views</p>
//                   </div>

//                   </div>

//                   </div>
//       `;

//       newsContainer.appendChild(newsDiv);
//     });
//   }
// };

const displayNews = (news) => {
  const newsContainer = document.getElementById("news-container");
  newsContainer.innerHTML = "";

  if (news.length === 0) {
    const noDataDiv = document.createElement("div");
    noDataDiv.innerHTML = `
      <div class="col text-center noDivBorder">
        <img class="noDivImg" src="./Icon.png" class="card-img-top" style="width:100px; height:100px" alt="No Data">
        <h3>Oops!! Sorry, There is no content here</h3>
      </div>`;
    newsContainer.appendChild(noDataDiv);
  } else {
    news.forEach((newss) => {
      // console.log(newss);
      const newsDiv = document.createElement("div");
      newsDiv.classList.add("col-sm-3");
      newsDiv.innerHTML = `
        <div class="card">
          <div class="position-relative">
            <img src="${
              newss.thumbnail
            }" class="img-fluid img-thumbnail" style="height:200px">
            <div class="position-absolute bottom-0 end-0">${formatPostedDate(
              newss?.others?.posted_date
            )}</div>
          </div>
          <div class="card-body card-text">
            <div class="d-flex justify-content-start gap-2">
              <img src="${
                newss?.authors[0]?.profile_picture
              }" style="width: 30px; height: 30px;" class="rounded-circle">
              <div>
                <h5 class="card-title">${newss.title}</h5>
                <div style="color:#5D5D5D;" class="d-flex justify-content-start align-content-center gap-3">
                  <p>${newss?.authors[0]?.profile_name}</p>
                  ${
                    newss?.authors[0]?.verified
                      ? '<p><i style="background-color: #2568EF;" class="fa-regular fa-circle-check"></i></p>'
                      : ""
                  }
                </div>
                <p style="color:#5D5D5D;" class="card-text">${
                  newss?.others?.views
                } views</p>
              </div>
            </div>
          </div>
        </div>`;
      newsContainer.appendChild(newsDiv);
    });
  }
};

function convertSecondsToHoursMinutes(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return { hours, minutes };
}

function formatPostedDate(seconds) {
  const { hours, minutes } = convertSecondsToHoursMinutes(seconds);
  // console.log(hours, minutes);
  if (hours > 0) {
    return `${hours}hrs ${minutes}min ago`;
  } else {
    // return `${minutes}min ago`;
    return "";
  }
}

function sortByViews() {
  fetch("https://openapi.programming-hero.com/api/videos/category/1000")
    .then((res) => res.json())
    .then((data) => {
      const sortedNews = data.data.sort((a, b) => {
        const viewsA = parseViews(a.others.views);
        const viewsB = parseViews(b.others.views);
        return viewsB - viewsA;
      });

      displayNews(sortedNews);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function parseViews(views) {
  const numericViews = parseFloat(views.replace("K", "e3").replace("M", "e6"));
  return isNaN(numericViews) ? 0 : numericViews;
}

loadNews("1000");
