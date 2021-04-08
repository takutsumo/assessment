'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');
//assessmentButton.onclick = function(){

/**
 * 指定した要素の子供を全て削除する
 * @param {HTMLElement} element HTMLの要素 
 */

function removeAllChildren(element){
    while(element.firstChild){
        //子供の要素があるかぎり削除
        element.removeChild(element.firstChild);
    }
}

assessmentButton.onclick = () =>{
    const userName = userNameInput.value;
    if(userName.length === 0){
        //名前がからの時は処理を終了する。
        return;
    }
    console.log(userName);   
    //TODO 診断結果表示エリアの作成
    while (resultDivided.firstChild){
        //子供の要素がある限り削除
        resultDivided.removeChild(resultDivided.firstChild);
    }

    const header = document.createElement('h3');
    header.innerText = '診断結果';
    resultDivided.appendChild(header);

    const paragraph = document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);

    //TODO ツイートエリアの作成
    removeAllChildren(tweetDivided);
    const anchor = document.createElement('a');
    const hrefValue =
    'https://twitter.com/intent/tweet?button_hashtag=' + 
    encodeURIComponent('あなたのいいところ') + 
    '&ref_src=twsrc%5Etfw';

    anchor.setAttribute('href',hrefValue);
    anchor.className = 'twitter-hashtag-button';
    anchor.setAttribute('data-text',result);
    anchor.innerText = 'Tweet #あなたのいいところ';

    tweetDivided.appendChild(anchor);

    //widgets.jsの設定
    const script = document.createElement('script');
    script.setAttribute('src','https://platform.twitter.com/widgets.js');
    tweetDivided.appendChild(script);

}


const answers = [
'1{userName}のいいところは、、、',
'2{userName}のいいところは、、、',
'3{userName}のいいところは、、、',
'4{userName}のいいところは、、、',
'5{userName}のいいところは、、、',
'6{userName}のいいところは、、、',
'7{userName}のいいところは、、、',
'8{userName}のいいところは、、、',
'9{userName}のいいところは、、、',
'10{userName}のいいところは、、、',
'11{userName}のいいところは、、、',
'12{userName}のいいところは、、、',
'13{userName}のいいところは、、、',
'14{userName}のいいところは、、、',
'15{userName}のいいところは、、、',
'16{userName}のいいところは、、、',
'17{userName}のいいところは優しさです、{userName}の優しい雰囲気や立ち振る舞いに多くの人が癒されています。',
];

userNameInput.onkeydown = event => {
    if(event.key === 'Enter'){
        assessmentButton.onclick();
    }
};


function assessment(userName){
    //TODO 診断処理を実装する
    let sum0fCharCode = 0;
    for(let i = 0; i < userName.length; i++){
        sum0fCharCode = sum0fCharCode + userName.charCodeAt(i);
        //console.log('sum0fCharcode');
    }

    const index = sum0fCharCode % answers.length;
    let result = answers[index];
     


    result =  result.replace(/\{userName\}/g, userName);
    return result;
}

console.assert(
    assessment('太郎') === 
    assessment('太郎'),
    'まちがい！'
)

console.log(assessment('太郎'));
console.log(assessment('次郎'));
console.log(assessment('太郎'));
