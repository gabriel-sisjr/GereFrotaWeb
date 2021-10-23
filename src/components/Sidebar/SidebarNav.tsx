import { Stack } from '@chakra-ui/react';
import { AiFillCar } from 'react-icons/ai';
import { FaRegIdCard } from 'react-icons/fa';
import { RiHome2Fill, RiPieChartLine, RiToolsLine } from 'react-icons/ri';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiHome2Fill} href="/home" >Página Inicial</NavLink>
        <NavLink icon={RiToolsLine} href="/manutencoes" >Manutenção</NavLink>
        {/* <NavLink icon={RiPieChartLine} href="/relatorios" >Relatórios</NavLink> */}
      </NavSection>

      <NavSection title="CADASTROS / LISTAS">
        <NavLink icon={AiFillCar} href="/veiculos" >Veículos</NavLink>
        <NavLink icon={FaRegIdCard} href="/condutores">Condutores</NavLink>
      </NavSection>
    </Stack>
  );
}