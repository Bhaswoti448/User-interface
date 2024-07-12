import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

const Sidebar = () => {
  const [factoryDropdown, setFactoryDropdown] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [checksDropdown, setChecksDropdown] = useState(false);

  const toggleFactoryDropdown = () => {
    setFactoryDropdown(!factoryDropdown);
    setProductsDropdown(false);
    setChecksDropdown(false);
  };

  const toggleProductsDropdown = () => {
    setProductsDropdown(!productsDropdown);
    setFactoryDropdown(false);
    setChecksDropdown(false);
  };

  const toggleChecksDropdown = () => {
    setChecksDropdown(!checksDropdown);
    setFactoryDropdown(false);
    setProductsDropdown(false);
  };

  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <li>
          <Link to="/admin/factory" onClick={toggleFactoryDropdown}>
            <FaIcons.FaBuilding />
            Factory {factoryDropdown ? <AiIcons.AiOutlineUp /> : <AiIcons.AiOutlineDown />}
          </Link>
          {factoryDropdown && (
            <ul className="dropdown-list">
              <li><Link to="/admin/factory/plant1">Plant 1</Link></li>
              <li><Link to="/admin/factory/plant2">Plant 2</Link></li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/admin/products" onClick={toggleProductsDropdown}>
            <AiIcons.AiOutlineShopping />
            Product Lines {productsDropdown ? <AiIcons.AiOutlineUp /> : <AiIcons.AiOutlineDown />}
          </Link>
          {productsDropdown && (
            <ul className="dropdown-list">
              <li><Link to="/admin/products/category1">Category 1</Link></li>
              <li><Link to="/admin/products/category2">Category 2</Link></li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/admin/checks" onClick={toggleChecksDropdown}>
            <AiIcons.AiOutlineCheckCircle />
            Checks {checksDropdown ? <AiIcons.AiOutlineUp /> : <AiIcons.AiOutlineDown />}
          </Link>
          {checksDropdown && (
            <ul className="dropdown-list">
              <li>Warranty Checks</li>
              <li>Qnote Checks</li>
              <li>MPP Checks</li>
              <li>DTAC and PDI Checks</li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
