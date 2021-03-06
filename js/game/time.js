class Time extends Abstraction {
  constructor(gridworld) {
    super()

    this.gridworld = gridworld

    this.implementors = {
      day: new Day(),
      night: new Night(),
      hell: new Hell()
    }

    this.setImplementor(this.implementors.day)
    this.updateImplementor()
  }

  setToNight = () => {
    this.setImplementor(this.implementors.night)
    this.updateImplementor()
  }

  setToDay = () => {
    this.setImplementor(this.implementors.day)
    this.updateImplementor()
  }

  setToHell = () => {
    this.setImplementor(this.implementors.hell)
    this.updateImplementor()
  }

  setToNormal = () => {
    this.setImplementor(this.implementors.day)
    this.updateImplementor()
  }

  updateImplementor = () => {
    this.implementor.setBackground()
    this.implementor.setDescriptionColor()
    this.implementor.setFog(this.gridworld)
    this.implementor.setToggle()
    this.implementor.setMonsterColor()
    this.implementor.setTreeColor()
  }
}
