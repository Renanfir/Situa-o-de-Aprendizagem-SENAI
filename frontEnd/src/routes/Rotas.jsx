import { Routes, Route, Outlet } from "react-router-dom";
import Home from "../pages/indusphere/Home";
import Private from "../pages/Private";
import RequireAuth from "../contexts/indusphere/RequireAuth";
import Login from "../pages/indusphere/Login";
import AdicionarProduto from "../pages/controleEstoque/AdicionarProduto";
import VerficiarEstoqueProduto from "../pages/controleEstoque/VerficiarEstoqueProduto";
import ServicosRastreamento from "../pages/rastreioRFID/ServicosRastreamento";
import Rastreio from "../pages/rastreioRFID/Rastreio";
import Envio from "../pages/rastreioRFID/Envio";
import Servicos3D from "../pages/impressora3D/Servicos3D";
import ControleQualidade from "../pages/controleQualidade/ControleQualidade";
import QuantidadeErros from "../pages/controleQualidade/relatorios/QuantidadeErros";
import ListarErros from "../pages/controleQualidade/relatorios/ListarErros";
import HomeMM from "../pages/monitoramentoMaquinas/HomeMM";
import KpiMaquinas from "../pages/monitoramentoMaquinas/KpiMaquinas";
import CadastroMaquinas from "../pages/monitoramentoMaquinas/CadastroMaquinas";
import RegistraUser from "../pages/indusphere/RegistraUser";
import FazerPedidos from "../pages/gestao/FazerPedido";
import Visualizar from "../pages/gestao/Visualizar";
import VerificarEstoque from "../pages/impressora3D/Estoque/VerificarEstoque";
import ImprimirPecas from "../pages/impressora3D/Imprimir/ImprimirPecas";
import FazerPedido from "../pages/impressora3D/Pedido/FazerPedido";
import VerificarOMS from "../pages/impressora3D/VerificarOMS/VerificarOMS";
import EstoquePecas from "../pages/impressora3D/Estoque/EstoquePecas";
import EstoqueFilamento from "../pages/impressora3D/Estoque/EstoqueFilamento";
import VerificarMoldes from "../pages/impressora3D/Imprimir/VerificarMoldes";
import Fornecedor from "../pages/impressora3D/Pedido/Fornecedor";
import Filamento from "../pages/impressora3D/Pedido/Filamento";
import ImprimirPecaDetalhes from "../pages/impressora3D/Imprimir/ImprimirPecaDetalhes";
import FazerPropraPeca from "../pages/impressora3D/Imprimir/FazerPropraPeca";
import Inventario from "../pages/inventario/inventario";

export default function Rotas() {
  return (
    <Routes>
      {/* Login */}
      <Route path="/login" element={<Login />} />

      {/* Rotas protegidas */}
      <Route element={<RequireAuth />}>
        
        {/* Página inicial */}
        <Route path="/" element={<Home />} />

        {/* Registro de Usuário */}
        <Route path="/registro-usuario" element={<RegistraUser />} />

        {/* Página Privada */}
        <Route path="/private" element={<Private />} />

        {/* Controle de Estoque */}
        <Route path="/controle-estoque" element={<Outlet />}>
          <Route path="verificar-estoque-produto" element={<VerficiarEstoqueProduto />} />
          <Route path="adicionar-produto" element={<AdicionarProduto />} />
        </Route>

        {/* Monitoramento de Máquinas */}
        <Route path="/monitoramento-maquinas" element={<Outlet />}>
          <Route path="geral" element={<HomeMM />} />
          <Route path="kpi-maquinas" element={<KpiMaquinas />} />
          <Route path="cadastros" element={<CadastroMaquinas />} />
        </Route>

        {/* Rastreamento RFID */}
        <Route path="/rastreio-rfid" element={<Outlet />}>
          <Route path="servicos-rastreamento" element={<ServicosRastreamento />} />
          <Route path="rastreio" element={<Rastreio />} />
          <Route path="envio" element={<Envio />} />
        </Route>

        {/* Impressora 3D */}
        <Route path="/impressora-3d" element={<Outlet />}>
          <Route path="servicos-3d" element={<Servicos3D />} />
          <Route path="verificar-estoque" element={<VerificarEstoque />} />
          <Route path="estoque-peca" element={<EstoquePecas />} />
          <Route path="estoque-filamento" element={<EstoqueFilamento />} />
          <Route path="imprimir-peca" element={<ImprimirPecas />} />
          <Route path="verificar-moldes" element={<VerificarMoldes />} />
          <Route path="imprimir-peca-detalhes" element={<ImprimirPecaDetalhes />} />
          <Route path="imprimir-propria-peca" element={<FazerPropraPeca />} />
          <Route path="fazer-pedido" element={<FazerPedido />} />
          <Route path="pedir-fornecedor" element={<Fornecedor />} />
          <Route path="pedir-filamento" element={<Filamento />} />
          <Route path="verificar-oms" element={<VerificarOMS />} />
        </Route>


        {/* Inventario */}
        <Route path="/inventario" element={<Outlet />}>
          <Route path="geral" element={<Inventario />} />
        </Route>


        {/* Qualidade */}
        <Route path="/qualidade" element={<Outlet />}>
          <Route path="home-qualidade" element={<ControleQualidade />} />
          <Route path="quantidade-erros" element={<QuantidadeErros />} />
          <Route path="listar-erros" element={<ListarErros />} />
        </Route>

        {/* Gestão */}
        <Route path="/gestao" element={<Outlet />}>
          <Route path="fazer-pedido" element={<FazerPedidos />} />
          <Route path="visualizar-pedidos" element={<Visualizar />} />
        </Route>
      </Route>
    </Routes>
  );
}
