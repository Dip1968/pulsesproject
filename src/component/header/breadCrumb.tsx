import React from "react";
import { Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

interface BreadcrumbProps {
  selectedDropdownItems?: any;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ selectedDropdownItems }) => {
  const location = useLocation();
  const pathnames = location.pathname
    .split("/")
    .filter((pathname) => pathname.trim() !== "");

  // Helper function to capitalize the first letter of a string
  const capitalizeFirstLetter = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  const getBreadcrumbItems = () => {
    const breadcrumbItems = [];

    // Add the "Home" link
    breadcrumbItems.push(
      <li key="home" className="breadcrumb-item">
        <Link to="/">Home</Link>
      </li>
    );
      
    // Add selectedDropdownItems
    if (selectedDropdownItems && selectedDropdownItems.length > 0 && !selectedDropdownItems?.includes('')) {
  
      for (let i = 0; i < selectedDropdownItems.length; i++) {
        const item = selectedDropdownItems[i];

        let url = item;

        breadcrumbItems.push(
          <li
            key={i}
            className={`breadcrumb-item ${
              i === selectedDropdownItems.length - 1 ? "active" : ""
            }`}
          >
            {i === selectedDropdownItems.length - 1 ? (
              <span>{capitalizeFirstLetter(item)}</span>
            ) : (
              <Link to={url}>{capitalizeFirstLetter(item)}</Link>
            )}
          </li>
        );
      }
    }

    // Add the last item from the pathnames
    if (pathnames.length > 0) {
      const lastPathname = pathnames[pathnames.length - 1];

      breadcrumbItems.push(
        <li
          key="last"
          className={`breadcrumb-item ${
            selectedDropdownItems && selectedDropdownItems.length === 0
              ? "active"
              : ""
          }`}
        >
          <span>{capitalizeFirstLetter(lastPathname.replace(/-/g, " "))}</span>
        </li>
      );
    }

    return breadcrumbItems;
  };

  return (
    <Container>
    <nav aria-label="breadcrumb" className="syno-breadcrumb">
      <ol className="breadcrumb">{getBreadcrumbItems()}</ol>
    </nav>
    </Container>
  );
};

export default Breadcrumb;
