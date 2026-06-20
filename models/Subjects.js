// Subject and Faculty data for IET Portal
const subjectsData = {
  CSE: {
    1: [
      { code: '1RABS1', name: 'Applied Mathematics-I', faculty: 'CC (Dr. Chandrashekhar)' },
      { code: '1RABS2', name: 'APPLIED CHEMISTRY AND ENVIROMENT SCIENCE', faculty: 'SSK (Dr. Shailendra)' },
      { code: '1RMES3', name: 'GENERAL MECHANICAL ENGINEERING', faculty: 'AA (Er. Arpit Agrawal)' },
      { code: '1RTES4', name: 'BASIC ELECTRONICS', faculty: 'VAS (Ms. Ankita Sharma)' },
      { code: '1RAHS6', name: 'TECHNICAL ENGLISH', faculty: 'OS (Dr. Omprakash)' },
      { code: '1RAHS7', name: 'DESIGN THINKING', faculty: 'ASR (Dr. Mrs. Arti)' }
    ],
    2: [
      { code: '2RABS1', name: 'Applied Mathematics-II', faculty: 'CC (Dr. Chandrashekhar)' },
      { code: '2RABS2', name: 'Applied Physics', faculty: 'SSK (Dr. Shailendra)' },
      { code: '2RCES3', name: 'Computer Programming', faculty: 'AA (Er. Arpit Agrawal)' },
      { code: '2REES4', name: 'Basic Electrical Engineering', faculty: 'VAS (Ms. Ankita Sharma)' },
      { code: '2RMES5', name: 'Engineering Graphics & Design', faculty: 'OS (Dr. Omprakash)' },
      { code: '2RAHS6', name: 'Humanities', faculty: 'ASR (Dr. Mrs. Arti)' }
    ],
    3: [
      { code: '3RCBS1', name: 'Discrete Mathematics', faculty: 'SA (Dr. Sufia Aziz)' },
      { code: '3RCPC1', name: 'Data Structures', faculty: 'VJ (Dr. Vaibhav Jain)' },
      { code: '3RCPC2', name: 'Object Oriented Programming', faculty: 'JH (Ms. Jyoti Haweliya)' },
      { code: '3RCPC3', name: 'Software Engineering & Agile Development', faculty: 'MS (Dr. Meena Sharma)' },
      { code: '3RCPC4', name: 'Digital Logic & Computer Organization', faculty: 'VJY (Mr. Jayesh Yadav)' },
      { code: '3RCIK1', name: 'Introduction to Indian Knowledge System', faculty: 'VD (Ms. Vedpriya Dongre )' },
    ],
    4: [
      { code: '4RCPC1', name: 'Applied Statistics', faculty: 'VSS (Ms. Suman Sharma)' },
      { code: '4RCPC2', name: 'Artificial Intelligence & Machine Learning Fundamentals', faculty: 'VD (Ms. Vedpriya Dongre )' },
      { code: '4RCPC3', name: 'Database Management Systems', faculty: 'VJ (Dr. Vaibhav Jain)' },
      { code: '4RCPC4', name: 'Operating Systems', faculty: 'LG (Mr. Lalit Gehlot)' },
      { code: '4RCPC5', name: 'Theory of Computation', faculty: 'BK (Dr. B.K. Joshi)' },
      { code: '4RCHS1', name: 'Introduction to Financial Literacy', faculty: 'VDS (Mr. Dhruv Somani)' },
    ],
    5: [
      { code: '5CERC1', name: 'Theory of Computation', faculty: null },
      { code: '5CERC2', name: 'Software Engineering', faculty: null },
      { code: '5CERC3', name: 'Computer Networks', faculty: null },
    ],
    6: [
      { code: '6CERC1', name: 'Design and Analysis of Algorithms', faculty: 'GLP (Dr. G.L. Prajapati)' },
      { code: '6CERC2', name: 'Compiler Techniques', faculty: 'KY (Ms. Khushboo Yadav)' },
      { code: '6CERC3', name: 'Distributed Systems', faculty: 'RV (Mr. Ravindra Verma)' },
      { code: '6CERE1', name: 'Software Engineering Practices', faculty: 'MS (Dr. Meena Sharma)' },
      { code: '6CERG4', name: 'Wireless and Mobile Networks', faculty: 'ADM (Dr. Aditya Makwe)' },
      { code: '6SCRS6', name: 'Entrepreneurship and IPR Development', faculty: 'SR (Dr. Shweta Ramchandani)' },
    ],
    7: [
      { code: '7CERC1', name: 'Distributed Computing', faculty: null },
      { code: '7CERC2', name: 'Cloud Computing', faculty: null },
      { code: '7CERC3', name: 'Artificial Intelligence', faculty: null },
      { code: '7CERE1', name: 'Deep Learning', faculty: null }
    ],
    8: [
      { code: '8CERC1', name: 'Information Retrieval & Extraction', faculty: 'VC (Dr. Vijay Choudhary)' },
      { code: '8CERC2', name: 'Network & Information Security', faculty: ' AJ (Dr. Ashish Jain)' },
      { code: '8CERC3', name: 'Data Sciences', faculty: 'JSO (Dr. Jitendra Soni)' },
      { code: '8CERE1', name: 'Soft Computing', faculty: 'AM (Er. Mr. Amit Mittal)' },
    ],
  },
  IT: {
    1: [
      { code: '1RABS1', name: 'Applied Mathematics-I', faculty: 'CC (Dr. Chandrashekhar)' },
      { code: '1RABS2', name: 'APPLIED CHEMISTRY AND ENVIROMENT SCIENCE', faculty: 'SSK (Dr. Shailendra)' },
      { code: '1RMES3', name: 'GENERAL MECHANICAL ENGINEERING', faculty: 'AA (Er. Arpit Agrawal)' },
      { code: '1RTES4', name: 'BASIC ELECTRONICS', faculty: 'VAS (Ms. Ankita Sharma)' },
      { code: '1RAHS6', name: 'TECHNICAL ENGLISH', faculty: 'OS (Dr. Omprakash)' },
      { code: '1RAHS7', name: 'DESIGN THINKING', faculty: 'ASR (Dr. Mrs. Arti)' }
    ],
    2: [
      { code: '2RABS1', name: 'Applied Mathematics-II', faculty: 'CC (Dr. Chandrashekhar)' },
      { code: '2RABS2', name: 'Applied Physics', faculty: 'SSK (Dr. Shailendra)' },
      { code: '2RCES3', name: 'Computer Programming', faculty: 'AA (Er. Arpit Agrawal)' },
      { code: '2REES4', name: 'Basic Electrical Engineering', faculty: 'VAS (Ms. Ankita Sharma)' },
      { code: '2RMES5', name: 'Engineering Graphics & Design', faculty: 'OS (Dr. Omprakash)' },
      { code: '2RAHS6', name: 'Humanities', faculty: 'ASR (Dr. Mrs. Arti)' }
    ],
    3: [
      { code: '3RIBS1', name: 'Discrete Mathematics', faculty: null },
      { code: '3RIPC1', name: 'Object Oriented Programming', faculty: null },
      { code: '3RIPC2', name: 'Data Structures', faculty: null },
      { code: '3RIPC3', name: 'Digital Electronics', faculty: null },
      { code: '3RIPC4', name: 'Computer Organization & Architecture', faculty: null },
      { code: '3RIIK1', name: 'Introduction to Indian Knowledge System', faculty: null }
    ],
    4: [
      { code: '4RIPC1', name: 'Applied Statistics for machine Learning', faculty: ' RP (Dr. Rohit Pathak)' },
      { code: '4RIPC2', name: 'Analysis and Design of Algorithms', faculty: 'SK (Ms. Sonali Korane)' },
      { code: '4RIPC3', name: 'Web Technologies', faculty: 'SK (Ms. Sonali Korane)' },
      { code: '4RIPC4', name: 'Database Management System', faculty: 'JS (Er. Mr. Jay Singh)' },
      { code: '4RIPC5', name: 'Information Retrieval', faculty: 'PK (Er. Mr. Praveen Karma)' },
      { code: '4RIHS1', name: 'Introduction to Financial Literacy', faculty: 'VV (Dr. Vivek Vyas)' }
    ],
    5: [
      { code: '5ITRC1', name: 'Theory of Computation', faculty: null },
      { code: '5ITRC2', name: 'Object Oriented Analysis & Design', faculty: null },
      { code: '5ITRC3', name: 'Computer Networks', faculty: null },
      { code: '5ITRE1', name: 'Web Technologies', faculty: null },
      { code: '5ITRG3', name: 'Applied Statistics', faculty: null },
      { code: '5SIRS5', name: 'Principles of Management', faculty: null }
    ],
    6: [
      { code: '6ITRC1', name: 'Wireless Protocols and Mobile Networks', faculty: null },
      { code: '6ITRC2', name: 'Design and Analysis of Algorithms', faculty: null },
      { code: '6ITRC3', name: 'Network and Information Security', faculty: null },
      { code: '6ITRE1', name: 'Data Analytics', faculty: null },
      { code: '6ITRG4', name: 'Compiler Design', faculty: null },
      { code: '6SIRS6', name: 'Entrepreneurship Development & IPR', faculty: null }
    ],
    7: [
      { code: '7ITRC1', name: 'Cloud Computing', faculty: null },
      { code: '7ITRC2', name: 'Computer Graphics', faculty: null },
      { code: '7ITRE1', name: 'Machine Learning', faculty: null },
      { code: '7ITRC3', name: 'Artificial Intelligence', faculty: null }
    ],
    8: [
      { code: '8ITRC1', name: 'Data Warehousing and Mining', faculty: null },
      { code: '8ITRC2', name: 'Human-Computer Interaction', faculty: null },
      { code: '8ITRE1', name: 'Block Chain Architecture Design and Use Cases', faculty: null },
      { code: '8ITRC3', name: 'Principles of Mobile Computing', faculty: null }
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
      { code: '3RTBS1', name: 'Applied Mathematics-III', faculty: null },
      { code: '3RTPC1', name: 'Digital Electronics', faculty: null },
      { code: '3RTPC2', name: 'Analog Electronics', faculty: null },
      { code: '3RTPC3', name: 'Data Structure', faculty: null },
      { code: '3RTPC4', name: 'Signal and System Analysis', faculty: null },
      { code: '3RTIK1', name: 'Introduction to Indian Knowledge System', faculty: null }
    ],
    4: [
      { code: '4RTPC1', name: 'Computer Architecture and Digital Design', faculty: null },
      { code: '4RTPC2', name: 'EMF and Transmission Line', faculty: null },
      { code: '4RTPC3', name: 'Linear Devices and Applications', faculty: null },
      { code: '4RTPC4', name: 'Analog Communication', faculty: null },
      { code: '4RTPC5', name: 'Digital Signal Processing', faculty: null },
      { code: '4RTHS1', name: 'Engineering Economics and Financial Management', faculty: null }
    ],
    5: [
      { code: '5ETRC1', name: 'Object Oriented Programming', faculty: null },
      { code: '5ETRC2', name: 'Digital Communication', faculty: null },
      { code: '5ETRC3', name: 'Microcontrollers', faculty: null }
    ],
    6: [
      { code: '6ETRC1', name: 'Mobile and Wireless Communication', faculty: null },
      { code: '6ETRC2', name: 'Internet of Things', faculty: null },
      { code: '6ETRC3', name: 'SoC Design using HDL', faculty: null }
    ],
    7: [
      { code: '7ETRC2', name: 'Operating System', faculty: null },
      { code: '7ETRC3', name: 'RF and Microwave Engineering', faculty: null },
      { code: '7ETRC4', name: 'Antenna and Wave Propagation', faculty: null }
    ],
    8: [
      { code: '8ETRC2', name: 'Telecom Network', faculty: null },
      { code: '8ETRC3', name: 'Optical Communication', faculty: null },
      { code: '8ETRC4', name: 'Satellite and Navigation System', faculty: null }
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
      { code: '3REBS1', name: 'Applied Mathematics-III', faculty: null },
      { code: '3REPC1', name: 'Digital Electronics', faculty: null },
      { code: '3REPC2', name: 'Analog Electronics', faculty: null },
      { code: '3REPC3', name: 'Data Structure', faculty: null },
      { code: '3REPC4', name: 'Signal and System Analysis', faculty: null },
      { code: '3REIK1', name: 'Introduction to Indian Knowledge System', faculty: null }
    ],
    4: [
      { code: '4REPC1', name: 'Computer Architecture and Digital Design', faculty: null },
      { code: '4REPC2', name: 'Sensors and Transducers', faculty: null },
      { code: '4REPC3', name: 'Linear Devices and Application', faculty: null },
      { code: '4REPC4', name: 'Analog and Digital Communication', faculty: null },
      { code: '4REPC5', name: 'Digital Signal Processing', faculty: null },
      { code: '4REHS1', name: 'Engineering Economics and Financial Management', faculty: null }
    ],
    5: [
      { code: '5EIRC1', name: 'SoC Design using HDL', faculty: null },
      { code: '5EIRC2', name: 'Python Programming and Applications', faculty: null },
      { code: '5EIRC3', name: 'Microcontrollers', faculty: null }
    ],
    6: [
      { code: '6EIRC1', name: 'Power Electronics', faculty: null },
      { code: '6EIRC2', name: 'Object Oriented Programming', faculty: null },
      { code: '6EIRC3', name: 'Control System', faculty: null }
    ],
    7: [
      { code: '7EIRC2', name: 'Operating System', faculty: null },
      { code: '7EIRC4', name: 'Process Instrumentation and Control', faculty: null },
      { code: '7EIRC5', name: 'Internet of Things', faculty: null }
    ],
    8: [
      { code: '8EIRC3', name: 'Optical Instrumentation', faculty: null },
      { code: '8EIRC5', name: 'Intelligent Instrumentation System', faculty: null },
      { code: '8EIRC6', name: 'Medical and Analytical Instrumentation', faculty: null }
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
      { code: '3RMBS1', name: 'Applied Mathematics-III', faculty: null },
      { code: '3RMPC1', name: 'Strength of Material', faculty: null },
      { code: '3RMPC2', name: 'Material Science', faculty: null },
      { code: '3RMPC3', name: 'Manufacturing Process', faculty: null },
      { code: '3RMPC4', name: 'Applied Thermodynamics', faculty: null },
      { code: '3RMIK1', name: 'Introduction to Indian Knowledge System', faculty: null }
    ],
    4: [
      { code: '4RMPC1', name: 'Industrial Engg & Management', faculty: null },
      { code: '4RMPC2', name: 'Theory of Machines', faculty: null },
      { code: '4RMPC3', name: 'Machine Design & Drawing', faculty: null },
      { code: '4RMPC4', name: 'Fluid Mechanics', faculty: null },
      { code: '4RMPC5', name: 'Mechatronics', faculty: null },
      { code: '4RMHS1', name: 'Engineering Economics', faculty: null }
    ],
    5: [
      { code: '5MERC1', name: 'Production Engineering - I', faculty: null },
      { code: '5MERC2', name: 'Dynamics of Machines', faculty: null },
      { code: '5MERC3', name: 'Heat Transfer', faculty: null }
    ],
    6: [
      { code: '6MERC1', name: 'Machine Design - II', faculty: null },
      { code: '6MERC2', name: 'Production Engineering - II', faculty: null },
      { code: '6MERC3', name: 'Fluid Machines', faculty: null }
    ],
    7: [
      { code: '7VLRC1', name: 'Transportation Engineering - II', faculty: null },
      { code: '7VLRC2', name: 'Design of Steel Structures - II', faculty: null },
      { code: '7VLRE1', name: 'Environmental Engineering - II', faculty: null },
      { code: '7VLRG5', name: 'Structural Analysis - II', faculty: null }
    ],
    8: [
      { code: '8VLRC1', name: 'Design of Hydraulic and Irrigation Structure', faculty: null },
      { code: '8VLRC2', name: 'Building Planning & Architecture', faculty: null },
      { code: '8VLRG6', name: 'Construction Techniques', faculty: null },
      { code: '8VLRE1', name: 'Disaster Modelling and Management', faculty: null }
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
      { code: '3RVBS1', name: 'Applied Mathematics - III', faculty: null },
      { code: '3RVPC1', name: 'Applied Mechanics & Strength of Material', faculty: null },
      { code: '3RVPC2', name: 'Surveying', faculty: null },
      { code: '3RVPC3', name: 'Construction Material & Technology', faculty: null },
      { code: '3RVPC4', name: 'Structural Mechanics', faculty: null },
      { code: '3RVIK1', name: 'Indian Knowledge System', faculty: null }
    ],
    4: [
      { code: '4RVPC1', name: 'Engineering Geology', faculty: null },
      { code: '4RVPC2', name: 'Fluid Mechanics - I', faculty: null },
      { code: '4RVPC3', name: 'Advanced Surveying', faculty: null },
      { code: '4RVPC4', name: 'Design of RCC Structures - I', faculty: null },
      { code: '4RVPC5', name: 'Environmental Engineering - I', faculty: null },
      { code: '4RVHS1', name: 'Communication Skills', faculty: null }
    ],
    5: [
      { code: '5VLRC1', name: 'Design of RCC Structures - II', faculty: null },
      { code: '5VLRC2', name: 'Fluid Mechanics - II', faculty: null },
      { code: '5VLRC3', name: 'Quantity Surveying & Costing', faculty: null },
      { code: '5VLRG3', name: 'Water Resources Engineering', faculty: null },
      { code: '5SVRS5', name: 'Management for Engineers', faculty: null }
    ],
    6: [
      { code: '6VLRC1', name: 'Structural Analysis - I', faculty: null },
      { code: '6VLRC2', name: 'Transportation Engineering - I', faculty: null },
      { code: '6VLRC3', name: 'Design of Steel Structures - I', faculty: null },
      { code: '6VLRG4', name: 'Construction Planning & Management', faculty: null },
      { code: '6SVRS6', name: 'Entrepreneurship Development & IPR', faculty: null }
    ],
    7: [
      { code: '7VLRC1', name: 'Transportation Engineering - II', faculty: null },
      { code: '7VLRC2', name: 'Design of Steel Structures - II', faculty: null },
      { code: '7VLRE1', name: 'Environmental Engineering - II', faculty: null },
      { code: '7VLRG5', name: 'Structural Analysis - II', faculty: null }
    ],
    8: [
      { code: '8VLRC1', name: 'Design of Hydraulic And Irrigation Structure', faculty: null },
      { code: '8VLRC2', name: 'Building Planning & Architecture', faculty: null },
      { code: '8VLRG6', name: 'Construction Techniques', faculty: null },
      { code: '8VLRE1', name: 'Disaster Modelling and Management', faculty: null }
    ]
  },
  CSBS: {
    1: [
      { code: '1RBBS1', name: 'Discrete Mathematics', faculty: null },
      { code: '1RBBS2', name: 'Introductory Topics in Statistics, Probability and Calculus', faculty: null },
      { code: '1RBES3', name: 'Fundamentals of Computer Science + Lab', faculty: null },
      { code: '1RBES4', name: 'Principles of Electrical Engineering + Lab', faculty: null },
      { code: '1RBBS5', name: 'Physics for Computing Science + Lab', faculty: null },
      { code: '1RBHS6', name: 'Business Communication and Value Science I', faculty: null }
    ],
    2: [
      { code: '2RBBS1', name: 'Linear Algebra', faculty: null },
      { code: '2RBBS2', name: 'Statistical Methods', faculty: null },
      { code: '2RBES3', name: 'Data Structures & Algorithms + Lab', faculty: null },
      { code: '2RBES4', name: 'Principles of Electronics + Lab', faculty: null },
      { code: '2RBBS5', name: 'Fundamentals of Economics', faculty: null },
      { code: '2RBBS6', name: 'Business Communication and Value Science-II', faculty: null },
      { code: '2RBHS7', name: 'Environmental Sciences', faculty: null }
    ],
    3: [
      { code: '3RBPC1', name: 'Formal Language and Automata Theory', faculty: null },
      { code: '3RBPC2', name: 'Computer Organization and Architecture + Lab', faculty: null },
      { code: '3RBPC3', name: 'Object Oriented Programming + Lab', faculty: null },
      { code: '3RBPC4', name: 'Database Management Systems + Lab', faculty: null },
      { code: '3RBBS1', name: 'Computational Statistics', faculty: null },
      { code: '3RBIK1', name: 'Indian Constitution', faculty: null }
    ],
    4: [
      { code: '4RBPC1', name: 'Operating Systems + Lab (Unix)', faculty: null },
      { code: '4RBPC2', name: 'Design And Analysis of Algorithms + Lab', faculty: null },
      { code: '4RBPC3', name: 'Software Engineering + Lab', faculty: null },
      { code: '4RBHS1', name: 'Introduction to Innovation, IP Management and Entrepreneurship', faculty: null },
      { code: '4RBHS2', name: 'Design Thinking', faculty: null },
      { code: '4RBES1', name: 'Operations Research + Lab', faculty: null },
      { code: '4RBIK1', name: 'Essence of Indian Traditional Knowledge', faculty: null }
    ]
  },
  BDES: {
    1: [
      { code: '1DSBS1', name: 'Applied Mathematics-II', faculty: null },
      { code: '1DSBS2', name: 'Applied Physics', faculty: null },
      { code: '1DSES3', name: 'Computer Programming', faculty: null },
      { code: '1DSES4', name: 'Basic Electrical Engineering', faculty: null },
      { code: '1DSES5', name: 'Engineering Graphics And Design', faculty: null },
      { code: '1DSHS6', name: 'Creative Skills', faculty: null }
    ],
    2: [
      { code: '2DSBS1', name: 'Applied Mathematics-I', faculty: null },
      { code: '2DSBS2', name: 'Applied Chemistry And Environment Science', faculty: null },
      { code: '2DSES3', name: 'General Mechanical Engineering', faculty: null },
      { code: '2DSES4', name: 'Basic Electronics', faculty: null },
      { code: '2DSHS6', name: 'Technical English', faculty: null },
      { code: '2RDHS7', name: 'Design Thinking', faculty: null }
    ],
    3: [
      { code: '3DS101', name: 'Object as History', faculty: null },
      { code: '3DS102', name: 'Introduction to Ergonomics in Design', faculty: null },
      { code: '3DS103', name: 'Design Arts and Aesthetics', faculty: null },
      { code: '3DS104', name: 'Materials and Processes for Model making', faculty: null },
      { code: '3DS105', name: 'Engineering for Designers', faculty: null },
      { code: '3DS106', name: 'Exploratory Design Methods', faculty: null },
      { code: '3DSIK08', name: 'Principles of Ethical Design', faculty: null }
    ],
    4: [
      { code: '4DS108', name: 'Design Research Methods', faculty: null },
      { code: '4DS109', name: 'Branding – Identity and Packaging Design', faculty: null },
      { code: '4DS110', name: 'CAD & Digital Prototyping', faculty: null },
      { code: '4DS111', name: 'System Oriented Design', faculty: null },
      { code: '4DS112', name: 'Design for Future', faculty: null }
    ],
    5: [
      { code: '5DS114', name: 'Design for UI/UX', faculty: null },
      { code: '5DS115', name: 'Service Design', faculty: null },
      { code: '5DS116', name: 'Sustainable Design', faculty: null },
      { code: '5DS117', name: 'Professional Elective 1 (Product Design & Development)', faculty: null },
      { code: '5DS118', name: 'Professional Elective 2 (Qualitative & Quantitative Methods in Design)', faculty: null }
    ],
    6: [
      { code: '6DS120', name: 'Exhibition & Space Design', faculty: null },
      { code: '6DS121', name: 'Marketing Research & Trend Analysis', faculty: null },
      { code: '6DS122', name: 'Designing for Society & Culture', faculty: null },
      { code: '6DS123', name: 'Professional Elective 3 (Transportation Design)', faculty: null },
      { code: '6DS124', name: 'Professional Elective 4 (Computer Aided Process and Planning)', faculty: null }
    ],
    7: [
      { code: '7DS126', name: 'Professional Elective 5 (Design for Product Life Cycle)', faculty: null },
      { code: '7DS127', name: 'Professional Elective 6 (Design Management & IPR)', faculty: null }
    ],
    8: [
      { code: '8DS129', name: 'Professional Elective 7 (Strategic Design Management)', faculty: null }
    ]
  }
};

module.exports = subjectsData;
