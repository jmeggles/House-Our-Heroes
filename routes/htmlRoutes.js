const router = require("express").Router();
const path = require("path");
const auth = require("../middleware/auth");




// user authorized views - they all use the "auth" middleware
router.get("/", async (req, res) => {
    res.render("pages/dashboard")
})

router.get("/user/login", (req, res) => {
    res.render("pages/login", {
        message: req.query.message
    })
})

router.get("/login", (req, res) => {
    res.render("pages/profile")
})

router.get("/user/register", (req, res) => {
    res.render("pages/register")
})

router.get("/profile", auth, async (req, res) => {
    res.render("pages/profile")
})

router.get("/auth/petitions",async (req, res) => {
    res.render("pages/petitions")
})

router.get("/user/resources", async (req, res) => {
    res.render("pages/resources")
})

router.get("/user/news", async (req, res) => {
    res.render("pages/news")
})

router.get("/user/profile", auth, async (req, res) => {
    res.render("pages/profile")
})

router.get("/user/blog", auth, async (req, res) => {
    res.render("pages/blog")
})

router.get("/user/cms", auth, async (req, res) => {
    res.render("pages/cms")
})
// used handlebars to directly route user instead of through unnecessary re-routes.
// router.get("/", auth, (req, res) => res.sendFile(path.join(__dirname, "../public/dashboard.html")));
// router.get("/user/page2", auth, (req, res) => res.sendFile(path.join(__dirname, "../public/page2.html")));
// router.get("/user/profile", auth, (req, res) => res.sendFile(path.join(__dirname, "../public/profile.html")));

    // Each of the below routes just handles the HTML page that the user gets sent to.
  
//     // index route loads view.html
//     router.get("/", function(req, res) {
//       res.sendFile(path.join(__dirname, "../public/blog.html"));
//     });
  
//     router.get("/cms", function(req, res) {
//       res.sendFile(path.join(__dirname, "../public/cms.html"));
//     });
  
//     // blog route loads blog.html
//    router.get("/blog", function(req, res) {
//       res.sendFile(path.join(__dirname, "../public/blog.html"));
//     });
  
  
// // login and register forms view
// router.get("/user/login", (req, res) => res.sendFile(path.join(__dirname, "../public/login.html")));
// router.get("/user/register", (req, res) => res.sendFile(path.join(__dirname, "../public/register.html")));

module.exports = router;