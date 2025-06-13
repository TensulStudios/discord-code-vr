# tapkey

tapkey is a simple API that generates unique codes for games or apps.

## Current Endpoints

### GET `/api/daily?token=<token>&length=<length>`

- **token**: A word that changes the generated code (required)  
- **length**: Length of the generated code (optional, default: 8)  

Generates a new code every day based on the token, so you get a fresh daily code.

---

### GET `/api/token?token=<token>&length=<length>`

- **token**: A word that changes the generated code (required)  
- **length**: Length of the generated code (optional, default: 8)  

Generates a code based on the token that stays the same over time (does not change daily).
