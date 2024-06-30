import { Link } from "react-router-dom";

/**
 * @param {string} children - text
 * @param {string} className
 * @param {number} lines - 0 - 6
 * @param {string} rmClasses
 * @param {string} href
 * @returns 
 **/
export default function ReadMore({ children, className, rmClassName, href }) {
  return (
    <>
      <div className={className}>{children}</div>
      <Link to={href} className={rmClassName}>Read more</Link>
    </>
  );
}
