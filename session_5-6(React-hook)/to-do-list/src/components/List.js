import React from 'react'

export default function List(props) {
    console.log("List: ", props.list);

    return (
        <>
            <ul className="my-5">
                {
                    props.list.map((element, index) => {
                        return (
                            <li key={index}>
                                <div className="row">
                                    <div className="col-6 my-3">
                                        {element}
                                    </div>

                                    <div className="col-6 my-3">
                                        <button className='btn btn-danger' onClick={() => { props.handleDelete(index) }}>Delete</button>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}
