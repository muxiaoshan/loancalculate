Ext.application({
    name: 'Sencha',

    launch: function() {
        Ext.create("Ext.form.Panel", {
            fullscreen: true,
            
			title: '���ڴ��������',
			iconCls: 'user',
			xtype: 'formpanel',
			//url: 'loancalculate.jsp',
			layout: 'vbox',

			items: [
				{
					xtype: 'fieldset',
					title: '���ڴ��������',
					instructions: '(all is required.)',
					items: [
						{
							xtype: 'numberfield',
							label: '������',
							required: true,
							name: 'amount'
							
						},
						{
							xtype: 'numberfield',
							label: '��������',
							required: true,
							name: 'years'
						},
						{
							xtype: 'numberfield',
							label: '����',
							required: true,
							name: 'rate'
						},
						{
							xtype: 'textfield',
							label: '������',
							readOnly: true,
							name: 'result'
						}
					]
				},
				{
					xtype: 'button',
					text: '����',
					ui: 'confirm',
					handler: function() {
						// This looks up the items stack above, getting a reference to the first form it see
						var form = this.up('formpanel');
						var values = form.getValues();
						amount = values.amount; //request.getParameter("amount");
						Ext.Msg.alert('�鿴', '������:' + amount);						/*String yearsStr = request.getParameter("years");
						String rateStr = request.getParameter("rate");
						System.out.println("amount:" + amountStr + ",years:" + yearsStr);
						if(amountStr != null && amountStr.trim().length() != 0){
							if(yearsStr != null && yearsStr.trim().length() != 0){
								double amount = Double.parseDouble(amountStr);
								double years = Double.parseDouble(yearsStr);
								double rate = Double.parseDouble(rateStr);
								double sumResult = amount * years * rate;
								sumResult += amount;
								//��������
								BigDecimal   b   =   new   BigDecimal(sumResult);
								sumResult   =   b.setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue();
								double everyMonthAmount = sumResult / years / 12 ;
								b   =   new   BigDecimal(everyMonthAmount);
								everyMonthAmount = b.setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue();
								String responseResult = "{\"success\": true, \"sumResult\":" + sumResult + ", \"everyMonthAmount\":" + everyMonthAmount + "}";
								System.out.println("���ý�����ܻ�����:" + responseResult);
								out.println(responseResult);
							}
						}else{
							out.println("{ \"success\": false}");
						}*/
					
					}
				}
			]

            

        });
    }

});