export function categories(){
    return(
        {
            1: { 
                name: 'Customer',
                subCategories: [1, 2]
            },
            2: {
                name: 'Governance',
                subCategories: [3]
            }
        }
    )
}

export function subCategories(){
    return(
        {
            1: { 
                name: 'Customer sub cat 1',
                criteria: [1, 2]
            },
            2: {
                name: 'Customer sub cat 2',
                criteria: [3]
            },
            3: { 
                name: 'Goverance sub cat 1',
                criteria: [4]
            },
        }
    )
}
  
export function criteria(){
    return(
        {
            1: { 
                name: 'Criteria 1',
                status: 1
            },
            2: { 
                name: 'Criteria 2',
                status: 2
            },
            3: { 
                name: 'Criteria 3',
                status: 3
            },
            4: { 
                name: 'Criteria 4',
                status: 4
            },
        }
    )
}