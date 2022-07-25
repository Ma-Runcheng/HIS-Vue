import Registering from '../components/register/Registering.vue'
import BackNumber from '../components/register/BackNumber.vue'
import InvoiceManage from '../components/register/InvoiceManage.vue'
import ExpenseManage from '../components/register/ExpenseManage.vue'



export default [
	{
		path: '/register',
		component: () => import('@/views/register'),
		children: [
			{
				path: '../register/registering',
				component: () => import('@/components/register/Registering'),
			},
			{
				path: '../register/BackNumber',
				component: () => import('@/components/register/BackNumber'),
			},
			{
				path: '../regitser/invoicemangage',
				component: () => import('@/components/register/InvoiceManage'),
			},
			{
				path: '../register/expensemanage',
				component: () => import('@/components/register/ExpenseManage'),
			},
		]
	}
]
