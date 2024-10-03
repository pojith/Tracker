package com.example.mk4.models;

import jakarta.persistence.*;

import java.util.Date;
@Entity
@Table(name = "ticket")
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String location;
    private String category;
    private String ticketInfo;
    private String configurationItem;
    private String priority;

    private Date opened;
    private String openedBy;
    private String state;
    private String assignedTo;
    private Date closedTime;
    private String dept;

    protected Ticket() {}

    public Ticket(Integer ticketId, String location, String category, String ticketInfo, String configurationItem,
                  String priority, Date opened, String openedBy, String state,
                  String assignedTo, Date closedTime,String dept){
        this.id = ticketId;
        this.location = location;
        this.category = category;
        this.ticketInfo = ticketInfo;
        this.configurationItem = configurationItem;
        this.priority = priority;
        this.opened = opened;
        this.openedBy = openedBy;
        this.state = state;
        this.assignedTo = assignedTo;
        this.closedTime = closedTime;
        this.dept = dept;
    }

    // Getters
    public Integer getTicketId() {
        return id;
    }

    public String getLocation() {
        return location;
    }

    public String getCategory() {
        return category;
    }

    public String getTicketInfo() {
        return ticketInfo;
    }

    public String getConfigurationItem() {
        return configurationItem;
    }

    public String getPriority() {
        return priority;
    }

    public Date getOpened() {
        return opened;
    }

    public String getOpenedBy() {
        return openedBy;
    }

    public String getState() {
        return state;
    }

    public String getAssignedTo() {
        return assignedTo;
    }

    public Date getClosedTime() {
        return closedTime;
    }
    public String getDept() { return dept; }

    // Setters
    public void setTicketId(Integer ticketId) {
        this.id = ticketId;
    }

    // toString method
    @Override
    public String toString() {
        return "Ticket{" +
                "ticketId='" + id + '\'' +
                ", location='" + location + '\'' +
                ", category='" + category + '\'' +
                ", ticketInfo='" + ticketInfo + '\'' +
                ", configurationItem='" + configurationItem + '\'' +
                ", priority='" + priority + '\'' +
                ", opened=" + opened +
                ", openedBy='" + openedBy + '\'' +
                ", state='" + state + '\'' +
                ", assignmentGroup='" + '\'' +
                ", assignedTo='" + assignedTo + '\'' +
                ", closedTime=" + closedTime +
                '}';
    }
}

