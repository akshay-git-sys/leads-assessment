"use client";

import React, {useState} from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import LeadsList from './LeadsList';

const AdminPanel: React.FC = () => {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState<string>('/admin');

  const handleNavigation = (route: string) => {
    setActiveItem(route);
    router.push(route);
  };

  return (
    <Container>
      <Sidebar>
        <Logo>
          <span>alma</span>         
        </Logo>
        <Nav>
          <NavItem active={activeItem === '/admin'} onClick={() => handleNavigation('/admin')}>Leads</NavItem>
          <NavItem active={activeItem === '/admin/settings'} onClick={() => handleNavigation('/admin/settings')}>Settings</NavItem>
        </Nav>
      </Sidebar>
      <MainContent>   
        <LeadsList />
      </MainContent>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Sidebar = styled.aside`
  width: 100%;  
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 250px; /* Sidebar width on larger screens */
  }
`;

const Logo = styled.div`
  margin-bottom: 10px;
  text-align: left;
  padding: 15px;
  font-size: 30px;
  font-weight: bold;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const Nav = styled.nav`
  flex-grow: 1;
`;

const NavItem = styled.div<{ active: boolean }>`
  padding: 10px 15px;
  cursor: pointer;
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  color: #000;
  
  &:hover {
    background-color: #e9ecef;
  }
`;

const MainContent = styled.main`
  flex-grow: 1;
  padding: 20px;  

  @media (max-width: 768px) {
    padding: 10px; /* Reduce padding on smaller screens */
  }
`;

export default AdminPanel;
