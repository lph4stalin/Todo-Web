const log = console.log.bind(console)

const ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if (!condition) {
        log('*** 测试失败', message)
    }
}

// 定义一个增强的 ensureEqual
const ensureEqual = function(a, b, message) {
    if (a !== b) {
        log(`*** 测试失败, ${a} 不等于 ${b}, ${message}`)
    }
}