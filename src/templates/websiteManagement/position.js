export const position = (myHead) => {
  const image = window
    .getComputedStyle(myHead.current)
    .getPropertyValue("background-image");
  const imagePositionX = window
    .getComputedStyle(myHead.current)
    .getPropertyValue("background-position-x");

  const imagePositionY = window
    .getComputedStyle(myHead.current)
    .getPropertyValue("background-position-y");

  const imageSize = window
    .getComputedStyle(myHead.current)
    .getPropertyValue("background-size");
  return {
    image,
    imagePositionX,
    imagePositionY,
    imageSize,
  };
};
