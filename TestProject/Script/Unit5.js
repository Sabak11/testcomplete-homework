

function Test1()
{
  
TestedApps.Orders.Run(1, true);
  
  Project.Variables.Data.Reset();
  
  for(; !Project.Variables.Data.IsEOF();){
    
  var Values = Project.Variables.Data.Value;
  
  
  

  let orders = Aliases.Orders;
  let mainForm = orders.MainForm;
  let toolBar = mainForm.ToolBar;
  toolBar.ClickItem(4, false);
  let orderForm = orders.OrderFormOne;
  let groupBox = orderForm.Group;
  let textBox = groupBox.Customer;
  textBox.Click(27, 5);
  textBox.SetText(Values("customerName"));
  textBox = groupBox.Street;
  textBox.Click(36, 6);
  textBox.SetText(Values("street"));
  textBox = groupBox.Town;
  textBox.Click(16, 11); 
  textBox.SetText(Values("state"));
  textBox = groupBox.State;
  textBox.DblClick(101, 17);
  textBox.SetText(Values("state"));
  orderForm.ButtonOK.ClickButton();
  toolBar.ClickItem(6, false);
  let dlgConfirmation = orders.dlgConfirmation;
  dlgConfirmation.Click(95, 110);
  dlgConfirmation.btnYes.ClickButton();
  mainForm.Close();
  dlgConfirmation.btnNo.ClickButton();
  
   Project.Variables.Data.Next()

}
}

 