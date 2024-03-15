export  const links = [
    {
        name: 'About', submenu: true, sublinks: [
            {
                sublink: [
                    { name: 'History/Background', link: '/pages/about' },
                    { name: 'Mission', link: '/pages/missions' },
                    { name: 'Philosophy & Strategic Goals', link: '/pages/goals' },
                    { name: 'Policies', link: '/pages/policy' },
                ]
            }
        ]
    },
    { name: 'Admissions', submenu: true, sublinks: [
        {
            sublink: [
                { name: 'Enrollment', link: '/pages/enrollment' },
                { name: 'Curriculum', link: '/pages/curriculum' },
                { name: 'Marketing', link: '/pages/market' },
            ]
        }
    ] },
    { name: 'Staff', submenu: true, sublinks: [
        {
            sublink: [
                { name: 'Environmental Analysis', link: '/pages/analysis' },
                { name: 'Staffing', link: '/pages/staff' },
            ]
        }
    ] },
]