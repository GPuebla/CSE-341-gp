const helloRoute = (req, res) => {
    res.send("Hello Guy");
};

const byeRoute = (req, res) => {
    res.send("Bye my friend");
};
  

module.exports = {
    helloRoute,
    byeRoute
};