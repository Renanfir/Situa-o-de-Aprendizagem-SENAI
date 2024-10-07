import React, { useContext, useEffect } from "react";
import { ServiceCtx } from "../../contexts/indusphere/Service";

export default function AdicionarProduto() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <div style={{ background: "#03073a", margin: "0", color: "#fff", width: '60%', height: '100%' }}>
        <div
          style={{
            width: "100%",
            overflow: "hidden",
            background: "rgba(255, 255, 255, 0.1)",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          <h1 style={{color: '#FFF'}}>Adicionar Produto</h1>

          <form
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            className="add-product-form"
            id="add-product-form"
          >
            <div style={{ width: "45%" }} className="form-left">
              <div className="form-group">
                <label htmlFor="produto">Produto:</label>
                <input
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "none",
                    borderRadius: "20px",
                    outline: "none",
                    background: "rgba(255, 255, 255, 0.2)",
                    color: "#fff",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                    transition: "all 0.3s ease",
                  }}
                  type="text"
                  id="produto"
                  name="produto"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="preco">Preço:</label>
                <input
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "none",
                    borderRadius: "20px",
                    outline: "none",
                    background: "rgba(255, 255, 255, 0.2)",
                    color: "#fff",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                    transition: "all 0.3s ease",
                  }}
                  type="text"
                  id="preco"
                  name="preco"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="quantidade">Quantidade:</label>
                <input
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "none",
                    borderRadius: "20px",
                    outline: "none",
                    background: "rgba(255, 255, 255, 0.2)",
                    color: "#fff",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                    transition: "all 0.3s ease",
                  }}
                  type="number"
                  id="quantidade"
                  name="quantidade"
                  required
                  min={0}
                />
              </div>
            </div>

            <div style={{ width: "45%" }} className="form-right">
              <div className="form-group">
                <label
                  style={{
                    marginBottom: "5px",
                    display: "block",
                    fontSize: "14px",
                    color: "#ddd",
                  }}
                  htmlFor="codigo"
                >
                  Código:
                </label>
                <input
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "none",
                    borderRadius: "20px",
                    outline: "none",
                    background: "rgba(255, 255, 255, 0.2)",
                    color: "#fff",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                    transition: "all 0.3s ease",
                  }}
                  type="text"
                  id="codigo"
                  name="codigo"
                  required
                />
              </div>

              <div style={{ marginBottom: "15px" }} className="form-group">
                <label htmlFor="obs">Observações:</label>
                <textarea id="obs" name="obs" defaultValue={""} />
              </div>

              <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <div>
                  <input type="checkbox" id="checkbox" name="checkbox" />
                  <label htmlFor="checkbox">Marcar</label>
                </div>

                <button type="submit" id="add-button">
                  Adicionar Produto
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
