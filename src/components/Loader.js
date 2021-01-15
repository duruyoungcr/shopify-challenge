import React from 'react'
import { Spinner } from "@chakra-ui/react"

const Loader = () => {
    return (
        <div className="loader">
            <Spinner size="xl" />
            <p>Loading...</p>
        </div>
    )
}

export default Loader
