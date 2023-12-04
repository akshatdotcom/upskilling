export const json = {
    "title": "Career Matching Survey",
    "description": "Please fill out the questions to find your job matches",
    "logoPosition": "right",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "text",
        "name": "question1",
        "title": "What is your major?",
        "isRequired": true
       }
      ],
      "title": "Major"
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "comment",
        "name": "question2",
        "title": "What are some of your interests?",
        "description": "Separate each interest with a comma",
        "isRequired": true
       }
      ],
      "title": "Interests"
     },
     {
      "name": "page3",
      "elements": [
       {
        "type": "comment",
        "name": "question3",
        "title": "What are some of your academic hobbies?",
        "description": "Separate each interest with a comma",
        "isRequired": true
       }
      ],
      "title": "Hobbies"
     },
     {
      "name": "page4",
      "elements": [
       {
        "type": "rating",
        "name": "question4",
        "title": "On a scale of 1-5, how social are you?",
        "description": "1 - Not Social, 5 - Very Social",
        "isRequired": true
       }
      ],
      "title": "People Skills"
     },
     {
      "name": "page6",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question5",
        "title": "How long do you want to spend learning?",
        "isRequired": true,
        "choices": [
         {
          "value": "Item 1",
          "text": "Less than 1 month"
         },
         {
          "value": "Item 2",
          "text": "Between 1-3 months"
         },
         {
          "value": "Item 3",
          "text": "Between 3-6 months"
         },
         {
          "value": "Item 4",
          "text": "More than 6 months"
         }
        ]
       }
      ],
      "title": "Timeline"
     }
    ],
    "headerView": "advanced"
   }