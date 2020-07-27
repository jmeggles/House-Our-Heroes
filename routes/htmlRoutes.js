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

router.get("/logout", (req, res) => {
    req.logout();
    req.session.destroy();
    res.redirect("/");
})

router.get("/user/register", (req, res) => {
    res.render("pages/register")
})

router.get("/profile", auth, async (req, res) => {
    res.render("pages/profile")
})

router.get("/auth/petitions", async (req, res) => {
    res.render("pages/petitions")
})

router.get("/user/resources", async (req, res) => {
    res.render("pages/resources")
})

router.get("/user/news", async (req, res) => {
    res.render("pages/news")
})

router.get("/user/blog", async (req, res) => {
    res.render("pages/blog")
})

router.get("/user/cms", auth, async (req, res) => {
    res.render("pages/cms")
})
// used handlebars to directly route user instead of through unnecessary re-routes.
// router.get("/", auth, (req, res) => res.sendFile(path.join(__dirname, "../public/dashboard.html")));
// router.get("/user/page2", auth, (req, res) => res.sendFile(path.join(__dirname, "../public/page2.html")));
// router.get("/user/profile", auth, (req, res) => res.sendFile(path.join(__dirname, "../public/profile.html")));


module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads view.html
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/blog.html"));
    });

    app.get("/cms", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/cms.html"));
    });

    // blog route loads blog.html
    app.get("/blog", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/blog.html"));
    });

};
// // login and register forms view
// router.get("/user/login", (req, res) => res.sendFile(path.join(__dirname, "../public/login.html")));
// router.get("/user/register", (req, res) => res.sendFile(path.join(__dirname, "../public/register.html")));

module.exports = router;