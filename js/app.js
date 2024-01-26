const tabBtn = document.querySelectorAll(".solution_tab_heading ul li");
const tabCnt = document.querySelectorAll(".solution_tab_cnt_one");

const driveTabItem = document.querySelectorAll(".driveOne .drive_item ul li");
const driveTabcnt = document.querySelectorAll(".driveOne .drive_right img");

const driveTabItemTwo = document.querySelectorAll(
  ".driveTwo .drive_item ul li"
);
const driveTabcntTwo = document.querySelectorAll(".driveTwo .drive_right img");

const driveTabItemThree = document.querySelectorAll(
  ".driveThree .drive_item ul li"
);
const driveTabcntThree = document.querySelectorAll(
  ".driveThree .drive_right img"
);

const driveTabItemFour = document.querySelectorAll(
  ".driveFour .drive_item ul li"
);
const driveTabcntFour = document.querySelectorAll(
  ".driveFour .drive_right img"
);

function controlTab(tabItem, tabContent, cntActive, itemActive) {
  tabItem.forEach((item) => {
    item.addEventListener("click", () => {
      const itemAttr = item.getAttribute("willOpen");

      tabItem.forEach((getItem) => {
        if (getItem !== item) {
          getItem.classList.remove(itemActive);
        }
      });
      item.classList.add(itemActive);

      tabContent.forEach((tbitem) => {
        const tbAttr = tbitem.getAttribute("id");
        if (itemAttr === tbAttr) {
          tbitem.classList.add(cntActive);
        } else {
          tbitem.classList.remove(cntActive);
        }
      });
    });
  });
}

controlTab(tabBtn, tabCnt, "activeTab", "activeItem");
controlTab(driveTabItem, driveTabcnt, "driveImgActive", "driveItemActive");
controlTab(
  driveTabItemTwo,
  driveTabcntTwo,
  "driveImgActive",
  "driveItemActive"
);

controlTab(
  driveTabItemThree,
  driveTabcntThree,
  "driveImgActive",
  "driveItemActive"
);

controlTab(
  driveTabItemFour,
  driveTabcntFour,
  "driveImgActive",
  "driveItemActive"
);
