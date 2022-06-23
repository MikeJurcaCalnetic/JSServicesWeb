function newDomElement(t,c){
	    let newElement = document.createElement(t);
    	newElement.classList.add(c);
    	return newElement;
	}
const result = {
	user:{},
	answers:{},
	userFactors:{}
}

const obj = {};
const reverseCount = {
	1:5,
	2:4,
	3:3,
	4:2,
	5:1

}
const reversNumbers = [2,5,7,9,11,14,16,18,22,24,25,26,28,31,33,35,37,38,41];

const Questionnaire = {
			'Factor I':{
					1 : {
						'question' : 'Warms up quickly to others.',
						'answer' : [1,2,3,4,5] 
					},
					2 : {
						'question' : 'Prefers to be alone.',
						'answer' : [1,2,3,4,5] 
					},
					3 : {
						'question' : ' Is always on the go.',
						'answer' : [1,2,3,4,5] 
					},
					4 : {
						'question' : 'Can talk others into doing things.',
						'answer' : [1,2,3,4,5] 
					},
					5 : {
						'question' : 'Seeks quiet.',
						'answer' : [1,2,3,4,5] 
					},
					6 : {
						'question' : 'Is assertive and takes charge.',
						'answer' : [1,2,3,4,5] 
					},
					7 : {
						'question' : 'Holds back from expressing my opinions.',
						'answer' : [1,2,3,4,5] 
					},
					8 : {
						'question' : 'Enjoys being part of a group.',
						'answer' : [1,2,3,4,5] 
					},
					9 : {
						'question' : 'Lets things proceed at their own pace.',
						'answer' : [1,2,3,4,5] 
					}

				
			},
			 'Factor II':{

					10 : {
						'question' : 'Often feels blue.',
						'answer' : [1,2,3,4,5] 
					},
					11 : {
						'question' : 'Is not easily bothered by things.',
						'answer' : [1,2,3,4,5] 
					},
					12 : {
						'question' : 'Becomes stressed out easily',
						'answer' : [1,2,3,4,5] 
					},
					13 : {
						'question' : 'Becomes overwhelmed by emotions.',
						'answer' : [1,2,3,4,5] 
					},
					14 : {
						'question' : 'Is calm, even in tense situations.',
						'answer' : [1,2,3,4,5] 
					},
					15 : {
						'question' : 'Is afraid that I will do the wrong thing.',
						'answer' : [1,2,3,4,5] 
					},
					16 : {
						'question' : 'Keeps my cool.',
						'answer' : [1,2,3,4,5] 
					},
					17 : {
						'question' : 'Does things I later regret',
						'answer' : [1,2,3,4,5] 
					}
				
			},
			'Factor III': {

					18 : {
						'question' : 'Does not have a good imagination.',
						'answer' : [1,2,3,4,5] 
					},
					19 : {
						'question' : 'Loves to read challenging material.',
						'answer' : [1,2,3,4,5] 
					},
					20 : {
						'question' : 'Is interested in many things.',
						'answer' : [1,2,3,4,5] 
					},
					21 : {
						'question' : 'Tries to understand myself.',
						'answer' : [1,2,3,4,5] 
					},
					22 : {
						'question' : 'Is not interested in abstract ideas.',
						'answer' : [1,2,3,4,5] 
					},
					23 : {
						'question' : 'Believes in the importance of art.',
						'answer' : [1,2,3,4,5] 
					},
					24 : {
						'question' : 'Prefers to stick with things that I know.',
						'answer' : [1,2,3,4,5] 
					},
					25 : {
						'question' : 'Tends to vote for conservative political candidates.',
						'answer' : [1,2,3,4,5] 
					}
				
			},
			 'Factor IV': {

					26 : {
						'question' : 'Suspects hidden motives in others.',
						'answer' : [1,2,3,4,5] 
					},
					27 : {
						'question' : 'Trusts others.',
						'answer' : [1,2,3,4,5] 
					},
					28 : {
						'question' : 'Contradicts others.',
						'answer' : [1,2,3,4,5] 
					},
					29 : {
						'question' : 'Values cooperation over competition.',
						'answer' : [1,2,3,4,5] 
					},
					30 : {
						'question' : 'Is easy to satisfy.',
						'answer' : [1,2,3,4,5] 
					},
					31 : {
						'question' : 'Thinks highly of myself.',
						'answer' : [1,2,3,4,5] 
					},
					32 : {
						'question' : 'Is concerned about others.',
						'answer' : [1,2,3,4,5] 
					},
					33 : {
						'question' : 'Puts people under pressure.',
						'answer' : [1,2,3,4,5] 
					}
				
			},
			'Factor V': {
			
					34 : {
						'question' : ' Completes tasks successfully.',
						'answer' : [1,2,3,4,5] 
					},
					35 : {
						'question' : 'Often makes last‐minute plans.',
						'answer' : [1,2,3,4,5] 
					},
					36 : {
						'question' : 'Excels in what I do.',
						'answer' : [1,2,3,4,5] 
					},
					37 : {
						'question' : 'Often forgets to put things back in their proper place.',
						'answer' : [1,2,3,4,5] 
					},
					38 : {
						'question' : 'Postpones decisions',
						'answer' : [1,2,3,4,5] 
					},
					39 : {
						'question' : 'Works hard.',
						'answer' : [1,2,3,4,5] 
					},
					40 : {
						'question' : 'Pays my bills on time.',
						'answer' : [1,2,3,4,5] 
					},
					41 : {
						'question' : 'Doesn’t see the consequences of things',
						'answer' : [1,2,3,4,5] 
					}
			}
}

