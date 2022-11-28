import '../styles/App.scss';
import contacts from '../data/contacts.json';

function App() {
  // VARIABLES ESTADO

  // USEEFFECT ?

  // FUNCIONES HANDLER

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML

  // HTML EN EL RETURN

  return (
    <div className="App">
      <h1 className="title">Adalabers</h1>

      <table className="table">
        {/* <!-- Fila de cabecera --> */}
        <thead><tr>
          <th>Nombre</th>
          <th>Tutora</th>
          <th>Especialidad</th>
        </tr></thead>
        {/* <!-- Fin fila de cabecera --> */}
        <tbody>
        {/* <!-- Primera fila --> */}
          <tr>
            <td>MariCarmen</td>
            <td>Yanelis</td>
            <td>Python</td>
          </tr>
        {/* <!-- Segunda fila --> */}
          <tr>
            <td>Amparo</td>
            <td>Dayana</td>
            <td>IA</td>
          </tr>
        {/* <!-- Tercera fila --> */}
          <tr>
            <td>Escandia</td>
            <td>Iván</td>
            <td>3D graphics</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
