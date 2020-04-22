=============db commands===========
1. operator table:
------------------

1. use mongopoc

2. db.createCollection("Operator",{ capped : true, autoIndexID : true, size : 6142800, max : 10000 });

3. db.operator.insert({"User_Id":"1","User_Name":"Sachin_Kothavade", "Password":"xyz", "First_Name":"Sachin","LastName":"Kothavade","Age":"30","Gender":"Male","DOB":"10/06/1990","Address":"Pune","Contact_No":"9988776655","Email_Id":"sachin.kothavade@gmail.com","Role_Id":"3","Status":"Active","Create_Timestamp":"4/17/20 10:31","Update_Timestamp":"4/17/20 10:32"});

4. db.operator.find();


2.Role table:
----------------------
1.db.createCollection("Role",{ capped : true, autoIndexID : true, size : 6142800, max : 10000 });

2.db.role.insert({"Role_Id":"1","Role_Desc":"Read Only","Create_Timestamp":"4/17/20 10:31","Update_Timestamp":"4/17/20 10:32"});

3.db.role.insert({"Role_Id":"2","Role_Desc":"Read/Write","Create_Timestamp":"4/17/20 10:31","Update_Timestamp":"4/17/20 10:32"});

4.db.role.insert({"Role_Id":"3","Role_Desc":"Admin","Create_Timestamp":"4/17/20 10:31","Update_Timestamp":"4/17/20 10:32"});

5. db.role.find();

3.Customer table:
------------------------
1. db.createCollection("Customer",{ capped : true, autoIndexID : true, size : 6142800, max : 10000 });
 
2. db.customer.insert({"Cust_Id":"1","Cust_Fname":"Sachin","Cust_Lname":"Kothavade","Age":"30","Gender":"Male","DOB":"10/06/1990","Cust_Address":"Pune","Email_Id":"sachin.kothavade@gmail.com","Cust_Primary_Contact":"9988776655","Create_Timestamp":"4/17/20 10:31","Update_Timestamp":"4/17/20 10:32"});

3. db.customer.find();

4. CustomerAccount table:
----------------------------------

1. db.createCollection("CustomerAccount",{ capped : true, autoIndexID : true, size : 6142800, max : 10000 });

2. db.customerAccount.insert({"Id":"1","CustId":"1","AccntId":"5264872569","AccntType":"savings","AccntBal":"0$","IsKYC":"true","LastTransaction":"4/17/20 10:31","Create_Timestamp":"4/17/20 10:31","Update_Timestamp":"4/17/20 10:32"});

3. db.customerAccount.find();

5. TmHistory table
-----------------------

1. db.createCollection("TmHistory",{ capped : true, autoIndexID : true, size : 6142800, max : 10000 });

2. db.tmHistory.insert({"Id":"1","CustId":"1","AccntId":"5264872569","OperatorId":"1","LastCallData":"4/17/20 10:31","CustFeedback":"call me after 10 days","ActionId":"1","NextRmnrDate":"4/17/20 10:31","Timestamp":"4/17/20 10:32"});

3. db.tmHistory.find();

6. Action table:
-------------------------

1. db.createCollection("Action",{ capped : true, autoIndexID : true, size : 6142800, max : 10000 });

2. db.action.insert({"Id":"1","Status":"Schedule a call","CreateTimestamp":"4/17/20 10:31","UpdateTimestamp":"4/17/20 10:32"});

3. db.action.insert({"Id":"2","Status":"Ready for Closure","CreateTimestamp":"4/17/20 10:31","UpdateTimestamp":"4/17/20 10:32"});

4. db.action.insert({"Id":"3","Status":"On Hold","CreateTimestamp":"4/17/20 10:31","UpdateTimestamp":"4/17/20 10:32"});

5. db.action.insert({"Id":"4","Status":"Ready to Activate","CreateTimestamp":"4/17/20 10:31","UpdateTimestamp":"4/17/20 10:32"});

6. db.action.insert({"Id":"5","Status":"Checklist pending","CreateTimestamp":"4/17/20 10:31","UpdateTimestamp":"4/17/20 10:32"});

7.db.action.find();

7. Reason table:
-----------------------

1. db.createCollection("Reason",{ capped : true, autoIndexID : true, size : 6142800, max : 10000 });

2. db.reason.insert({"Id":"1","Desc":"High account maintenance ","CreateTimestamp":"4/17/20 10:31","UpdateTimestamp":"4/17/20 10:32"});

3. db.reason.insert({"Id":"2","Desc":"Issue withCustomer Relationship","CreateTimestamp":"4/17/20 10:31","UpdateTimestamp":"4/17/20 10:32"});

4. db.reason.find();

8. CheckList table:
-----------------------

1. db.createCollection("CheckList",{ capped : true, autoIndexID : true, size : 6142800, max : 10000 });

2. db.checkList.insert({"Id":"1","ChkId":"1","ChkType":"Balance check","CreateTimestamp":"4/17/20 10:31","UpdateTimestamp":"4/17/20 10:32"});

3. db.checkList.insert({"Id":"2","ChkId":"2","ChkType":"Verify KYC","CreateTimestamp":"4/17/20 10:31","UpdateTimestamp":"4/17/20 10:32"});

4. db.checkList.find();

9. OperatorAssignment table:
-----------------------

1. db.createCollection("OperatorAssignment",{ capped : true, autoIndexID : true, size : 6142800, max : 10000 });

2. db.operatorAssignment.insert({"Id":"1","OperatorId":"1","AccntId":"5264872569","Status":"In Progress","CreateTimestamp":"4/17/20 10:31","UpdateTimestamp":"4/17/20 10:32"});

3. db.operatorAssignment.insert({"Id":"2","OperatorId":"2","AccntId":"5264872570","Status":"Assigned","CreateTimestamp":"4/17/20 10:31","UpdateTimestamp":"4/17/20 10:32"});

4. db.operatorAssignment.insert({"Id":"3","OperatorId":"3","AccntId":"5264872571","Status":"Assigned","CreateTimestamp":"4/17/20 10:31","UpdateTimestamp":"4/17/20 10:32"});

5. db.operatorAssignment.find();

10. CustCheckList table:
-----------------------

1. db.createCollection("CustCheckList",{ capped : true, autoIndexID : true, size : 6142800, max : 10000 });

2. db.custCheckList.insert({"Id":"1","TmHistoryId":"1","ChkId":"1","Timestamp":"4/17/20 10:31"});

3. db.custCheckList.find();
