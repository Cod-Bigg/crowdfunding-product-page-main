const optionOneRem = document.querySelector("#option-1-left").innerHTML;
const optionOneParse = parseInt(optionOneRem);
let newBackerTotal;
let newBackerString;
let totalPledge;
let currentParse;
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
let currentPledge = document.querySelector("#currentPledge");
let currentBackers = document.querySelector("#currentBackers");
let replaceBackText = parseInt(currentBackers.innerHTML.replace(/,/g, ''));
const num = parseFloat(currentPledge.innerHTML.replace(/,/g, ''));
let totalPledgeString;
const optionOneLeft = document.querySelector("#option-1-left");
const blackEditionLeft = document.querySelector("#black-edition-left");
const blackLeft = document.querySelector("#blackEditionLeft")
const bambooEditionLeft = document.querySelector("#bamboo-edition-left");
let blackEditionNum;
let bambooEditionNum;
let newBlackEditionTotal;
let newBlackEditionString;
let newBambooEditionTotal;
let newBambooEditionString;
//event listening for a change of the radio selection
optionToggle.addEventListener("change", () => {
  optionToggleTwo.checked = false;
  checkToggle();
});
//event listening for a change of the radio selection
optionToggleTwo.addEventListener("change", () => {
  optionToggle.checked = false;
  checkToggle();
});

//disable button once the pledge available reaches 0
const remainingPledge = () => {
  if (optionOneParse == 0) {
    pledgeButton.disabled = true;
  }
};
//toggle radio buttons
const pledgeButtonOne = () => {
  console.log(optionToggle);
  pledgeButton.addEventListener("click", () => {
    optionToggle.checked = true;
    optionToggleTwo.checked = false;
    checkToggle();
  });
};
//toggle radio buttons
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
    //setting first input value to pledgeOneVal
    let pledgeOneVal = pledgeOneInput.value;
    //turning pledgeOneVal into a number
    const pledgeOneValParse = parseFloat(pledgeOneVal);
    //check to see if the value is less than 25
    //if value is less than 25 set error HTML and border error
    if (pledgeOneValParse < 25) {
      pledgeErrOne.innerHTML = "Pledge can not be less than $25";
      pledgeBorder.style.border = "1px solid red";
      //if value is not less than 25 begin calculation
    } else {
        //adding the values of the initial pledge value and the input value
        totalPledge = num + pledgeOneValParse;
        //turning the total pledge value into a string, and adding the commas back
        totalPledgeString = totalPledge.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        //set new string value to the pledge HTML
        currentPledge.innerHTML = totalPledgeString;

        //adding one to the backer total 
        newBackerTotal = replaceBackText++;
        //turning the new backer total into a string, and adding the commas back in
        newBackerString = newBackerTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        //set the new backer number to the HTML
        currentBackers.innerHTML = newBackerString;
        //turning the bamboo pledge amount into a number
        bambooEditionNum = parseInt(bambooEditionLeft.innerHTML);
        //subtracting one from the pledge available 
        newBambooEditionTotal = bambooEditionNum - 1;
        //turning the pledges available into a string
        newBambooEditionString = newBambooEditionTotal.toString();
        //setting pledges available to both main page and modal
        bambooEditionLeft.innerHTML = newBambooEditionString;
        optionOneLeft.innerHTML = newBambooEditionString;
        pledgeOneInput.value ="";
    }
  });
};

const modalOptionTwo = () => {
  btnTwo.addEventListener("click", () => {
    //assign second input value to pledgeTwoVal
    let pledgeTwoVal = pledgeTwoInput.value;
    //parse string into a float
    const pledgeTwoValParse = parseFloat(pledgeTwoVal);
    //parse the initial pledge html into a number
    currentParse = parseInt(num);
    //check if vale is less then 75
    //if value is less than 75 set error border and text
    if (pledgeTwoValParse < 75) {
      pledgeErrTwo.innerHTML = "Pledge can not be less than $75";
      pledgeBorderTwo.style.border = "1px solid red";
      //if the value is not less then 75
    } else {
        //pledge amount of initial HTML and input
       totalPledge = num + pledgeTwoValParse;
       //changing total pledge back to a string. Using replace to add commas back in
       totalPledgeString = totalPledge.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
       //setting the new total pledge amount to the pledge HTML
       currentPledge.innerHTML = totalPledgeString;
        //adding one to the backer total 
        newBackerTotal = replaceBackText++;
        console.log(newBackerTotal);
        //setting the new backer total to a string. Using replace to add commas back in
        newBackerString = newBackerTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        ///setting the new backer string to the HTML
        currentBackers.innerHTML = newBackerString;
        //turning black edition HTML to a number
        blackEditionNum = parseInt(blackEditionLeft.innerHTML);
        //subtracting one from the amount left 
        newBlackEditionTotal = blackEditionNum - 1;
        //setting the new amount left to a string
        newBlackEditionString = newBlackEditionTotal.toString();
        //setting the new string to the HTML
        blackEditionLeft.innerHTML = newBlackEditionString;
        blackLeft.innerHTML = newBlackEditionString;
       //clearing the input
       pledgeTwoInput.value ="";
    }
  });
};
//check what radio button is toggled
const checkToggle = () => {
//if radio button is selected add css
  if (optionToggle.checked == true) {
  
    pledgeInfoTwo.style.display = "none";
    pledgeBorder.style.border = "3px solid #3DB4AB";
    pledgeBorderTwo.style.border = "1px solid lightgrey";
    pledgeInfo.style.display ="block";
//if the other radio is selected add the css to that radio instead
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
//calling functions
remainingPledge();
modalOptionOne();
modalOptionTwo();
pledgeButtonOne();
pledgeBtnTwo();
// checkToggle();
hideSpan();
