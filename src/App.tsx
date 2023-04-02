import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';
import ListGroup from './components/ListGroup';

function App() {
  const [displayAlert, setDisplayAlert] = useState(false);
  const items = ['New York', 'San Fransisco', 'Tokyo', 'London', 'Paris'];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div className="App">
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {displayAlert && (
        <Alert onClose={() => setDisplayAlert(false)}>
          Oi <span>Choom!</span>
        </Alert>
      )}
      <Button variant="info" onClick={() => setDisplayAlert(true)}>
        Click me
      </Button>
    </div>
  );
}

export default App;
