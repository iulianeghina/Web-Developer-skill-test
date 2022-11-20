const oppoStatus = [
  {
    K_OPPO_STATUS: 1,
    STATUS: "1. Initial Contact",
    SUCCESS: 0,
  },
  {
    K_OPPO_STATUS: 2,
    STATUS: "2. Demonstration",
    SUCCESS: 25,
  },
  {
    K_OPPO_STATUS: 3,
    STATUS: "3. Proposal",
    SUCCESS: 50,
  },
  {
    K_OPPO_STATUS: 4,
    STATUS: "4. Negotiation",
    SUCCESS: 75,
  },
  {
    K_OPPO_STATUS: 5,
    STATUS: "5. Order",
    SUCCESS: 100,
  },
];

const FormComponent = class {
  constructor() {}
  start() {
    let select = document.querySelector("select");
    let input = document.querySelector("input");
    oppoStatus.forEach(
      (object) =>
        (select.innerHTML += `<option value="${object.STATUS}">${object.STATUS}</option>`)
    );

    select.addEventListener("change", (event) => {
      for (var i = 0; i < oppoStatus.length; i++) {
        var object = oppoStatus[i];
        if (object.STATUS === select.value) {
          input.value = `${object.SUCCESS}`;
        }
      }
    });

    function handleSubmit(event) {
      event.preventDefault();
      let divElement = document.querySelector("div");
      for (var i = 0; i < oppoStatus.length; i++) {
        var object = oppoStatus[i];
        if (object.STATUS === select.value) {
          divElement.innerHTML = `{"status":${object.K_OPPO_STATUS}, "success":${object.SUCCESS}}`;
        }
      }
    }

    let form = document.querySelector("form");
    form.addEventListener("submit", handleSubmit);
  }
};

const fc = new FormComponent();
fc.start();
