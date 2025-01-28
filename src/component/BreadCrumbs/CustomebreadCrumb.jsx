import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';

function Breadcrumbs({ items }) {
  
  return (
    <Breadcrumb>
    
      {items.map((item, index) => (
        <Breadcrumb.Item key={index}>
          {index === 0 ? (
            <Link to={item.link}>{item.label}</Link>
          ) : (
            <>
           {/* {item.label} */}
            <Link to={item.link}>{item.label}</Link>
            </>
          )}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
}

export default Breadcrumbs;
