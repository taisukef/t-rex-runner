const options = {
  iconClass: "icon-offline",
};

export const loadTimeData = {
  valueExists: (name) => {
    //console.log("valueExists", name);
    return options[name] != null;
  },
  getValue: (name) => {
    console.log("getValue", name);
    return options[name];
  },
  getString: (name) => {
    console.log("getString", name);
    return options[name];
  },
};