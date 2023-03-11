// ********** SELECTED ELEMENTS
const currentStep = document.querySelectorAll(".process");
const title = document.querySelector(".title");
const subtitle = document.querySelector(".info");
const form = document.querySelectorAll(".form");
// below is for the form one
const personalDataForm = document.querySelector(".personalData");
const naming = document.getElementById("name");
const email = document.getElementById("email");
const telephone = document.getElementById("tel");
const error = document.querySelectorAll(".err_msg");
// elements for form two are as follows
const planSelectForm = document.querySelector(".planSelect")
const plan = document.querySelectorAll(".plan");
const checkbox = document.getElementById("checkbox");
const cost = document.querySelectorAll(".cost");
const monthly = document.querySelector(".monthly");
const yearly = document.querySelector(".yearly");
// elements for the form three are as follows
const addOnForm = document.querySelector(".addOn");
const addOnduration = document.querySelectorAll(".addu");
const addOnPrice = document.querySelectorAll(".adc");
const addOn = [... document.querySelectorAll(".addon")];
// elements from form three are as follosw
const timer = document.querySelector(".timer");
const totalAmountDuration = document.querySelector(".amt_dura");
const crossDuration = document.querySelector(".crossDuration");
const crossPrice = document.querySelector(".crossPrice");
const y_m = document.querySelector(".y_m");
const crosscheckPlan = document.querySelector(".pllan");
const serviceHolder = document.querySelector(".servicesHolder");
const crossCheck = document.querySelector(".crosscheck");
const totalsumUp = document.querySelector(".amt");
const completionForm = document.querySelector(".completion");
const wrap = document.querySelector(".voteOfThanks");
// elements for the return or to go back to previous setting or page
const returnBtn = document.querySelectorAll(".return");
const goBackToSelect = document.querySelector(".plan_select_page")



// ********* CONDITIONS OR OPTIONS TO CHECK FOR IF NECCESSARY
let changepage = false;
// ********* ARRAY OF THE TITLE AND SUBTITLE
const heading = [
    {
        head: "Personal info",
        subhead: "Please provide your name, email address, and phone number"
    },
    {
        head: "Select your plan",
        subhead: "You have the option of monthly or yearly billing"
    },
    {
        head: "Pick add-ons",
        subhead: "Add-ons help enhance your gaming experience"
    },
    {
        head: "Finishin Up",
        subhead: "Double-check everything loooks OK before confirming"
    }
]

// an array for price range at different time duration
const priceRange = [
    {
        monthly: [9, 12, 15],
        yearly: [90, 120, 150]
    },
    {
        monthly: [1, 2, 2],
        yearly: [10, 20, 20]
    }
]



//************* FUNCTIONS
// function activate plan
const choosePlan = e => {
    plan.forEach(subscription => {
        subscription.classList.remove("active");
    })
    e.currentTarget.classList.add("active");

    element = e.currentTarget;
    amount = element.querySelector(".cost");
    packageName = element.querySelector(".plantype");

    crosscheckPlan.textContent = packageName.textContent;
    crossPrice.textContent = amount.textContent;
    
}

// display alert function 
const displayAlert = (msg0,style0, msg1, style1, msg2, style2) => {
    error.forEach(errormsg => {
        error[0].textContent = msg0;
        error[0].classList.add(style0);

        error[1].textContent = msg1;
        error[1].classList.add(style1);

        error[2].textContent = msg2;
        error[2].classList.add(style2);
    })

    setTimeout(() => {
        error.forEach(errormsg => {
            errormsg.textContent = "";
        })
        error[0].classList.remove(style0);
        error[1].classList.remove(style1);
        error[2].classList.remove(style2);
    }, 1500);
}

// function to go to the next page
const nextPage = (digit) => {
    form.forEach(page => {
        page.classList.add("hide");
    })
    form[digit].classList.remove("hide");

    title.textContent = heading[digit].head;
    subtitle.textContent = heading[digit].subhead;

    currentStep.forEach(step => {
        step.classList.remove("page");
    })
    currentStep[digit].classList.add("page");
}

// validating form one
const validatePform =  (e) => {
    e.preventDefault();
    let nameVal = naming.value;
    let emailVal = email.value;
    let telephoneVal = telephone.value;

    // control 
    if (nameVal && emailVal && telephoneVal) {
        if (emailVal.indexOf(".com") < 0) {
            displayAlert("nice", "safezone", "email not valid", "danger", "nice", "safezone");
            return;
        } else if (telephoneVal.length < 11) {
            displayAlert("nice", "safezone", "nice", "safezone", "telephone is not complete", "danger")
        }else {
            nextPage(1);
        }
    }else if(nameVal && !emailVal && telephoneVal) {
        displayAlert("nice", "safezone", "input email", "danger", "nice", "safezone")
    }else if(!nameVal && emailVal && telephoneVal) {
        displayAlert("please input a name", "danger", "nice", "safezone", "nice", "safezone")
    }else if (nameVal && emailVal && !telephoneVal) {
        displayAlert("nice", "safezone", "nice", "safezone", "please input tel", "danger")
    }else {
        displayAlert("please input a name", "danger", "input an email", "danger", "input a tel", "danger");
    }
}

