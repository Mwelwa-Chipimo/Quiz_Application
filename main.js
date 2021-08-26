

var QuizAnsExplanationComponent = {
    template: "#quiz-ans-explanation-template",
    props: {
        question: Object
    },

    data() {
        return {
            show: false,
        }
    }
}

let QuizQuestionComponent = {
    components: {
        'quiz-ans-explanation': QuizAnsExplanationComponent
    },

    props: {
        isCompleted: Boolean,
        isDisabled: Boolean,
        question: Object
    },

    template: '#quiz-question-template'
}

var QuizReportComponent  = {
    template: '#quiz-report-template',
    props: {
        isCompleted: Boolean
    }

}

// CHANGE TO BE MADE
// Make quiz form a global component.

var QuizFormComponent = {
    template: '#quiz-form-template',

    components: {
        'quiz-question': QuizQuestionComponent,
        'quiz-report': QuizReportComponent,
        'quiz-ans-explanation': QuizAnsExplanationComponent

    },

    data() {
        return {
            isCompleted: false,
            totalAnswered: 0,
            totalScore: 0,
            errors: [],
            questions: [
                {
                    qstId: 1,
                    category: 0,
                    qstText: "Question text here.",
                    optA: "A. Option A.",
                    optB: "B. Option B.",
                    optC: "C. Option C.",
                    optD: "D. Option D.",
                    userInput: null,
                    correctAns: "D",
                    explanation: "Explanation text here."
                },
                {
                    qstId: 2,
                    category: 1,
                    qstText: "Quesition text here.",
                    optA: "A. Option A.",
                    optB: "B. Option B.",
                    optC: "C. Option C.",
                    optD: "D. Option D.",
                    userInput: null,
                    correctAns: "A",
                    explanation: "Explanation text here."
                },
                {
                    qstId: 3,
                    category: 0,
                    qstText: "Question text here.",
                    optA: "A. Option A.",
                    optB: "B. Option B.",
                    optC: "C. Option C.",
                    optD: "D. Option D.",
                    userInput: null,
                    correctAns: "C",
                    explanation: "Explanation text here."
                },
                {
                    qstId: 4,
                    category: 1,
                    qstText: "Question text here.",
                    optA: "A. Option A.",
                    optB: "B. Option B.",
                    optC: "C. Option C.",
                    optD: "D. Option D.",
                    userInput: null,
                    correctAns: "C",
                    explanation: "Explanation text here."
                }
                
            ],
            categories: {
                category_1: 0,
                category_2: 0
            }
        }
    },

//  CHANGE TO BE MADE
//  Add a computed property for the category breakdown (It shows users a breakdown of their performance by category).
    computed: {
        isDisabled () {
            return this.isCompleted
        },

        categoryBreakDown () {

        }
    },

    methods: {
        checkSubmission: function() {
            //console.log('Checking the user submission!');
            this.totalAnswered = 0;
            this.errors= [];

            for(let i = 0; i < this.questions.length; i++) {
                //Check if the user has answered the question.
                this.questions[i].userInput === null ? this.errors.push(`Question ${this.questions[i].qstId}`) : 
                this.totalAnswered++;
            }
            
            console.log('The length of the questions array is ' + this.questions.length);

            if(this.totalAnswered == this.questions.length) {
                //alert("Your answers are being marked.");
                this.isCompleted = true;
                //alert("Your answers have been marked. You can view the explanations now.");
                this.markAnswers();
            }
        },

        markAnswers: function() {
            this.totalScore = 0;

            for(let i = 0; i < this.questions.length; i++) {
                //Check if the user's answer is correct.
                this.questions[i].userInput == this.questions[i].correctAns ? this.totalScore++ && this.categories[this.questions[i].category]++: 
                console.log(`You got question ${this.questions[i].qstId} wrong.`);
            }
        }
    }
}

var Quiz = new Vue({
    el: '#app',
    components: {
        'quiz-form': QuizFormComponent
    }
})
