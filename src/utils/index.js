export const recruiterOnboardFormControls = [
  {
    label: "Name",
    name: "name",
    placeholder: "Enter your Name",
    componentType: "input",
  },
  {
    label: "Company Name",
    name: "companyName",
    placeholder: "Enter your company name",
    componentType: "input",
  },
  {
    label: "Company Role",
    name: "companyRole",
    placeholder: "Enter your Role",
    componentType: "input",
  },
];

export const candidateOnboardFormControls = [
  {
    label: "Resume",
    name: "resume",
    componentType: "file",
  },
  {
    label: "Name",
    name: "name",
    placeholder: "Enter your Name",
    componentType: "input",
  },
  {
    label: "Current Company",
    name: "currentCompany",
    placeholder: "Enter your company name",
    componentType: "input",
  },
  {
    label: "Current Job Location",
    name: "currentJobLocation",
    placeholder: "Enter your currentJobLocation",
    componentType: "input",
  },
  {
    label: "Prefered Job Location",
    name: "preferdJobLocation",
    placeholder: "Enter your preferdJobLocation",
    componentType: "input",
  },
  {
    label: "Current Salary",
    name: "currentSalary",
    placeholder: "Enter your currentSalary",
    componentType: "input",
  },
  {
    label: "Notice Period",
    name: "noticePeriod",
    placeholder: "Enter your Notice Period",
    componentType: "input",
  },
  {
    label: "Skills",
    name: "skills",
    placeholder: "Enter your Skills",
    componentType: "input",
  },
  {
    label: "Previous Companies",
    name: "previousCompany",
    placeholder: "Enter your Previous Companies",
    componentType: "input",
  },
  {
    label: "Total Experience",
    name: "totalExperience",
    placeholder: "Enter your total experience",
    componentType: "input",
  },
  {
    label: "College",
    name: "college",
    placeholder: "Enter your College",
    componentType: "input",
  },
  {
    label: "College Location",
    name: "collegeLocation",
    placeholder: "Enter your college loction",
    componentType: "input",
  },
  {
    label: "Graduated year",
    name: "graduatedYear",
    placeholder: "Enter your Graduated Year",
    componentType: "input",
  },
  {
    label: "Linkedin Profile",
    name: "linkedinProfile",
    placeholder: "Enter your Linkdin Profile",
    componentType: "input",
  },
  {
    label: "Gihthub Profile",
    name: "githubProfile",
    placeholder: "Enter your Gihthub Profile",
    componentType: "input",
  },
];

export const initialCandidateFormData = {
  resume: "",
  name: "",
  currentJobLocation: "",
  preferdJobLocation: "",
  currentSalary: "",
  noticePeriod: "",
  skills: "",
  currentCompany: "",
  previousCompany: "",
  totalExperience: "",
  college: "",
  collegeLocation: "",
  graduatedYear: "",
  linkedinProfile: "",
  githubProfile: "",
};

export const initialRecruterFormData = {
  name: "",
  companyName: "",
  companyRole: "",
};

export const postNewJobFormControls = [
  {
    label: "Company Name",
    name: "companyName",
    placeholder: "Comapny Name",
    componentType: "input",
  },
  {
    label: "Title",
    name: "title",
    placeholder: "Job Title",
    componentType: "input",
  },
  {
    label:'Type',
    name:'Job Type',
    placeholder:'Job Type',
    componentType:'input'
  },
  {
    label:'Location',
    name:'location',
    placeholder:'Job Location',
    componentType:'input'
  },
  {
    label:'Experience',
    name:'experience',
    placeholder:'Experience',
    componentType:'input'
  },
   {
    label:'Description',
    name:'description',
    placeholder:'Description',
    componentType:'input'
  },
   {
    label:'Skills',
    name:'skill',
    placeholder:'Skills',
    componentType:'input'
  },
];

export const postNewJobFormData = {
  companyName: "",
  title: "",
  type: "",
  location: "",
  experience: "",
  description: "",
  skills: "",
};
