import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { width, space } from 'styled-system'
import {
  mapProps,
  deprecatedPropType,
  applyVariations,
  getPaletteColor,
  getTextColorOn,
  deprecatedColorValue
} from './utils'

const size = props => {
  switch (props.size) {
    case 'small':
      return {
        fontSize: `${props.theme.fontSizes[0]}px`,
        padding: '7px 12px'
      }
    case 'medium':
      return {
        fontSize: `${props.theme.fontSizes[1]}px`,
        padding: '9.5px 18px'
      }
    case 'large':
      return {
        fontSize: `${props.theme.fontSizes[2]}px`,
        padding: '12px 22px'
      }
    default:
      return {
        fontSize: `${props.theme.fontSizes[1]}px`,
        padding: '9.5px 18px'
      }
  }
}

const variations = {
  fill: css`
    background-color: ${getPaletteColor('base')};
    color: ${getTextColorOn('base')};

    &:hover {
      background-color: ${getPaletteColor('dark')};
      color: ${getTextColorOn('dark')};
    }
  `,
  outline: css`
    color: ${getPaletteColor('base')};
    box-shadow: inset 0 0 0 2px ${getPaletteColor('base')};
    background-color: transparent;

    &:hover {
      color: ${getPaletteColor('dark')};
      box-shadow: inset 0 0 0 2px ${getPaletteColor('dark')};
      background-color: transparent;
    }
  `,
  disabled: css`
    background-color: ${getPaletteColor('light')};
    color: ${getTextColorOn('light')};

    &:hover {
      background-color: null;
    }
  `
}

const Button = mapProps(({ fullWidth, disabled, ...props }) => ({
  width: fullWidth ? 1 : undefined,
  disabled: disabled || props.variation === 'disabled',
  ...props
}))(styled.button`
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  font-weight: 600;
  line-height: 1.5;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  border-radius: ${props => props.theme.radius};
  border-width: 0;
  border-style: solid;

  ${applyVariations('Button', variations)}

  ${width} ${size} ${space};
`)

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  ...width.propTypes,
  ...space.propTypes,
  fullWidth: deprecatedPropType('width'),
  variation: PropTypes.oneOf(Object.keys(variations)),
  color: deprecatedColorValue(),
  disabled: PropTypes.bool
}

Button.defaultProps = {
  color: 'primary',
  variation: 'fill'
}

Button.displayName = 'Button'

export default Button
