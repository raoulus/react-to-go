import React from 'react'
import Footer from '../index.jsx'
import renderer from 'react-test-renderer'
describe('<Footer /> ', () => {
  test('matches snapshot', () => {
    const component = renderer.create(<Footer />)
    let tree = component.toJSON()
    expect(tree).toMatchInlineSnapshot(`
      <div>
        <p>
          <i
            className="fab fa-github"
          />
           
          <a
            href="https://github.com/raoulus/react-to-go/"
          >
            react-to-go (v
            )
          </a>
        </p>
      </div>
    `)
  })

  test('should contain process.env.VERSION', () => {
    process.env.VERSION = '1.0.0'
    const component = renderer.create(<Footer />)
    let tree = component.toJSON()

    expect(tree).toMatchInlineSnapshot(`
      <div>
        <p>
          <i
            className="fab fa-github"
          />
           
          <a
            href="https://github.com/raoulus/react-to-go/"
          >
            react-to-go (v
            1.0.0
            )
          </a>
        </p>
      </div>
    `)
  })
})
