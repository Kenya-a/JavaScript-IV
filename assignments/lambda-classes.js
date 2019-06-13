// CODE here for your Lambda Classes

//Base Person
class Person{
    constructor(attr){
    this.name = attr.name;
    this.age = attr.age;
    this.location = attr.location;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

//Build Instructor Class

class Instructor extends Person{
    constructor(about){
      super (about);
      this.specialty = about.specialty
      this.favLanguage = about.favLanguage
      this.catchPhrase = about.catchPhrase  
    }

    // demo() {
    //     return `Today we are learning about ${this.specialty}`
    // }
  }

  //Build Student Class

  class Student extends Person{
      constructor(child){
          super(child);
          this.previousBackground = child.previousBackground
          this.className = child.className
          this.favSubjects = child.favSubjects
          this
      }
  }

  //Build Project Manager

  class ProjectManagers extends Instructor{
      constructor(lifesaver){
          super(lifesaver);
          this.gradClassName = lifesaver.gradClassName
          this.favInstructor = lifesaver.favInstructor

      }
  }
  ///Instructor 🐱

  const dan = new Instructor({
      name: 'Dan',
      age:  '102',
      location: 'Space',
      specialty: 'Everything',
      favLanguage:'All of them',
      catchPhrase: 'Adding a few minutes'
  })


  /// Project Managers 🔥🔥🔥
const marguel = new ProjectManager({
  name: 'Marguel',
  age: 'Maybe 26',
  gradClassName: 'WEBPT2',
  favInstructor: 'Me?',
  location: 'California',
  specialty: 'React',
  favLanguage: 'JavaScript, Python, Elm etc.',
  catchPhrase: "Practice Flex Zombies !!!",
 });

 const brandon = new ProjectManager({
    name: 'Brandon',
    age: '34',
    gradClassName: 'WEB18',
    favInstructor: 'Professor Lambda',
    location: 'Maine',
    specialty: 'Redux',
    favLanguage: 'JavaScript, C++, Python.',
    catchPhrase: "You shall not pass!",
  });

  const mary = new ProjectManager({
    name: 'Mary',
    age: '24',
    gradClassName: 'WEB18',
    favInstructor: 'Josh Knell',
    location: 'New York',
    specialty: 'Express and Node.js',
    favLanguage: 'Javascript',
    catchPhrase:  "That looks AWESOME",
  });

  const pat = new ProjectManager({
    name: 'Pat',
    age: '38',
    gradClassName: 'WEB18',
    favInstructor: 'Brett Madrid',
    location: 'Petaluma, Ca',
    specialty: 'empathetic to the struggle of Redux',
    favLanguage: 'JavaScript',
    catchPhrase: 'lets google that together.'
  });