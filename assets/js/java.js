const accardion = document.querySelectorAll('.accardion');

accardion.forEach(item => item.addEventListener('click', clickActions));

function clickActions(event){
	const target = event.target;
	const isAccrodionTrigger = target.classList.contains('accardion_trigger');
	if(isAccrodionTrigger) {
		accordion(target);
	}
}

function accordion (target) {
	const trigger = target;
	const item = target.parentNode;
	const content = item.querySelector('.accardion_content');
	const accordeon = item.parentNode;
	const triggerList = accordeon.querySelectorAll('.accardion_trigger');
	const isActive = trigger.classList.contains('active');
	
	if(isActive) {
		removeAllACtiveClasses(triggerList);
		hideAllContent(accordeon);
	} else {
		removeAllACtiveClasses(triggerList);
		hideAllContent(accordeon);
		addActiveClass(trigger);
		showContent(content);
	}
}

function showContent(content) {
		content.style.maxHeight = `${getContentHeight(content)}px`;
}

function hideAllContent(accordeon) {
	const contentList = accordeon.querySelectorAll('.accardion_content');
	
	contentList.forEach(item => item.style.maxHeight = '0px');
}

function removeAllACtiveClasses(list) {
	list.forEach(item => removeActiveClass(item));
}	
	
function addActiveClass(item) {
	item.classList.add('active');
}

function removeActiveClass(item) {
	item.classList.remove('active');
}

function getContentHeight(content) {
	return content.scrollHeight;
}
