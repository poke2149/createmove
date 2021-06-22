let dduck = 0;
let adven = 0;
let hands = 0;
let kind = 0;
let strong = 0;
let sincere = 0;
var count = 0;
var obj = document.getElementById("str-question");
var que_finished_name = document.getElementById("str-finished");
var que_finished = document.getElementById("que-finish");
var explanation_obj = document.getElementById("str-explanation");
var related_obj = document.getElementById("job-list");
var audio_sorced = document.getElementById("job_sound");
var flag_play_audio = false;
let job_sound_list = [
    "mp3/뚝딱이.mp3",
    "mp3/탐험이.mp3",
    "mp3/멋쟁이.mp3",
    "mp3/친절이.mp3",
    "mp3/씩씩이.mp3",
    "mp3/성실이.mp3"
]
let related_job_list = [
    "나에게 어울리는 직업 : 우편배달부, 의사, 스마트팜구축가 등",
    "나에게 어울리는 직업 : 프로게이머, 마술사, 드론전문가 등",
    "나에게 어울리는 직업 : 요리사, 연예인, 캐릭터디자이너 등",
    "나에게 어울리는 직업 : 사서, 은행원, 스마트재난관리사 등",
    "나에게 어울리는 직업 : 운동선수, 사업가, 크리에이터 등",
    "나에게 어울리는 직업 : 환경미화원, 공무원, 헬스케어컨설턴트 등"
]
let str_complate =[
    "뚝딱이","탐험이","멋쟁이","친절이","씩씩이","성실이"
]
let str_explanation =[
    "손재주가 있거나 만들기를 좋아해요. 만들기에 필요한 <br/><br/> 도구나 기계를 잘 다뤄요. 그리고 활동적이고 <br/><br/> 몸을 움직이는 것을 좋아해요. 뚝딱이는 솔직하고<br/><br/> 성실하면서도 수줍음이 많은 편이에요."
    ,"세심히 관찰하거나 합리적이며 정확한 것을 좋아해요. <br/><br/> 창의적이고 새로운 일에 도전하는 것도 좋아하죠.<br/><br/>그래서 탐험이는 논리적이며 탐구심, 독립성, 호기심이 <br/><br/> 많다는 이야기도 자주 들어요."
    ,"감정이 풍부하고 상상력이 좋아서 자신만의 세계로 <br/><br/> 빠져드는 것을 좋아해요. 스스로 옷과 머리를 멋있게 꾸미거나<br/><br/>독특한 방식으로 자신을 표현해요. 멋쟁이 중에는 <br/><br/> 글쓰기, 음악, 미술을 좋아하는 친구들이 많답니다."
    ,"친구와 즐겁고 사이좋게 지내고 함께 활동하는 것을 좋아해요. <br/><br/> 어려운 사람을 보면, 무엇을 도와줄까 생각하고 학교나<br/><br/>집에서 봉사하는 것을 잘하죠. 친절이는 이해심이 많고 <br/><br/> 따뜻한 마음을 가진 사람이에요."
    ,"수업 시간에 자신 있게 발표를 잘하고 모든 일을 열심히 해요. <br/><br/> 친구들을 설득하고 이끄는 능력이 있어요.<br/><br/>씩씩이는 사람들과 잘 어울리고, 모험심이 강한 사람이에요."
    ,"자신이 계획한 것을 꾸준히 실천하는 것을 좋아하고, <br/><br/> 노트에 기록, 정리하는 일을 잘해요. 성실이는 정직하고<br/><br/>계산하는 것 을 좋아하죠. 그리고 책임감도 강하고, <br/><br/> 친구들과 약속이나 학교 규칙과 질서도 잘 지키는 사람이에요."
]
let str_index = [
    "1.친구와 함께 운동하는 것을 좋아한다.",
    "2.수학문제를 잘 푼다.",
    "3.친구에 비하여 별난 생각을 많이 한다.",
    "4.나보다 어려운 사람을 도와주는 것을 좋아한다.",
    "5.소풍이나 학급행사에 사회 보는 것을 좋아한다.",
    "6.친구와의 약속 시간을 잘 지킨다.",
    "7.도구와 연장을 잘 다루는 편이다.",
    "8.호기심이 많아 관찰하는 것을 좋아한다.",
    "9.들기와 그림을 잘 그리는 손재주가 있다.",
    "10.다른 친구의 어려움과 아픔을 보면 도와주고 싶다.",
    "11.사람들과 대화하는 것을 좋아한다.",
    "12.성격이 꼼꼼한 편이다.",
    "13.조립용 로봇이나 비행기를 잘 만든다.",
    "14.책을 빨리 읽는 편이다.",
    "15.글짓기를 잘 하는 편이다.",
    "16.스스로 봉사하는 시간이 즐겁다.",
    "17.학급 임원을 하는 것이 재미있다.",
    "18.준비물을 잊지 않고 챙겨간다.",
    "완료 클릭하여 다음으로 넘어가 주세요!"
];
function init(){
    obj.innerText = str_index[count];
    que_finished.style.display = "none";
}
init();
// 마우스 클릭
function checklist(num){
    if(num == 0){
        if(count == 18){
            clearwindows();
            complatedCheck();
        }
        else{
            count++;
            resultVal(num);
            obj.innerHTML = str_index[count];
        }
    }
    else if(num == 1){
        if(count == 18){
            clearwindows();
            complatedCheck();
        }
        else{
            count++;
            resultVal(num);
            obj.innerHTML = str_index[count];
        }
    }
    else if(num == 2){
        if(count == 18)
        {
            clearwindows();
            complatedCheck();
        }
        else{
            count++;
            obj.innerHTML = str_index[count];
        }
    }
    console.log(dduck,adven,hands,kind,strong,sincere);
}
// 점수 result값
function resultVal(num){
    switch(num)
    {
        case 0:
            if (obj.innerText == str_index[0]
                || obj.innerText == str_index[6]
                || obj.innerText == str_index[12]) {
                dduck += 3;
            }
            else if (obj.innerText == str_index[1]
                || obj.innerText == str_index[7]
                || obj.innerText == str_index[13]) {
                adven += 3;
            }
            else if (obj.innerText == str_index[2]
                || obj.innerText == str_index[8]
                || obj.innerText == str_index[14]) {
                hands += 3;
            }
            else if (obj.innerText == str_index[3]
                || obj.innerText == str_index[9]
                || obj.innerText == str_index[15]) {
                kind += 3;
            }
            else if (obj.innerText == str_index[4]
                || obj.innerText == str_index[10]
                || obj.innerText == str_index[16]) {
                strong += 3;
            }
            else if (obj.innerText == str_index[5]
                || obj.innerText == str_index[11]
                || obj.innerText == str_index[17]) {
                sincere += 3;
            }
            break;
        case 1:
            if (obj.innerText == str_index[0]
                || obj.innerText == str_index[6]
                || obj.innerText == str_index[12]) {
                dduck += 1;
            }
            else if (obj.innerText == str_index[1]
                || obj.innerText == str_index[7]
                || obj.innerText == str_index[13]) {
                adven += 1;
            }
            else if (obj.innerText == str_index[2]
                || obj.innerText == str_index[8]
                || obj.innerText == str_index[14]) {
                hands += 1;
            }
            else if (obj.innerText == str_index[3]
                || obj.innerText == str_index[9]
                || obj.innerText == str_index[15]) {
                kind += 1;
            }
            else if (obj.innerText == str_index[4]
                || obj.innerText == str_index[10]
                || obj.innerText == str_index[16]) {
                strong += 1;
            }
            else if (obj.innerText == str_index[5]
                || obj.innerText == str_index[11]
                || obj.innerText == str_index[17]) {
                sincere += 1;
            }
            break;
        default:
            alert("error!!");
            break;
    }
}
function complatedCheck(){
    var maxValueArr = [dduck , adven, hands,kind,strong,sincere];
    var max = Math.max.apply(null,maxValueArr);

    switch(max){
        case dduck:
            que_finished_name.innerHTML = str_complate[0];
            explanation_obj.innerHTML = str_explanation[0];
            related_obj.innerHTML = related_job_list[0];
            audio_sorced.src = job_sound_list[0];
            break;
        case adven:
            que_finished_name.innerHTML = str_complate[1];
            explanation_obj.innerHTML = str_explanation[1];
            related_obj.innerHTML = related_job_list[1];
            audio_sorced.src = job_sound_list[1];
            break;
        case hands:
            que_finished_name.innerHTML = str_complate[2];
            explanation_obj.innerHTML = str_explanation[2];
            related_obj.innerHTML = related_job_list[2];
            audio_sorced.src = job_sound_list[2];
            break;
        case kind:
            que_finished_name.innerHTML = str_complate[3];
            explanation_obj.innerHTML = str_explanation[3];
            related_obj.innerHTML = related_job_list[3];
            audio_sorced.src = job_sound_list[3];
            break;
        case strong:
            que_finished_name.innerHTML = str_complate[4];
            explanation_obj.innerHTML = str_explanation[4];
            related_obj.innerHTML = related_job_list[4];
            audio_sorced.src = job_sound_list[4];
            break;
        case sincere:
            que_finished_name.innerHTML = str_complate[5];
            explanation_obj.innerHTML = str_explanation[5];
            related_obj.innerHTML = related_job_list[5];
            audio_sorced.src = job_sound_list[5];
            break;
    }
}
function clearwindows(){
    document.getElementById("que-select").style.display = "none";
    que_finished.style.display = "block";
}
function play_sound(){
    flag_play_audio = !flag_play_audio;
    flag_play_audio.playbackRate = 1.3;
    if(flag_play_audio){
        audio_sorced.play();
    }
    else{
        audio_sorced.pause();
        audio_sorced.currentTime = 0;
    }
}
