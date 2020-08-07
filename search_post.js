const datas = [
  {
    no: 0,
    gender: "M",
    age: 3,
    info: "이사람은 00한 사람입니다.",
    from: "19940102",
    to: "19950102",
    place: "제주",
    group_name: "11초등학교",
    story: "00한 옛날 친구를 찾습니다!",
    keyword: "긴머리,귤,축구",
  },
  {
    no: 1,
    gender: "M",
    age: 12,
    info: "이사람은 00한 사람입니다.",
    from: "19940102",
    to: "19950102",
    place: "서울",
    group_name: "11초등학교",
    story: "00한 옛날 친구를 찾습니다!",
    keyword: "짧은머리,귤,농구",
  },
  {
    no: 3, //o !(따로빼주기)왼쪽상단에 박아주고
    gender: "M", //o 그아래 한줄
    age: 29, //o
    info: "이사람은 00한 사람입니다.", //x
    from: "19940102", //o
    to: "19950102", //o 이거 2개 한줄
    place: "제주", //o
    group_name: "22초등학교", //o 이거 2개 한줄
    story: "00한 옛날 친구를 찾습니다!",
    keyword: "귤", //o #해시태그
  },
]

console.log(datas)

const contentsDiv = document.getElementById("contents")

const components = datas.map((item) => {
  return `<article class='posts'>
    <div class='no'>${item.no}</div>
    <div class='gender'>${item.gender}</div>
    <div class='age'>${item.age}</div>
    <div class='from'>${item.from}</div>
    <div class='to'>${item.to}</div>
    <div class='place'>${item.place}</div>
    <div class='group_name'>${item.group_name}</div>
    <div class='keyword'>${item.keyword}</div>
  </article>`
})

contentsDiv.innerHTML = `${components}`
