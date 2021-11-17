// getting rId and cId from cell address
function getRidCidFromAddress(address) {
    let cId = address.charAt(0);
    let rId = address.substring(1);

    rId = Number(rId);
    cId = cId.charCodeAt(cId) - 65 + 1;

    return { rId: rId, cId: cId }
}