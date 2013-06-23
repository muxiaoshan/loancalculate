<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.math.BigDecimal" %>
<%
String amountStr = request.getParameter("amount");
String yearsStr = request.getParameter("years");
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
}
%>