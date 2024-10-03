# DROP TABLE IF EXISTS ticket

CREATE TABLE ticket (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    location VARCHAR(20),
    category VARCHAR(20),
    ticket_info VARCHAR(50),
    configuration_item VARCHAR(10),
    priority INTEGER,
    opened Date,
    opened_by VARCHAR(20),
    state INTEGER,
    assigned_to VARCHAR(20),
    closed_time Date,
    dept VARCHAR(20)
);



CREATE TABLE resolvedTickets (
     ticket_id INTEGER PRIMARY KEY,
     resolved_by VARCHAR(20)
);