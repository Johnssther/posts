const Paginate = ({limit, page, total, page_previous, page_next}) => {
    return (
        <div className="grid col-3 col-sm-5">
            <div className="span-3 span-sm-5">
                <ul className="pagination">
                    <li>{ page > 1 && <a className="active" onClick={() => page_previous(page-1, limit)}>« Anterior</a>}</li>
                    <li><a>Total de resultados {total} / Página: {page} / Límite {limit}</a></li>
                    <li><a className="active" onClick={() => page_next(page+1, limit)}>Siguiente »</a></li>
                </ul>
            </div>
        </div> 
    );
}
export default Paginate;
