import{e as t}from"./iframe-YjsnRhKk.js";import{a as I}from"./ChartProps-Cvo8vJEE.js";import{R as K,n as p}from"./arrayEqualityCheck-BJwRC6MI.js";import{L as v}from"./LineChart-BimcorRm.js";import{C as b}from"./CartesianGrid-DdXZU_EM.js";import{X as A}from"./XAxis-B2tLltrx.js";import{Y as M}from"./YAxis-Dkcj0U0j.js";import{L as $}from"./Legend-BJ9mKJX0.js";import{T}from"./Tooltip-CjaAafIJ.js";import{L as y}from"./Line-qgNAtcDf.js";import{R as W}from"./RechartsHookInspector-B9NqqHZV.js";import{C as X}from"./Curve-C9YHabA2.js";import{p as Y}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./EventHandlers-JVOOzquU.js";import"./resolveDefaultProps-Z_TS6-YD.js";import"./PolarUtils-CY6yHRxS.js";import"./RechartsWrapper-D804dJFF.js";import"./hooks-ybSWjp7E.js";import"./axisSelectors-DDrqqiFr.js";import"./zIndexSlice-CrYhtLvr.js";import"./CartesianChart-BXbZQS9i.js";import"./chartDataContext-DdZy89Ic.js";import"./CategoricalChart-DshWcI8J.js";import"./CartesianAxis-B3Ooqwxn.js";import"./Layer-B5j-14SA.js";import"./Text-B-IGFYif.js";import"./DOMUtils-B8xMLIPn.js";import"./Label-CLhSutXl.js";import"./ZIndexLayer-B9GJT-1H.js";import"./types-B3ZyTjxE.js";import"./Symbols-BEUnwuzy.js";import"./useElementOffset-BorWrtVN.js";import"./iteratee-BmPeyMV0.js";import"./Cross-CLE105WL.js";import"./Rectangle-DuxV1NLN.js";import"./useAnimationId-BZSEvVKv.js";import"./Sector-COEdyvE7.js";import"./ReactUtils-DPXAlJoJ.js";import"./ActivePoints-DAneNfUf.js";import"./Dot-CkNBEorS.js";import"./RegisterGraphicalItemId-iR66q9wz.js";import"./ErrorBarContext-wiTCAurl.js";import"./GraphicalItemClipPath-Ctr3letV.js";import"./SetGraphicalItem-CpQPspCO.js";import"./getRadiusAndStrokeWidthFromDot-frfqIR4_.js";import"./ActiveShapeUtils-BoZeuq2S.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-CBkMiRG-.js";import"./index-D4ADZzYF.js";import"./ChartSizeDimensions-pADZR5mB.js";import"./OffsetShower-BC6NiJ8x.js";import"./PlotAreaShower-B40cJmGZ.js";const Yt={component:v,argTypes:I,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,P=m.length;a<P;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const u=(i.x-e.x)/r,g=(i.y-e.y)/r,w=Math.atan2(g,u)*180/Math.PI,S=Math.abs(Math.floor(r/h-1)),D=r/S;let s=h/2,{x:C,y:f}=e;for(;r-s>0;)r-=s,C+=u*s,f+=g*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${C} ${f}) rotate(${w})`},o)),s=D}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(K,{width:"100%",height:"100%"},t.createElement(v,{...c},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(A,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(T,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(y,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(y,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var x,E,L;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(L=(E=n.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const _t=["CustomLineShapeChart"];export{n as CustomLineShapeChart,_t as __namedExportsOrder,Yt as default};
