// https://greensock.com/docs/v3/GSAP/gsap.to()

const rectangle = document.querySelector("#rectangle");
const rectBoundingCoordinate = rectangle.getBoundingClientRect();
const rectangleWidth = rectBoundingCoordinate.width;
const rectangleHalfWidth = rectangleWidth / 2;

rectangle.addEventListener("mousemove", function (e) {
  const mouseExactLocation = e.clientX - rectBoundingCoordinate.left;

  console.log();

  if (mouseExactLocation <= rectangleHalfWidth) {
    // mapRange(inMin, inMax, outMin, outMax, valueToMap)
    const redColor = gsap.utils.mapRange(
      0,
      rectangleHalfWidth,
      255,
      0,
      mouseExactLocation
    );

    gsap.to(rectangle, {
      backgroundColor: `rgb(${redColor}, 0, 0)`,
    });
  } else {
    const blueColor = gsap.utils.mapRange(
      rectangleHalfWidth,
      rectangleWidth,
      0,
      255,
      mouseExactLocation
    );
    gsap.to(rectangle, {
      backgroundColor: `rgb(0, 0, ${blueColor})`,
    });
  }
});

rectangle.addEventListener("mouseleave", function () {
  gsap.to(rectangle, {
    backgroundColor: "white",
  });
});
