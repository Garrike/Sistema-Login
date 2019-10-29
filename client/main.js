import { Template } from 'meteor/templating';
//import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

if(Meteor.isClient){
  Template.register.events({
    'submit form': function(event, template){
      event.preventDefault();
      var emailVar = template.find('#email').value;
      var passwordVar = template.find('#password').value;
      console.log(emailVar);
      Accounts.createUser({
        email: emailVar,
        password: passwordVar
      })
      Meteor.loginWithPassword(emailVar,passwordVar);
    }
  })
  Template.login.events({
    'submit form': function(event, template){
      event.preventDefault();
      var emailVar = template.find('#login-email').value;
      var passwordVar = template.find('#login-password').value;
      Meteor.loginWithPassword(emailVar,passwordVar);
    }
  })
  Template.dashboard.events({
    'click .logout': function(event){
      event.preventDefault();
      Meteor.logout();
    }
  })
  googleLoginButton.events({
    'click #googleLoginButton': function() {
      console.log(emailVar);
      Meteor.loginWithGoogle(
        { requestPermissions: ['email', 'profile'],
        requestOfflineToken: 'true',
        forceApprovalPrompt: 'true' //<==== This is the change
        }
       );
    }
  });
}



/*Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});*/

document.querySelector('.img__btn').addEventListener('click', function() {
  document.querySelector('.cont').classList.toggle('s--signup');
});