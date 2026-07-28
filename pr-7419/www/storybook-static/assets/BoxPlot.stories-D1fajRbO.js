import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{B as r,H as i,I as a,Q as o,R as s,Vn as c,W as l,t as u,u as d}from"./iframe-BiMB5Acc.js";import{c as f,t as p}from"./data-J2vpPkF6.js";var m,h,g,_,v,y,b;e((()=>{m=t(n()),u(),p(),h={component:d},g=e=>{let{x:t,y:n,width:r,height:i}=e;return t==null||n==null||r==null||i==null?null:m.createElement(`line`,{x1:t,y1:n,x2:t+r,y2:n,stroke:`#000`,strokeWidth:3})},_=e=>{let{x:t,y:n,width:r,height:i}=e;return t==null||n==null||r==null||i==null?null:m.createElement(`line`,{x1:t+r/2,y1:n+i,x2:t+r/2,y2:n,stroke:`#000`,strokeWidth:5,strokeDasharray:`5`})},v=e=>m.useMemo(()=>e.map(e=>({min:e.min,bottomWhisker:e.lowerQuartile-e.min,bottomBox:e.median-e.lowerQuartile,topBox:e.upperQuartile-e.median,topWhisker:e.max-e.upperQuartile,average:e.average,size:250})),[e]),y={render:()=>{let e=v(f);return m.createElement(c,{minHeight:600},m.createElement(d,{data:e},m.createElement(o,{strokeDasharray:`3 3`}),m.createElement(l,{stackId:`a`,dataKey:`min`,fill:`none`}),m.createElement(l,{stackId:`a`,dataKey:`bar-min`,shape:m.createElement(g,null)}),m.createElement(l,{stackId:`a`,dataKey:`bottomWhisker`,shape:m.createElement(_,null)}),m.createElement(l,{stackId:`a`,dataKey:`bottomBox`,fill:`#8884d8`}),m.createElement(l,{stackId:`a`,dataKey:`bar-avg`,shape:m.createElement(g,null)}),m.createElement(l,{stackId:`a`,dataKey:`topBox`,fill:`#8884d8`}),m.createElement(l,{stackId:`a`,dataKey:`topWhisker`,shape:m.createElement(_,null)}),m.createElement(l,{stackId:`a`,dataKey:`bar-max`,shape:m.createElement(g,null)}),m.createElement(a,{type:`number`,dataKey:`size`,range:[0,250]}),m.createElement(i,{dataKey:`average`,fill:`red`,stroke:`#FFF`}),m.createElement(r,null),m.createElement(s,null)))},args:{}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const data = useBoxPlot(boxPlots);
    return <ResponsiveContainer minHeight={600}>
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <Bar stackId="a" dataKey="min" fill="none" />
          <Bar stackId="a" dataKey="bar-min" shape={<HorizonBar />} />
          <Bar stackId="a" dataKey="bottomWhisker" shape={<DotBar />} />
          <Bar stackId="a" dataKey="bottomBox" fill="#8884d8" />
          <Bar stackId="a" dataKey="bar-avg" shape={<HorizonBar />} />
          <Bar stackId="a" dataKey="topBox" fill="#8884d8" />
          <Bar stackId="a" dataKey="topWhisker" shape={<DotBar />} />
          <Bar stackId="a" dataKey="bar-max" shape={<HorizonBar />} />
          <ZAxis type="number" dataKey="size" range={[0, 250]} />

          <Scatter dataKey="average" fill="red" stroke="#FFF" />
          <XAxis />
          <YAxis />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {}
}`,...y.parameters?.docs?.source}}},b=[`BoxPlotChart`]}))();export{y as BoxPlotChart,b as __namedExportsOrder,h as default};