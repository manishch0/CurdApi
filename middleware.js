module.exports=filterfun = (req, res, next) => {
    if (!req.query.age) {
      res.send("Please provide your age");
    } else if (req.query.age < 18) {
      res.send("you can acess this page");
    } else {
      next();
    }
  };