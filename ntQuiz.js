//javascript file

  let selectedQuestions = [];

function startQuiz(numQuestions) {
  const radios = document.getElementsByClassName("option-container");
  //window.console.log(radios);
  for (i=0; i<radios.length; i++) {
    var el = radios[i];
    //window.console.log(el);
    el.classList.remove("hidden");
  }
  selectedQuestions = getRandomQuestions(newTestamentQuestions, numQuestions);
  main();
}

const newTestamentQuestions = [ // the questions go here
  
  {
    question: "In which city was Jesus born?", // - Matthew 2:1
    options: ["Nazareth", "Jerusalem", "Bethlehem", "Cana"],
    answer: "Bethlehem",
  },
  {
    question: "Who baptized Jesus?", // - Matthew 3:13-17
    options: ["Peter", "John the Baptist", "Paul", "James"],
    answer: "John the Baptist",
  },
  {
    question: "What was the first miracle Jesus performed?", // - John 2:1-11
    options: ["Healing the blind", "Turning water into wine", "Feeding the 5000", "Walking on water"],
    answer: "Turning water into wine",
  },
  {
    question: "Who betrayed Jesus to the Romans?", // - Matthew 26:14-16
    options: ["Judas Iscariot", "Pontius Pilate", "Simon Peter", "Thomas"],
    answer: "Judas Iscariot",
  },
  {
    question: "Which book comes after the four Gospels?", // - This is the fifth book in the New Testament
    options: ["Acts", "Romans", "Galatians", "Revelation"],
    answer: "Acts",
  },
  // 5
  {
    question: 'Which apostle is known as the "Apostle to the Gentiles"?', // - Romans 11:13
    options: ["Peter", "John", "Paul", "James"],
    answer: "Paul",
  },
  {
    question: "What does Jesus compare the kingdom of heaven to in one of his parables?", // - Matthew 13:31-32, 44, 45-46 
    options: ["A mustard seed", "A hidden treasure", "A pearl of great price", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "Who had a vision of a large sheet with all kinds of animals being lowered from heaven?", // - Acts 10:9-16
    options: ["Peter", "John", "Paul", "James"],
    answer: "Peter",
  },
  {
    question: "In which city was Saul (later known as Paul) heading when he encountered Jesus in a vision?", // - Acts 9:1-6
    options: ["Jerusalem", "Damascus", "Antioch", "Ephesus"],
    answer: "Damascus",
  },
  {
    question: "What was the occupation of Matthew before he became a disciple?", // - Matthew 9:9
    options: ["Fisherman", "Tax collector", "Tentmaker", "Carpenter"],
    answer: "Tax collector",
  },
  // 10
  {
    question: "In the beginning of the parable of the prodigal son, what did the younger son request from his father?", // - Luke 15:11-12
    options: [ "His share of the inheritance", "A new robe", "Forgiveness", "A feast"],
    answer: "His share of the inheritance",
  },
  {
    question: 'In the book of Revelation, who is described as "the Lamb"?', // - Revelation 5:6-14
    options: [ "God the Father", "Jesus Christ", "The Holy Spirit", "The Apostle John"],
    answer: "Jesus Christ",
  },
  {
    question: "Which group of religious leaders often opposed Jesus?", // - Matthew 12:24
    options: ["Sadducees", "Pharisees", "Levites", "Zealots"],
    answer: "Pharisees",
  },
  {
    question: "What did Jesus say about the Pharisees' tithing practices?", // - Matthew 23:23
    options: [ "They should give more", "They should give less", "They neglect more important matters", "They should not tithe"],
    answer: "They neglect more important matters",
  },
  {
    question: "What did Jesus say the Pharisees were like, when he criticized their focus on outward appearances?", // - Matthew 23:27
    options: ["Whited sepulchers", "Empty vessels", "Broken cisterns", "Fruitless trees"],
    answer: "Whited sepulchers",
  },
  // 15
  {
    question: "Which Pharisee came to visit Jesus at night?", // - John 3:1-2
    options: ["Nicodemus", "Gamaliel", "Joseph of Arimathea", "Caiaphas"],
    answer: "Nicodemus",
  },
  {
    question: "What did the Pharisees and scribes criticize Jesus for when he ate with tax collectors and sinners?", // - Luke 5:30
    options: ["Eating with unworthy people", "Not washing his hands before eating", "Ignoring their traditions", "Claiming to be the Messiah"],
    answer: "Eating with unworthy people",
  },
  {
    question: "Which Jewish festival celebrates the liberation of the Israelites from Egyptian slavery?", // - Exodus 12:14-18
    options: ["Passover", "Pentecost", "Tabernacles", "Hanukkah"],
    answer: "Passover",
  },
  {
    question: "What was the main language spoken by the Jewish people in Israel during Jesus' time?", // - There's no direct biblical reference, but historical and biblical context suggest this was the primary language.
    options: ["Hebrew", "Aramaic", "Greek", "Latin"],
    answer: "Aramaic",
  },
  {
    question: "In the Jewish tradition, which day of the week is considered the Sabbath?", // - Exodus 20:8-10
    options: ["Friday", "Saturday", "Sunday", "Monday"],
    answer: "Saturday",
  },
  // 20
  {
    question: "What was the primary place of worship and sacrifice for the Jewish people in Jesus' time?", // - Luke 2:27
    options: ["The Temple in Jerusalem", "The synagogue", "The local church", "The high priest's house"],
    answer: "The Temple in Jerusalem",
  },
  {
    question: "Which social class in Israel during Jesus' time was responsible for teaching and interpreting the Law?", // - Matthew 23:2
    options: ["Sadducees", "Pharisees", "Scribes", "Romans"],
    answer: "Scribes",
  },
  {
    question: "What is meant by textual criticism?", // - 
    options: ["Find the mistakes in the text", "Find the latest text", "Find the earliest text", "Criticize the text"],
    answer: "Find the earliest text",
  },
  {
    question: "Where are the original manuscripts of the New Testament?", // - 
    options: ["In the Ark of the Covenant", "Taken up by an angel", "In the Sacred Vault in Salt Lake City", "They don't exist"],
    answer: "They don't exist",
  },
  {
    question: "Which of the following does NOT describe Matthew", // - 
    options: ["The most structured book of the four gospels", "Was a publican (tax collector)", "Really tries to emphasize that Jesus is the Son of David", "Primary audience was the Gentiles"],
    answer: "Primary audience was the Gentiles",
  },
  // 25
  {
    question: "Which of the following was Jesus NOT tempted on by Satan?", // - Matthew 4:3-10
    options: ["Appetite", "Lusting", "Pride", "Worldly riches"],
    answer: "Lusting",
  },
  {   //  this question
    question: "What term is often used to describe the additional rules and regulations Pharisees in the \nNew Testament added to Mosaic Law to prevent any accidental violation, often referred to as \"fence laws\"?", // - 
    options: ["The Law of Moses", "The Decalogue", "The Oral Law", "The Book of Laws"],
    answer: "The Oral Law",
  },
  {
    question: "How does the story of Jesus healing the blind man on the Sabbath day challenge prevailing religious norms?", // - 
    options: ["By proving that physical ailments can only be healed on the Sabbath", "By showing that compassionate action (healing) takes precedence over strict Sabbath \"fence laws\"", "By demonstrating that Jesus' followers do not need to observe the Sabbath", "By rejecting the importance of Sabbath observance altogether"],
    answer: "By showing that compassionate action (healing) takes precedence over strict Sabbath \"fence laws\"",
  },
  {
    question: "Which of the following does NOT describe the book of John?", // - 
    options: ["Written directly for members of the Church", "Was a fisherman", "One of the synoptic gospels", "Never referred to by name"],
    answer: "One of the synoptic gospels",
  },
  {   //   this question
    question: "How does President Nelson's interpretation of Luke 21 about \"Men's hearts failing them \nfor fear\" inform our approach to personal growth and overcoming challenges?", // - 
    options: ["To eliminate all fear, we must become flawless and make no mistakes", "Fear is a negative emotion that we should suppress at all costs", "In times of fear and uncertainty, we should remember our identity and purpose, striving for improvement rather than unattainable perfection", "Overcoming fear involves demanding unreasonable expectations of ourselves"],
    answer: "In times of fear and uncertainty, we should remember our identity and purpose, striving for improvement rather than unattainable perfection",
  }
  // 30
];

/*
{
    question: "", // - 
    options: ["", "", "", ""],
    answer: "",
  }
*/

document.getElementById('startForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  var numQuestions = document.getElementById('questions').value;
  startQuiz(numQuestions);

  document.getElementById('startForm').style.display = 'none';
});

