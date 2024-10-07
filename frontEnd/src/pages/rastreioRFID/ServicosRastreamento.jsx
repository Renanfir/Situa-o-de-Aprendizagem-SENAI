import React from "react";
import { useContext, useEffect, useState } from "react";
import { ServiceCtx } from "../../contexts/indusphere/Service";
import { Outlet } from "react-router-dom";
import "./Teste.css";
import GrafColunas from "../../components/monitoramentoMaquinas/GrafCoulnas";
import Map from "../../components/rastreioRFID/Map";

export default function ServicosRastreamento() {
  const service = useContext(ServiceCtx);

  useEffect(() => {
    service.setPages([
      {
        label: "Dashboard",
        rota: "rastreio-rfid/servicos-rastreamento",
    },
    {
        label: "Rastreio",
        rota: "rastreio-rfid/rastreio",
    },
    {
        label: "Envio",
        rota: "rastreio-rfid/envio",
    },
    ]);
    service.setBackground("rgba(255, 255, 255, 0.1)");

    return () => {
      service.setBackground("transparent");
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "white",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          borderRadius: 20,
          padding: 20,
          minWidth: "35%",
          flex: 1,
          height: "85%",
          marginRight: "2%",
        }}
      >
        <Map/>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "white",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          borderRadius: 20,
          padding: 20,
          width: "35%",
          height: "85%",
        }}
      >
        <h1> Resumo Etiquetas</h1>
        <GrafColunas
          height={400}
          width={"200%"}
          data={[10, 5, 2, 3]}
          categories={["Ativo", "Sem Endereçamento", "Com problema", "Manutenção"]}
        />
      </div>
    </div>
  );
}
