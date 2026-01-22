import{e as t}from"./iframe-DTIyp44P.js";import{R as D,n as p}from"./arrayEqualityCheck-CROVUPPr.js";import{L as v}from"./LineChartArgs-C9Vp8FkW.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-BNbknmjN.js";import{C as K}from"./CartesianGrid-DaTARVDI.js";import{X as T}from"./XAxis-C5uFpCOY.js";import{Y as M}from"./YAxis-Yf9V8Wcd.js";import{L as $}from"./Legend-Cz3fWYcj.js";import{T as O}from"./Tooltip-jrOn7pW9.js";import{L as C}from"./Line-Dm90Di08.js";import{R as W}from"./RechartsHookInspector-D8bdCWM1.js";import{C as X}from"./Curve-QqkAraw2.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CEVdASN5.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CMatZq67.js";import"./hooks-BoTdYeVb.js";import"./axisSelectors-DKeWHk_r.js";import"./zIndexSlice-CpP_hw3f.js";import"./CartesianChart-BYE7R-XT.js";import"./chartDataContext-DEKYo5U6.js";import"./CategoricalChart-DBE0EroA.js";import"./CartesianAxis-C2UO2Q74.js";import"./Layer-CNvBRmF0.js";import"./Text-oi_VPtbj.js";import"./DOMUtils-51XpcVVM.js";import"./Label-CM6isse0.js";import"./ZIndexLayer-J9Ech39_.js";import"./types-CLTao0pZ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BXEo6yiB.js";import"./useElementOffset-D30Ax_lm.js";import"./iteratee-Dn7no0dn.js";import"./Cross-Bg-nihvf.js";import"./Rectangle-C99nylwM.js";import"./useAnimationId-cUd_sss9.js";import"./Sector-BVwTJui3.js";import"./ReactUtils-BtxPFKgx.js";import"./ActivePoints-BGCbkuuz.js";import"./Dot-CleSK0nt.js";import"./RegisterGraphicalItemId-Bq2lDHMm.js";import"./ErrorBarContext-4Fy8J4Om.js";import"./GraphicalItemClipPath-fQ9wLHT4.js";import"./SetGraphicalItem-BpKNPEn8.js";import"./getRadiusAndStrokeWidthFromDot-avL-XlUZ.js";import"./ActiveShapeUtils-rB0qGo-m.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-C-AINK0-.js";import"./index-DH6qoWff.js";import"./ChartSizeDimensions-AlgeFMWv.js";import"./OffsetShower-Ytqxw96A.js";import"./PlotAreaShower-IGOsRXvZ.js";const _t={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
