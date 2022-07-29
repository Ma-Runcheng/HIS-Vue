import outpatient from '../components/outpatient/Outpatient.vue'
import checkpatient from '../components/outpatient/CheckPatient.vue'
import medicalrecord from '../components/outpatient/MedicalRecord.vue'
import checkrequest from '../components/outpatient/CheckRequest.vue'
import checkresult from '../components/outpatient/CheckResult.vue'
import confirm from '../components/outpatient/Confirm.vue'
import dispositionrequest from '../components/outpatient/DispositionRequest.vue'
import inspectionrequest from '../components/outpatient/InspectionRequest.vue'
import inspectionresult from '../components/outpatient/InspectionResult.vue'
import prescription from '../components/outpatient/Prescription.vue'
import querycost from '../components/outpatient/QueryCost.vue'

export default [
	{
		path:'/outpatient',
		name:'outpatient',
		component: outpatient,
		children:[
			{
				path:'/outpatient/checkpatient',
				component:checkpatient
			},
			{
				path:'/outpatient/medicalrecord',
				component:medicalrecord
			},
			{
				path:'/outpatient/checkrequest',
				component:checkrequest
			},
			{
				path:'/outpatient/checkresult',
				component:checkresult
			},
			{
				path:'/outpatient/confirm',
				component:confirm
			},
			{
				path:'/outpatient/dispositionrequest',
				component:dispositionrequest
			},
			{
				path:'/outpatient/inspectionrequest',
				component:inspectionrequest
			},
			{
				path:'/outpatient/inspectionresult',
				component:inspectionresult
			},
			{
				path:'/outpatient/prescription',
				component:prescription
			},
			{
				path:'/outpatient/querycost',
				component:querycost
			}
		]
	}
]