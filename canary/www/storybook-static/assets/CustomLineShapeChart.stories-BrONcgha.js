import{e as t}from"./iframe-BtK7K3Kv.js";import{R as D,n as p}from"./arrayEqualityCheck-CFfqZo_0.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-wfGUzp84.js";import{C as K}from"./CartesianGrid-GHJ_f6DI.js";import{X as T}from"./XAxis-DGpvny6L.js";import{Y as M}from"./YAxis-CwLMlwVC.js";import{L as $}from"./Legend-CiOMkmt7.js";import{T as O}from"./Tooltip-Csj-Fju5.js";import{L as C}from"./Line-W3QkIe3i.js";import{R as W}from"./RechartsHookInspector-D4JLTX2d.js";import{C as X}from"./Curve-yPyY_uXZ.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DWyLZAa9.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DGVCpdWj.js";import"./hooks-60Pk7U7P.js";import"./axisSelectors-DMzn6YDV.js";import"./zIndexSlice-m57chh8X.js";import"./CartesianChart-CuRdEYaC.js";import"./chartDataContext-BRTsTQpm.js";import"./CategoricalChart-peX_-ePN.js";import"./CartesianAxis-BOqlO8Q1.js";import"./Layer-DV1icpzr.js";import"./Text-BW-lGQnj.js";import"./DOMUtils-z6sJWHwI.js";import"./Label-DynPPCJ6.js";import"./ZIndexLayer-DaJzxTrT.js";import"./types-CVJb2MOT.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DqB8iXHv.js";import"./useElementOffset-Di7XOydY.js";import"./iteratee-C_F3norR.js";import"./Cross-EJeYPPEM.js";import"./Rectangle-D_NKn9vF.js";import"./useAnimationId-FO0Tg1s_.js";import"./Sector-8dbuSlIN.js";import"./ReactUtils-BJV4SHfz.js";import"./ActivePoints-BKOnFX-a.js";import"./Dot-4a706hev.js";import"./RegisterGraphicalItemId-BuTwWOrx.js";import"./ErrorBarContext-CiGlk53m.js";import"./GraphicalItemClipPath-3JZrHeBE.js";import"./SetGraphicalItem-CC-hIiO2.js";import"./getRadiusAndStrokeWidthFromDot--FuVWYJV.js";import"./ActiveShapeUtils-DG-TGbIe.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-C4MEq2xn.js";import"./index-CPKyuAeN.js";import"./ChartSizeDimensions-C_sOGjRQ.js";import"./OffsetShower-dtmi7EOu.js";import"./PlotAreaShower-Di55GjjN.js";const _t={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
