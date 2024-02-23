
interface Crumb {
  href: string;
  title: string;
}

interface BreadcrumbProps {
  crumbs: Crumb[];
}
const Breadcrumb: React.FC<BreadcrumbProps> = ({ crumbs }) => {
    return (
      <nav aria-label="breadcrumb" className="py-3 ml-xl mt-ll">
        <ol className="list-reset flex">
          {crumbs.map((crumb, idx) => {
            const isLast = idx === crumbs.length - 1;
            return (
              <li key={idx}
                  className={`font-poppins font-semibold text-small leading-base ${isLast ? 'text-space-cadet' : 'text-blue-600 hover:text-blue-700'} ${idx !== crumbs.length - 1 ? 'mr-2' : ''}`}>
                {!isLast ? (
                  <a href={crumb.href} className="text-frenchGray font-poppins font-semibold text-small leading-base">
                    {crumb.title}
                  </a>
                ) : (
                  <span className="text-gray-500">{crumb.title}</span>
                )}
                {!isLast && (
                  <span className="mx-2 text-space-cadet">/</span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  };
  
  export default Breadcrumb;
  