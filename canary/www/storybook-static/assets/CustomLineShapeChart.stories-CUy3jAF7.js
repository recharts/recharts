import{e as t}from"./iframe-CYBvhlZy.js";import{R as D,i as s}from"./arrayEqualityCheck-CK8f-Z2u.js";import{L as v}from"./LineChartArgs-_mND0tRp.js";import{g as I}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-BJx6CIeR.js";import{C as T}from"./CartesianGrid-DJUNxO2e.js";import{X as M}from"./XAxis-eHWI-DgF.js";import{Y as $}from"./YAxis-Cr0sgLdF.js";import{L as O}from"./Legend-BXbVRa32.js";import{T as W}from"./Tooltip-Bl6pLRjZ.js";import{L as C}from"./Line-BPGwoOoD.js";import{R as X}from"./RechartsHookInspector-CaeSkNQM.js";import{C as Y}from"./Curve-BOm9EQk3.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-fdlpGSvO.js";import"./immer-DZ9JDNpk.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D_53Ouva.js";import"./index-nd8_1HWo.js";import"./hooks-CR7YY56P.js";import"./axisSelectors-BoLkhT_J.js";import"./d3-scale-DTdaSeXE.js";import"./zIndexSlice-vzQlxu4v.js";import"./renderedTicksSlice-PTTaozgG.js";import"./CartesianChart-B_feyW6L.js";import"./chartDataContext-CoyQinM0.js";import"./CategoricalChart-BXlXDqQY.js";import"./CartesianAxis-DeN7_m83.js";import"./Layer-DAuVz3MT.js";import"./Text-CrKmtYV0.js";import"./DOMUtils-DaBDLSWT.js";import"./Label-C0OOgdLf.js";import"./ZIndexLayer-CJwEcLcc.js";import"./types-BeBHA9WF.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CUYfHAW-.js";import"./symbol-CPTqgyqe.js";import"./step-CGLzAmAZ.js";import"./useElementOffset-Vb2Ffn3s.js";import"./uniqBy-B2hQmckI.js";import"./iteratee-DPMrHAQZ.js";import"./useAnimationId-DVYg6VJa.js";import"./Cross-IqBPrWj8.js";import"./Rectangle-CL4E1CJr.js";import"./Sector-CjwyDs-v.js";import"./ReactUtils-BYIbW4_R.js";import"./ActivePoints-CMoiNPrV.js";import"./Dot-D7HQ1K3c.js";import"./RegisterGraphicalItemId-BV1Az0SU.js";import"./ErrorBarContext-ggSVFX3T.js";import"./GraphicalItemClipPath-CgGJbcJo.js";import"./SetGraphicalItem-D2M6v_rh.js";import"./getRadiusAndStrokeWidthFromDot-XsFMXGfI.js";import"./ActiveShapeUtils-CCHDnR4M.js";import"./isPlainObject-CS6IzJzX.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-CMh-DiG6.js";import"./index-2ZvuN1gp.js";import"./ChartSizeDimensions-Be7xBjpI.js";import"./OffsetShower-ByB6-I6e.js";import"./PlotAreaShower-DizTc5Ay.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...I(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Qt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Qt as __namedExportsOrder,Jt as default};
