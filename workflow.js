function runWorkflow(lead) {
    let actions = [];

    if (lead.interestLevel === "High") {
        actions.push("Email Sent");
        actions.push("Assigned to Sales");
    } 
    else if (lead.interestLevel === "Medium") {
        actions.push("Follow-up Email Sent");
    } 
    else {
        actions.push("SMS Sent");
    }

    return actions;
}

module.exports = { runWorkflow };