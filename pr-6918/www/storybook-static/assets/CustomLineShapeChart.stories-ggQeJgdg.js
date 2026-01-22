import{e as t}from"./iframe-DpxBiwXt.js";import{R as D,n as p}from"./arrayEqualityCheck-FXkJUuOg.js";import{L as v}from"./LineChartArgs-C9Vp8FkW.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-C4piYulh.js";import{C as K}from"./CartesianGrid-DNW3g4XV.js";import{X as T}from"./XAxis-BwhWcYGH.js";import{Y as M}from"./YAxis-Bi8itMA7.js";import{L as $}from"./Legend-Cjhc-YUg.js";import{T as O}from"./Tooltip-BplPpqBs.js";import{L as C}from"./Line-By9eZF6k.js";import{R as W}from"./RechartsHookInspector-A8kV9_z_.js";import{C as X}from"./Curve-D7R0OSkI.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CEEOIjtC.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-BjnJrxH9.js";import"./hooks-CjYZQI6e.js";import"./axisSelectors-DxY3Hm_g.js";import"./zIndexSlice-BKKsRI17.js";import"./CartesianChart-C8Msn2UK.js";import"./chartDataContext-WZeplglC.js";import"./CategoricalChart-DGoypZYk.js";import"./CartesianAxis-DPFPdJc8.js";import"./Layer-B_VW6NEu.js";import"./Text-DNJoB5At.js";import"./DOMUtils-DrvvQn8D.js";import"./Label-CEkR5yeX.js";import"./ZIndexLayer-D0mBkmdS.js";import"./types-BBdfixzL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DaC_yNBz.js";import"./useElementOffset-K-XxmBs3.js";import"./iteratee-Bm9VQgEn.js";import"./Cross-BPD08xqW.js";import"./Rectangle-BltJ-RBG.js";import"./useAnimationId-xmRGVEvR.js";import"./Sector-CLle2JPF.js";import"./ReactUtils-Dffr1epF.js";import"./ActivePoints-DmMdWDFy.js";import"./Dot-CHYi4_d9.js";import"./RegisterGraphicalItemId-DvA6E3s-.js";import"./ErrorBarContext--hzc0ol9.js";import"./GraphicalItemClipPath-BxeldMcM.js";import"./SetGraphicalItem-B6m6aNjX.js";import"./getRadiusAndStrokeWidthFromDot-C96kEFaR.js";import"./ActiveShapeUtils-DjjH0_gx.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-DN2MYT0t.js";import"./index-JWi15Uty.js";import"./ChartSizeDimensions-DaeB45KF.js";import"./OffsetShower-BJFCBDNO.js";import"./PlotAreaShower-eORzspIc.js";const _t={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
