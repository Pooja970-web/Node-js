const bcrypt = require("bcrypt");

async function test() {
    // 1. Register जैसा: hash बनाओ
    const hash = await bcrypt.hash("123456", 10);
    console.log("Hash:", hash);

    // 2. Login जैसा: सही password जाँचो
    const sahi = await bcrypt.compare("123456", hash);
    console.log("सही password:", sahi);

    // 3. Login जैसा: गलत password जाँचो
    const galat = await bcrypt.compare("wrong999", hash);
    console.log("गलत password:", galat);
}

test();