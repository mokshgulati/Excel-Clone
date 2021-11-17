// getting rId and cId from cell address
function getRidCidFromAddress(address) {
    let cId = address.charCodeAt(0) - 65 + 1;
    let rId = Number(address.substring(1));

    return { rId: rId, cId: cId }
}