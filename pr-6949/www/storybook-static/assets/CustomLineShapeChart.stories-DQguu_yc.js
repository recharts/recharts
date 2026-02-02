import{e as t}from"./iframe-CehQ8xFj.js";import{R as D,n as p}from"./arrayEqualityCheck-CJf3kznu.js";import{L as v}from"./LineChartArgs-CwVdhtIV.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-DmboQs5S.js";import{C as K}from"./CartesianGrid-BqtWDT0T.js";import{X as T}from"./XAxis-Dibf-8ej.js";import{Y as M}from"./YAxis-D-v27uKG.js";import{L as $}from"./Legend-Bj4cUftl.js";import{T as O}from"./Tooltip-y2TRM86e.js";import{L as C}from"./Line-7p-G_wDt.js";import{R as W}from"./RechartsHookInspector-C9Dv8rR_.js";import{C as X}from"./Curve-D1ENGCAK.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C1y00WFc.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-DUmIU6Xd.js";import"./hooks-CfryKUEV.js";import"./axisSelectors-BMvdINl-.js";import"./zIndexSlice-39s27tLx.js";import"./CartesianChart-B0Z5fEtd.js";import"./chartDataContext-BU4Ti452.js";import"./CategoricalChart-BJ_PCHx8.js";import"./CartesianAxis-CZCa0md7.js";import"./Layer-6nj2T2Rl.js";import"./Text-BXNpWGIz.js";import"./DOMUtils-B5Ex3wvu.js";import"./Label-Dw6m4C0Z.js";import"./ZIndexLayer-DeWQbK55.js";import"./types-CYKcJHFL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-D-9teC2q.js";import"./useElementOffset-tZncUcCf.js";import"./iteratee-5PeM9vti.js";import"./Cross-Cnvcd78W.js";import"./Rectangle-C5fxMoAB.js";import"./useAnimationId-D1z7wJlQ.js";import"./Sector-mF7w8-S5.js";import"./ReactUtils-tMfbrahw.js";import"./ActivePoints-BwDt8lt_.js";import"./Dot-BD7d-X5L.js";import"./RegisterGraphicalItemId-BnjCFZmO.js";import"./ErrorBarContext-CUQfGU6Y.js";import"./GraphicalItemClipPath-DrVbej_0.js";import"./SetGraphicalItem-BcLmHvcl.js";import"./getRadiusAndStrokeWidthFromDot-BvetFLdH.js";import"./ActiveShapeUtils-DjjpZslN.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-Cym11nDl.js";import"./index-jUFHLVIb.js";import"./ChartSizeDimensions-CfEeTzES.js";import"./OffsetShower-BbVpqDQS.js";import"./PlotAreaShower-BZ3neXdt.js";const _t={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
