@ -1,20 +1,27 @@
@ -1,24 +1,19 @@
// array of items in the bids

export const itemData1 = [
const itemData = [
  {
    img: "fox.png",
    title: "The fox wanderer",
    bid: " 170.00$",
    author: "Current bid <br> 170.00$ <br> 2 hours left",
  },
  {
    img: "worker.png",
    title: "The iron worker",
    bid: "356.00$",
    img: "dream.png",
    title: "Catcher of dreams",
    author: "Current bid <br> 356.00$ <br> 4 hours left",
  },
  {
    img: "coaster.png",
    title: "Coral Coaster",
    bid: "Current bid <br> 54.00$ <br> 9 hours left",
    author: "Current bid <br> 54.00$ <br> 9 hours left",
  },
];
export const itemData2 = [
@ -22,11 +29,9 @@ export const itemData2 = [
  {
    img: "snail.png",
    title: "Snail Overboard",
    author: "Current bid <br> 31.00$ <br> 10 hours left",
  },
  {
    img: "holder.png",
    title: "Plant Holder",
@ -30,3 +25,5 @@ export const itemData2 = [
    author: "Current bid <br> 61.00$ <br> 12 hours left",
  },
];

export default itemData;