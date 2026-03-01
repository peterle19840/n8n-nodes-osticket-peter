# n8n-nodes-osticket

This is an n8n community node for interacting with [osTicket](https://osticket.com/). It allows you to create, retrieve, update, reopen, and close tickets, as well as manage users directly from your n8n workflows.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials)
[Compatibility](#compatibility)
[Version history](#version-history)

## Prerequisites

The **Ticket > Create** operation works with the standard osTicket API.

For all other operations (Get, Get Many, Update, Close, Reopen, User management), your osTicket instance needs extended API support. This can be achieved by either:

1. Using osTicket with [PR #5019](https://github.com/osTicket/osTicket/pull/5019) merged (extended REST API endpoints)
2. Installing the [osticket-api-endpoints](https://github.com/markus-michalski/osticket-api-endpoints) community plugin

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

### Ticket

| Operation | Description |
|-----------|-------------|
| **Create** | Create a new ticket with email, name, subject, and message |
| **Get** | Retrieve a single ticket by ticket number |
| **Get Many** | Retrieve multiple tickets with optional filters |
| **Update** | Update a ticket (status, priority, department, add message/note, assign staff) |
| **Close** | Close a ticket by ticket number |
| **Reopen** | Reopen a previously closed ticket |

#### Create - Fields

**Required:** Email, Name, Subject, Message

**Additional Fields:** Alert, Autorespond, Priority ID, Department ID, Topic ID, Due Date, Internal Note, IP Address, Phone, Source

#### Update - Fields

Message (add reply), Internal Note, Status, Priority ID, Department ID, Staff ID (assign), SLA ID, Topic ID, Due Date

#### Get Many - Filters

Status (Open, Closed, Overdue, Answered), Email, User ID, Limit

### User

| Operation | Description |
|-----------|-------------|
| **Create** | Create a new user with email and name |
| **Get** | Retrieve a user by ID |
| **Delete** | Delete a user by ID |

#### Create - Fields

**Required:** Email, Name

**Additional Fields:** Phone, Organization ID, Notes

## Credentials

### Domain
The domain is the hostname / IP / FQDN of your osTicket server including protocol and port. Example: `https://support.example.com`

### API Key
The API key can be found in the osTicket admin panel under **Manage > API Keys**.

### Self Signed Certificate
Enable this option if your osTicket instance uses a self-signed SSL certificate.

## Compatibility

Tested with n8n v0.200+ and osTicket v1.17+

- **Ticket > Create** operation: Works with standard osTicket API
- **All other operations**: Requires extended API endpoints (see [Prerequisites](#prerequisites))

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
* [osTicket API Documentation](https://docs.osticket.com/en/latest/Developer%20Documentation/API%20Docs.html)

## Version history

- **0.3.0** - Added Reopen Ticket operation. Added User resource (Create, Get, Delete).
- **0.2.0** - Added Get, Get Many, Update, and Close operations. Extended Create with additional fields.
- **0.1.0** - Initial Release (Create only). Original by [joffcom](https://github.com/joffcom/n8n-nodes-osticket).
