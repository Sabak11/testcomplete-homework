function Test1()
{
  TestedApps.Orders.Run(1, true);
  let orders = Aliases.Orders;
  orders.MainForm.ToolBar.ClickItem(4, false);
  let orderForm = orders.OrderForm;
  let groupBox = orderForm.Group;
  let textBox = groupBox.Customer;
  textBox.Click(38, 4);
  textBox.SetText("Saba");
  textBox = groupBox.Street;
  textBox.Click(37, 5);
  textBox.SetText("berbuki str");
  textBox = groupBox.City;
  textBox.Click(9, 7);
  textBox.SetText("Tbilisi");
  textBox = groupBox.State;
  textBox.Click(71, 12);
  textBox.SetText("Tbilisi");
  textBox = groupBox.Zip;
  textBox.Click(35, 15);
  textBox.SetText("3700");
  textBox = groupBox.CardNo;
  textBox.Click(83, 12);
  textBox.SetText("35003345674");
  groupBox.ProductNames.ClickItem("MyMoney");
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.ProductNames, "wItemCount", cmpEqual, 3);
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.ProductNames, "wText", cmpEqual, "MyMoney");
  aqObject.CheckProperty(Aliases.Orders.OrderFormOne.Group.Visa, "WndCaption", cmpEqual, "Visa");
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Customer, "wText", cmpEqual, "Saba");
  orderForm.ButtonOK.ClickButton();
}

