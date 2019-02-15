function myFunction() {
  var threads = GmailApp.search("label:all") //Find all emails - this will cover most of your emails, and the stuff below is just to make sure.
  
 threads.push(GmailApp.getInboxThreads());
   threads.push(GmailApp.search('category:promotions'));// check the category Gmail added to the thread
   threads.push(GmailApp.search('category:forums'));// check the category Gmail added to the thread
   threads.push(GmailApp.search('category:updates'));// check the category Gmail added to the thread
   threads.push(GmailApp.search('category:social'));// check the category Gmail added to the thread
   threads.push(GmailApp.search('category:primary'));// check the category Gmail added to the thread
  threads.push(GmailApp.search('has:nouserlabels -in:Sent -in:Chat -in:Draft -in:Inbox'));// check the category Gmail added to the thread 
   var allLabels = GmailApp.getUserLabels();
 var L = allLabels.length;

  for (i = 0; i < L; i++) {
    Logger.log("label: " + allLabels[i].getName());
    var thisLabel = allLabels[i];
    threads.push(thisLabel.getThreads());
  }
  Logger.log("500: " + threads[499])
  
    for (var i = 0; i < threads.length; i++) {
      Logger.log("I: "+i)
      Logger.log("LEN: " + threads.length);
      try {
      var messages = threads[i].getMessages();
      } catch(err) {
        Logger.log("ERROR" + err);
        Logger.log(threads[i])
        i++;
      }

      for (var j = 0; j<messages.length; j++) {
        
            //Place first run code here.
     
    }
 
}
}
