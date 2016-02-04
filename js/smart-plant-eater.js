function SmartPlantEater() {};

SmartPlantEater.prototype.act = function(view) {  
  // This is just a dummy behavior
  return {
    type: "move", 
    direction: "e"
  };
};
