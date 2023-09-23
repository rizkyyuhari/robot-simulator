import cardinalDirection from './cardinalDirection';

export default class RobotPosition {
  #cardinalPoint;

  constructor(cardinalPoint) {
    this.#cardinalPoint = cardinalPoint;
  }

  moveToRight() {
    const CARDINAL_DIRECTION_MAP = [
      cardinalDirection.NORTH,
      cardinalDirection.EAST,
      cardinalDirection.SOUTH,
      cardinalDirection.WEST
    ];
    const NEXT_DIRECTION_OFFSET = 1;
    const newCardinalPoint =
      CARDINAL_DIRECTION_MAP[
        (CARDINAL_DIRECTION_MAP.indexOf(this.#cardinalPoint) + NEXT_DIRECTION_OFFSET) %
          CARDINAL_DIRECTION_MAP.length
      ];
    return new RobotPosition(newCardinalPoint);
  }

  toString() {
    return `${this.#cardinalPoint}`;
  }
}
