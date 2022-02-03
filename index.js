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
let here;


const remainingPledge = () => {
    if(optionOneParse == 0) {
        pledgeButton.disabled = true;
    }
}
const pledgeButtonOne = () => {
    pledgeButton.addEventListener("click", () => {
        optionToggle.checked = true;
        
    })
}



const pledgeBtnTwo = () => {
    console.log(optionToggleTwo);
    pledgeButtonTwo.addEventListener("click", () => {
        optionToggleTwo.checked = true;
    })

}
const modalOptionOne = () => {
    btnOne.addEventListener("click", () => {
        let pledgeOneVal = pledgeOneInput.value;
        if(pledgeOneVal < 25){
            pledgeErrOne.innerHTML="Pledge can not be less than $25";
            pledgeBorder.style.border = "1px solid red";
        } else{
            console.log(pledgeOneVal);
        }
    })
}

const modalOptionTwo = () => {
    btnTwo.addEventListener("click", () => {
        let pledgeTwoVal = pledgeTwoInput.value;
        console.log(pledgeTwoVal);
        if(pledgeTwoVal < 75){
            pledgeErrTwo.innerHTML="Pledge can not be less than $75";
            pledgeBorderTwo.style.border = "1px solid red";
        } else{
            console.log(pledgeTwoVal);
        }
    })
}

const checkToggle = (toggle) => {
  if(toggle== true){
    pledgeInfoTwo.style.display = "none";
    pledgeBorder.style.border = "1px solid #3DB4AB";
    optionToggleTwo.checked = false;
    console.log(optionToggle);
  }else if (optionToggleTwo.checked == true){
    pledgeInfo.style.display = "none";
    pledgeBorderTwo.style.border = "1px solid #3DB4AB";
    optionToggle.checked = false;
  } else {
      console.log("other");
  }
}

const hideSpan = () => {
    inputSpan.forEach((item ) => {
        item.addEventListener("focus", () => {
            item.style.display="none";
            console.log("none");
        })
    })

}

remainingPledge();
modalOptionOne();
modalOptionTwo();
pledgeButtonOne();
pledgeBtnTwo();
checkToggle();
hideSpan();