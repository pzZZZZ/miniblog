export default {
    data() {
        return {
            navBarShow: false,
        }
    },
    created(){
        document.querySelector('body').onclick = ()=>{
            this.navBarShow = false;
        }
    },
    methods: {
        navBar() {
            this.navBarShow = true;
            console.log('123')
        }
    }
}