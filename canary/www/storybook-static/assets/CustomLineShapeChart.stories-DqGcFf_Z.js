import{e as t}from"./iframe-CxI43GLZ.js";import{R as D,n as p}from"./arrayEqualityCheck-BfVdm9jV.js";import{L as v}from"./LineChartArgs-C9Vp8FkW.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-nMe2HUzc.js";import{C as K}from"./CartesianGrid-DQNW5f0G.js";import{X as T}from"./XAxis-DH2Q1e34.js";import{Y as M}from"./YAxis-C-oWd5yq.js";import{L as $}from"./Legend-p5ihkFuo.js";import{T as O}from"./Tooltip-DqOvky8-.js";import{L as C}from"./Line-C6Ka3jci.js";import{R as W}from"./RechartsHookInspector-DtRN3lc4.js";import{C as X}from"./Curve-BWaqjCRV.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-UONb-avO.js";import"./PolarUtils-DHQUPcK8.js";import"./RechartsWrapper--eelc2ZG.js";import"./hooks-B1NTMNRK.js";import"./axisSelectors-BTfB0Z1c.js";import"./zIndexSlice-DIL5Sqm1.js";import"./CartesianChart-Dk9gAZsf.js";import"./chartDataContext-VKjrZIk0.js";import"./CategoricalChart-diS0yBUq.js";import"./CartesianAxis-CGSh7ZG4.js";import"./Layer-CmGdcww6.js";import"./Text-DPcraT74.js";import"./DOMUtils-DgzzSI6D.js";import"./Label-B09Q27rq.js";import"./ZIndexLayer-B1TtTzTT.js";import"./types-KA7-71SW.js";import"./Symbols-CSvR9izB.js";import"./useElementOffset-iAMlLSj3.js";import"./iteratee-BhYORJq7.js";import"./Cross-DIFk52zL.js";import"./Rectangle-Bz1Foak7.js";import"./useAnimationId-CTE4KFOU.js";import"./Sector-BrRXNJ4R.js";import"./ReactUtils-elXAGoBP.js";import"./ActivePoints-BnPOypie.js";import"./Dot-KNUzVwuJ.js";import"./RegisterGraphicalItemId-CrQ7lfko.js";import"./ErrorBarContext-D61wHuQh.js";import"./GraphicalItemClipPath-D5JGy8J4.js";import"./SetGraphicalItem-CwpQjYla.js";import"./getRadiusAndStrokeWidthFromDot-CXjnDYBP.js";import"./ActiveShapeUtils-Cos1S8ib.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-B_Aa80Lz.js";import"./index-QQ_t_uQR.js";import"./ChartSizeDimensions-DCRd00II.js";import"./OffsetShower-CdLtWmQh.js";import"./PlotAreaShower-B89fMbPB.js";const Yt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <LineChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip cursor={{
          stroke: 'gold',
          strokeWidth: 2
        }} defaultIndex={3} />
          <Line type="linear" dataKey="pv" stroke="#8884d8" activeDot={{
          r: 8
        }} shape={(payload: CurveProps) => <CustomLineShapeProps {...payload} tick={<circle r={5} fill="currentColor" />} />} />
          <Line type="linear" dataKey="uv" stroke="#82ca9d" shape={(payload: CurveProps) => <CustomLineShapeProps {...payload} tick={<rect x={-5} y={-5} width={10} height={10} fill="currentColor" />} />} />
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }
  }
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const _t=["CustomLineShapeChart"];export{n as CustomLineShapeChart,_t as __namedExportsOrder,Yt as default};
