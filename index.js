$(function(){
	$('.h_left').jCorners({
		style:'scoop',
		tl:'0px',
		bl:'0px'
	})
	$('.h_right').jCorners({
		style:'scoop',
		tr:'0px',
		br:'0px'
	})
	$('.alph').jCorners()
	$('#introduction,#guide,#download,#documentation,#author,#example').jCorners({
		style:'folded',
	})
	$('.f_left').jCorners({
		style:'scoop',
		tl:'0px',
		bl:'0px'
	})
	$('h1').jCorners({
		style:'scoop'
	})
	$('.f_right').jCorners({
		style:'scoop',
		tr:'0px',
		br:'0px'
	})
	$('#folded_a').jCorners({ style:'folded', angle:'40' })
	$('#folded_b').jCorners({ style:'scoop'})
	$('#folded_c').jCorners({ style:'beveled',extent:'30px'})

})

