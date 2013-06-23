Ext.application({
    name: 'Sencha',

    launch: function() {
        Ext.create("Ext.form.Panel", {
            fullscreen: true,
            
			title: '���ڴ��������',
			iconCls: 'user',
			xtype: 'formpanel',
			url: 'loancalculate.jsp',
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

						// Sends an AJAX request with the form data to the url specified above (contact.php).
						// The success callback is called if we get a non-error response from the server
						form.submit({
							success: function(formParam, responseResult) {
								//(form.getItems()[1]).setValue(responseResult.result);
								//Ext.Msg.alert('Thank You',form.getItems()[0].name);
								form.setValues({
									result : '�ܻ���' + responseResult.sumResult 
										+ '���»���' + responseResult.everyMonthAmount
										}); //���ý����ʾ
								// The callback function is run when the user taps the 'ok' button
								/*Ext.Msg.alert('Thank You', '��������' + responseResult.result, function() {
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