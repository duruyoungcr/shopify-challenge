import React from 'react'
import { Input } from "@chakra-ui/react"

const SearchInput = ({searchTerm, setSearchTerm , setLoading}) => {
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        setLoading(true);
    }

    return (
        <div className="search-box">
            <h1 className="search-box-title">Nominater</h1>
            <Input 
                size="lg" 
                placeholder="search for movies..." 
                value={searchTerm} 
                onChange={handleChange}
            />
            <p as="i" className="italic">Note: Please enter at least 3 characters</p>
        </div>
    )
}

export default SearchInput;
