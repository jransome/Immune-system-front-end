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
            },
            3: {
                name: 'Security',
                subCategories: [3]
            },
            4: {
                name: 'Scalability',
                subCategories: [3]
            },
            5: {
                name: 'Stability',
                subCategories: [1,2,3,4,5,6]
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
            4: { 
                name: 'Goverance sub cat 2',
                criteria: [1, 2, 3, 4, 5, 6]
            },
            5: { 
                name: 'Goverance sub cat 3',
                criteria: [4]
            },
            6: { 
                name: 'Goverance sub cat 4',
                criteria: [4]
            },
        }
    )
}
  
export function criteria(){
    return(
        {
            1: { 
                name: 'All Live Code is using tech listed as adopted or decommissioned in the Technology Radar unless it is an approved trial',
                status: 1,
                link: "http://internet.com.co.uk.org"
            },
            2: { 
                name: 'Key technology changes are reviewed in the team, tech forum or Design Authority',
                status: 2,
                link: "http://internet.com.co.uk.org"                
            },
            3: { 
                name: 'OS are patched by the end of the calendar month',
                status: 3,
                link: "http://internet.com.co.uk.org"
            },
            4: { 
                name: 'No Critical / High Vulnerabilities Open',
                status: 4,
                link: "http://internet.com.co.uk.org"
            },
            5: { 
                name: "'All actions from the 'Risk Awareness - Data Mapping' session have been completed.",
                status: 4,
                link: "http://internet.com.co.uk.org"
            },
            6: { 
                name: 'Availability = 99.99%',
                status: 4,
                link: "http://internet.com.co.uk.org"                
            }
        }
    )
}