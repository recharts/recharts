import{e as t}from"./iframe-BnXWjslm.js";import{R as D,n as p}from"./arrayEqualityCheck-DUiNH6C9.js";import{L as v}from"./LineChartArgs-CwVdhtIV.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-B4Yx_Ldx.js";import{C as K}from"./CartesianGrid-CKomsyf3.js";import{X as T}from"./XAxis-CmdVCSMA.js";import{Y as M}from"./YAxis-B7_xgRPt.js";import{L as $}from"./Legend-DQuskGTn.js";import{T as O}from"./Tooltip-DKfkT7Gz.js";import{L as C}from"./Line-BPeNZJ5S.js";import{R as W}from"./RechartsHookInspector-CJTq0Gdr.js";import{C as X}from"./Curve-Bkc50DRF.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-UG4fDJsJ.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-BfUKOtD7.js";import"./hooks-06paRXDN.js";import"./axisSelectors-R9DAlT6p.js";import"./zIndexSlice-p0C6ErDf.js";import"./CartesianChart-CyZ2OCbR.js";import"./chartDataContext-BqTaz2vx.js";import"./CategoricalChart-C3XXqFmy.js";import"./CartesianAxis-RUdXwPBb.js";import"./Layer-A6Fuc82i.js";import"./Text-CJLcOIOl.js";import"./DOMUtils-DE1nvb87.js";import"./Label-Znit4TkG.js";import"./ZIndexLayer-BvBrZyR1.js";import"./types-TTX5RUO9.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-yqo_ZORc.js";import"./useElementOffset-Da6MIgAg.js";import"./iteratee-xPJqHmHf.js";import"./Cross-C6rZ8te8.js";import"./Rectangle-DiN3KyDm.js";import"./useAnimationId-cDAtDGt9.js";import"./Sector-CE4yIiKS.js";import"./ReactUtils-R08Tgf5F.js";import"./ActivePoints-C3JJMy4k.js";import"./Dot-D3x_k9xg.js";import"./RegisterGraphicalItemId-CW94G04M.js";import"./ErrorBarContext-CDqLcMo6.js";import"./GraphicalItemClipPath--41PL7k1.js";import"./SetGraphicalItem-jWEfPCy0.js";import"./getRadiusAndStrokeWidthFromDot-QVWsL0nH.js";import"./ActiveShapeUtils-B_6IBG-m.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-DoyDZqd_.js";import"./index-BDMR2Hui.js";import"./ChartSizeDimensions-DTPwYyQJ.js";import"./OffsetShower-CSNclTFq.js";import"./PlotAreaShower-Conl4mfo.js";const _t={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const jt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,jt as __namedExportsOrder,_t as default};
