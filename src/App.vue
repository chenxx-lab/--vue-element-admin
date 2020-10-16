<template>
  <div id="app"> 
       	<Header></Header>
		    <Nav></Nav> 
       	<unusua-stu></unusua-stu>
       	</ul>
    <router-view/>
  </div>
</template>

<script type="text/javascript">
	import Header from './views/header/Header'
	import Nav from './views/aside/NavBar/Nav'
	import UnusuaStu from './views/main/home/UnusuaStu'

	export default{
		name:'App',
		components:{
			Header,
			Nav,
			UnusuaStu
		}
	}
</script>
<style>
    @import './assets/css/base.css'
    @media only screen and (min-width: 320px){html {font-size: 62.5%!important;}}
		@media only screen and (min-width: 400px){html {font-size: 72.5%!important;}}
		@media only screen and (min-width: 600px){html {font-size: 82.5%!important;}}
		@media only screen and (min-width: 1000px){html {font-size: 92%!important;}}
</style>
