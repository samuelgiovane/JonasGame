import React, { useState, useEffect } from "react";
import WarningMessage from "../WarningMessage/WarningMessage";
import { ENDPOINT } from "../../constants";
import GridItem from "./GridItem";

// Static 25-character password
const STATIC_PASSWORD = 'Y3wF1bA8jK7xN4qV0rL9zP2hD5yR3sT'; // This is your generated password

const Grid = () => {
  const [items, setItems] = useState([]);
  const [warningMessage, setWarningMessage] = useState({ warningMessageOpen: false, warningMessageText: "" });

  const getItems = () => {
    const promiseItems = fetch(ENDPOINT.GRID, {
      method: 'GET',
      headers: {
        'password': STATIC_PASSWORD // Include the password in the headers
      }
    })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      });

    return promiseItems;
  }

  const closeWarningMessage = () => {
    setWarningMessage({
      warningMessageOpen: false,
      warningMessageText: ""
    });
  }

  useEffect(() => {
    getItems()
      .then(newItems => { setItems(newItems) })
      .catch(error =>
        setWarningMessage({
          warningMessageOpen: true,
          warningMessageText: `Request to get grid text failed: ${error}`
        })
      );
  }, []);

  return (
    <main id="mainContent">
      <div className="container">
        <div className="row justify-content-center mt-5 p-0">
          <h3>Grid</h3>
        </div>

        <div className="row justify-content-around text-center pb-5">
          {items.map(item => (
            <GridItem
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </div>
      <WarningMessage
        open={warningMessage.warningMessageOpen}
        text={warningMessage.warningMessageText}
        onWarningClose={closeWarningMessage}
      />
    </main>
  );
}

export default Grid;
