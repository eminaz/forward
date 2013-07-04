
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });

  Meteor.Router.add('/:url_id', 'GET', function(url_id) {
    Meteor.call('send_email',url_id);
  });

  Meteor.methods({

    'send_email':function(url_id){

      var title,email,body,email_recipients,sender_email,sender_name;
      var firebase_url='https://forward.firebaseio.com/'+url_id+'.json';

      Meteor.http.call("GET",
        firebase_url,
        {},
        function(error,result){
          snapshot=result.data;
          if(snapshot && snapshot.title){
              title = snapshot.title;
              email = snapshot.email;
              body = snapshot.body;
              email_recipients = snapshot.email_recipients;
              sender_email = snapshot.sender_email;
              sender_name = snapshot.sender_name;
              var recipients_text="";
              for(var i=0;i<email_recipients.length;i++){
                recipient=email_recipients[i];
                recipients_text=recipients_text+recipient.recipient_name+" <"+recipient.recipient_email+">;\n";
              }

              var forward_text=
               "---------- Forwarded message ---------- \n"
              +"From: "+ sender_name +"<"+sender_email+">\n"
              +"Date: Thu, Jul 4, 2013 at 1:49 AM\n"
              +"Subject: " + title + "\n"
              +"To: "+ recipients_text +"\n";

              body2=forward_text+body;

              postmark.send({
                  "From": "qdmark@me.com", 
                  "To": "qdmark@gmail.com", 
                  "Subject": title, 
                  "TextBody": body2
              });

          }
      });

    }

  });


}
