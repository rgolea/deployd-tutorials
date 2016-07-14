this.lastModified = Date.now();
if(!me) cancel("No user connected", 401);
this.creator = me && me.id;