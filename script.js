const cardName = [
  "card1-inner",
  "card2-inner",
  "card3-inner",
  "card4-inner",
  "card5-inner",
  "card6-inner",
  "card7-inner",
  "card8-inner",
];

const resultList = [
  "result1",
  "result2",
  "result3",
  "result4",
  "result5",
  "result6",
  "result7",
  "result8",
];

// const isHover = (cardInnerId, isHover) => {
//   const cardInner = document.getElementById(cardInnerId);
//   if (isHover) {
//     cardInner.animate("shake");
//   }
// };

const shuffle = () => {
  let prize = [
    // "ได้รับเงินรางวัล 3x",
    "ได้รับเงินรางวัล 2x",
    "ได้รับเงินรางวัล 100 $$$",
    "ได้รับเงินรางวัล 50 $$$",
    "เสียเงินรางวัล",
    "เสียเงินรางวัล",
    "เสียเงินรางวัล",
    "เสียเงินรางวัล",
    "เสียเงินรางวัล",
  ];

  // random prize into back of card
  resultList.map((record) => {
    const result = document.getElementById(record);
    result.innerHTML = prize[1];
  });
};

const handleClick = (cardInnerId) => {
  const cardInnder = document.getElementById(cardInnerId);
  if (!cardInnder.classList.contains("fliped")) {
    cardInnder.className += " fliped";
  } else {
    cardInnder.classList.remove("fliped");
  }
};

const resetAll = () => {
  // shuffle();
  cardName.map((card) => {
    const cardInner = document.getElementById(card);
    if (cardInner.classList.contains("fliped")) {
      cardInner.classList.remove("fliped");
    }
  });
  shuffle();
};
