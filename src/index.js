import { styleBody, addTitle, contact } from "./dom";
import users, { getPremiumUsers } from "./data";

console.log("index file");
styleBody();
addTitle("testing");
const premiumUsers = getPremiumUsers(users);
console.log(users, premiumUsers);
console.log("me typing");
