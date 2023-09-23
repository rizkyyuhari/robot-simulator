import CARDINAL_DIRECTION from '../src/cardinalDirection';
import RobotPosition from '../src/RobotPosition';

describe('RobotPosition', () => {
  describe('^moveToRigth', () => {
    it('It should turn the robot to the South when the current position is East', () => {});
    const expectedResult = new RobotPosition(CARDINAL_DIRECTION.SOUTH);
    const currentRobotPosition = new RobotPosition(CARDINAL_DIRECTION.EAST);

    const actualResult = currentRobotPosition.moveToRight();

    expect(actualResult.toString()).toEqual(expectedResult.toString());
  });
});
