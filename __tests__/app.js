import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'

import App from '../src/App'

afterEach(cleanup)

describe('App component loads correctly', () => {
	const { container } = render(<App />)
	const { firstChild } = container
	test('renders correctly', () => {
		expect(container).toHaveTextContent(`Learn React`)
	})

	test('first child should contain class "App"', () => {
		expect(firstChild).toHaveClass(`App`)
	})
})

describe('State is managed correctly', () => {
	it('count starts at 0', () => {
		const { getByTestId } = render(<App />)
		const count = getByTestId(`count`)

		expect(count.innerHTML).toBe("0")
	})


 it('should add 1 to count', () => {
		const { getByTestId } = render(<App />)
		const count = getByTestId(`count`)
		const add = getByTestId(`addCount`)

		fireEvent.click(add)
		expect(count.innerHTML).toBe("1")
	})

	it('should minus 1 from count', () => {
		const { getByTestId } = render(<App />)
		const count = getByTestId(`count`)
		const minus = getByTestId(`minusCount`)

		fireEvent.click(minus)
		expect(count.innerHTML).toBe("-1")
	})
})
