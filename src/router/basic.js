export default [
	{
		path: '/basic',
		component: () => import('@/views/basicInfoMaintenance'),
		children: [{
			path: '/basic/departmentSearch',
			component: () => import('@/components/BasicInfoMaintenance/departmentSearch'),
		}]
	}
]
