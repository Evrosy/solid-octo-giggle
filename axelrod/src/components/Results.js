import React from 'react';

function Results({ results }) {
  if (!results) return null;

  return (
    <div id="Wyniki" style={{ display: results ? 'block' : 'none' }}>
      <table>
        <thead>
          <tr>
            <th colSpan="3">WYNIKI</th>
          </tr>
          <tr>
            <td></td>
            <td>Arek</td>
            <td>Irek</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Donieśli Oboje:</td>
            <td colSpan="2" id="DoniesliOboje">{results.Oboje}</td>
          </tr>
          <tr>
            <td>Doniósł Arek:</td>
            <td id="DonioslA">{results.DonioslA}</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Doniósł Irek:</td>
            <td>-</td>
            <td id="DonioslI">{results.DonioslI}</td>
          </tr>
          <tr>
            <td>Milczeli:</td>
            <td colSpan="2" id="Milczeli">{results.Milczeli}</td>
          </tr>
          <tr>
            <td>Siedziali</td>
            <td id="SiedzialA">{results.SiedzialA} lat</td>
            <td id="SiedzialI">{results.SiedzialI} lat</td>
          </tr>
          <tr>
            <td>Suma</td>
            <td id="SumaA">{results.SumaA} razy</td>
            <td id="SumaI">{results.SumaI} razy</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Results;