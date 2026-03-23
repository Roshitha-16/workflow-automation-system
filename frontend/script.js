async function submitLead() {
    try {
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const interest = document.getElementById("interest").value;

        // 🚨 Validation
        if (!name || !phone) {
            alert("Please fill all fields!");
            return;
        }

        const lead = {
            name: name,
            phone: phone,
            interestLevel: interest
        };

        console.log("Sending:", lead);

        const response = await fetch("http://127.0.0.1:5000/lead", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(lead)
        });

        const data = await response.json();

        console.log("Received:", data);

        const list = document.getElementById("result");

        // ✅ CLEAR OLD RESULTS (FIXES DUPLICATION BUG)
        list.innerHTML = "";

        // ✅ DISPLAY NEW RESULTS CLEANLY
        if (data.actions && data.actions.length > 0) {
            data.actions.forEach(action => {
                const li = document.createElement("li");
                li.textContent = action;
                list.appendChild(li);
            });
        } else {
            list.innerHTML = "<li>No actions found</li>";
        }

    } catch (err) {
        console.error("Error:", err);
        alert("Backend not connected!");
    }
}