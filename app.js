// 问题1: 未使用的变量
var unusedVariable = "This is never used";

// 问题2: 缺少错误处理
function fetchData(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));
}

// 问题3: 没有输入验证
function divide(a, b) {
  return a / b;  // b 可能是 0！
}

// 问题4: 魔法数字
function calculateDiscount(price) {
  return price * 0.85;
}

// 问题5: 空的 catch 块
try {
  JSON.parse('invalid');
} catch (e) {
  // 什么都不做
}

// 问题6: console.log 在生产代码
console.log("Debug: App started");

//
console.log("test tset  tseeee ")

//
const createProjectSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
  repository: z.string().url().optional(),
})

module.exports = { fetchData, divide, calculateDiscount };
