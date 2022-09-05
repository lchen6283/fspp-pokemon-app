const checkName = (req, res, next) => {
  if (req.body.name) {
    next();
  } else {
    res.status(400).json({ error: "Name is required" });
  }
};

const checkBoolean = (req, res, next) => {
  const { favorite } = req.body;
  if (favorite == true || favorite == false || favorite == undefined) {
    next();
  } else {
    res.status(400).json({ error: "favorite must be a boolean value" });
  }
};

const checkForNoAdditionalParams = (req, res, next) => {
  const { pokedex, name, type, region, favorite, image, ...otherStuff } =
    req.body;
  if (
    otherStuff &&
    Object.keys(otherStuff).length === 0 &&
    Object.getPrototypeOf(otherStuff) === Object.prototype
  ) {
    next();
  } else {
    res.status(400).send({ error: "no additional parameters allowed" });
  }
};

module.exports = {
  checkName,
  checkBoolean,
  checkForNoAdditionalParams,
};
