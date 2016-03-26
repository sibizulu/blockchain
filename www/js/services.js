angular.module('starter.services', [])

.factory('AccountServe',function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var profile = [{
    "card account_no": "4111133444441576",
    "loan account_no": "LBMUM11112221576",
    "cust_id": "88882576",
    "account_no": "5555666677771576",
    "wallet": "df34523fgwetrqwe3534twrfwer3425wererertw",
    "uid" : 1793,
    "picture": "img/adam.jpg"
 }];

  return {
    all: function() {
      return profile;
    },
    get: function(current_profile) {
      for (var i = 0; i < profile.length; i++) {
        if (profile[i].cust_id === current_profile) {
          return profile[i];
        }
      }
      return null;
    }
  };
})

.factory('HistoryServe',function() {

  var history = [{
    Tx: '0xaa76f6c7b2771bf4e45bfcace59ff0d6bd6121c277a6abcfe0893e32e675539a',
    Block: '1215145',
    Time: '2016-03-25 15:32:40 (a minute ago)',
    From: '0x151255dD9E38e44DB38EA06EC66D0D113D6cBe37',
    To: '0x2D2729bD449a260519DCa11a80B6a89e2Fec272f',
    Amount: '1.02842021 Ether',
    Account_Nonce: '16315',
    Gas_Price: '2e-8 Ether',
    Gas_Used: '21,000',
    Tx_Price: '0.00042 Ether'
  },
  {
    Tx: '0xaa76f6c7b2771bf4e45bfcace59ff0d6bd6121c277a6abcfe0893e32e675539a',
    Block: '1215145',
    Time: '2016-03-25 15:32:40 (a minute ago)',
    From: '0x151255dD9E38e44DB38EA06EC66D0D113D6cBe37',
    To: '0x2D2729bD449a260519DCa11a80B6a89e2Fec272f',
    Amount: '1.02842021 Ether',
    Account_Nonce: '16315',
    Gas_Price: '2e-8 Ether',
    Gas_Used: '21,000',
    Tx_Price: '0.00042 Ether'
  }];

  return {
    all: function() {
      return history;
    },
    get: function(current_history) {
      for (var i = 0; i < history.length; i++) {
        if (history[i].Tx === current_history) {
          return history[i];
        }
      }
      return null;
    }
  };
});
