import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [deliveryType, setDeliveryType] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert('Debes aceptar los términos y condiciones');
      return;
    }
    // Aquí puedes manejar el envío de la cotización como desees.
    alert('Cotización enviada');
    setName('');
    setEmail('');
    setProductQuantity('');
    setDeliveryType('');
    setTermsAccepted(false);
  };

  return (
    <div className="App">
      <h1>Cotizar producto</h1>
      <p>Obtén tu cotización personalizada en segundos.</p>
      <form onSubmit={handleSubmit}>
        <h3>Información de contacto</h3>
        <div>
          <label>Nombre:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div>
          <label>Correo:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <h3>Información adicional</h3>
        <div>
          <label>Cantidad de productos:</label>
          <input 
            type="number" 
            value={productQuantity} 
            onChange={(e) => setProductQuantity(e.target.value)} 
          />
        </div>
        <div>
          <label>Tipo de entrega:</label>
          <select 
            value={deliveryType} 
            onChange={(e) => setDeliveryType(e.target.value)}
          >
            <option value="">Seleccionar</option>
            <option value="estandar">Estándar</option>
            <option value="express">Express</option>
          </select>
        </div>
        <div>
          <input 
            type="checkbox" 
            checked={termsAccepted} 
            onChange={(e) => setTermsAccepted(e.target.checked)}
          />
          <label>Acepto los términos y condiciones</label>
        </div>
        <button type="submit">Enviar cotización</button>
      </form>
    </div>
  );
}

export default App;
