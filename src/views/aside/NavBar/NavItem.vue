<template>
	<div> 
		<dorm-door></dorm-door>
		<dorm-late></dorm-late>
		<attendance></attendance>
		<stu-run></stu-run>
		<meeting></meeting>
		<actions></actions>
		<classroom></classroom>
		<control></control>
		<attendance-res></attendance-res>
		<user></user>	   
	</div>
</template>

<script>
	
	import DormDoor from './DormDoor.vue'
	import DormLate from './DormLate.vue'
	import Attendance from './Attendance.vue'
	import StuRun from './StuRun.vue'
	import Meeting from './Meeting.vue'
	import Actions from './Actions.vue'
	import Classroom from './Classroom.vue'
	import Control from './Control.vue'
	import AttendanceRes from './AttendanceRes.vue'
	import User from './User.vue'
	
	export default{
		name:'NavItem',
		components:{
			Actions,
			DormDoor,
			DormLate,
			Attendance,
			StuRun,
			Meeting,
			Classroom,
			Control,
			AttendanceRes,
			User
		}
	}
</script>

<style>
</style>