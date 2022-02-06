import './Component.css';
import { Label } from './Component';

function App() {
  return (
    <div className='container'>
      <Label variant="positive"> +12.10 </Label>
      <Label variant="negative"> -8.12 </Label>
      <Label > 0.00 </Label>
      <Label variant="neutral"> Not available </Label>
    </div>
  );
}

export default App;
