import React, { useContext, useEffect } from "react";
import { ServiceCtx } from "../../contexts/indusphere/Service";

export default function VerficiarEstoqueProduto() {
  const service = useContext(ServiceCtx);

  useEffect(() => {
    service.setSrcLogo("/equipes/monitor.png");
    service.setPages([
      {
        label: "Verficar estoque",
        rota: "controle-estoque/verificar-estoque-produto",
      },
      {
        label: "Adicionar produto",
        rota: "controle-estoque/adicionar-produto",
      },
    ]);
  }, []);

  return (
    <div>
      <div
        style={{
          width: "80%",
          margin: "0 auto",
          marginTop: "120px",
          overflow: "hidden",
          background: "rgba(255, 255, 255, 0.1)",
          padding: "20px",
          borderRadius: "15px",
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
          borderBottomRightRadius: "15px",
          borderBottomLeftRadius: "15px",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{display: 'flex', flex: 1}}>
            <input
              type="text"
              placeholder="Pesquisar..."
              style={{
                padding: "10px 10px",
                fontSize: "16px",
                width: "95%",
                border: "none",
                borderRadius: "30px",
                outline: "none",
                background: "rgba(255, 255, 255, 0.2)",
                color: "#fff",
                boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
                transition: "all 0.3s ease",
                marginBottom: "15px",
              }}
            />
          </div>
          <a
            href="adicionar.html"
            style={{
              background: "linear-gradient(45deg, #00bfff, #1e90ff)",
              padding: '1%', 
              color: "white",
              border: "none",
              borderRadius: "24px",
              cursor: "pointer",
              transition: "background 0.3s ease, box-shadow 0.3s ease",
              boxShadow: "0 0 10px rgba(0, 191, 255, 0.5)",
            }}
          >
            Adicionar Produto
          </a>
        </div>
        <table className="product-table">
          <thead>
            <tr>
              <th>Produto</th>
              <th>Preço</th>
              <th>Quantidade</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody id="product-list"></tbody>
        </table>
      </div>
      <div id="delete-modal" className="modal">
        {/* <div className="modal-content">
          <span className="close">×</span>
          <p>Tem certeza que deseja excluir este produto?</p>
          <div className="modal-buttons">
            <button id="confirm-delete" className="button">
              Sim
            </button>
            <button id="cancel-delete" className="button">
              Não
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

// const styles = {
//   body: {
//     fontFamily: "'Roboto', sans-serif",
//     background: "#03073a",
//     margin: 0,
//     color: "#fff",
//   },
//   container: {
//     overflow: "hidden",
//     background: "rgba(255, 255, 255, 0.1)",
//     padding: "20px",
//     borderRadius: "15px",
//     boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
//   },
//   header: {
//     display: "flex",
//     justifyContent: "space-between",
//     width: "100%",
//   },
//   searchContainer: {
//     width: "80%",
//   },
//   searchInput: {
//     padding: "10px 10px",
//     fontSize: "16px",
//     width: "95%",
//     border: "none",
//     borderRadius: "30px",
//     outline: "none",
//     background: "rgba(255, 255, 255, 0.2)",
//     color: "#fff",
//     boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
//     transition: "all 0.3s ease",
//     marginBottom: "15px",
//   },
//   searchInputFocus: {
//     background: "rgba(255, 255, 255, 0.3)",
//   },
//   addButton: {
//     background: "linear-gradient(45deg, #00bfff, #1e90ff)",
//     color: "white",
//     border: "none",
//     borderRadius: "24px",
//     cursor: "pointer",
//     transition: "background 0.3s ease, boxShadow 0.3s ease",
//     boxShadow: "0 0 10px rgba(0, 191, 255, 0.5)",
//   },
//   addButtonHover: {
//     boxShadow: "0 0 20px rgba(0, 191, 255, 0.8)",
//   },
//   productTable: {
//     width: "100%",
//     borderCollapse: "collapse",
//   },
//   productTableHeader: {
//     background: "rgba(255, 255, 255, 0.2)",
//   },
//   productTableCell: {
//     padding: "12px",
//     border: "1px solid rgb(255, 255, 255)",
//     textAlign: "left",
//   },
//   evenRow: {
//     background: "rgba(255, 255, 255, 0.1)",
//   },
//   button: {
//     padding: "8px 16px",
//     margin: "0 2px",
//     border: "none",
//     borderRadius: "30px",
//     cursor: "pointer",
//     transition: "background-color 0.3s ease",
//   },
//   editButton: {
//     backgroundColor: "#17a2b8",
//     color: "white",
//     boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
//   },
//   editButtonHover: {
//     backgroundColor: "#138496",
//   },
//   deleteButton: {
//     backgroundColor: "#dc3545",
//     color: "white",
//     boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
//   },
//   deleteButtonHover: {
//     backgroundColor: "#c82333",
//   },
//   link: {
//     color: "#fff",
//     textDecoration: "none",
//   },
// };
