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
      { code: '4RCPC1', name: 'Applied Statistics', faculty: 'VSS (Mrs. Suman Sharma)' },
      { code: '4RCPC2', name: 'AI & ML Fundamentals', faculty: 'VD (Ms. Vedpriya Dongre)' },
      { code: '4RCPC3', name: 'Database Management Systems', faculty: 'VJ (Dr. Vaibhav Jain)' },
      { code: '4RCPC4', name: 'Operating Systems', faculty: 'LG (Mr. Lalit Gehlot)' },
      { code: '4RCPC5', name: 'Theory of Computation', faculty: 'BK (Dr. B.K. Joshi)' },
      { code: '4RCHS1', name: 'Introduction to Financial Literacy', faculty: 'DS (Mr. Dhruv Somani)' },
      { code: '4RCPC6', name: 'IoT Lab', faculty: 'VV (Mr. Vikas Vankhede)' }
    ],
    5: [
      { code: '5CS1', name: 'Machine Learning', faculty: 'Dr. Neha Jain' },
      { code: '5CS2', name: 'Compiler Design', faculty: 'Dr. Manoj Tiwari' },
      { code: '5CS3', name: 'Mobile Computing', faculty: 'Dr. Vikram Singh' },
      { code: '5CS4', name: 'Cryptography', faculty: 'Dr. Pooja Agarwal' }
    ],
    6: [
      { code: '6CS1', name: 'Cloud Computing', faculty: 'Dr. Rajesh Kumar' },
      { code: '6CS2', name: 'Big Data Analytics', faculty: 'Dr. Neha Jain' },
      { code: '6CS3', name: 'IoT', faculty: 'Dr. Vikram Singh' },
      { code: '6CS4', name: 'Project Management', faculty: 'Dr. Pooja Agarwal' }
    ],
    7: [
      { code: '7CS1', name: 'Advanced Algorithms', faculty: 'Dr. Manoj Tiwari' },
      { code: '7CS2', name: 'Cyber Security', faculty: 'Dr. Vikram Singh' },
      { code: '7CS3', name: 'Research Methodology', faculty: 'Dr. Priya Sharma' }
    ],
    8: [
      { code: '8CS1', name: 'Major Project', faculty: 'All Faculty' },
      { code: '8CS2', name: 'Seminar', faculty: 'All Faculty' }
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
      { code: '4IT1', name: 'Web Development', faculty: 'Dr. Rajesh Kumar' },
      { code: '4IT2', name: 'Data Structures & Algorithms', faculty: 'Dr. Manoj Tiwari' },
      { code: '4IT3', name: 'System Programming', faculty: 'Dr. Vikram Singh' },
      { code: '4IT4', name: 'Discrete Mathematics', faculty: 'Dr. Priya Sharma' }
    ],
    5: [
      { code: '5IT1', name: 'Artificial Intelligence', faculty: 'Dr. Neha Jain' },
      { code: '5IT2', name: 'Information Security', faculty: 'Dr. Vikram Singh' },
      { code: '5IT3', name: 'Mobile Application Development', faculty: 'Dr. Rajesh Kumar' },
      { code: '5IT4', name: 'Computer Graphics', faculty: 'Dr. Pooja Agarwal' }
    ],
    6: [
      { code: '6IT1', name: 'Cloud Computing', faculty: 'Dr. Rajesh Kumar' },
      { code: '6IT2', name: 'Data Mining', faculty: 'Dr. Neha Jain' },
      { code: '6IT3', name: 'IoT & Embedded Systems', faculty: 'Dr. Vikram Singh' },
      { code: '6IT4', name: 'Software Testing', faculty: 'Dr. Pooja Agarwal' }
    ],
    7: [
      { code: '7IT1', name: 'Advanced Web Technologies', faculty: 'Dr. Rajesh Kumar' },
      { code: '7IT2', name: 'Blockchain Technology', faculty: 'Dr. Vikram Singh' },
      { code: '7IT3', name: 'Research Methodology', faculty: 'Dr. Priya Sharma' }
    ],
    8: [
      { code: '8IT1', name: 'Major Project', faculty: 'All Faculty' },
      { code: '8IT2', name: 'Seminar', faculty: 'All Faculty' }
    ]
  },
  ECE: {
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
      { code: '4EC1', name: 'Digital Signal Processing', faculty: 'Dr. Sunil Verma' },
      { code: '4EC2', name: 'VLSI Design', faculty: 'Dr. Vikram Singh' },
      { code: '4EC3', name: 'Antenna & Wave Propagation', faculty: 'Dr. Pooja Agarwal' },
      { code: '4EC4', name: 'Electromagnetic Theory', faculty: 'Dr. Manoj Tiwari' }
    ],
    5: [
      { code: '5EC1', name: 'Wireless Communication', faculty: 'Dr. Sunil Verma' },
      { code: '5EC2', name: 'Embedded Systems', faculty: 'Dr. Vikram Singh' },
      { code: '5EC3', name: 'Optical Communication', faculty: 'Dr. Pooja Agarwal' },
      { code: '5EC4', name: 'Microwave Engineering', faculty: 'Dr. Manoj Tiwari' }
    ],
    6: [
      { code: '6EC1', name: 'Satellite Communication', faculty: 'Dr. Sunil Verma' },
      { code: '6EC2', name: 'Digital Image Processing', faculty: 'Dr. Vikram Singh' },
      { code: '6EC3', name: 'Radar & Navigation', faculty: 'Dr. Pooja Agarwal' },
      { code: '6EC4', name: 'Project Management', faculty: 'Dr. Manoj Tiwari' }
    ],
    7: [
      { code: '7EC1', name: 'Advanced Communication', faculty: 'Dr. Sunil Verma' },
      { code: '7EC2', name: 'Neural Networks', faculty: 'Dr. Vikram Singh' },
      { code: '7EC3', name: 'Research Methodology', faculty: 'Dr. Priya Sharma' }
    ],
    8: [
      { code: '8EC1', name: 'Major Project', faculty: 'All Faculty' },
      { code: '8EC2', name: 'Seminar', faculty: 'All Faculty' }
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
      { code: '4EI1', name: 'Industrial Instrumentation', faculty: 'Dr. Sunil Verma' },
      { code: '4EI2', name: 'Process Control', faculty: 'Dr. Manoj Tiwari' },
      { code: '4EI3', name: 'Embedded Systems', faculty: 'Dr. Vikram Singh' },
      { code: '4EI4', name: 'Biomedical Instrumentation', faculty: 'Dr. Pooja Agarwal' }
    ],
    5: [
      { code: '5EI1', name: 'PLC & SCADA', faculty: 'Dr. Sunil Verma' },
      { code: '5EI2', name: 'Robotics', faculty: 'Dr. Manoj Tiwari' },
      { code: '5EI3', name: 'Virtual Instrumentation', faculty: 'Dr. Vikram Singh' },
      { code: '5EI4', name: 'Power Electronics', faculty: 'Dr. Pooja Agarwal' }
    ],
    6: [
      { code: '6EI1', name: 'Advanced Control Systems', faculty: 'Dr. Manoj Tiwari' },
      { code: '6EI2', name: 'IoT in Instrumentation', faculty: 'Dr. Vikram Singh' },
      { code: '6EI3', name: 'Project Management', faculty: 'Dr. Pooja Agarwal' }
    ],
    7: [
      { code: '7EI1', name: 'Smart Instrumentation', faculty: 'Dr. Sunil Verma' },
      { code: '7EI2', name: 'Research Methodology', faculty: 'Dr. Priya Sharma' }
    ],
    8: [
      { code: '8EI1', name: 'Major Project', faculty: 'All Faculty' },
      { code: '8EI2', name: 'Seminar', faculty: 'All Faculty' }
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
      { code: '4ME1', name: 'Dynamics of Machinery', faculty: 'Dr. Ramesh Gupta' },
      { code: '4ME2', name: 'Refrigeration & Air Conditioning', faculty: 'Dr. Suresh Patel' },
      { code: '4ME3', name: 'CAD/CAM', faculty: 'Dr. Anil Kumar' },
      { code: '4ME4', name: 'Operations Research', faculty: 'Dr. Vijay Singh' }
    ],
    5: [
      { code: '5ME1', name: 'Automobile Engineering', faculty: 'Dr. Ramesh Gupta' },
      { code: '5ME2', name: 'Power Plant Engineering', faculty: 'Dr. Suresh Patel' },
      { code: '5ME3', name: 'Mechatronics', faculty: 'Dr. Anil Kumar' },
      { code: '5ME4', name: 'Quality Control', faculty: 'Dr. Vijay Singh' }
    ],
    6: [
      { code: '6ME1', name: 'Robotics', faculty: 'Dr. Anil Kumar' },
      { code: '6ME2', name: 'Finite Element Analysis', faculty: 'Dr. Vijay Singh' },
      { code: '6ME3', name: 'Project Management', faculty: 'Dr. Ramesh Gupta' }
    ],
    7: [
      { code: '7ME1', name: 'Advanced Manufacturing', faculty: 'Dr. Anil Kumar' },
      { code: '7ME2', name: 'Research Methodology', faculty: 'Dr. Priya Sharma' }
    ],
    8: [
      { code: '8ME1', name: 'Major Project', faculty: 'All Faculty' },
      { code: '8ME2', name: 'Seminar', faculty: 'All Faculty' }
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
      { code: '4CE1', name: 'Steel Structures', faculty: 'Dr. Rajendra Prasad' },
      { code: '4CE2', name: 'Highway Engineering', faculty: 'Dr. Mahesh Sharma' },
      { code: '4CE3', name: 'Environmental Engineering', faculty: 'Dr. Sunita Jain' },
      { code: '4CE4', name: 'Construction Management', faculty: 'Dr. Prakash Kumar' }
    ],
    5: [
      { code: '5CE1', name: 'Earthquake Engineering', faculty: 'Dr. Rajendra Prasad' },
      { code: '5CE2', name: 'Foundation Engineering', faculty: 'Dr. Mahesh Sharma' },
      { code: '5CE3', name: 'Urban Planning', faculty: 'Dr. Sunita Jain' },
      { code: '5CE4', name: 'Project Management', faculty: 'Dr. Prakash Kumar' }
    ],
    6: [
      { code: '6CE1', name: 'Advanced Structural Design', faculty: 'Dr. Rajendra Prasad' },
      { code: '6CE2', name: 'Traffic Engineering', faculty: 'Dr. Mahesh Sharma' },
      { code: '6CE3', name: 'Remote Sensing', faculty: 'Dr. Sunita Jain' }
    ],
    7: [
      { code: '7CE1', name: 'Bridge Engineering', faculty: 'Dr. Rajendra Prasad' },
      { code: '7CE2', name: 'Research Methodology', faculty: 'Dr. Priya Sharma' }
    ],
    8: [
      { code: '8CE1', name: 'Major Project', faculty: 'All Faculty' },
      { code: '8CE2', name: 'Seminar', faculty: 'All Faculty' }
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
