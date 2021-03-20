var image = {
  colors: [
    "#00ff00",
    "#00ffff"
  ],
  box: [
    0, 0, 0, 0, 1,
    0, 0, 0, 0, 1,
    0, 1, 1, 1, 1,
    0, 1, 0, 0, 0,
    0, 1, 0, 0, 0
  ]
};
var boxsNum = 25;
var boxs = [];
for (let i = 0; i < boxsNum; i++) {
  boxs.push(document.getElementById("b" + (i + 1)));
}
for (let i = 0; i < boxs.length; i++) {
  if (image.box[i] == 0) {
    boxs[i].style.backgroundColor = image.colors[0];
  } else if (image.box[i] == 1) {
    boxs[i].style.backgroundColor = image.colors[1];
  }
}
