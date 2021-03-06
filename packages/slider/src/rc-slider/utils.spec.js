import * as utils from '../../src/rc-slider/utils'

describe('utils', () => {
  it('should detect if not in production', () => {
    process.env.NODE_ENV = 'development'
    expect(utils.isDev()).toBe(true)

    process.env.NODE_ENV = 'production'
    expect(utils.isDev()).toBe(false)
  })

  describe('getClosestPoint', () => {
    it('should return closest value', () => {
      const value = 40
      const props = {
        marks: { 0: 0, 30: 30, 60: 60 },
        step: null,
        min: 0,
        max: 100,
      }

      expect(utils.getClosestPoint(value, props)).toBe(30)
    })

    it('should return closest value (taking step into account)', () => {
      const value = 40
      const props = {
        marks: { 0: 0, 30: 30, 60: 60 },
        step: 3,
        min: 0,
        max: 100,
      }

      expect(utils.getClosestPoint(value, props)).toBe(39)
    })

    it('should return closest value (taking boundaries into account)', () => {
      const value = 102
      const props = {
        marks: {},
        step: 6,
        min: 0,
        max: 100,
      }

      expect(utils.getClosestPoint(value, props)).toBe(96)
    })
  })
})
