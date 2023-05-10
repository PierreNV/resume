"use strict";

export const circleCollidesWithRectangle = ({ circle, rectangle, padding }) => {
  return (
    circle.position.y - circle.radius + circle.velocity.y < rectangle.position.y + rectangle.height + padding &&
    circle.position.x - circle.radius + circle.velocity.x < rectangle.position.x + rectangle.width + padding &&
    circle.position.y + circle.radius + circle.velocity.y > rectangle.position.y - padding &&
    circle.position.x + circle.radius + circle.velocity.x > rectangle.position.x - padding
  );
};

export const circleCollidesWithCircle = (circle_1, circle_2) => {
  return Math.hypot(circle_1.position.x - circle_2.position.x, circle_1.position.y - circle_2.position.y) < circle_1.radius + circle_2.radius;
};
