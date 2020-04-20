=============db commands===========

1. use mongopoc

2.db.createCollection("Operator",{ capped : true, autoIndexID : true, size : 6142800, max : 10000 });

3.db.operator.insert({"User_Id":"1","User_Name":"Sachin_Kothavade", "Password":"xyz", "First_Name":"Sachin","LastName":"Kothavade","Age":"30","Gender":"Male","DOB":"10/06/1990","Address":"Pune","Contact_No":"9988776655","Email_Id":"sachin.kothavade@gmail.com","Role_Id":"3","Status":"Active","Create_Timestamp":"4/17/20 10:31","Update_Timestamp":"4/17/20 10:32"});

4. db.operator.find();





1.db.createCollection("Role",{ capped : true, autoIndexID : true, size : 6142800, max : 10000 });

2.db.role.insert({"Role_Id":"1","Role_Desc":"Read Only","Create_Timestamp":"4/17/20 10:31","Update_Timestamp":"4/17/20 10:32"});

3.db.role.insert({"Role_Id":"2","Role_Desc":"Read/Write","Create_Timestamp":"4/17/20 10:31","Update_Timestamp":"4/17/20 10:32"});

4.db.role.insert({"Role_Id":"3","Role_Desc":"Admin","Create_Timestamp":"4/17/20 10:31","Update_Timestamp":"4/17/20 10:32"});

5. db.role.find();


1. db.createCollection("Customer",{ capped : true, autoIndexID : true, size : 6142800, max : 10000 });
 
2. db.customer.insert({"Cust_Id":"1","Cust_Fname":"Sachin","Cust_Lname":"Kothavade","Age":"30","Gender":"Male","DOB":"10/06/1990","Cust_Address":"Pune","Email_Id":"sachin.kothavade@gmail.com","Cust_Primary_Contact":"9988776655","Create_Timestamp":"4/17/20 10:31","Update_Timestamp":"4/17/20 10:32"});

3.db.customer.find();