export default {
  getDate: function () {
    const today = new Date();
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
    };
    return today.toLocaleDateString("en-US", options);
  },

  getDay: function () {
    const today = new Date();
    const options = {
      weekday: "long",
    };
    return today.toLocaleDateString("en-US", options);
  },
};
