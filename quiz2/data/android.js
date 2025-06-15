const allQuestions = {
  easy: [
    {
      question: "What is Android?",
      options: ["Operating System", "Web Browser", "Programming Language", "Database"],
      answer: "Operating System"
    },
    {
      question: "Who developed Android?",
      options: ["Apple", "Microsoft", "Google", "Android Inc."],
      answer: "Android Inc."
    },
    {
      question: "Which language is primarily used for Android development?",
      options: ["Python", "Java", "Swift", "Kotlin"],
      answer: "Java"
    },
    {
      question: "Which file contains the UI layout in Android?",
      options: [".java", ".xml", ".json", ".gradle"],
      answer: ".xml"
    },
    {
      question: "What is the entry point of an Android app?",
      options: ["Activity", "Service", "Manifest", "MainActivity"],
      answer: "MainActivity"
    },
    {
      question: "Which tool compiles Android code into APK?",
      options: ["Android SDK", "Android Studio", "Gradle", "Kotlin"],
      answer: "Gradle"
    },
    {
      question: "What does APK stand for?",
      options: ["Android Package Kit", "Android Programming Kit", "App Processing Kit", "Application Package Kernel"],
      answer: "Android Package Kit"
    },
    {
      question: "Which file declares permissions and components in Android?",
      options: ["MainActivity.java", "build.gradle", "AndroidManifest.xml", "res/layout"],
      answer: "AndroidManifest.xml"
    },
    {
      question: "What is Logcat used for?",
      options: ["Layout design", "Testing", "Logging system messages", "App publishing"],
      answer: "Logging system messages"
    },
    {
      question: "What is the base class for UI in Android?",
      options: ["Service", "Activity", "Layout", "Fragment"],
      answer: "Activity"
    }
  ],

  medium: [
    {
      question: "Which layout arranges elements vertically or horizontally?",
      options: ["ConstraintLayout", "GridLayout", "LinearLayout", "RelativeLayout"],
      answer: "LinearLayout"
    },
    {
      question: "Which Android component runs in the background?",
      options: ["Service", "Activity", "Intent", "Broadcast"],
      answer: "Service"
    },
    {
      question: "What does the `onCreate()` method do?",
      options: ["Starts background tasks", "Initializes activity", "Destroys activity", "Handles UI events"],
      answer: "Initializes activity"
    },
    {
      question: "Which folder stores images and icons?",
      options: ["java", "layout", "res/drawable", "res/values"],
      answer: "res/drawable"
    },
    {
      question: "What is an Intent?",
      options: [
        "An app setting",
        "An XML element",
        "A message to start components",
        "A layout manager"
      ],
      answer: "A message to start components"
    },
    {
      question: "Which component shows a short message on screen?",
      options: ["Toast", "Dialog", "Alert", "Snackbar"],
      answer: "Toast"
    },
    {
      question: "What is the use of RecyclerView?",
      options: ["To store data", "To show lists efficiently", "To capture user input", "To perform HTTP calls"],
      answer: "To show lists efficiently"
    },
    {
      question: "Which method is called before an activity is destroyed?",
      options: ["onStart()", "onPause()", "onCreate()", "onDestroy()"],
      answer: "onDestroy()"
    },
    {
      question: "Which of these is not a valid Android component?",
      options: ["Service", "Fragment", "Broadcast Receiver", "Servlet"],
      answer: "Servlet"
    },
    {
      question: "Which layout gives the most control over positioning?",
      options: ["LinearLayout", "ConstraintLayout", "TableLayout", "FrameLayout"],
      answer: "ConstraintLayout"
    }
  ],

  hard: [
    {
      question: "What does ANR stand for in Android?",
      options: ["Application Not Responding", "Android Network Receiver", "Another Network Request", "App Node Renderer"],
      answer: "Application Not Responding"
    },
    {
      question: "Which file handles dependencies in Android?",
      options: ["AndroidManifest.xml", "build.gradle", "settings.gradle", "MainActivity.java"],
      answer: "build.gradle"
    },
    {
      question: "Which threading class is used to perform background tasks?",
      options: ["Handler", "AsyncTask", "Broadcast", "ServiceThread"],
      answer: "AsyncTask"
    },
    {
      question: "Which lifecycle method is always followed by `onStart()`?",
      options: ["onPause()", "onResume()", "onCreate()", "onStop()"],
      answer: "onCreate()"
    },
    {
      question: "What is the purpose of ViewModel in Android?",
      options: [
        "To store UI data across lifecycle changes",
        "To store layouts",
        "To inflate views",
        "To handle network calls"
      ],
      answer: "To store UI data across lifecycle changes"
    },
    {
      question: "What is Jetpack in Android?",
      options: ["UI Library", "Set of tools and libraries", "An IDE", "Layout system"],
      answer: "Set of tools and libraries"
    },
    {
      question: "What does 'LiveData' provide?",
      options: ["Static data", "Data binding only", "Lifecycle-aware observable data", "Network caching"],
      answer: "Lifecycle-aware observable data"
    },
    {
      question: "Which method stops a service in Android?",
      options: ["stopService()", "pauseService()", "destroyService()", "endService()"],
      answer: "stopService()"
    },
    {
      question: "Which tool is used for UI testing in Android?",
      options: ["JUnit", "Mockito", "Espresso", "Robolectric"],
      answer: "Espresso"
    },
    {
      question: "Which file holds the app’s version code?",
      options: ["AndroidManifest.xml", "gradle.properties", "build.gradle", "app.config"],
      answer: "build.gradle"
    }
  ]
};
