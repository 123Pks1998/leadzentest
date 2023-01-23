import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'

const HomePage = (props) => {

    const { data } = props
    // console.warn('adderss', data)

    const [show, setShow] = useState(false)
    const [currentItems, setCurrentItems] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0)
    const itemPerPage = 3


    useEffect(() => {
        const endOffset = itemOffset + itemPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemPerPage));
    }, [itemOffset, itemPerPage, data])

    const handlePagesClick = (event) => {
        const newOffset = (event.selected * itemPerPage) % data.length;
        setItemOffset(newOffset)
    }

    const toggle = () => {
        setShow(!show)
    }
    return (
        <>
            {currentItems.map(datas => {
                return (
                    <div className='home_page'>
                        <div >

                            <div className='company_details'>
                                <div>
                                    <p className='company_name'>{datas.company.name}</p>
                                </div>

                                <div className='other_details'>
                                    <ul>
                                        <li><h3>Contact</h3></li>
                                        <li><h3>Street</h3></li>
                                        <li><h3>City</h3></li>

                                    </ul>

                                    <ul>
                                        <li>{datas.phone}</li>
                                        <li>{datas.address.street}</li>
                                        <li>{datas.address.city}</li>
                                    </ul>

                                </div>

                                <div className='button'>
                                    <button className='view_button' onClick={toggle}> {show ? 'Hide Details' : 'Show Details'}</button>
                                </div>

                            </div>
                            {/* -------------------------------------------------------------------------------------------- */}
                            {show ? <div className='all_details'>
                                <div className='description'>
                                    <h4>Description</h4>
                                    <p>{datas.company.bs}</p>
                                </div>


                                <div className='others_half_details'>

                                    <div className='c_d_e_P'>
                                        <div>
                                            <h4>Contact Person</h4>
                                            <p>{datas.name}</p>
                                        </div>

                                        <div>
                                            <h4>Designation</h4>
                                            <p>{datas.company.catchPhrase}</p>
                                        </div>

                                        <div>
                                            <h4>Email </h4>
                                            <p>{datas.email}</p>
                                        </div>

                                        <div>
                                            <h4>Phone </h4>
                                            <p>{datas.phone}</p>
                                        </div>

                                    </div>

                                    <div className='a_c_s_z'>
                                        <div>
                                            <h4>Address</h4>
                                            <p>{datas.address.street} {datas.address.city},zip code  {datas.address.zipcode}</p>
                                        </div>


                                        <div>
                                            <h4>City</h4>
                                            <p>{datas.address.city}</p>
                                        </div>

                                        <div>
                                            <h4>Street</h4>
                                            <p>{datas.address.street}</p>
                                        </div>


                                        <div>
                                            <h4>Zip Code</h4>
                                            <p>{datas.address.zipcode}</p>
                                        </div>
                                    </div>
                                </div>

                            </div> : null}


                        </div>

                    </div>
                )
            })}



            <ReactPaginate

                breakLabel="..."
                nextLabel=" >"
                onPageChange={handlePagesClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< "
                renderOnZeroPageCount={null}
                containerClassName='pagination'
                pageClassName="page-num"
                previousLinkClassName="page-num"
                nextLinkClassName="page-num"
                activeLinkClassName="active" />
        </>

    )
}

export default HomePage




