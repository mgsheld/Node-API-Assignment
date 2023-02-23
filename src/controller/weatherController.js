exports.weather_report = function(req, res){
  let report = [
    {

      Temp: '90.5',
    
      Unit: 'fahrenheit',
    
      Cloudy: 'false',
    
      PrecipitationChance: '0'
    
    }
  ];
  res.send(report);
};