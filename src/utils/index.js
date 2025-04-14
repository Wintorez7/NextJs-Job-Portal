
export const recruiterOnboardFormControls = [
    {
        label:'Name',
        name:'name',
        placeholder:'Enter your Name',
        componentType:'input'
    },
    {
        label:'Company Name',
        name:'companyName',
        placeholder:'Enter your company name',
        componentType:'input'
    },
    {
        label:'Company Role',
        name:'companyRole',
        placeholder:'Enter your Role',
        componentType:'input'
    },
]

export const candidateOnboardFormControls = [
    {
        label:'Resume',
        name:'resume',
        componentType:'file'
    },
    {
        label:'Name',
        name:'name',
        placeholder:'Enter your Name',
        componentType:'input'
    },
    {
        label:'Current Company',
        name:'currentCompnay',
        placeholder:'Enter your company name',
        componentType:'input'
    },
    {
        label:'Current Job Location',
        name:'currentJobLoction',
        placeholder:'Enter your currentJobLocation',
        componentType:'input'
    },
    {
        label:'Prefered Job Location',
        name:'preferedJobLoction',
        placeholder:'Enter your preferedJobLocation',
        componentType:'input'
    },
    {
        label:'Current Salary',
        name:'currentSalary',
        placeholder:'Enter your currentSalary',
        componentType:'input'
    },
    {
        label:'Notice Period',
        name:'noticePeroid',
        placeholder:'Enter your Notice Peroid',
        componentType:'input'
    },
    {
        label:'Skills',
        name:'skills',
        placeholder:'Enter your Skills',
        componentType:'input'
    },
    {
        label:'Previous Companies',
        name:'previousCompanies',
        placeholder:'Enter your Previous Companies',
        componentType:'input'
    },
    {
        label:'Total Experience',
        name:'totalExperience',
        placeholder:'Enter your total experience',
        componentType:'input'
    },
    {
        label:'College',
        name:'college',
        placeholder:'Enter your College',
        componentType:'input'
    },
    {
        label:'College Location',
        name:'collegeLocation',
        placeholder:'Enter your college loction',
        componentType:'input'
    },
    {
        label:'Graduated year',
        name:'graduatedyear',
        placeholder:'Enter your Graduated Year',
        componentType:'input'
    },
    {
        label:'Linkedin Profile',
        name:'linkedinProfile',
        placeholder:'Enter your Linkdin Profile',
        componentType:'input'
    },
    {
        label:'Gihthub Profile',
        name:'githubProfile',
        placeholder:'Enter your Gihthub Profile',
        componentType:'input'
    },
    {
        label:'Gihthub Profile',
        name:'githubProfile',
        placeholder:'Enter your Gihthub Profile',
        componentType:'input'
    },
    
    
]

export const initialCandidateFormData = {
    resume :'',
    name :'',
    currentJobLocation :'',
    preferdJobLocation :'',
    currentSalary :'',
    noticePeriod : '',
    skills :'',
    currentCompany :'',
    previousCompany :'',
    totalExperience :'',
    college :'',
    collegeLocation :'',
    graduatedYear :'',
    linkedinProfile :'',
    githubProfile :'', 
    isPremiumUser :false
}

export const initialRecruterFormData = {
    name:'',
    companyName:'',
    companyRole:'',
    isPremiumUser:false
}