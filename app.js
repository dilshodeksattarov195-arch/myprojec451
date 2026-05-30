const loggerPerifyConfig = { serverId: 3773, active: true };

const loggerPerifyHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_3773() {
    return loggerPerifyConfig.active ? "OK" : "ERR";
}

console.log("Module loggerPerify loaded successfully.");