// function information on the plans
const infoPlan = () => {
    numone = 0;
    numtwo = 0;
    plan.forEach(pack => {
        timeDuration = pack.querySelector(".annual_month");
        bonus = pack.querySelector(".bonus");
        timeDuration.textContent = "yr";
        bonus.classList.add("showbonus")
    })

    cost.forEach(amount => {
        amount.textContent = priceRange[0].yearly[numone];
        numone++;
    })

    addOnPrice.forEach(amount => {
        amount.textContent = priceRange[1].yearly[numtwo];
        numtwo++;
    })

    addOnduration.forEach(period => {
        period.textContent = "yr";
    })
    timer.textContent = "year";
    monthly.classList.remove("bold");
    yearly.classList.add("bold");
    totalAmountDuration.textContent = "yr";
    crossDuration.textContent = "yr";
    y_m.textContent = "yearly";
}

// returning the former info plan
const returnInfoPlan = () => {
    numone = 0;
    numtwo = 0;
    plan.forEach(pack => {
        timeDuration = pack.querySelector(".annual_month");
        bonus = pack.querySelector(".bonus");
        timeDuration.textContent = "yr";
        bonus.classList.remove("showbonus")
    })

    cost.forEach(amount => {
        amount.textContent = priceRange[0].monthly[numone];
        numone++;
    })

    addOnPrice.forEach(amount => {
        amount.textContent = priceRange[1].monthly[numtwo];
        numtwo++;
    })

    addOnduration.forEach(period => {
        period.textContent = "mo";
    })
    timer.textContent = "month";
    monthly.classList.add("bold");
    yearly.classList.remove("bold");
    totalAmountDuration.textContent = "mo";
    crossDuration.textContent = "mo"
    y_m.textContent = "monthly";
}

// checkbox function
const checkings = () => {
    checkbox.checked ? infoPlan() : returnInfoPlan();
}

// added services function of the project
const myAddedServices = e => {
    e.preventDefault();
    e.currentTarget.classList.toggle("active");
    element = e.currentTarget.querySelector("input");
    element.toggleAttribute("checked");
    service = e.currentTarget.querySelector(".addon_type");
    serviceFee = e.currentTarget.querySelector(".adc");
    serviceDuration = e.currentTarget.querySelector(".addu");

    if (e.currentTarget.classList.contains("active")) {
        // element.setAttribute("checked", "true");
        serviceHolder.innerHTML += `
        <div class="addy">
            <p class="addion">${service.textContent}</p>
            <p class="amount bold">+<span class="fee sum">${serviceFee.textContent}</span>/<span class="dura">${serviceDuration.textContent}</span></p>
        </div>`
    }else {
        // element.removeAttribute("checked");
        servicesAdded = serviceHolder.querySelectorAll(".addion");
        servicesAdded.forEach(prod => {
            if (service.textContent == prod.textContent) {
                serviceHolder.removeChild(prod.parentNode);
            }
        })
    }


}

// this validates form one
const validateAddOnForm = e => {
    let num = 0;
    e.preventDefault();
    // if (!changepage) return; found out it is not necessary yo use an addon
    nextPage(3);

    let total = [... crossCheck.querySelectorAll(".sum")];
    total = total.map(summing => {
        return Number(summing.textContent);
    })
    
    total.forEach(sumup => {
        num += sumup;
    })

    totalsumUp.textContent = num;
}

// ************ EVENTS LISTENERS
personalDataForm.addEventListener("submit", validatePform);

checkbox.addEventListener("click", checkings);

planSelectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    nextPage(2);
});

plan.forEach(subscription => {
    subscription.addEventListener("click", choosePlan)
})

addOnForm.addEventListener("submit", validateAddOnForm)

addOn.forEach(addition => {
    addition.addEventListener("click", myAddedServices);
});

returnBtn.forEach(prev => {
    prev.addEventListener("click", (e) => {
        let dataId = e.currentTarget.dataset.id;
        if(dataId == "form2") {
            nextPage(0);
        }else if(dataId == "form3") {
            nextPage(1);
        }else {
            nextPage(2);
        }
    })
})

goBackToSelect.addEventListener("click", () => {
    nextPage(1);
})

completionForm.addEventListener("submit", (event) => {
    event.preventDefault();
    form.forEach(formular => {
        formular.classList.add("hide");
    })
    title.classList.add("hide");
    subtitle.classList.add("hide");
    wrap.classList.remove("hide");
})