function toggleMobileNavigation() {
	$(".mobile-menu, .site-navigation, .hamburger").toggleClass("is-active");
	$("body").toggleClass("lock");
}

$(document).on("click", ".contains-expandable > h4" , function(){
	$(this).parents(".contains-expandable").toggleClass("collapsed");
});

console.log("Andrew McCullough is a god.");
console.log("%cSkyler Moon is a thot.", "text-decoration: line-through");
console.log("Congratulations! If you're reading this, you've found and won the secret Club Running sweepstakes. The first person to email asm2wm@virginia.edu with the phrase \"mystic apples\" in the subject line will receive $100 and a free Club Running shirt. Better act quick!");