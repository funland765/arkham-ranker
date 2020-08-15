/*INSERT GROUP ID AND COOKIE BELOW*/

var groupId = 7357929 // << Replace 12345 with your Group Id
var cookie = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_A3C0FE4D4137091C7173FD6574122A5286F9F58099E99990E23FAC5F5DA8E2D0FF7DEE63C60C6FB86EE4630AD582406D3D4B34824D2DEA605EC549D0961AC65CC8C8F596F7703129557A1CEFF3249C997C4B8FFBA6EFECB494E32532061C5B667E30D14FD75D258C51C4E8FF1CF3EA4CFFF7CCA9FD32DC614E181CD3BAA47FF074A21D9B726A30B2201D3DBB4077E31C5ACD7C6505BE482294278D6AE094A37950ECFDF598872C20B1DD989C9AD292F6DFF9E1A85D2FE88F32724065D6E6E9C71E22180A1969E8F835CC6E5264C7709BE22DE44E51370F1511DD949179B14EB17C2E4C513ADD700300C27B34C2BE094ED74C7058F6AAAFC991D6513707021CAF7187B75D7AFDF55CE08D247A33F5570E66915DB55CAB2966AABCC156C92D30C28E3F4032B5A5C6E2886F0C3A1227AC9F880B6384" // << Put your account cookie inside of the quotes

/*INSERT GROUP ID AND COOKIE ABOVE*/


const express = require("express");
const rbx = require("noblox.js");
const app = express();

app.use(express.static("public"));

async function startApp() {
  await rbx.cookieLogin(cookie);
  let currentUser = await rbx.getCurrentUser();
  console.log(currentUser.UserName);
}
startApp();

app.get("/ranker", (req, res) => {
    var User = req.param("userid");
    var Rank = req.param("rank");
  
    rbx.setRank(groupId, parseInt(User), parseInt(Rank));
    res.json("Ranked!");
    console.log("Attempting to rank")
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
