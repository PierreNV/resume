"use strict";

export const circleCollidesWithRectangle = ({ circle, rectangle }) => {
  return (
    circle.position.y - circle.radius + circle.velocity.y < rectangle.position.y + rectangle.height + circle.margin &&
    circle.position.x - circle.radius + circle.velocity.x < rectangle.position.x + rectangle.width + circle.margin &&
    circle.position.y + circle.radius + circle.velocity.y > rectangle.position.y - circle.margin &&
    circle.position.x + circle.radius + circle.velocity.x > rectangle.position.x - circle.margin
  );
};

export const circleCollidesWithCircle = (circleA, circleB) => {
  return Math.hypot(circleA.position.x - circleB.position.x, circleA.position.y - circleB.position.y) < circleA.radius + circleB.radius;
};
