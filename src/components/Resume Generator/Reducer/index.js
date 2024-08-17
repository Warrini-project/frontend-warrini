import { combineReducers } from "redux";
import EducationData from "./Education/EducationData";
import ProfileData from "./Profile/ProfileData";
import ProjectData from "./Project/ProjectData";
import SkillsData from "./Skills/SkillsData";
import SocialData from "./Social/SocialData";


export default combineReducers({
    Education : EducationData,
    Profile: ProfileData,
    Skills: SkillsData,
    Social: SocialData,
    Project: ProjectData
});
