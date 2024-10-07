import { useContext, useEffect, useState } from "react";
import { ServiceCtx } from "../../contexts/indusphere/Service";
import { Outlet } from 'react-router-dom';

export default function Inventario() {
  const service = useContext(ServiceCtx);
  useEffect(() => {
    service.setPages([
        {
            label: "Inventário",
            rota: "",
        },
        {
          label: "Adicionar item",
          rota: "",
      },
      {
        label: "Relatório",
        rota: "",
    },
       
    ]);
}, []);
      
  return (
    <div>
      <p>aaaaaaaaaaaaa</p>
    </div>
  );
}
