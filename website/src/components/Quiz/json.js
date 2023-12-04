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
        "name": "major",
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
        "name": "interests",
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
        "name": "hobbies",
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
        "name": "social-skills",
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
        "name": "timeline",
        "title": "How long do you want to spend learning?",
        "isRequired": true,
        "choices": [
         {
          "value": "Less than 1 month",
          "text": "Less than 1 month"
         },
         {
          "value": "Between 1-3 months",
          "text": "Between 1-3 months"
         },
         {
          "value": "Between 3-6 months",
          "text": "Between 3-6 months"
         },
         {
          "value": "More than 6 months",
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