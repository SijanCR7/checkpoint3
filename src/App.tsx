import { useState } from 'react'
import { ExerciseBooks } from './items/ExerciseBooks'
import { Pens } from './items/Pens'
import { Pencils } from './items/Pencils'
import { Sharpener } from './items/Sharpener'
import { GlueSticks } from './items/GlueSticks'
import { QuantityDecorator } from './decorators/QuantityDecorator'
import type { Item } from './interfaces/Item'
import './App.css'

function App() {

  // Store the selected items
  const [booksSelected, setBooksSelected] = useState(false)
  const [pensSelected, setPensSelected] = useState(false)
  const [pencilsSelected, setPencilsSelected] = useState(false)
  const [sharpenerSelected, setSharpenerSelected] = useState(false)
  const [glueSelected, setGlueSelected] = useState(false)

  // Store the quantities
  const [booksQuantity, setBooksQuantity] = useState(1)
  const [pensQuantity, setPensQuantity] = useState(1)
  const [pencilsQuantity, setPencilsQuantity] = useState(1)
  const [sharpenerQuantity, setSharpenerQuantity] = useState(1)
  const [glueQuantity, setGlueQuantity] = useState(1)

  // Show the shopping cart after clicking the button
  const [showTotal, setShowTotal] = useState(false)

  // Calculate the cost using the decorator
  function getItemCost(item: Item, quantity: number) {
    const cost = new QuantityDecorator(item, quantity)
    return cost.getCost()
  }

  // Store selected products and their costs
  function getSelectedItems() {
    const selectedItems = []

    if (booksSelected) {
      selectedItems.push({
        name: 'Exercise Books',
        quantity: booksQuantity,
        cost: getItemCost(new ExerciseBooks(), booksQuantity)
      })
    }

    if (pensSelected) {
      selectedItems.push({
        name: 'Pens',
        quantity: pensQuantity,
        cost: getItemCost(new Pens(), pensQuantity)
      })
    }

    if (pencilsSelected) {
      selectedItems.push({
        name: 'Pencils',
        quantity: pencilsQuantity,
        cost: getItemCost(new Pencils(), pencilsQuantity)
      })
    }

    if (sharpenerSelected) {
      selectedItems.push({
        name: 'Sharpener',
        quantity: sharpenerQuantity,
        cost: getItemCost(new Sharpener(), sharpenerQuantity)
      })
    }

    if (glueSelected) {
      selectedItems.push({
        name: 'Glue Sticks',
        quantity: glueQuantity,
        cost: getItemCost(new GlueSticks(), glueQuantity)
      })
    }

    return selectedItems
  }

  const selectedItems = getSelectedItems()

  // Add all selected item costs
  const totalCost = selectedItems.reduce(
    (total, item) => total + item.cost,
    0
  )

  return (
    <div>
      <h1>Stationery Shopping Cart</h1>
      <p>Select the items you want to buy.</p>

      <h3>Stationery Items</h3>

      {/* Exercise Books */}
      <div>
        <label>
          <input
            type="checkbox"
            checked={booksSelected}
            onChange={(e) => setBooksSelected(e.target.checked)}
          />
          Exercise Books ($30)
        </label>

        <select
          value={booksQuantity}
          onChange={(e) => setBooksQuantity(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </div>

      <br />

      {/* Pens */}
      <div>
        <label>
          <input
            type="checkbox"
            checked={pensSelected}
            onChange={(e) => setPensSelected(e.target.checked)}
          />
          Pens ($12)
        </label>

        <select
          value={pensQuantity}
          onChange={(e) => setPensQuantity(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </div>

      <br />

      {/* Pencils */}
      <div>
        <label>
          <input
            type="checkbox"
            checked={pencilsSelected}
            onChange={(e) => setPencilsSelected(e.target.checked)}
          />
          Pencils ($10)
        </label>

        <select
          value={pencilsQuantity}
          onChange={(e) => setPencilsQuantity(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </div>

      <br />

      {/* Sharpener */}
      <div>
        <label>
          <input
            type="checkbox"
            checked={sharpenerSelected}
            onChange={(e) => setSharpenerSelected(e.target.checked)}
          />
          Sharpener ($18)
        </label>

        <select
          value={sharpenerQuantity}
          onChange={(e) => setSharpenerQuantity(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </div>

      <br />

      {/* Glue Sticks */}
      <div>
        <label>
          <input
            type="checkbox"
            checked={glueSelected}
            onChange={(e) => setGlueSelected(e.target.checked)}
          />
          Glue Sticks ($25)
        </label>

        <select
          value={glueQuantity}
          onChange={(e) => setGlueQuantity(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </div>

      <br />

      {/* Display shopping cart */}
      <button onClick={() => setShowTotal(true)}>
        Display Total Cost
      </button>

      {showTotal && (
        <div>
          <h2>Your Shopping Cart</h2>

          {selectedItems.length === 0 ? (
            <p>No items selected.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Cost (NZD)</th>
                </tr>
              </thead>

              <tbody>
                {selectedItems.map((item) => (
                  <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>${item.cost.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          <h2>Total Cost: NZ${totalCost.toFixed(2)}</h2>
        </div>
      )}

    </div>
  )
}

export default App