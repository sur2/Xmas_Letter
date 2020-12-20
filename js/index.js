var rtans = [
    "https://s3.ap-northeast-2.amazonaws.com/materials.spartacodingclub.kr/xmas/rtan.gif",
    "https://s3.ap-northeast-2.amazonaws.com/materials.spartacodingclub.kr/xmas/Webp.net-gifmaker.gif",
    "https://s3.ap-northeast-2.amazonaws.com/materials.spartacodingclub.kr/xmas/Webp.net-gifmaker+(2).gif",
    "https://s3.ap-northeast-2.amazonaws.com/materials.spartacodingclub.kr/xmas/Webp.net-gifmaker+(1).gif"
];

function open_letter() {
    document.getElementsByClassName("letter-close")[0].style.display = 'none'
    document.getElementsByClassName("letter-open")[0].style.display = 'block'

    random_rtans();
}

function random_rtans() {
    let rand_number = Math.floor(Math.random() * 10) % 4;
    let rtan_path = rtans[rand_number];
    console.log(rand_number);
    document.getElementsByClassName("rtan")[0].style.backgroundImage = `url(${rtan_path})`;
}

function go_rtan() {
    alert('축하합니다. 행운의 증표를 찾았습니다. \n오늘 하루 행복하세요!');
    window.open('https://www.youtube.com/watch?v=DFH2NpzgQ2E');
}

