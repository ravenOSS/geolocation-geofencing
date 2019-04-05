const frontCtl = (req, res, next) => {
  res.render('index', { title: 'Geolocation', message: 'Start Geolocation' });
};

module.exports =
{
  frontCtl
};
