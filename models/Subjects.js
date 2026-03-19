// Subject and Faculty data for IET Portal
const subjectsData = {
  CSE: {
    1: [
      { code: '2RABS1', name: 'Applied Mathematics-II', faculty: 'CC (Dr. Chandrashekhar)' },
      { code: '2RABS2', name: 'Applied Physics', faculty: 'SSK (Dr. Shailendra)' },
      { code: '2RCES3', name: 'Computer Programming', faculty: 'AA (Er. Arpit Agrawal)' },
      { code: '2REES4', name: 'Basic Electrical Engineering', faculty: 'VAS (Ms. Ankita Sharma)' },
      { code: '2RMES5', name: 'Engineering Graphics & Design', faculty: 'OS (Dr. Omprakash)' },
      { code: '2RAHS6', name: 'Humanities', faculty: 'ASR (Dr. Mrs. Arti)' }
    ],
    2: [
      { code: '2CS1', name: 'Applied Mathematics-II', faculty: 'Dr. Chandrashekhar' },
      { code: '2CS2', name: 'Applied Physics', faculty: 'Dr. Shailendra' },
      { code: '2CS3', name: 'Computer Programming', faculty: 'Er. Arpit Agrawal' },
      { code: '2CS4', name: 'Basic Electrical Engineering', faculty: 'Ms. Ankita Sharma' },
      { code: '2CS5', name: 'Engineering Graphics & Design', faculty: 'Dr. Omprakash' },
      { code: '2CS6', name: 'Humanities', faculty: 'Dr. Mrs. Arti' }
    ],
    3: [
      { code: '3CS1', name: 'Operating Systems', faculty: 'Dr. Manoj Tiwari' },
      { code: '3CS2', name: 'Database Management', faculty: 'Dr. Neha Jain' },
      { code: '3CS3', name: 'Computer Networks', faculty: 'Dr. Vikram Singh' },
      { code: '3CS4', name: 'Software Engineering', faculty: 'Dr. Pooja Agarwal' }
    ],
    4: [
      { code: '4CSE1', name: 'Applied Statistics', faculty: 'TBD' },
      { code: '4CSE2', name: 'Operating Systems', faculty: 'TBD' },
      { code: '4CSE3', name: 'Artificial Intelligence & Machine Learning', faculty: 'TBD' },
      { code: '4CSE4', name: 'Database Management Systems', faculty: 'TBD' },
      { code: '4CSE5', name: 'Theory of Computation', faculty: 'TBD' },
      { code: '4CSE6', name: 'Introduction to Financial Literacy', faculty: 'TBD' }
    ],
    5: [
      { code: '5CS1', name: 'Machine Learning', faculty: 'Dr. Neha Jain' },
      { code: '5CS2', name: 'Compiler Design', faculty: 'Dr. Manoj Tiwari' },
      { code: '5CS3', name: 'Mobile Computing', faculty: 'Dr. Vikram Singh' },
      { code: '5CS4', name: 'Cryptography', faculty: 'Dr. Pooja Agarwal' }
    ],
    6: [
      { code: '6CSE1', name: 'Design & Analysis of Algorithms', faculty: 'TBD' },
      { code: '6CSE2', name: 'Compiler Techniques', faculty: 'TBD' },
      { code: '6CSE3', name: 'Distributed Systems', faculty: 'TBD' },
      { code: '6CSE4', name: 'Wireless & Mobile Networks', faculty: 'TBD' },
      { code: '6CSE5', name: 'Software Engineering Practices', faculty: 'TBD' },
      { code: '6CSE6', name: 'Entrepreneurship & IPR', faculty: 'TBD' }
    ],
    7: [
      { code: '7CS1', name: 'Advanced Algorithms', faculty: 'Dr. Manoj Tiwari' },
      { code: '7CS2', name: 'Cyber Security', faculty: 'Dr. Vikram Singh' },
      { code: '7CS3', name: 'Research Methodology', faculty: 'Dr. Priya Sharma' }
    ],
    8: [
      { code: '8CSE1', name: 'Information Retrieval', faculty: 'TBD' },
      { code: '8CSE2', name: 'Information Extraction', faculty: 'TBD' },
      { code: '8CSE3', name: 'Network Security', faculty: 'TBD' },
      { code: '8CSE4', name: 'Data Sciences', faculty: 'TBD' },
      { code: '8CSE5', name: 'Soft Computing', faculty: 'TBD' }
    ]
  },
  IT: {
    1: [
      { code: '1IT1', name: 'Programming Fundamentals', faculty: 'Dr. Rajesh Kumar' },
      { code: '1IT2', name: 'Mathematics-I', faculty: 'Dr. Priya Sharma' },
      { code: '1IT3', name: 'Physics', faculty: 'Dr. Amit Singh' },
      { code: '1IT4', name: 'English Communication', faculty: 'Prof. Meera Patel' }
    ],
    2: [
      { code: '2IT1', name: 'Object Oriented Programming', faculty: 'Dr. Rajesh Kumar' },
      { code: '2IT2', name: 'Mathematics-II', faculty: 'Dr. Priya Sharma' },
      { code: '2IT3', name: 'Digital Electronics', faculty: 'Dr. Sunil Verma' },
      { code: '2IT4', name: 'Environmental Science', faculty: 'Prof. Anita Gupta' }
    ],
    3: [
      { code: '3IT1', name: 'Operating Systems', faculty: 'Dr. Manoj Tiwari' },
      { code: '3IT2', name: 'Database Systems', faculty: 'Dr. Neha Jain' },
      { code: '3IT3', name: 'Computer Networks', faculty: 'Dr. Vikram Singh' },
      { code: '3IT4', name: 'Software Engineering', faculty: 'Dr. Pooja Agarwal' }
    ],
    4: [
      { code: '4IT1', name: 'Applied Statistics', faculty: 'TBD' },
      { code: '4IT2', name: 'Analysis and Design of Algorithms', faculty: 'TBD' },
      { code: '4IT3', name: 'Database Management Systems', faculty: 'TBD' },
      { code: '4IT4', name: 'Information Retrieval', faculty: 'TBD' },
      { code: '4IT5', name: 'Web Technologies', faculty: 'TBD' },
      { code: '4IT6', name: 'Introduction to Financial Literacy', faculty: 'TBD' }
    ],
    5: [
      { code: '5IT1', name: 'Artificial Intelligence', faculty: 'Dr. Neha Jain' },
      { code: '5IT2', name: 'Information Security', faculty: 'Dr. Vikram Singh' },
      { code: '5IT3', name: 'Mobile Application Development', faculty: 'Dr. Rajesh Kumar' },
      { code: '5IT4', name: 'Computer Graphics', faculty: 'Dr. Pooja Agarwal' }
    ],
    6: [
      { code: '6IT1', name: 'Wireless Protocols & Mobile Networks', faculty: 'TBD' },
      { code: '6IT2', name: 'Design & Analysis of Algorithms', faculty: 'TBD' },
      { code: '6IT3', name: 'Network & Information Security', faculty: 'TBD' },
      { code: '6IT4', name: 'Compiler Design', faculty: 'TBD' },
      { code: '6IT5', name: 'Data Analytics', faculty: 'TBD' },
      { code: '6IT6', name: 'Entrepreneurship & IPR', faculty: 'TBD' }
    ],
    7: [
      { code: '7IT1', name: 'Advanced Web Technologies', faculty: 'Dr. Rajesh Kumar' },
      { code: '7IT2', name: 'Blockchain Technology', faculty: 'Dr. Vikram Singh' },
      { code: '7IT3', name: 'Research Methodology', faculty: 'Dr. Priya Sharma' }
    ],
    8: [
      { code: '8IT1', name: 'Data Warehousing & Mining', faculty: 'TBD' },
      { code: '8IT2', name: 'Blockchain', faculty: 'TBD' },
      { code: '8IT3', name: 'Human Computer Interaction', faculty: 'TBD' },
      { code: '8IT4', name: 'Mobile Computing', faculty: 'TBD' }
    ]
  },
  ETC: {
    1: [
      { code: '1EC1', name: 'Basic Electronics', faculty: 'Dr. Sunil Verma' },
      { code: '1EC2', name: 'Mathematics-I', faculty: 'Dr. Priya Sharma' },
      { code: '1EC3', name: 'Physics', faculty: 'Dr. Amit Singh' },
      { code: '1EC4', name: 'English Communication', faculty: 'Prof. Meera Patel' }
    ],
    2: [
      { code: '2EC1', name: 'Analog Electronics', faculty: 'Dr. Sunil Verma' },
      { code: '2EC2', name: 'Mathematics-II', faculty: 'Dr. Priya Sharma' },
      { code: '2EC3', name: 'Digital Electronics', faculty: 'Dr. Vikram Singh' },
      { code: '2EC4', name: 'Environmental Science', faculty: 'Prof. Anita Gupta' }
    ],
    3: [
      { code: '3EC1', name: 'Signals & Systems', faculty: 'Dr. Sunil Verma' },
      { code: '3EC2', name: 'Microprocessors', faculty: 'Dr. Vikram Singh' },
      { code: '3EC3', name: 'Communication Systems', faculty: 'Dr. Pooja Agarwal' },
      { code: '3EC4', name: 'Control Systems', faculty: 'Dr. Manoj Tiwari' }
    ],
    4: [
      { code: '4ETC1', name: 'Computer Architecture & Digital Design', faculty: 'TBD' },
      { code: '4ETC2', name: 'EMF & Transmission Lines', faculty: 'TBD' },
      { code: '4ETC3', name: 'Analog Communication Systems', faculty: 'TBD' },
      { code: '4ETC4', name: 'Digital Signal Processing', faculty: 'TBD' },
      { code: '4ETC5', name: 'Linear Devices & Applications', faculty: 'TBD' },
      { code: '4ETC6', name: 'Engineering Economics & Financial Management', faculty: 'TBD' }
    ],
    5: [
      { code: '5EC1', name: 'Wireless Communication', faculty: 'Dr. Sunil Verma' },
      { code: '5EC2', name: 'Embedded Systems', faculty: 'Dr. Vikram Singh' },
      { code: '5EC3', name: 'Optical Communication', faculty: 'Dr. Pooja Agarwal' },
      { code: '5EC4', name: 'Microwave Engineering', faculty: 'Dr. Manoj Tiwari' }
    ],
    6: [
      { code: '6ETC1', name: 'AI & Machine Learning', faculty: 'TBD' },
      { code: '6ETC2', name: 'Mobile & Wireless Communication', faculty: 'TBD' },
      { code: '6ETC3', name: 'SoC Design using HDL', faculty: 'TBD' },
      { code: '6ETC4', name: 'Internet of Things', faculty: 'TBD' },
      { code: '6ETC5', name: 'Control Systems', faculty: 'TBD' },
      { code: '6ETC6', name: 'Entrepreneurship & IPR', faculty: 'TBD' }
    ],
    7: [
      { code: '7EC1', name: 'Advanced Communication', faculty: 'Dr. Sunil Verma' },
      { code: '7EC2', name: 'Neural Networks', faculty: 'Dr. Vikram Singh' },
      { code: '7EC3', name: 'Research Methodology', faculty: 'Dr. Priya Sharma' }
    ],
    8: [
      { code: '8ETC1', name: 'Optical Instrumentation', faculty: 'TBD' },
      { code: '8ETC2', name: 'Optical Communication', faculty: 'TBD' },
      { code: '8ETC3', name: 'Telecom Networks & Navigation', faculty: 'TBD' },
      { code: '8ETC4', name: 'Network Security', faculty: 'TBD' }
    ]
  },
  EI: {
    1: [
      { code: '1EI1', name: 'Basic Electronics', faculty: 'Dr. Sunil Verma' },
      { code: '1EI2', name: 'Mathematics-I', faculty: 'Dr. Priya Sharma' },
      { code: '1EI3', name: 'Physics', faculty: 'Dr. Amit Singh' },
      { code: '1EI4', name: 'English Communication', faculty: 'Prof. Meera Patel' }
    ],
    2: [
      { code: '2EI1', name: 'Instrumentation', faculty: 'Dr. Sunil Verma' },
      { code: '2EI2', name: 'Mathematics-II', faculty: 'Dr. Priya Sharma' },
      { code: '2EI3', name: 'Digital Electronics', faculty: 'Dr. Vikram Singh' },
      { code: '2EI4', name: 'Environmental Science', faculty: 'Prof. Anita Gupta' }
    ],
    3: [
      { code: '3EI1', name: 'Sensors & Transducers', faculty: 'Dr. Sunil Verma' },
      { code: '3EI2', name: 'Control Systems', faculty: 'Dr. Manoj Tiwari' },
      { code: '3EI3', name: 'Microcontrollers', faculty: 'Dr. Vikram Singh' },
      { code: '3EI4', name: 'Signal Processing', faculty: 'Dr. Pooja Agarwal' }
    ],
    4: [
      { code: '4EI1', name: 'Computer Architecture & Digital Design', faculty: 'TBD' },
      { code: '4EI2', name: 'Sensors & Transducers', faculty: 'TBD' },
      { code: '4EI3', name: 'Analog & Digital Communication', faculty: 'TBD' },
      { code: '4EI4', name: 'Digital Signal Processing', faculty: 'TBD' },
      { code: '4EI5', name: 'Linear Devices & Applications', faculty: 'TBD' },
      { code: '4EI6', name: 'Engineering Economics & Financial Management', faculty: 'TBD' }
    ],
    5: [
      { code: '5EI1', name: 'PLC & SCADA', faculty: 'Dr. Sunil Verma' },
      { code: '5EI2', name: 'Robotics', faculty: 'Dr. Manoj Tiwari' },
      { code: '5EI3', name: 'Virtual Instrumentation', faculty: 'Dr. Vikram Singh' },
      { code: '5EI4', name: 'Power Electronics', faculty: 'Dr. Pooja Agarwal' }
    ],
    6: [
      { code: '6EI1', name: 'Industrial & Power Electronics', faculty: 'TBD' },
      { code: '6EI2', name: 'Object Oriented Programming', faculty: 'TBD' },
      { code: '6EI3', name: 'Control Systems', faculty: 'TBD' },
      { code: '6EI4', name: 'Mobile & Wireless Communication', faculty: 'TBD' },
      { code: '6EI5', name: 'Database Management Systems', faculty: 'TBD' },
      { code: '6EI6', name: 'Entrepreneurship & IPR', faculty: 'TBD' }
    ],
    7: [
      { code: '7EI1', name: 'Smart Instrumentation', faculty: 'Dr. Sunil Verma' },
      { code: '7EI2', name: 'Research Methodology', faculty: 'Dr. Priya Sharma' }
    ],
    8: [
      { code: '8EI1', name: 'Medical & Analytical Instrumentation', faculty: 'TBD' },
      { code: '8EI2', name: 'Intelligent Instrumentation Systems', faculty: 'TBD' },
      { code: '8EI3', name: 'Network Security', faculty: 'TBD' }
    ]
  },
  MECH: {
    1: [
      { code: '1ME1', name: 'Engineering Mechanics', faculty: 'Dr. Ramesh Gupta' },
      { code: '1ME2', name: 'Mathematics-I', faculty: 'Dr. Priya Sharma' },
      { code: '1ME3', name: 'Physics', faculty: 'Dr. Amit Singh' },
      { code: '1ME4', name: 'English Communication', faculty: 'Prof. Meera Patel' }
    ],
    2: [
      { code: '2ME1', name: 'Thermodynamics', faculty: 'Dr. Ramesh Gupta' },
      { code: '2ME2', name: 'Mathematics-II', faculty: 'Dr. Priya Sharma' },
      { code: '2ME3', name: 'Material Science', faculty: 'Dr. Suresh Patel' },
      { code: '2ME4', name: 'Environmental Science', faculty: 'Prof. Anita Gupta' }
    ],
    3: [
      { code: '3ME1', name: 'Fluid Mechanics', faculty: 'Dr. Ramesh Gupta' },
      { code: '3ME2', name: 'Heat Transfer', faculty: 'Dr. Suresh Patel' },
      { code: '3ME3', name: 'Manufacturing Processes', faculty: 'Dr. Anil Kumar' },
      { code: '3ME4', name: 'Machine Design', faculty: 'Dr. Vijay Singh' }
    ],
    4: [
      { code: '4ME1', name: 'Industrial Engineering & Management', faculty: 'TBD' },
      { code: '4ME2', name: 'Theory of Machines', faculty: 'TBD' },
      { code: '4ME3', name: 'Fluid Mechanics', faculty: 'TBD' },
      { code: '4ME4', name: 'Computer Aided Machine Design & Drawing', faculty: 'TBD' },
      { code: '4ME5', name: 'Mechatronics', faculty: 'TBD' },
      { code: '4ME6', name: 'Engineering Economics', faculty: 'TBD' }
    ],
    5: [
      { code: '5ME1', name: 'Automobile Engineering', faculty: 'Dr. Ramesh Gupta' },
      { code: '5ME2', name: 'Power Plant Engineering', faculty: 'Dr. Suresh Patel' },
      { code: '5ME3', name: 'Mechatronics', faculty: 'Dr. Anil Kumar' },
      { code: '5ME4', name: 'Quality Control', faculty: 'Dr. Vijay Singh' }
    ],
    6: [
      { code: '6ME1', name: 'Machine Design-II', faculty: 'TBD' },
      { code: '6ME2', name: 'Production Engineering', faculty: 'TBD' },
      { code: '6ME3', name: 'Fluid Machines', faculty: 'TBD' },
      { code: '6ME4', name: 'Materials Management', faculty: 'TBD' },
      { code: '6ME5', name: 'Electives', faculty: 'TBD' },
      { code: '6ME6', name: 'Entrepreneurship & IPR', faculty: 'TBD' }
    ],
    7: [
      { code: '7ME1', name: 'Advanced Manufacturing', faculty: 'Dr. Anil Kumar' },
      { code: '7ME2', name: 'Research Methodology', faculty: 'Dr. Priya Sharma' }
    ],
    8: [
      { code: '8ME1', name: 'Production & Operations Management', faculty: 'TBD' },
      { code: '8ME2', name: 'Automobile Engineering', faculty: 'TBD' },
      { code: '8ME3', name: 'Vibration & Noise Control', faculty: 'TBD' },
      { code: '8ME4', name: 'Power Plant Engineering', faculty: 'TBD' }
    ]
  },
  CIVIL: {
    1: [
      { code: '1CE1', name: 'Building Materials', faculty: 'Dr. Rajendra Prasad' },
      { code: '1CE2', name: 'Mathematics-I', faculty: 'Dr. Priya Sharma' },
      { code: '1CE3', name: 'Physics', faculty: 'Dr. Amit Singh' },
      { code: '1CE4', name: 'English Communication', faculty: 'Prof. Meera Patel' }
    ],
    2: [
      { code: '2CE1', name: 'Structural Analysis', faculty: 'Dr. Rajendra Prasad' },
      { code: '2CE2', name: 'Mathematics-II', faculty: 'Dr. Priya Sharma' },
      { code: '2CE3', name: 'Geotechnical Engineering', faculty: 'Dr. Mahesh Sharma' },
      { code: '2CE4', name: 'Environmental Science', faculty: 'Prof. Anita Gupta' }
    ],
    3: [
      { code: '3CE1', name: 'Concrete Technology', faculty: 'Dr. Rajendra Prasad' },
      { code: '3CE2', name: 'Transportation Engineering', faculty: 'Dr. Mahesh Sharma' },
      { code: '3CE3', name: 'Water Resources', faculty: 'Dr. Sunita Jain' },
      { code: '3CE4', name: 'Surveying', faculty: 'Dr. Prakash Kumar' }
    ],
    4: [
      { code: '4CE1', name: 'Engineering Geology', faculty: 'TBD' },
      { code: '4CE2', name: 'Fluid Mechanics-I', faculty: 'TBD' },
      { code: '4CE3', name: 'Design of RCC Structures-I', faculty: 'TBD' },
      { code: '4CE4', name: 'Environmental Engineering-I', faculty: 'TBD' },
      { code: '4CE5', name: 'Surveying', faculty: 'TBD' },
      { code: '4CE6', name: 'Communication Skills', faculty: 'TBD' }
    ],
    5: [
      { code: '5CE1', name: 'Earthquake Engineering', faculty: 'Dr. Rajendra Prasad' },
      { code: '5CE2', name: 'Foundation Engineering', faculty: 'Dr. Mahesh Sharma' },
      { code: '5CE3', name: 'Urban Planning', faculty: 'Dr. Sunita Jain' },
      { code: '5CE4', name: 'Project Management', faculty: 'Dr. Prakash Kumar' }
    ],
    6: [
      { code: '6CE1', name: 'Structural Analysis', faculty: 'TBD' },
      { code: '6CE2', name: 'Transportation Engineering', faculty: 'TBD' },
      { code: '6CE3', name: 'Design of Steel Structures', faculty: 'TBD' },
      { code: '6CE4', name: 'Geotechnical Engineering', faculty: 'TBD' },
      { code: '6CE5', name: 'Construction Planning & Management', faculty: 'TBD' },
      { code: '6CE6', name: 'Entrepreneurship & IPR', faculty: 'TBD' }
    ],
    7: [
      { code: '7CE1', name: 'Bridge Engineering', faculty: 'Dr. Rajendra Prasad' },
      { code: '7CE2', name: 'Research Methodology', faculty: 'Dr. Priya Sharma' }
    ],
    8: [
      { code: '8CE1', name: 'Hydraulic Structures & Irrigation', faculty: 'TBD' },
      { code: '8CE2', name: 'Construction Techniques', faculty: 'TBD' },
      { code: '8CE3', name: 'Disaster Modelling & Management', faculty: 'TBD' },
      { code: '8CE4', name: 'Building Planning & Architecture', faculty: 'TBD' }
    ]
  },
  CSBS: {
    4: [
      { code: '4CSBS1', name: 'Operating Systems', faculty: 'TBD' },
      { code: '4CSBS2', name: 'Design & Analysis of Algorithms', faculty: 'TBD' },
      { code: '4CSBS3', name: 'Software Engineering', faculty: 'TBD' },
      { code: '4CSBS4', name: 'Operations Research', faculty: 'TBD' },
      { code: '4CSBS5', name: 'Design Thinking', faculty: 'TBD' },
      { code: '4CSBS6', name: 'Innovation, IP Management & Entrepreneurship', faculty: 'TBD' },
      { code: '4CSBS7', name: 'Indian Knowledge System', faculty: 'TBD' }
    ]
  },
  BDES: {
    1: [
      { code: '1BD1', name: 'Design Fundamentals', faculty: 'Prof. Kiran Desai' },
      { code: '1BD2', name: 'Mathematics-I', faculty: 'Dr. Priya Sharma' },
      { code: '1BD3', name: 'Physics', faculty: 'Dr. Amit Singh' },
      { code: '1BD4', name: 'English Communication', faculty: 'Prof. Meera Patel' }
    ],
    2: [
      { code: '2BD1', name: 'Visual Communication', faculty: 'Prof. Kiran Desai' },
      { code: '2BD2', name: 'Mathematics-II', faculty: 'Dr. Priya Sharma' },
      { code: '2BD3', name: 'Material & Process', faculty: 'Prof. Rajesh Shah' },
      { code: '2BD4', name: 'Environmental Science', faculty: 'Prof. Anita Gupta' }
    ],
    3: [
      { code: '3BD1', name: 'Typography', faculty: 'Prof. Kiran Desai' },
      { code: '3BD2', name: 'Digital Design Tools', faculty: 'Prof. Rajesh Shah' },
      { code: '3BD3', name: 'Ergonomics', faculty: 'Prof. Priya Mehta' },
      { code: '3BD4', name: 'Color Theory', faculty: 'Prof. Vikram Rao' }
    ],
    4: [
      { code: '4BD1', name: 'Product Design', faculty: 'Prof. Kiran Desai' },
      { code: '4BD2', name: 'UX/UI Design', faculty: 'Prof. Rajesh Shah' },
      { code: '4BD3', name: 'Branding', faculty: 'Prof. Priya Mehta' },
      { code: '4BD4', name: 'Photography', faculty: 'Prof. Vikram Rao' }
    ],
    5: [
      { code: '5BD1', name: 'Interaction Design', faculty: 'Prof. Rajesh Shah' },
      { code: '5BD2', name: 'Sustainable Design', faculty: 'Prof. Priya Mehta' },
      { code: '5BD3', name: 'Design Management', faculty: 'Prof. Vikram Rao' }
    ],
    6: [
      { code: '6BD1', name: 'Advanced Digital Tools', faculty: 'Prof. Rajesh Shah' },
      { code: '6BD2', name: 'Design Research', faculty: 'Prof. Priya Mehta' },
      { code: '6BD3', name: 'Portfolio Development', faculty: 'Prof. Vikram Rao' }
    ],
    7: [
      { code: '7BD1', name: 'Design Innovation', faculty: 'Prof. Kiran Desai' },
      { code: '7BD2', name: 'Research Methodology', faculty: 'Dr. Priya Sharma' }
    ],
    8: [
      { code: '8BD1', name: 'Major Project', faculty: 'All Faculty' },
      { code: '8BD2', name: 'Seminar', faculty: 'All Faculty' }
    ]
  }
};

module.exports = subjectsData;
