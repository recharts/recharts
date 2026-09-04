import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-CfT4cgn7.js";import{n as a,t as o}from"./CartesianGrid-C0BAtXH9.js";import{n as s,t as c}from"./Bar-CQB3-sR3.js";import{n as l,t as u}from"./Scatter-1pIxgP4h.js";import{n as d,t as f}from"./XAxis-BC2eC402.js";import{n as p,t as m}from"./YAxis-Ch1VfSce.js";import{n as h,t as g}from"./ZAxis-AM4UfM6E.js";import{n as _,t as v}from"./ComposedChart-CZOHGVI-.js";var y;function b(){return(b=t((()=>{y=[{min:100,lowerQuartile:200,median:250,upperQuartile:450,max:650,average:150},{min:200,lowerQuartile:400,median:600,upperQuartile:700,max:800,average:550},{min:0,lowerQuartile:200,median:400,upperQuartile:600,max:800,average:400}]})))()}var x,S,C,w,T,E,D;function O(){return(O=t((()=>{x=e(n()),i(),_(),s(),d(),p(),h(),a(),l(),b(),S={component:v},C=e=>{let{x:t,y:n,width:r,height:i}=e;return t==null||n==null||r==null||i==null?null:x.createElement(`line`,{x1:t,y1:n,x2:t+r,y2:n,stroke:`#000`,strokeWidth:3})},w=e=>{let{x:t,y:n,width:r,height:i}=e;return t==null||n==null||r==null||i==null?null:x.createElement(`line`,{x1:t+r/2,y1:n+i,x2:t+r/2,y2:n,stroke:`#000`,strokeWidth:5,strokeDasharray:`5`})},T=e=>x.useMemo(()=>e.map(e=>({min:e.min,bottomWhisker:e.lowerQuartile-e.min,bottomBox:e.median-e.lowerQuartile,topBox:e.upperQuartile-e.median,topWhisker:e.max-e.upperQuartile,average:e.average,size:250})),[e]),E={render:()=>{let e=T(y);return x.createElement(r,{minHeight:600},x.createElement(v,{data:e},x.createElement(o,{strokeDasharray:`3 3`}),x.createElement(c,{stackId:`a`,dataKey:`min`,fill:`none`}),x.createElement(c,{stackId:`a`,dataKey:`bar-min`,shape:x.createElement(C,null)}),x.createElement(c,{stackId:`a`,dataKey:`bottomWhisker`,shape:x.createElement(w,null)}),x.createElement(c,{stackId:`a`,dataKey:`bottomBox`,fill:`#8884d8`}),x.createElement(c,{stackId:`a`,dataKey:`bar-avg`,shape:x.createElement(C,null)}),x.createElement(c,{stackId:`a`,dataKey:`topBox`,fill:`#8884d8`}),x.createElement(c,{stackId:`a`,dataKey:`topWhisker`,shape:x.createElement(w,null)}),x.createElement(c,{stackId:`a`,dataKey:`bar-max`,shape:x.createElement(C,null)}),x.createElement(g,{type:`number`,dataKey:`size`,range:[0,250]}),x.createElement(u,{dataKey:`average`,fill:`red`,stroke:`#FFF`}),x.createElement(f,null),x.createElement(m,null)))},args:{}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D=[`BoxPlotChart`]})))()}O();export{E as BoxPlotChart,D as __namedExportsOrder,S as default};