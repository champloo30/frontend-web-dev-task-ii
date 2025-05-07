const data = [
  {
    "ohio": {
      "name": "Ohio",
      "nickname": ["The Buckeye State", "The Birthplace of Aviation"],
      "region": "Midwest",
      "capital": "Columbus",
      "established": "March 1, 1803",
      "population": 11.79,
      "governor": "Mike DeWine (R)",
      "senators": ["Sherrod Brown (D)", "J.D. Vance (R)"],
      "state-bird": "Cardinal",
      "state-flower": "Red Carnation",
      "state-insect": "Ladybug",
      "state-mammal": "White-Tailed Deer",
      "state-reptile": "Black Racer Snake",
      "state-tree": "Buckeye",
      "cities": {
        "columbus": {
          "name": "Columbus",
          "population": 913.2,
          "urban-population": 1.57,
          "metro-population": 2.14,
          "established": "February 10, 1816",
          "region": "Central Ohio",
          "classification": "Urban Suburban",
          "mayor": "Andrew Ginther",
          "avg-family-income-2016": 56.5,
          "avg-household-income-2016": 47.2,
          "avg-income-rank-2016": 141,
          "avg-family-income-2024": 70.6,
          "avg-household-income-2024": 58.6
        },
        "cincinatti": {
          "name": "Cincinatti",
          "population": 309.5,
          "urban-population": 1.69,
          "metro-population": 2.27,
          "established": "March 1, 1820",
          "region": "Southern Ohio",
          "classification": "Urban Suburban",
          "mayor": "Aftab Pureval",
          "avg-family-income-2016": 45.8,
          "avg-household-income-2016": 34.6,
          "avg-income-rank-2016": 211,
          "avg-family-income-2024": 62.5,
          "avg-household-income-2024": 45.2
        },
        "cleveland": {
          "name": "Cleveland",
          "population": 372.6,
          "urban-population": 1.71,
          "metro-population": 2.19,
          "established": "March 5, 1836",
          "region": "Northern Ohio",
          "classification": "Urban Suburban",
          "mayor": "Justin Bibb",
          "avg-family-income-2016": 32.5,
          "avg-household-income-2016": 26.6,
          "avg-income-rank-2016": 245,
          "avg-family-income-2024": 42.1,
          "avg-household-income-2024": 33.7
        },
        "toledo": {
          "avg-family-income-2016": 45.2,
          "avg-household-income-2016": 34.5,
          "avg-income-rank-2016": 218,
          "avg-family-income-2024": 53.4,
          "avg-household-income-2024": 41.7
        },
        "akron": {
          "avg-family-income-2016": 45,
          "avg-household-income-2016": 35.2,
          "avg-income-rank-2016": 219,
          "avg-family-income-2024": 54,
          "avg-household-income-2024": 42.1
        },
      }
    }
  }
]

const stateData = JSON.parse(JSON.stringify(data))

// about state section
console.log(stateData);

// form validation
const form = document.getElementById('form')
const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const confirm = document.getElementById('confirm')
const question = document.getElementById('question')

form.addEventListener('submit', (e) => {
  if (email.value !== confirm.value) {
    e.preventDefault()
    alert('Emails do not match')
  } else {
    alert(`Thank you ${firstName.value} for your question, we will respond within 24-48 hours!`)
    firstName.value = ''
    lastName.value = ''
    email.value = ''
    confirm.value = ''
    question.value = ''
  }
})
