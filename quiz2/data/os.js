const allQuestions = {
  easy: [
    {
      question: "What is an Operating System?",
      options: ["Application software", "Compiler", "System software", "Utility"],
      answer: "System software"
    },
    {
      question: "Which of the following is NOT an OS?",
      options: ["Linux", "Windows", "Oracle", "macOS"],
      answer: "Oracle"
    },
    {
      question: "Which OS is developed by Microsoft?",
      options: ["Linux", "Ubuntu", "Windows", "DOS"],
      answer: "Windows"
    },
    {
      question: "Which OS uses a command-line interface by default?",
      options: ["Windows", "Linux", "macOS", "Android"],
      answer: "Linux"
    },
    {
      question: "Which of these is a function of OS?",
      options: ["Compiling", "Managing hardware", "Designing websites", "Debugging"],
      answer: "Managing hardware"
    },
    {
      question: "Which component of OS manages memory?",
      options: ["Kernel", "Shell", "BIOS", "Cache"],
      answer: "Kernel"
    },
    {
      question: "Which is the first program run on a computer when it starts?",
      options: ["Kernel", "Bootstrap", "Shell", "OS"],
      answer: "Bootstrap"
    },
    {
      question: "Which of these is NOT a type of OS?",
      options: ["Batch", "Time-sharing", "Real-time", "Firewall"],
      answer: "Firewall"
    },
    {
      question: "What does GUI stand for?",
      options: ["Global User Interface", "Graphical Utility Interface", "Graphical User Interface", "General User Interface"],
      answer: "Graphical User Interface"
    },
    {
      question: "Which layer interacts directly with the hardware?",
      options: ["Shell", "Kernel", "User", "Application"],
      answer: "Kernel"
    }
  ],

  medium: [
    {
      question: "Which algorithm selects the process with the shortest burst time?",
      options: ["FCFS", "SJF", "Round Robin", "Priority"],
      answer: "SJF"
    },
    {
      question: "What is a deadlock?",
      options: ["Infinite loop", "Resource waiting cycle", "Process termination", "System error"],
      answer: "Resource waiting cycle"
    },
    {
      question: "Which memory management technique divides memory into equal parts?",
      options: ["Paging", "Segmentation", "Swapping", "Partitioning"],
      answer: "Paging"
    },
    {
      question: "In Round Robin scheduling, what is the time slice called?",
      options: ["Quantum", "Burst", "Slot", "Cycle"],
      answer: "Quantum"
    },
    {
      question: "Which of the following is a non-preemptive scheduling algorithm?",
      options: ["SJF", "Round Robin", "FCFS", "Priority"],
      answer: "FCFS"
    },
    {
      question: "Which condition is necessary for deadlock?",
      options: ["Mutual exclusion", "Priority inversion", "Preemption", "Context switch"],
      answer: "Mutual exclusion"
    },
    {
      question: "What is the main role of device drivers?",
      options: ["Update OS", "Manage applications", "Interface with hardware", "Add memory"],
      answer: "Interface with hardware"
    },
    {
      question: "What is context switching?",
      options: ["User switching to admin", "Switching tabs", "Saving and loading process state", "Network switching"],
      answer: "Saving and loading process state"
    },
    {
      question: "Which memory is fastest?",
      options: ["Hard disk", "RAM", "Cache", "Flash"],
      answer: "Cache"
    },
    {
      question: "Which system call is used to create a process in Unix?",
      options: ["exec()", "fork()", "create()", "run()"],
      answer: "fork()"
    }
  ],

  hard: [
    {
      question: "What does a semaphore do in OS?",
      options: ["Measure time", "Handle signals", "Control access to resources", "Run processes"],
      answer: "Control access to resources"
    },
    {
      question: "Which of these is a page replacement algorithm?",
      options: ["FIFO", "FCFS", "SJF", "Round Robin"],
      answer: "FIFO"
    },
    {
      question: "What is the Banker's algorithm used for?",
      options: ["Scheduling", "Deadlock avoidance", "File management", "Memory allocation"],
      answer: "Deadlock avoidance"
    },
    {
      question: "What is thrashing?",
      options: ["Virus infection", "Disk failure", "High paging activity", "Resource blocking"],
      answer: "High paging activity"
    },
    {
      question: "Which OS architecture allows layers of abstraction?",
      options: ["Monolithic", "Layered", "Virtual", "Hybrid"],
      answer: "Layered"
    },
    {
      question: "Which algorithm uses aging to avoid starvation?",
      options: ["Round Robin", "Priority Scheduling", "FCFS", "SJF"],
      answer: "Priority Scheduling"
    },
    {
      question: "What is a monitor in OS?",
      options: ["Display device", "Synchronization construct", "User session", "Process viewer"],
      answer: "Synchronization construct"
    },
    {
      question: "What is the main advantage of virtual memory?",
      options: ["Faster CPU", "Larger address space", "Smaller RAM", "Fewer bugs"],
      answer: "Larger address space"
    },
    {
      question: "In paging, what stores the mapping between logical and physical addresses?",
      options: ["Page table", "Frame list", "Swap file", "Cache"],
      answer: "Page table"
    },
    {
      question: "Which type of OS is used in embedded systems?",
      options: ["Batch", "Real-time", "Multitasking", "Time-sharing"],
      answer: "Real-time"
    }
  ]
};
