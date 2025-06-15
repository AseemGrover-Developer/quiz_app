const allQuestions = {
  easy: [
    {
      question: "Who is the creator of Linux?",
      options: ["Bill Gates", "Linus Torvalds", "Steve Jobs", "Dennis Ritchie"],
      answer: "Linus Torvalds"
    },
    {
      question: "Linux is an example of:",
      options: ["Closed-source OS", "Open-source OS", "Proprietary OS", "Freeware only"],
      answer: "Open-source OS"
    },
    {
      question: "Which of these is a Linux distribution?",
      options: ["Ubuntu", "Windows", "macOS", "Solaris"],
      answer: "Ubuntu"
    },
    {
      question: "Which command lists files in a directory?",
      options: ["ls", "cd", "mkdir", "rm"],
      answer: "ls"
    },
    {
      question: "Which command is used to change directory?",
      options: ["cd", "ls", "pwd", "mv"],
      answer: "cd"
    },
    {
      question: "Which command is used to create a file?",
      options: ["touch", "make", "ls", "dir"],
      answer: "touch"
    },
    {
      question: "What is the root user in Linux?",
      options: ["A guest user", "A standard user", "The superuser", "A network admin"],
      answer: "The superuser"
    },
    {
      question: "Which command is used to see current directory?",
      options: ["pwd", "ls", "cd", "dir"],
      answer: "pwd"
    },
    {
      question: "Linux is mainly written in which programming language?",
      options: ["Python", "Java", "C", "C++"],
      answer: "C"
    },
    {
      question: "Which symbol represents the home directory?",
      options: ["~", "#", "$", "*"],
      answer: "~"
    }
  ],

  medium: [
    {
      question: "Which command gives read, write and execute permissions to owner only?",
      options: ["chmod 700", "chmod 777", "chmod 555", "chmod 444"],
      answer: "chmod 700"
    },
    {
      question: "Which command is used to move or rename a file?",
      options: ["mv", "rm", "cp", "rename"],
      answer: "mv"
    },
    {
      question: "Which file stores user account information?",
      options: ["/etc/passwd", "/etc/shadow", "/bin/bash", "/home/user"],
      answer: "/etc/passwd"
    },
    {
      question: "What is the default shell in most Linux systems?",
      options: ["zsh", "bash", "sh", "fish"],
      answer: "bash"
    },
    {
      question: "Which command is used to search inside files?",
      options: ["grep", "find", "search", "look"],
      answer: "grep"
    },
    {
      question: "Which command is used to display system date?",
      options: ["time", "now", "date", "clock"],
      answer: "date"
    },
    {
      question: "What is the purpose of the 'sudo' command?",
      options: ["Switch user", "Run with superuser privileges", "List files", "Run shell"],
      answer: "Run with superuser privileges"
    },
    {
      question: "Which command is used to copy files?",
      options: ["mv", "cp", "copy", "clone"],
      answer: "cp"
    },
    {
      question: "Which Linux command is used to display disk usage?",
      options: ["du", "df", "free", "disk"],
      answer: "du"
    },
    {
      question: "What does the command `chmod +x file.sh` do?",
      options: ["Deletes file.sh", "Makes it executable", "Moves it", "Encrypts it"],
      answer: "Makes it executable"
    }
  ],

  hard: [
    {
      question: "Which command displays running processes?",
      options: ["ps", "run", "ls -p", "top"],
      answer: "ps"
    },
    {
      question: "Which Linux directory contains configuration files?",
      options: ["/etc", "/bin", "/usr", "/dev"],
      answer: "/etc"
    },
    {
      question: "Which signal is sent by default using kill command?",
      options: ["SIGSTOP", "SIGKILL", "SIGTERM", "SIGHUP"],
      answer: "SIGTERM"
    },
    {
      question: "Which runlevel is used for rebooting?",
      options: ["0", "1", "5", "6"],
      answer: "6"
    },
    {
      question: "What does the command `tar -xzvf file.tar.gz` do?",
      options: ["Deletes a tar", "Creates zip", "Extracts a compressed tar file", "Views tar"],
      answer: "Extracts a compressed tar file"
    },
    {
      question: "What is the purpose of the fstab file?",
      options: ["Network config", "User passwords", "Disk mounting info", "Startup logs"],
      answer: "Disk mounting info"
    },
    {
      question: "Which command schedules tasks in Linux?",
      options: ["cron", "crontab", "taskmgr", "sched"],
      answer: "crontab"
    },
    {
      question: "Which command is used to change file ownership?",
      options: ["chown", "chmod", "chperm", "own"],
      answer: "chown"
    },
    {
      question: "What does `df -h` show?",
      options: ["Hidden files", "Human-readable disk usage", "File types", "Hostname"],
      answer: "Human-readable disk usage"
    },
    {
      question: "What is the purpose of /var/log directory?",
      options: ["Temporary files", "User data", "System logs", "Mount points"],
      answer: "System logs"
    }
  ]
};
