import{e as t}from"./iframe-7yPApSvt.js";import{R as D,n as p}from"./arrayEqualityCheck-BRhf3SEW.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-BkCPChyr.js";import{C as K}from"./CartesianGrid-Csd8Dh3x.js";import{X as T}from"./XAxis-D9IId5KY.js";import{Y as M}from"./YAxis-p892jm1t.js";import{L as $}from"./Legend-Dq2Vw5o0.js";import{T as O}from"./Tooltip-CMbwh4so.js";import{L as C}from"./Line-CZDjkSNR.js";import{R as W}from"./RechartsHookInspector-BsW7gU1Y.js";import{C as X}from"./Curve-DU3LHYbT.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BvQpsjiF.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BuUb30Xi.js";import"./hooks-CULXbe6b.js";import"./axisSelectors-C9Ec7cF5.js";import"./zIndexSlice-CEDRpfjq.js";import"./CartesianChart-CIeTwbWT.js";import"./chartDataContext-ZZL8Xm-d.js";import"./CategoricalChart-BOXfpwGx.js";import"./CartesianAxis-bgrWTzp1.js";import"./Layer-uYiMe6t4.js";import"./Text-COZE0ykR.js";import"./DOMUtils-CSR616sr.js";import"./Label-DRJZdylN.js";import"./ZIndexLayer-Qq2hiEM9.js";import"./types-OVAUyZ3J.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Cj90JcMH.js";import"./useElementOffset-C_8-L3sE.js";import"./iteratee-DtH8F4-p.js";import"./Cross-DHHFHI5_.js";import"./Rectangle-VDS0PGUg.js";import"./useAnimationId-DZFmgCE1.js";import"./Sector-B6puIsbo.js";import"./ReactUtils-C9q2a11f.js";import"./ActivePoints-CY8-2aZT.js";import"./Dot-CTXw21tK.js";import"./RegisterGraphicalItemId-gdU_VBCL.js";import"./ErrorBarContext-DG4gMx-N.js";import"./GraphicalItemClipPath-cXovOiV2.js";import"./SetGraphicalItem-CGoReTbO.js";import"./getRadiusAndStrokeWidthFromDot-C3lHqLdB.js";import"./ActiveShapeUtils-CcCS4fKT.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-CDa1-n6T.js";import"./index-CTyUbB7m.js";import"./ChartSizeDimensions-D-ngX-PE.js";import"./OffsetShower-BazP2SAL.js";import"./PlotAreaShower-BquTH6Fu.js";const _t={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
