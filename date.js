// ********* this is a module  ***********
module.exports.getDate = getDate;
function getDate() {
  const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  const day = today.toLocaleDateString("en-US", options);
  return day;
}



// ********* to export another module *********
// writing this in a concise form
exports.getDay = function() {
  const today = new Date();
  const options = {
    weekday: "long"
  };
  const day = today.toLocaleDateString("en-US", options);
  return day;
}
