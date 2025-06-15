const allQuestions = {
  easy: [
    {
      question: "What does DBMS stand for?",
      options: ["Data Base Management System", "Data Base Main Server", "Digital Base Memory System", "Data Built Management Set"],
      answer: "Data Base Management System"
    },
    {
      question: "Which of the following is a DBMS software?",
      options: ["MySQL", "HTML", "Linux", "Windows"],
      answer: "MySQL"
    },
    {
      question: "What is a database?",
      options: ["A website", "A collection of data", "A programming language", "A data model"],
      answer: "A collection of data"
    },
    {
      question: "Which of the following is NOT a type of DBMS?",
      options: ["Hierarchical", "Network", "Relational", "Directional"],
      answer: "Directional"
    },
    {
      question: "Which language is used to manage data in a DBMS?",
      options: ["SQL", "HTML", "CSS", "XML"],
      answer: "SQL"
    },
    {
      question: "What is a table in a database?",
      options: ["A physical file", "A set of rows and columns", "A Java method", "An algorithm"],
      answer: "A set of rows and columns"
    },
    {
      question: "Which key uniquely identifies a record in a table?",
      options: ["Foreign Key", "Secondary Key", "Primary Key", "Candidate Key"],
      answer: "Primary Key"
    },
    {
      question: "Which of these is NOT a SQL command?",
      options: ["SELECT", "DELETE", "INSERT", "DESIGN"],
      answer: "DESIGN"
    },
    {
      question: "Which clause is used to filter records in SQL?",
      options: ["ORDER BY", "GROUP BY", "WHERE", "HAVING"],
      answer: "WHERE"
    },
    {
      question: "What does RDBMS stand for?",
      options: ["Remote DBMS", "Relational DBMS", "Raw DBMS", "Required DBMS"],
      answer: "Relational DBMS"
    }
  ],

  medium: [
    {
      question: "Which of the following is a property of transactions?",
      options: ["CRUD", "HTTP", "ACID", "JOIN"],
      answer: "ACID"
    },
    {
      question: "Which command removes all records from a table but not the table itself?",
      options: ["DROP", "DELETE", "TRUNCATE", "REMOVE"],
      answer: "TRUNCATE"
    },
    {
      question: "Which key acts as a link between two tables?",
      options: ["Primary Key", "Unique Key", "Foreign Key", "Super Key"],
      answer: "Foreign Key"
    },
    {
      question: "What does normalization do?",
      options: ["Improves UI", "Reduces redundancy", "Adds tables", "Increases redundancy"],
      answer: "Reduces redundancy"
    },
    {
      question: "Which normal form removes partial dependency?",
      options: ["1NF", "2NF", "3NF", "BCNF"],
      answer: "2NF"
    },
    {
      question: "Which JOIN returns all records when there is a match in either table?",
      options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
      answer: "FULL OUTER JOIN"
    },
    {
      question: "Which SQL keyword is used to sort results?",
      options: ["GROUP BY", "WHERE", "ORDER BY", "FILTER"],
      answer: "ORDER BY"
    },
    {
      question: "What is a view in SQL?",
      options: ["A stored file", "A temporary table", "A virtual table", "A new schema"],
      answer: "A virtual table"
    },
    {
      question: "Which constraint ensures unique values in a column?",
      options: ["NOT NULL", "CHECK", "UNIQUE", "DEFAULT"],
      answer: "UNIQUE"
    },
    {
      question: "Which command changes the structure of a table?",
      options: ["MODIFY", "ALTER", "UPDATE", "INSERT"],
      answer: "ALTER"
    }
  ],

  hard: [
    {
      question: "Which normal form eliminates transitive dependency?",
      options: ["1NF", "2NF", "3NF", "BCNF"],
      answer: "3NF"
    },
    {
      question: "Which type of index is created automatically for a primary key?",
      options: ["Secondary Index", "Composite Index", "Unique Index", "Clustered Index"],
      answer: "Clustered Index"
    },
    {
      question: "What is the result of a Cartesian Join?",
      options: ["All rows with NULL", "Only matched rows", "All possible row combinations", "Only unique keys"],
      answer: "All possible row combinations"
    },
    {
      question: "Which of the following ensures atomicity?",
      options: ["Primary Key", "Transaction", "Trigger", "Cursor"],
      answer: "Transaction"
    },
    {
      question: "Which recovery technique uses logs?",
      options: ["Checkpointing", "Shadow Paging", "Log-Based Recovery", "Mirroring"],
      answer: "Log-Based Recovery"
    },
    {
      question: "Which of these is not a schedule type in concurrency control?",
      options: ["Serializable", "Non-serial", "Recoverable", "Redundant"],
      answer: "Redundant"
    },
    {
      question: "What is a deadlock in DBMS?",
      options: [
        "Database crash",
        "When two transactions wait on each other",
        "Data loss during commit",
        "Corrupted schema"
      ],
      answer: "When two transactions wait on each other"
    },
    {
      question: "Which isolation level has the highest level of consistency?",
      options: ["Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable"],
      answer: "Serializable"
    },
    {
      question: "Which of the following is a DCL command?",
      options: ["SELECT", "GRANT", "INSERT", "CREATE"],
      answer: "GRANT"
    },
    {
      question: "Which file stores the structure of a database?",
      options: ["Data Dictionary", "Log File", "Backup File", "Query File"],
      answer: "Data Dictionary"
    }
  ]
};
