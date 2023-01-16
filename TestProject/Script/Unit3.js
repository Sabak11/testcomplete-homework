function getConnection()
{
 // Specifies the connection string
  var ConStr = "Provider=MSOLEDBSQL;Server=localhost;Database=orders;UID=testAutomation;PWD=Testautomation123;";
  var connection = ADO.CreateConnection();
  connection.ConnectionString = ConStr;
  connection.Open();
  return connection;
}

module.exports.getConnection=getConnection
