import React from 'react'

export default function HomeComponent() {
    return (
        <div>
            {/*        Content*/}
            <h1>Home Page</h1>
            <div className="content row">
                <div className="col-6">
                    <img
                        src="https://images.unsplash.com/photo-1519817914152-22d216bb9170?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                        className="img-fluid"
                        alt="road"
                    />
                </div>
                <div className="col-6">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <p>
                        The purpose of lorem ipsum is to create a natural looking block of text
                        (sentence, paragraph, page, etc.) that doesn't distract from the layout.
                        A practice not without controversy, laying out pages with meaningless
                        filler text can be very useful when the focus is meant to be on design,
                        not content.
                    </p>
                </div>
            </div>
            {/*        Content*/}
        </div>
    )
}
