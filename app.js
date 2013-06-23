Ext.application({
    name: 'Sencha',

    launch: function() {
        Ext.create("Ext.form.Panel", {
            fullscreen: true,
            
			title: '分期贷款金额计算',
			iconCls: 'user',
			xtype: 'formpanel',
			//url: 'loancalculate.jsp',
			layout: 'vbox',

			items: [
				{
					xtype: 'fieldset',
					title: '分期贷款金额计算',
					instructions: '(all is required.)',
					items: [
						{
							xtype: 'numberfield',
							label: '贷款金额',
							required: true,
							name: 'amount'
							
						},
						{
							xtype: 'numberfield',
							label: '贷款年限',
							required: true,
							name: 'years'
						},
						{
							xtype: 'numberfield',
							label: '利率',
							required: true,
							name: 'rate'
						},
						{
							xtype: 'textfield',
							label: '计算结果',
							readOnly: true,
							name: 'result'
						}
					]
				},
				{
					xtype: 'button',
					text: '计算',
					ui: 'confirm',
					handler: function() {
						// This looks up the items stack above, getting a reference to the first form it see
						var form = this.up('formpanel');
						var values = form.getValues();
						amount = values.amount; //request.getParameter("amount");
						Ext.Msg.alert('查看', '输入金额:' + amount);						/*String yearsStr = request.getParameter("years");
						String rateStr = request.getParameter("rate");
						System.out.println("amount:" + amountStr + ",years:" + yearsStr);
						if(amountStr != null && amountStr.trim().length() != 0){
							if(yearsStr != null && yearsStr.trim().length() != 0){
								double amount = Double.parseDouble(amountStr);
								double years = Double.parseDouble(yearsStr);
								double rate = Double.parseDouble(rateStr);
								double sumResult = amount * years * rate;
								sumResult += amount;
								//四舍五入
								BigDecimal   b   =   new   BigDecimal(sumResult);
								sumResult   =   b.setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue();
								double everyMonthAmount = sumResult / years / 12 ;
								b   =   new   BigDecimal(everyMonthAmount);
								everyMonthAmount = b.setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue();
								String responseResult = "{\"success\": true, \"sumResult\":" + sumResult + ", \"everyMonthAmount\":" + everyMonthAmount + "}";
								System.out.println("调用结果及总还款金额:" + responseResult);
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