const { VK } = require('vk-io');  
const vk = new VK({
token: 'vk1.a.5WQNVBapNRgr1fzlxUZL8Bs3pTlRsWD5fNGftx0yRriMyDPlI8FRUGMadl4y343qdSLUFWx0DbyYcrOcs7kyZuoNIVTqWu5lURzH2DVujaN2Z0hiUoUppMjO4XDapvu8BcTj2K9dmmWtae-qLji_iyuz4Iq-jzstMEwIFZ2BpbfUY3Pr5X9BvqOJXUdpwSEZJbYYnmOxtJ3vC5gMNU40TQ'
});
console.log("By Tripl_color , awoken.xyz".info);
function startamuu() {
vk.api.wall.createComment({
owner_id: -174105461,
post_id: 6713149,
message: 'ферма'
});
console.log("Коментарий сделан успешно".success);
}
setInterval(startamuu, 300000); 
