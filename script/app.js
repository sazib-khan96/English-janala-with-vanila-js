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

  if (words.length == 0) {
    cardsContainer.innerHTML = `
        <div class="error_massage">
                <img src="./images/download (1).png" alt="">
                <p>এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
                <h2>নেক্সট Lesson এ যান</h2>
            </div>
            
     
     `;
    return;
  }

  words.forEach((word) => {
    const card = document.createElement("div");
    
    card.innerHTML = `
     <div class="cards">
                    <h3>${word.word ? word.word : " No word found"}</h3>
                    <p> Meaning / Pronunciation </p>
                    <h4>${word.meaning ? word.meaning : " No word found"}/${word.pronunciation ? word.pronunciation : "No Pronounciation found"}</h4>
                    <div class="icons">
                        <i class="fa-solid fa-info"></i>
                        <i class="fa-solid fa-volume"></i>
                    </div>
                </div>
    
    `;
    cardsContainer.appendChild(card);
  });
};
