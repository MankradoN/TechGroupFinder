import Nav from './Nav/Nav';
import SideBar from './SideBar/SideBar';
import SearchBar from './SearchBar/SearchBar';
import { Group } from '../globals/group';
import { ReactNode } from 'react';


interface LayoutProps {
    children: Group[] | any;
    showSearchBar?: boolean;
  }

const Layout = ({ children, showSearchBar = true }: LayoutProps) => {
  return (
    <div>
    <Nav />
    <div className="container">
      <SideBar />
      <main>
        {showSearchBar && <SearchBar />}
        <div className="content">
          {children}
        </div>
      </main>
    </div>
  </div>
  )
}

export default Layout