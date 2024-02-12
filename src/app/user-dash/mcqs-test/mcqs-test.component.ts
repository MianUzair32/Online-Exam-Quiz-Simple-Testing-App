import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mcqs-test',
  templateUrl: './mcqs-test.component.html',
  styleUrl: './mcqs-test.component.css'
})
export class McqsTestComponent {
  currentIndex = 0;
  selectedOption: string | null = null;
  constructor(private router: Router){}
  // Define your array of questions with options
  questions = [
    {
      question: 'Question 1: What is Angular?',
      options: ['A framework', 'A programming language', 'A database', 'An operating system'],
      correctAnswer: 'A framework'
    },
    {
      question: 'Question 2: How does Angular differ from AngularJS?',
      options: ['Completely different', 'Angular is the newer version', 'AngularJS is the newer version'    ],
      correctAnswer: 'Angular is the newer version'
    },
    {
      question: 'Question 3: How does Latest Version of Angular?',
      options: ['14', '15', '16','17'],
      correctAnswer: '17'
    },
    {
      question: 'Question 4: How  to created by Angular?',
      options: ['Google', 'Facebook', 'Instagram','Snapchat'],
      correctAnswer: 'Google'
    },
    {
      question: 'Question 5:What is TypeScript a Part of Angular?',
      options: ['No', 'Yes', 'All of the Above'],
      correctAnswer: 'Yes'
    },
    {
      question: 'Question 6:What is TypeScript a Part of Angular?',
      options: ['No', 'Yes', 'All of the Above'],
      correctAnswer: 'Yes'
    },
    // Add more questions as needed
  ];

  nextQuestion() {
    if (this.selectedOption==null) {
      alert('Please select your correct answer and then click to nect question')
    } else {
      if (this.currentIndex < this.questions.length - 1) {
        this.currentIndex++;
        this.selectedOption = null; // Reset selected option for the next question
      }
      
    }
  }
}
