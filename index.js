const form = document.querySelector("form")

form.addEventListener("submit", event => {
  event.preventDefault()

  const formData = new FormData(event.target)
  const enteredData = {
    "text-input": formData.get("text-input"),
    "email-input": formData.get("email-input"),
    "url-input": formData.get("url-input"),
    "number-input": formData.get("number-input"),
    "range-input": formData.get("range-input"),
    "date-input": formData.get("date-input"),
    "time-input": formData.get("time-input"),
    "month-input": formData.get("month-input"),
    "color-input": formData.get("color-input"),
    "textarea-input": formData.get("textarea-input"),
    "service-level": formData.get("service-level"),
    "service-level-with-groups": formData.get("service-level-with-groups"),
    "age": formData.get("age"),
    "toppings": formData.get("toppings"),
    "terms-and-conditions": formData.get("terms-and-conditions"),
    "email-list": formData.get("email-list"),
  }

  console.table(enteredData)
})
