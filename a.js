const { VK } = require('vk-io');  
const vk = new VK({
token: 'vk1.a._xoGkO-5Cjl7gquZM7Gyo71aIQ9ELMbT7YfJBOu0Cnaa0Sc2aUijLHMqCgslLO2jyrfp-8ntpWfzwF6rGf7LrQTuS1NVFTrO8T4NIyJR64zNpvoHxrucB2UgD8Pm-TA03xAaxk4qLlyYvVpiTAFEx6jRWAmL_Uc9SbyJ1YU-KgxtzbZOqiGdCI-Eqv_H31pjsmdM11SeDcFfazVzE-mgUg'
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
