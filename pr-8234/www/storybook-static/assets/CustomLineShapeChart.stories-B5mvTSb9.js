import{R as t}from"./iframe-Co7Udrye.js";import{R as D,l as p}from"./zIndexSlice-DOrD3bq8.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DrShy5NM.js";import{C as M}from"./CartesianGrid-uGTq3yzf.js";import{X as $}from"./XAxis-C4fRrpXS.js";import{Y as I}from"./YAxis-CRk-eV3B.js";import{L as O}from"./Legend-DZTzeHvv.js";import{T as W}from"./Tooltip-nc81_9QB.js";import{L as f}from"./Line-x-R_Kf7-.js";import{C as X}from"./Curve-CTNqeiLd.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Dj6LZrRJ.js";import"./throttle-Cc_t6lxE.js";import"./index-5ZcPFJjn.js";import"./index-CzbcfkCz.js";import"./RechartsWrapper-CzRhzMVT.js";import"./axisSelectors-e3Zjl34d.js";import"./polarAxisSelectors-c8_8zpzH.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DSuWQh9E.js";import"./index-DQWwvV1b.js";import"./index-CKK_KqSf.js";import"./renderedTicksSlice-Isf4L0Ae.js";import"./index-CXV1GNFt.js";import"./fillDefinitions-CeRUcb47.js";import"./CartesianChart-CFLJJfWX.js";import"./chartDataContext-BKcXeGAI.js";import"./CategoricalChart-DPV1qzDX.js";import"./CartesianAxis-CBeq856j.js";import"./Layer-C65liL5F.js";import"./Text-DVQecdV7.js";import"./ZIndexLayer-DEtSsufZ.js";import"./Label-DffVq635.js";import"./types-CNLXZtmS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-zaaHBVPb.js";import"./symbol-B6ox5qf9.js";import"./path-DyVhHtw_.js";import"./useElementOffset-yaxFxPbx.js";import"./uniqBy-HSw8sR7S.js";import"./iteratee-wNQh5Cd7.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-DDJ6zjpL.js";import"./Cross-D5k0JUgR.js";import"./Rectangle-CFZCBY1B.js";import"./util-Dxo8gN5i.js";import"./Sector-BXDrijJd.js";import"./dataEntryStyles-KlXlC10J.js";import"./ActivePoints-DbiUIU0R.js";import"./Dot-i29ttLNG.js";import"./activeStyles-dIWWSidH.js";import"./ErrorBarContext-DzV5SKcC.js";import"./SetGraphicalItem-CrBdfN6J.js";import"./getRadiusAndStrokeWidthFromDot-Bxe1mCKc.js";import"./ActiveShapeUtils-CIdGHQK5.js";import"./useEffectiveDataKey-C3nLlcoP.js";import"./step-hcE1AvzR.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Ht=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Ht as __namedExportsOrder,zt as default};
