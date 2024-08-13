import { useState } from 'react'

function App() {
  const [nestedObjected, setNestedObject] = useState({
    taxi: 'Ücret karşılığında yolcu taşımak için lisanslı bir araç',
    food: {
      sushi:
        'Deniz ürünleri ve sebzelerle birlikte sunulan geleneksel bir Japon yemeği',
      apple: {
        Honeycrisp:
          "MAES Bahçe Araştırma Merkezi'nde geliştirilen bir elma çeşidi",
        Fuji: "Tohoku Araştırma İstasyonu'nda yetiştiriciler tarafından geliştirilen bir elma çeşidi",
      },
    },
  })

  return (
    <div style={{ margin: 'auto', width: '70%', paddingTop: 40 }}>
      <DisplayNested nestedObjected={nestedObjected} />
    </div>
  )
}

const DisplayNested = ({ nestedObjected }) => {
  return <div>{renderNested(nestedObjected)}</div>
}

const renderNested = (obj) => {
  return Object.entries(obj).map(([key, value]) => {
    if (typeof value === 'object') {
      return (
        <div key={key}>
          <strong>{key}:</strong>
          <div>{renderNested(value)}</div>
        </div>
      )
    } else {
      return (
        <div key={key}>
          <strong>{key}:</strong> {value}
        </div>
      )
    }
  })
}

export default App
