import { random } from '@/terminal/utils'

type Star = {
  x: number
  y: number
  enterAnim: {
    opacity: number
    updatedAt: number
  }
  exitAnim?: {
    name: string
    position: number
    updatedAt: number
  }
}

type State = {
  ctx: CanvasRenderingContext2D | null
  dpr: number
  width: number
  height: number
  fontSize: number
  time: {
    value: string
    updatedAt: number
    dt: number
    animation: {
      opacity: number
      direction: 'inc' | 'dec'
      updatedAt: number
      dt: number
    }
  }
  stars: {
    items: Star[]
    updatedAt: number
    dt: number
  }
}

const MAX_STARS = 30

const animations = {
  empty: [],
  one: ['+'],
  two: ['°'],
  three: ['•'],
  four: ['¤'],
  five: ['+', '*'],
  six: ['+', '*', '+'],
  seven: ['+', '¤'],
  eight: ['¤', '*'],
  nine: ['•', '*'],
  ten: ['•', '¤']
}

const state: State = {
  ctx: null,
  dpr: 1,
  width: 0,
  height: 0,
  fontSize: 10,
  time: {
    value: '',
    updatedAt: 0,
    dt: 1000,
    animation: {
      opacity: 0,
      direction: 'inc',
      updatedAt: 0,
      dt: 150
    }
  },
  stars: {
    items: [],
    updatedAt: 0,
    dt: 200
  }
}

const init = () => {
  const canvas = document.getElementById('header-canvas') as HTMLCanvasElement
  if (!canvas) {
    return
  }

  state.dpr = window.devicePixelRatio ?? 1
  state.ctx = canvas.getContext('2d')
  state.ctx?.scale(state.dpr, state.dpr)

  state.width = canvas.offsetWidth * state.dpr
  state.height = canvas.offsetHeight * state.dpr
  canvas.width = state.width
  canvas.height = state.height

  state.fontSize = 10 * state.dpr
  if (state.width >= 768) {
    state.fontSize = 11 * state.dpr
  } else if (state.width >= 1024) {
    state.fontSize = 14 * state.dpr
  }
}

const randomNumber = (max: number) => {
  return Math.floor(max * Math.random())
}

const randomKey = (obj: { [key: string]: string[] }) => {
  const keys = Object.keys(obj)
  const key = random(keys)

  return key
}

const addStars = () => {
  const numberOfStars = randomNumber(MAX_STARS / 5)
  const padding = 12 * state.dpr

  for (let i = 0; i < numberOfStars; i++) {
    const x = randomNumber(state.width - padding * 2) + padding
    const y = randomNumber(state.height - padding * 2) + padding
    state.stars.items.push({ x, y, enterAnim: { opacity: 0, updatedAt: 0 } })
  }
}

const updateStars = (currentTime: number) => {
  if (currentTime - state.stars.updatedAt > state.stars.dt) {
    if (state.stars.items.length < MAX_STARS && Math.random() > 0.7) {
      addStars()
    }
  }

  state.stars.items.forEach((star) => {
    const isEnterAnimFinished = star.enterAnim.opacity >= 1

    if (!isEnterAnimFinished) {
      const dt = 100
      const step = 0.1

      if (currentTime - star.enterAnim.updatedAt > dt) {
        star.enterAnim.updatedAt = currentTime
        star.enterAnim.opacity += step
      }
    }

    if (isEnterAnimFinished) {
      if (star.exitAnim) {
        const dt = 200
        if (currentTime - star.exitAnim.updatedAt > dt) {
          star.exitAnim.updatedAt = currentTime
          star.exitAnim.position++
        }
      }

      if (Math.random() > 0.99 && !star.exitAnim) {
        star.exitAnim = {
          name: Math.random() > 0.8 ? randomKey(animations) : 'empty',
          position: 0,
          updatedAt: currentTime
        }
      }
    }
  })

  state.stars.items = state.stars.items.filter((star) => {
    if (!star.exitAnim) {
      return true
    }

    const anim = animations[star.exitAnim.name as keyof typeof animations]
    if (anim.length <= star.exitAnim.position) {
      // animation finished, remove star
      return false
    }

    return true
  })
}

const updateTime = (currentTime: number) => {
  if (currentTime - state.time.updatedAt >= state.time.dt) {
    state.time.value = new Date().toLocaleTimeString()
    state.time.updatedAt = currentTime
  }

  if (currentTime - state.time.animation.updatedAt >= state.time.animation.dt) {
    state.time.animation.updatedAt = currentTime

    const step = 0.08
    state.time.animation.opacity += (state.time.animation.direction === 'inc' ? 1 : -1) * step

    if (state.time.animation.opacity <= 0) {
      state.time.animation.direction = 'inc'
    } else if (state.time.animation.opacity >= 1.2) {
      state.time.animation.direction = 'dec'
    }
  }
}

const update = () => {
  const currentTime = new Date().getTime()

  updateTime(currentTime)
  updateStars(currentTime)
}

const drawTime = () => {
  const { ctx, width, height, fontSize, dpr, time } = state

  if (!ctx) {
    return
  }

  const style = getComputedStyle(document.documentElement)
  const backgroundColor = style.getPropertyValue('--color-background').trim()

  ctx.fillStyle = backgroundColor
  ctx.fillRect(0, 0, width, height)

  ctx.fillStyle = `rgba(35, 139, 69, ${state.time.animation.opacity})`
  ctx.font = `${fontSize}px monospace`

  const marginTop = 8 * dpr
  const marginRight = 14 * dpr
  const x = width - ctx.measureText(time.value).width - marginRight
  ctx.textBaseline = 'top'
  ctx.textAlign = 'left'
  ctx.fillText(time.value, x, marginTop)
}

const drawStars = () => {
  const { ctx, stars, fontSize } = state

  if (!ctx) {
    return
  }

  ctx.font = `${fontSize}px monospace`

  stars.items.forEach((star) => {
    ctx.textBaseline = 'top'
    ctx.textAlign = 'center'
    ctx.fillStyle = `rgba(35, 139, 69, ${star.enterAnim?.opacity})`

    let char = '.'
    if (star.exitAnim) {
      const anim = animations[star.exitAnim.name as keyof typeof animations]
      char = anim[star.exitAnim.position] ?? '.'
    }

    ctx.fillText(char, star.x, star.y)
  })
}

const draw = () => {
  if (!state.ctx) {
    return
  }

  update()

  drawTime()
  drawStars()

  requestAnimationFrame(draw)
}

export const run = () => {
  init()
  draw()

  window.addEventListener('resize', init)
}

export const unmount = () => {
  window.removeEventListener('resize', init)
}
