const quizData = [
  {
      question: "Inside which HTML element do we put the JavaScript?",
      a: "<script>",
      b: "<JavaScript>",
      c: "<js>",
      d: "None of the above",
      correct: "a",
    },
  {
      question: "Where is the correct place to insert a JavaScript?",
      a: "<body>",
      b: "<head>",
      c: "Both a and b",
      d: "<html>",
      correct: "c",
    },
  {
      question: "How do you create a function in JavaScript?",
      a: "function myfunc()",
      b: "function() ",
      c: "let function()",
      d: "None of the above",
      correct: "a",
    },
  {
      question: "How do you call a function named "+"myFunction?",
      a: "myFunction()",
      b: "call myFunction()",
      c: "console.log(myFunction)",
      d: "myFunction",
      correct: "a",
    },
  ];
  const quiz= document.getElementById('quiz');
  const answerEls = document.querySelectorAll('.answer');
  const questionEl = document.getElementById('question');
  const a_text = document.getElementById('a_text');
  const b_text = document.getElementById('b_text');
  const c_text = document.getElementById('c_text');
  const d_text = document.getElementById('d_text');
  const submitBtn = document.getElementById('submit');
  let currentQuiz = 0;
  let score = 0;
  loadQuiz();
  function loadQuiz() {
      deselectAnswers();
      const currentQuizData = quizData[currentQuiz];
      questionEl.innerText = currentQuizData.question;
      a_text.innerText = currentQuizData.a;
      b_text.innerText = currentQuizData.b;
      c_text.innerText = currentQuizData.c;
      d_text.innerText = currentQuizData.d;
  }
  function deselectAnswers() {
      answerEls.forEach(answerEl => answerEl.checked = false);
  }
  function getSelected() {
      let answer;
      answerEls.forEach(answerEl => {
          if(answerEl.checked) {
              answer = answerEl.id;
          }
      })
      return answer;
  }
  submitBtn.addEventListener('click', () => {
      const answer = getSelected();
      if(answer) {
         if(answer === quizData[currentQuiz].correct) {
             score++;
         }
         currentQuiz++
         if(currentQuiz < quizData.length) {
             loadQuiz();
         } else {
             quiz.innerHTML = `
             <h2>You answered ${score}/${quizData.length} questions correctly</h2>
             <button onclick="location.reload()">Reload</button>
             `
         }
      }
  })