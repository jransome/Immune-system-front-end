export const STATUS_TO_CLASS = {
    '2': 'done',
    '1': 'in-progress',
    '0': 'not-done',
    '-1': 'not-applicable',
}

export const BACKEND_DATA = [
    {
        CategoryName: "Category 1",
        SubCategories: [
            {
                SubName: "Cat 1, sub category 1",
                Criteria: [
                    {
                        id:'1',
                        description: 'Cat 1, subcat 1, criteria 1',
                        status: 0,
                    },
                    {
                        id:'2',
                        description: 'Cat 1, subcat 1, criteria 2',
                        status: 2,
                    },
                    {
                        id:'13',
                        description: 'Cat 1, subcat 1, criteria 1',
                        status: 1,
                    },
                    {
                        id:'14',
                        description: 'Cat 1, subcat 1, criteria 2',
                        status: 2,
                    }
                ]
            },
            {
                SubName: "Cat 1, sub category 2",
                Criteria: [
                    {
                        id:'3',
                        description: 'Cat 1, subcat 2, criteria 1',
                        status: 1,
                    },
                    {
                        id:'4',
                        description: 'Cat 1, subcat 2, criteria 2',
                        status: 2,
                    },
                    
                ]
            },
            {
                SubName: "Cat 1, sub category 3",
                Criteria: [
                    {
                        id:'5',
                        description: 'Cat 1, subcat 3, criteria 1',
                        status: 0,
                    },
                    {
                        id:'6',
                        description: 'Cat 1, subcat 3, criteria 2',
                        status: 2,
                    },
                ]
            },
            {
                SubName: "Cat 1, sub category 4",
                Criteria: [
                    {
                        id:'7',
                        description: 'Cat 1, subcat 4, criteria 1',
                        status: 0,
                    },
                    {
                        id:'8',
                        description: 'Cat 1, subcat 4, criteria 2',
                        status: 2,
                    },
                ]
            }
        ]
    },
    {
        CategoryName: "Category 2",
        SubCategories: [
            {
                SubName: "Cat 2, sub category 1",
                Criteria: [
                    {
                        id:'9',                        
                        description: 'Cat 2, subcat 1, criteria 1',
                        status: 0,
                    },
                    {
                        id:'10',                        
                        description: 'Cat 2, subcat 1, criteria 2',
                        status: -1,
                    },
                ]
            },
            {
                SubName: "Cat 2, sub category 2",
                Criteria: [
                    {
                        id:'11',                        
                        description: 'Cat 2, subcat 2, criteria 1',
                        status: 0,
                    },
                    {
                        id:'12',                        
                        description: 'Cat 2, subcat 2, criteria 2',
                        status: 0,
                    },
                ]
            }
        ]
    },
]