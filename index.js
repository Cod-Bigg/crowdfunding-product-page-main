const optionOneRem = document.querySelector("#option-1-left").innerHTML;
const optionOneParse = parseInt(optionOneRem);
const pledgeButton = document.querySelector("#btn-pledge-1");
const pledgeButtonTwo = document.querySelector("#btn-pledge-2");
const pledgeOneInput = document.querySelector("#pledge-amount");
const pledgeTwoInput = document.querySelector("#pledge-amount-two");
const btnOne = document.querySelector("#btn-one");
const btnTwo = document.querySelector("#btn-two");
let pledgeErrOne = document.querySelector("#pledge-error-one");
let pledgeErrTwo = document.querySelector("#pledge-error-two");
const pledgeBorder = document.querySelector("#crowdfund-option-1");
const pledgeBorderTwo = document.querySelector("#crowdfund-option-2-modal");
const bambooStand = document.querySelector("#bamboo-stand");
const pledgeInfoTwo = document.querySelector(".pledge-info-two");
const pledgeInfo = document.querySelector(".pledge-info");
const blackEdition = document.querySelector("#black-edition");
let optionToggle = document.querySelector("#bamboo-stand");
let optionToggleTwo = document.querySelector("#black-edition");
const inputSpan = document.querySelectorAll(".pledge-error");
let currentPledge = document.querySelector("#currentPledge").innerHTML;
console.log(currentPledge);
let totalPledge;
let currentParse;
let num = parseFloat(currentPledge.replace(/,/g, ''));
let totalPledgeString;

optionToggle.addEventListener("change", () => {
  optionToggleTwo.checked = false;
  checkToggle();
});

optionToggleTwo.addEventListener("change", () => {
  optionToggle.checked = false;
  checkToggle();
});
const gettingCurrentPledge = () => {

}
const remainingPledge = () => {
  if (optionOneParse == 0) {
    pledgeButton.disabled = true;
  }
};
const pledgeButtonOne = () => {
  console.log(optionToggle);
  pledgeButton.addEventListener("click", () => {
    optionToggle.checked = true;
    optionToggleTwo.checked = false;
    checkToggle();
  });
};

const pledgeBtnTwo = () => {
  console.log(optionToggleTwo);
  pledgeButtonTwo.addEventListener("click", () => {
    optionToggle.checked = false;
    optionToggleTwo.checked = true;
    checkToggle();
  });
};

const modalOptionOne = () => {
  btnOne.addEventListener("click", () => {
    let pledgeOneVal = pledgeOneInput.value;
    if (pledgeOneVal < 25) {
      pledgeErrOne.innerHTML = "Pledge can not be less than $25";
      pledgeBorder.style.border = "1px solid red";
    } else {
        
    }
  });
};

const modalOptionTwo = () => {
  btnTwo.addEventListener("click", () => {
    let pledgeTwoVal = pledgeTwoInput.value;
    const pledgeTwoValParse = parseFloat(pledgeTwoVal);
    currentParse = parseInt(num);
    if (pledgeTwoValParse < 75) {
      pledgeErrTwo.innerHTML = "Pledge can not be less than $75";
      pledgeBorderTwo.style.border = "1px solid red";
    } else {
       totalPledge = num + pledgeTwoValParse;
       totalPledgeString = totalPledge.toString();
       console.log(totalPledgeString);
       currentPledge.innerHTML = totalPledgeString;
       console.log(currentPledge.innerHTML);
       pledgeTwoInput.value ="";
    }
  });
};

const checkToggle = () => {
  if (optionToggle.checked == true) {
  
    pledgeInfoTwo.style.display = "none";
    pledgeBorder.style.border = "3px solid #3DB4AB";
    pledgeBorderTwo.style.border = "1px solid lightgrey";
    pledgeInfo.style.display ="block";
  } else if (optionToggleTwo.checked == true) {
   
    pledgeInfo.style.display = "none";
    pledgeBorderTwo.style.border = "3px solid #3DB4AB";
    pledgeBorder.style.border = "1px solid lightgrey";
    pledgeInfoTwo.style.display = "block";
  } else {
    console.log("other");
  }
};

const hideSpan = () => {
  inputSpan.forEach((item) => {
    item.addEventListener("focus", () => {
      item.style.display = "none";
      console.log("none");
    });
  });
};
remainingPledge();
modalOptionOne();
modalOptionTwo();
pledgeButtonOne();
pledgeBtnTwo();
// checkToggle();
hideSpan();
