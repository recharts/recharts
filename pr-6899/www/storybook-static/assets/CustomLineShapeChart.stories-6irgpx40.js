import{e as t}from"./iframe-DVbcaGEk.js";import{R as D,n as p}from"./arrayEqualityCheck-D_Ccs7mG.js";import{L as v}from"./LineChartArgs-C9Vp8FkW.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-CiVJqGc4.js";import{C as K}from"./CartesianGrid-BC7g-EtZ.js";import{X as T}from"./XAxis-3cZu4ol_.js";import{Y as M}from"./YAxis-C7ETLAW_.js";import{L as $}from"./Legend-D8WJHscn.js";import{T as O}from"./Tooltip-COhbepB5.js";import{L as C}from"./Line-1nZMRzsV.js";import{R as W}from"./RechartsHookInspector-CNkljFSC.js";import{C as X}from"./Curve-DRY3YzYB.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BvhwmIy1.js";import"./PolarUtils-BCmS2GQK.js";import"./RechartsWrapper-CI_kVB3D.js";import"./hooks-DrJQ9o1U.js";import"./axisSelectors-Dq8ysKg7.js";import"./zIndexSlice-C3Z2iJoi.js";import"./CartesianChart-DwoXLAKx.js";import"./chartDataContext-BHEPpTwp.js";import"./CategoricalChart-DaQkrRKt.js";import"./CartesianAxis-DJav8QwX.js";import"./Layer-CTeRo74K.js";import"./Text-BnUgu-YX.js";import"./DOMUtils-C3Nevwge.js";import"./Label-Vy4t0U1x.js";import"./ZIndexLayer-DQcVBq3k.js";import"./types-glyr-q7x.js";import"./Symbols-D0zgYynQ.js";import"./useElementOffset-BihE1waz.js";import"./iteratee-BDIycRH5.js";import"./Cross-C3FT44Tn.js";import"./Rectangle-CDg01dVF.js";import"./useAnimationId-BsgPO1Qj.js";import"./Sector-D5CuENkF.js";import"./ReactUtils-PeKnJ7eE.js";import"./ActivePoints-iMOiVhGw.js";import"./Dot-BVLrssPS.js";import"./RegisterGraphicalItemId-sqkoY2pX.js";import"./ErrorBarContext-BcI0a9d6.js";import"./GraphicalItemClipPath-58Cq7fMH.js";import"./SetGraphicalItem-CMkDLn5I.js";import"./getRadiusAndStrokeWidthFromDot-Bc3iZ5Rn.js";import"./ActiveShapeUtils-CQxGvOB9.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-_bdwRMqG.js";import"./index-BAtGFOnL.js";import"./ChartSizeDimensions-B0rnWoCy.js";import"./OffsetShower-DI4Pwzeh.js";import"./PlotAreaShower-CPYGkOSs.js";const Yt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
