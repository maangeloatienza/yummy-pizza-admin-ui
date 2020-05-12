import React from 'react';

const Pagination = ({limit,total,paginate})=>{
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(total/limit); i++){
        pageNumbers.push(i);
    }

    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {
                        pageNumbers.map(item=>{
                            return  <li className="page-item" key={item}>
                                        <a 
                                            className="page-link"
                                            href="!#" 
                                            onClick={(e)=> {
                                                e.preventDefault();
                                                paginate(item)
                                            }}>{item}</a>
                                    </li>   
                        })
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;