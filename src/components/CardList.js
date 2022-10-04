import React from "react";
// import robots from "./robots"
import Card from './Card';



const CardList = (props) => {

    return (
        <div>
        {
            props.robots.map((value, index) => {
            return <Card 
              name={value.name}
              email={value.email}
                id={value.id}
                key = {index}
            />
          })
    }
      </div>
    )
    
}

export default CardList