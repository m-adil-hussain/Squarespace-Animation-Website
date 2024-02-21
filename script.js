var tl = gsap.timeline()
tl.from("header .logo img,header nav ul li,header .btn span,header .btn button",{
	y:-100,
	duration:1,
	opacity:0,
	stagger:0.5
})
tl.from("main h1",{
	y:-100,
	duration:1,
	opacity:0,
	stagger:0.5
})
tl.from("main>img",{
	scale:0,
	opacity:0,
	duration:1
})
tl.from("main .scroll h2",{
	y:-50,
	opacity:0,
	duration:1,
	repeat:-1,
	yoyo:true
})