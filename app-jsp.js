Ext.application({
    name: 'Sencha',

    launch: function() {
        Ext.create("Ext.form.Panel", {
            fullscreen: true,
            
			title: '分期贷款金额计算',
			iconCls: 'user',
			xtype: 'formpanel',
			url: 'loancalculate.jsp',
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

						// Sends an AJAX request with the form data to the url specified above (contact.php).
						// The success callback is called if we get a non-error response from the server
						form.submit({
							success: function(formParam, responseResult) {
								//(form.getItems()[1]).setValue(responseResult.result);
								//Ext.Msg.alert('Thank You',form.getItems()[0].name);
								form.setValues({
									result : '总还款额：' + responseResult.sumResult 
										+ '，月还款额：' + responseResult.everyMonthAmount
										}); //设置结果显示
								// The callback function is run when the user taps the 'ok' button
								/*Ext.Msg.alert('Thank You', '计算结果：' + responseResult.result, function() {
									form.reset();
								});*/
							}
						});
					}
				}
			]

            

        });


    }
});