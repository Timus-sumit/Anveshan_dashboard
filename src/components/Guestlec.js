import React from 'react'
import { Card, CardImg } from 'reactstrap'

class Guestlec extends React.Component {
  render() {
    return (
      <div>
        <Card className="bg-secondary shadow">
          <CardImg
            top
            width="100%"
            src="/coming-soon.jpg"
            alt="Card image cap"
          />
        </Card>
      </div>
    )
  }
}

export default Guestlec
