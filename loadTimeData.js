const options = {
  iconClass: "icon-offline",
  enableAltGameMode: true,
  altGameCommonImage2x: "images/default_200_percent/offline/200-offline-sprite.png",
  altGameSpecificImage2x: "images/default_200_percent/offline/200-offline-sprite.png",
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