jQuery(document).ready(function() {

	$('.q-content_form input').focusout(function(){
    	($(this).val())
    	?$(this).css('background-color','#DFF7F4')
    	:$(this).css('background-color','#FAE1DB')

    	if($(this).attr('id') === 'email'){
    		(validateEmail($(this).val()))
    		?$(this).css('background-color','#DFF7F4')
    		:$(this).css('background-color','#FAE1DB')
    	}

	})
	//save form to result.user obj
	$('.q-content_form-btn button').click((event)=>{
		event.preventDefault();
		if(validateInputs()){
		result.user.firstname = $('#firstname').val();
		result.user.lastname	=  $('#lastname').val();
		result.user.email = $('#email').val();
		result.user.profession = $('#profession').val();
		$('.q-content_form').hide();
		$('.q-content_faq').css('display','flex');
		}
	});

	$('.q-content_faq-btn button').click(()=>{
		$('.q-content_faq').hide();
		$('.q-content_block').first().css('display','flex');
		$('.q-content_block-item').first().show();
	})

})



//Draw questions
for(let block in Questionnaire){

let blockName = block.split(' ').join('');
//content block
$('.q-content').append(`<div class='q-content_block ${blockName}'></div>`);
$(`.${blockName}`).append(`<h2 class="q-content_block-title">${block}</h2>`);


     for(let item in Questionnaire[block]){
        let questionNumber = item;
        let question = Questionnaire[block][item]['question'];
        let answers =  Questionnaire[block][item]['answer'];       
        let itemIndex = item;
        let thisBlockItem = $('<div class="q-content_block-item"></div>')
        $(`.${blockName}`).append(thisBlockItem);
        thisBlockItem.append(`<p>${questionNumber}. ${question}</p>`);
           
         for(let i = 0; i < answers.length; i++){
            let input = $(`<input type="radio"
                        id="question${questionNumber}_${answers[i]}"
                        value="${answers[i]}"
                        name="${questionNumber}">`);
            let label = $(`<label for="#question${questionNumber}_${answers[i]}">
                        ${answers[i]}.
                        </label>`)
            thisBlockItem.append(label)
                        .append(input)
                                   
        }   
    }       
}

$('.q-content_block-item input').each(function(i){ 
    $(this).click((e)=>{
        let inputName = e.target.name;
        let inputValue = +e.target.value
        result.answers[`${inputName}`] = inputValue;
        $(this).attr('disabled',1);
        $(this).siblings('input').attr('disabled',1);       
        $(this).parent().next().show();
        $('.q-progress_line').css('width',`calc(100% / ${$('.q-content_block-item').length} * ${inputName})`);

    })
})

