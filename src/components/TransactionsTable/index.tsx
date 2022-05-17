import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    fetch("http://localhost:3000/api/transactions").then((response) =>
      response.json().then((data) => console.log(data))
    );
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de sites</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>06/07/1999</td>
          </tr>
          <tr>
            <td>Pagamento do Aluguel</td>
            <td className="withdrow">- R$5.000</td>
            <td>Desenvolvimento</td>
            <td>06/07/1999</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
