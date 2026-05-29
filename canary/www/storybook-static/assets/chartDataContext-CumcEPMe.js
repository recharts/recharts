import{r as h}from"./iframe-Dbih6tM_.js";import{a5 as r,a6 as u}from"./RechartsWrapper-CzkBSRjy.js";import{ab as i,aa as p,ah as l}from"./zIndexSlice-F7HsGAhb.js";const o=a=>{const{chartData:e}=a,t=p(),n=l();return h.useEffect(()=>n?()=>{}:(t(r(e)),()=>{t(r(void 0))}),[e,t,n]),null},s=a=>{const{computedData:e}=a,t=p();return h.useEffect(()=>(t(u(e)),()=>{t(r(void 0))}),[e,t]),null},m=a=>a.chartData.chartData,d=()=>i(m),_=a=>{const{dataStartIndex:e,dataEndIndex:t}=a.chartData;return{startIndex:e,endIndex:t}},c=()=>i(_);try{o.displayName="ChartDataContextProvider",o.__docgenInfo={description:"",displayName:"ChartDataContextProvider",props:{chartData:{defaultValue:null,description:"",name:"chartData",required:!0,type:{name:"ChartData | undefined"}}}}}catch{}try{s.displayName="SetComputedData",s.__docgenInfo={description:"",displayName:"SetComputedData",props:{computedData:{defaultValue:null,description:"",name:"computedData",required:!0,type:{name:"any"}}}}}catch{}try{d.displayName="useChartData",d.__docgenInfo={description:`"data" is the data of the chart - it has no type because this part of recharts is very flexible.
Basically it's an array of "something" and then there's the dataKey property in various places
that's meant to pull other things away from the data.

Some charts have \`data\` defined on the chart root, and they will return the array through this hook.
For example: <ComposedChart data={data} />.

Other charts, such as Pie, have data defined on individual graphical elements.
These charts will return \`undefined\` through this hook, and you need to read the data from children.
For example: <PieChart><Pie data={data} />

Some charts also allow setting both - data on the parent, and data on the children at the same time!
However, this particular selector will only return the ones defined on the parent.`,displayName:"useChartData",props:{}}}catch{}try{c.displayName="useDataIndex",c.__docgenInfo={description:"startIndex and endIndex are data boundaries, set through Brush.",displayName:"useDataIndex",props:{}}}catch{}export{o as C,s as S,c as a,d as u};
