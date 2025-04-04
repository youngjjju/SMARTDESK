const calendarButton = document.getElementById("calenderOn");
const memoButton = document.getElementById("memoOn");
const bookmarkButton = document.getElementById("bookmarkOn");

const calendar = document.querySelector(".commonFieldCalendar");
const memo = document.querySelector(".commonFieldMemo");
const bookmark = document.querySelector(".commonFieldBookmark");

calendarButton.addEventListener("click", () => {
  memo.classList.add("commonFieldMemo-hidden");
  bookmark.classList.add("commonFieldBookmark-hidden");
  calendar.classList.remove("commonFieldCalendar-hidden");
});

memoButton.addEventListener("click", () => {
  calendar.classList.add("commonFieldCalendar-hidden");
  bookmark.classList.add("commonFieldBookmark-hidden");
  memo.classList.remove("commonFieldMemo-hidden");
});

bookmarkButton.addEventListener("click", () => {
  memo.classList.add("commonFieldMemo-hidden");
  calendar.classList.add("commonFieldCalendar-hidden");
  bookmark.classList.remove("commonFieldBookmark-hidden");
});
