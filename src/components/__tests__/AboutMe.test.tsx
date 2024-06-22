import { describe, it } from 'vitest'
import { render } from '@testing-library/react'
import AboutMe from '../AboutMe'
import { expect } from 'vitest'

describe('AboutMe', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<AboutMe />)
    const aboutMe = getByTestId('about-me')
    expect(aboutMe).toBeInTheDocument()
    expect(aboutMe).toHaveTextContent('About me')
  })
})