$('.q-content_block').each(function(){
	let thisBlock = $(this)
	
    $(this).children().last().children('input').click(function(){		
    	thisBlock.hide();
    	thisBlock.next().css('display','flex');
    	thisBlock.next().children('.q-content_block-item').first().show();
    	
    	    if(thisBlock.attr('class') == $('.q-content_block').last().attr('class')){
    	    	showResult();
    	    	scoreCount();
    	    	maxMeanCount();
    	    	objToSend(result);
    	    	postResults(obj);		
    	    }
    })   
})

function showResult(){
	$('.q-content').hide();
	$('.q-result').css('display','flex');
}
function scoreCount(){
	$('.q-content_block').each(function(){
    	let start = $(this).children('.q-content_block-item').first().children('input').first().attr('name');
		let end = $(this).children('.q-content_block-item').last().children('input').first().attr('name');
		let factorName = $(this).children().first().html();
		let factorResult = 0;
		for(let i = start; i <= end; i++){
			(reversNumbers.includes(i)) 
				?factorResult+= reverseCount[result.answers[i]]
				:factorResult+= result.answers[i]
		}
		result.userFactors[factorName] = factorResult;
		scoreDraw(factorName,factorResult);
	})
	requestWait();

}

function scoreDraw(blockName,blockResult){
	let nameSelector = `<h2 class="q-result_item-title">${blockName}</h2>`;
	let resultSelector = `<p class="q-result_item-number">${blockResult}</p>`;
	$('.q-result').append(`<div class='q-result_item'>${nameSelector}${resultSelector}</div>`);
}

function requestWait(){

	$('.q-result').append(`<p class="timer">View Assessment Result In <span>30</span> seconds</p>`);

	let thisTimer = setInterval(function(){
		startTimer();
	},1200);
	let counter = 30

	function startTimer(){
		(counter >= 1)? --counter: clearInterval(thisTimer);
		$('p.timer span').text(counter);
	}

}

function maxMeanCount(){
	let total = 0;
	let mean = 0;
	let resultsCount = Object.keys(result.userFactors).length;

	for(let item in result.userFactors){
    	total += result.userFactors[item];   
    	mean+= result.userFactors[item] / resultsCount;
	}
	result.userFactors['User Average'] = +mean.toFixed(0);
	// maxMeanDraw(total,mean.toFixed(0));
}

function maxMeanDraw(total,mean){
	let totalSelector = `<p class="q-result_item-number">${total}</p>`;
	let meanSelector = `<p class="q-result_item-number">${mean}</p>`;
	$('.q-result').append(`<div class='q-result_item'><h2 class="q-result_item-title">Total: </h2>${totalSelector}</div>`)
				  .append(`<div class='q-result_item'><h2 class="q-result_item-title">Mean: </h2>${meanSelector}</div>`);
}
function objToSend(object){
	for(let i in object){
    obj[i]='';
    for(let ii in object[i]){
        obj[ii] = object[i][ii]
    }
}
}


function postResults(obj){
let myHeaders = new Headers();
let raw = JSON.stringify(obj);
let requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://ap9xc20l9f.execute-api.us-east-2.amazonaws.com/v1/getjsslist", requestOptions)
  .then(response => response.text())
  .then(result => drawDownloadButton(result))
  .catch(error => console.log('error', error));
}

function drawDownloadButton(url){
	let prepaderUrl = url.slice(1,url.length-1)
	$('p.timer').hide();
	$('.q-result').append(`<div class="q-result_link"><a>Download result</a></div>`)
	$('.q-result_link a').attr('target','_blank')
	$('.q-result_link a').attr('href', prepaderUrl);
	$('.q-result_link a').get(0).click();

}
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
function validateInputs(){
	let isOk = true;
	$('.q-content_form input').each(function(){
    	if($(this).val().length <= 0){
    	  $(this).css('background-color','#FAE1DB');
    	  isOk = false ;
    	} else{
    	 $(this).css('background-color','#DFF7F4');
    	}

    	if($(this).attr('id') === 'email'){
    		if(validateEmail($(this).val())) {
    			$(this).css('background-color','#DFF7F4')}
    		else{
    		 	$(this).css('background-color','#FAE1DB');
    	  		isOk = false ;	
    		}	
    		
    	}
	})
	return isOk;
}