function askQuestion(questionData) {
  const questionElement = document.getElementById("question");
  const optionsElements = document.getElementsByClassName("option");
  const radioButtons = document.getElementsByName("answer");

  questionElement.textContent = questionData.question;

  for (let index = 0; index < questionData.options.length; index++) {
    optionsElements[index].textContent = `${index + 1}. ${questionData.options[index]}`;
    radioButtons[index].value = index + 1;
  }
}

function checkAnswer(userAnswer, questionData) {
  return questionData.options[userAnswer - 1] === questionData.answer;
}

function resetAnswerSelection() {
  const radioButtons = document.querySelectorAll('input[name="answer"]');
  radioButtons.forEach((radioButton) => {
    radioButton.checked = false;
  });
}

function getRandomQuestions(newTestamentQuestions, numQuestions) {
  for (let i = newTestamentQuestions.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [newTestamentQuestions[i], newTestamentQuestions[j]] = [newTestamentQuestions[j], newTestamentQuestions[i]];
  }
  return newTestamentQuestions.slice(0, numQuestions);
}

function main() {
  const totalQuestions = selectedQuestions.length;

  let currentQuestion = 0;
  let correctAnswers = 0;

  const nextButton = document.getElementById("nextButton");

  nextButton.addEventListener("click", () => {
    const userAnswer = parseInt(document.querySelector('input[name="answer"]:checked').value);

    if (checkAnswer(userAnswer, selectedQuestions[currentQuestion])) {
      correctAnswers++;
    }

    resetAnswerSelection();

    currentQuestion++;

    if (currentQuestion < totalQuestions) {
      askQuestion(selectedQuestions[currentQuestion]);
    } else {
      alert(`Your score is ${correctAnswers}/${totalQuestions}`);
    }
  });

  askQuestion(selectedQuestions[currentQuestion]);
}

document.getElementById("restartQuiz").addEventListener("click", function () {
  location.reload();
});

//document.getElementById('quiz').classList.add('hidden');  // Initially hide the quiz
