const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observer.observe(element));

document.getElementsByClassName('custombutton')[0]
        .addEventListener('click', function (event) {
            const name = document.getElementById('check').checked
            console.log(name)
            if (name == true){
                alert("Selamat bergabung kedalam membership!")
            } else {
                alert("Silahkan pilih setujui Kebijakan Privasi serta Syarat dan Ketentuan terlebih dahulu")
            }
});