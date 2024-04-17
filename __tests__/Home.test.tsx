import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home', () => {
   it('should have  Docs text', async () => {
      render(<Home/>)
   
      const myElem = await screen.findByText(/Docs/i)
   
      expect(myElem).toBeInTheDocument()
   })

       it('should contain the text "information"', () => {
        render(<Home />) 

        const myElem = screen.getByText(/information/i) 

        expect(myElem).toBeInTheDocument()
    })
})
 