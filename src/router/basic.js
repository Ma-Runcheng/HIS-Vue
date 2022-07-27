export default [
	{
		path: '/basic',
		component: () => import('@/views/basicInfoMaintenance'),
		children: [{
			path: '/basic/index',
			component: () => import('@/components/BasicInfoMaintenance/index'),
		},{
			path: '/basic/departmentSearch',
			component: () => import('@/components/BasicInfoMaintenance/departmentSearch'),
		}
		]
	}
]
