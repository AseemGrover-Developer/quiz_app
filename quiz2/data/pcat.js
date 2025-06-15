const allQuestions = {
  easy: [
    {
      question: "What does PCAT stand for?",
      options: ["Personal Computer Assembly & Testing", "PC Assembling and Troubleshooting", "PC Applications Technology", "PC Automation Tools"],
      answer: "PC Assembling and Troubleshooting"
    },
    {
      question: "Which component is known as the brain of the computer?",
      options: ["RAM", "Hard Disk", "CPU", "Motherboard"],
      answer: "CPU"
    },
    {
      question: "What is the function of RAM in a PC?",
      options: ["Stores permanent data", "Processes data", "Stores temporary data", "Controls peripherals"],
      answer: "Stores temporary data"
    },
    {
      question: "Which part of the computer connects all components?",
      options: ["CPU", "Motherboard", "Hard disk", "Monitor"],
      answer: "Motherboard"
    },
    {
      question: "What is the purpose of SMPS in a PC?",
      options: ["Store data", "Provide power supply", "Cool the system", "Boot the OS"],
      answer: "Provide power supply"
    },
    {
      question: "Which storage device is used to store the operating system?",
      options: ["RAM", "Cache", "Hard Disk", "BIOS"],
      answer: "Hard Disk"
    },
    {
      question: "What is a POST in computer booting?",
      options: ["Peripheral Output Scan Test", "Power On Self Test", "Program Over Signal Test", "Processor On System Test"],
      answer: "Power On Self Test"
    },
    {
      question: "Which tool is used to tighten PC components?",
      options: ["Hammer", "Screwdriver", "Pliers", "Drill"],
      answer: "Screwdriver"
    },
    {
      question: "Which component cools the processor?",
      options: ["Power Supply", "Hard Drive", "Heatsink/Fan", "CMOS battery"],
      answer: "Heatsink/Fan"
    },
    {
      question: "What is the use of thermal paste?",
      options: ["Increases heat", "Acts as insulation", "Helps in cooling CPU", "Stores data"],
      answer: "Helps in cooling CPU"
    }
  ],

  medium: [
    {
      question: "Which slot on motherboard is used for graphics cards?",
      options: ["PCI", "AGP", "PCIe", "IDE"],
      answer: "PCIe"
    },
    {
      question: "Which file system is used by Windows?",
      options: ["EXT4", "FAT32", "NTFS", "HFS+"],
      answer: "NTFS"
    },
    {
      question: "What does CMOS battery power?",
      options: ["CPU", "RAM", "BIOS settings", "Hard drive"],
      answer: "BIOS settings"
    },
    {
      question: "How do you identify faulty RAM?",
      options: ["No boot beep", "Screen flicker", "Continuous beep", "Mouse error"],
      answer: "Continuous beep"
    },
    {
      question: "Which tool is used to test power supply output?",
      options: ["Ohmmeter", "Screwdriver", "Multimeter", "Thermal scanner"],
      answer: "Multimeter"
    },
    {
      question: "What should you do before touching internal PC parts?",
      options: ["Wash hands", "Plug in system", "Wear gloves", "Discharge static electricity"],
      answer: "Discharge static electricity"
    },
    {
      question: "Which component is responsible for booting the OS?",
      options: ["SMPS", "CPU", "BIOS", "Heatsink"],
      answer: "BIOS"
    },
    {
      question: "Which cable is used for SATA hard drives?",
      options: ["IDE", "SATA", "VGA", "HDMI"],
      answer: "SATA"
    },
    {
      question: "What is the purpose of device drivers?",
      options: ["Run programs", "Interface OS with hardware", "Improve graphics", "Run antivirus"],
      answer: "Interface OS with hardware"
    },
    {
      question: "Which connector powers the motherboard?",
      options: ["SATA cable", "24-pin ATX", "HDMI", "VGA"],
      answer: "24-pin ATX"
    }
  ],

  hard: [
    {
      question: "What is the purpose of BIOS beep codes?",
      options: ["Show boot logo", "Indicate OS error", "Diagnose hardware faults", "Run antivirus"],
      answer: "Diagnose hardware faults"
    },
    {
      question: "Which tool is used to remove heat sinks safely?",
      options: ["Flat-head screwdriver", "Anti-static brush", "Spudger", "Multimeter"],
      answer: "Spudger"
    },
    {
      question: "What can cause a system to restart frequently?",
      options: ["Faulty GPU", "Loose power cable", "Bad RAM", "All of these"],
      answer: "All of these"
    },
    {
      question: "What happens if the CPU fan fails?",
      options: ["Nothing", "System becomes faster", "CPU overheats", "Display error only"],
      answer: "CPU overheats"
    },
    {
      question: "Which software checks disk errors and repairs them?",
      options: ["CHKDSK", "Firewall", "BIOS", "Partition Wizard"],
      answer: "CHKDSK"
    },
    {
      question: "What is IRQ in PC systems?",
      options: ["Interrupt Request", "Internal RAM Query", "Instruction Register Queue", "Input Resource Queue"],
      answer: "Interrupt Request"
    },
    {
      question: "Which utility is used to see all connected hardware in Windows?",
      options: ["Control Panel", "Task Manager", "Device Manager", "MSConfig"],
      answer: "Device Manager"
    },
    {
      question: "If a system displays 'No Boot Device Found', what could be the issue?",
      options: ["Bad RAM", "Faulty monitor", "Loose SATA cable", "Overheating"],
      answer: "Loose SATA cable"
    },
    {
      question: "What does POST card do?",
      options: ["Display BIOS version", "Diagnose boot errors", "Format hard disk", "Check RAM"],
      answer: "Diagnose boot errors"
    },
    {
      question: "What is the function of thermal sensor in PC?",
      options: ["Sound generation", "Power supply check", "Temperature monitoring", "Screen control"],
      answer: "Temperature monitoring"
    }
  ]
};
