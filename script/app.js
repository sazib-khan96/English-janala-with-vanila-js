// lesson btn featch
const url = "https://openapi.programming-hero.com/api/levels/all";
fetch(url)
  .then((res) => res.json())
  .then((level) => {
    const levels = level.data;
    showLevel(levels);
  });

// lesson level showing function
const showLevel = (levels) => {
  const levelShowContainer = document.getElementById("lesson_btn_container");
  levels.forEach((level) => {
    // console.log(level)
    const levelBtn = document.createElement("div");
    levelBtn.innerHTML = `
      <button class='level_btn' onClick='levelWords(${level.level_no})'> Lesson-${level.level_no}</button>
     `;
    levelShowContainer.appendChild(levelBtn);
  });
};

// showLevelWords function
const levelWords = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((words) => {
      const allWords = words.data;
      showLevelWords(allWords);
    });
};

const showLevelWords = (words) => {
  const cardsContainer = document.getElementById("cardContainer");
  cardsContainer.innerHTML = "";
  words.forEach((word) => {
    const card = document.createElement("div");

    if (word.length === 0) {
      cardsContainer.innerHTML = `
               <div>
                    <h1>No words here</h1>
              </div>
        `;
        return
    }
    card.innerHTML = `
     <div class="cards">
                    <h3>${word.word}</h3>
                    <p>${word.meaning} </p>
                    <h4>${word.pronunciation}</h4>
                    <div class="icons">
                        <i class="fa-solid fa-info"></i>
                        <i class="fa-solid fa-volume"></i>
                    </div>
                </div>
    
    `;
    cardsContainer.appendChild(card);
  });
};
