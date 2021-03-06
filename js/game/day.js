class Day extends Implementor {
  constructor() {
    super()
  }

  setBackground = () => {
    const img = new Image()
    img.src = 'assets/day.jpg'
    img.onload = () => (canvas.style.backgroundImage = `url(${img.src})`)
  }

  setDescriptionColor = () => {
    description.style.color = 'black'
  }

  setFog = gridworld => {
    gridworld.scene.fog.near = 1
    gridworld.scene.fog.far = FOG_FAR
  }

  setToggle = () => (toggle.checked = false)

  setMonsterColor = () => {
    Monsters.setColor(MONSTER_DAY_COLOR)
  }

  setTreeColor = () => {
    treeMat.color.set(TREE_COLOR)
  }
}
