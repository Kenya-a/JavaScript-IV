// CODE here for your Lambda Classes

//Base Person
class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

//Build Instructor Class

class Instructor extends Person {
    constructor(about) {
        super(about);
        this.specialty = about.specialty
        this.favLanguage = about.favLanguage
        this.catchPhrase = about.catchPhrase
    }
    demo(subject) {
        return "Today we are learning about " + subject
    }
    grade(student, subject) {
        return student + " recieves a perfect score on " + subject
    }
}
///Instructor 🐱

const dan = new Instructor({
    name: 'Dan',
    age: '102',
    location: 'Space',
    specialty: 'Everything',
    favLanguage: 'All of them',
    catchPhrase: 'Adding a few minutes'
})

//Build Student Class 

class Student extends Person {
    constructor(child) {
        super(child);
        this.previousBackground = child.previousBackground
        this.className = child.className
        this.favSubjects = child.favSubjects
        this.grade = child.grade
    }

    listsSubjects() {
        this.favSubjects.map(nerd => console.log(nerd));
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject){
        return `${this.name} has begun the sprint challenge one ${subject}`
    }
}

///Students 💥
const kenya = new Student({
    name: 'Kenya',
    age: 'ancient',
    gradClassName: 'WEB21',
    favInstructor: 'you',
    location: 'Illinois',
    specialty: 'following patterns',
    favLanguage: 'JavaScript, Python',
    catchPhrase: "Huh?",
    favSubjects: ['Javascript', 'HTML', 'CSS', 'Art'],
    grade: '99.9',
});


//Build Project Manager

class ProjectManagers extends Instructor {
    constructor(lifesaver) {
        super(lifesaver);
        this.gradClassName = lifesaver.gradClassName
        this.favInstructor = lifesaver.favInstructor

    }
    standUP(slackname){
        return `${this.name} announces to ${slackname}, @channel standy times !!`
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student}'s code on ${subject}`
    }
}

/// Project Managers 🔥🔥🔥
const marguel = new ProjectManagers({
    name: 'Marguel',
    age: 'Maybe 26',
    gradClassName: 'WEBPT2',
    favInstructor: 'Me?',
    location: 'California',
    specialty: 'React',
    favLanguage: 'JavaScript, Python, Elm etc.',
    catchPhrase: "Practice Flex Zombies !!!",
});

const brandon = new ProjectManagers({
    name: 'Brandon',
    age: '34',
    gradClassName: 'WEB18',
    favInstructor: 'Professor Lambda',
    location: 'Maine',
    specialty: 'Redux',
    favLanguage: 'JavaScript, C++, Python.',
    catchPhrase: "You shall not pass!",
});

const mary = new ProjectManagers({
    name: 'Mary',
    age: '24',
    gradClassName: 'WEB18',
    favInstructor: 'Josh Knell',
    location: 'New York',
    specialty: 'Express and Node.js',
    favLanguage: 'Javascript',
    catchPhrase: "That looks AWESOME",
});

const pat = new ProjectManagers({
    name: 'Pat',
    age: '38',
    gradClassName: 'WEB18',
    favInstructor: 'Brett Madrid',
    location: 'Petaluma, Ca',
    specialty: 'empathetic to the struggle of Redux',
    favLanguage: 'JavaScript',
    catchPhrase: 'lets google that together.'
});


console.log(pat.age)//38
console.log(mary.speak());//Hello my name is Mary, I am from NewYork
console.log(dan.demo("Javascript"))//Today we are learning about Javascript
console.log(dan.grade("Kenya", "Javascript"))//Kenya recieves a perfect score on Javascript
console.log(kenya.listsSubjects());
console.log(kenya.PRAssignment("Javascript-IV"))
console.log(kenya.sprintChallenge("JS"))
console.log(marguel.standUP("WEB21_marguel"))
console.log(brandon.debugsCode("Kenya", "JS-I"))