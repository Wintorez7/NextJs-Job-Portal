const { default: mongoose } = require("mongoose");

const ProfileSchema = new  mongoose.Schema({
    userId : String,
    role : String,
    email : String,
    isPremiumUser : Boolean,
    memberShipType : String,
    memberShipStartDate : String,
    memberShipEndDate : String,
    recruiterInfo : {
        name : String,
        companyName : String,
        companyRole : String
    },
    candidateInfo : {
        name : String,
        currentJobLocation : String,
        currentSalary : String,
        noticePeriod : String,
        skills: String,
        currentCompanies : String,
        totalExperience: String,
        college : String,
        collegeLoction : String,
        graduateYear : String,
        linkedinProfile : String,
        githubProfile : String,
        resume : String
    }
})

const Profile = mongoose.model.Profile || mongoose.model('Profile', ProfileSchema);

export default Profile;