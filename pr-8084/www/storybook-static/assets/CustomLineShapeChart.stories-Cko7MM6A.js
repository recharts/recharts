import{R as t}from"./iframe-ZGmrrukO.js";import{R as D,m as p}from"./zIndexSlice-C5KgYPQq.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-I9dHiTnW.js";import{C as M}from"./CartesianGrid-C3qpko0P.js";import{X as $}from"./XAxis-BAXN4a1X.js";import{Y as I}from"./YAxis-C3JJ8ArK.js";import{L as O}from"./Legend-DG95uxRK.js";import{T as W}from"./Tooltip-Dbvq0uZA.js";import{L as f}from"./Line-CagAPKlZ.js";import{C as X}from"./Curve-CjgpP6VN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CNACe9Hw.js";import"./throttle-DEV8M7d-.js";import"./index-BDXslZly.js";import"./index-DkZKmKPL.js";import"./RechartsWrapper-D3dierpX.js";import"./axisSelectors-BkEVbAOi.js";import"./polarAxisSelectors-BTEQFOKc.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BCl2Vcri.js";import"./index-DELNKpJo.js";import"./index-DjxPPcPR.js";import"./renderedTicksSlice-DslC81eO.js";import"./index-CqZ9-YDO.js";import"./CartesianChart-DTfzXdNC.js";import"./chartDataContext-CL-xIQe9.js";import"./CategoricalChart-LYzcxGWQ.js";import"./CartesianAxis-_qB2Y9Zl.js";import"./Layer-B42ScyDi.js";import"./Text-GEQvIv20.js";import"./pageBackground-fO3k-pcO.js";import"./useId-rh7m_y1i.js";import"./ZIndexLayer-C_RDQRBf.js";import"./Label-CraUapZw.js";import"./dataEntryStyles-ChBxQ-KQ.js";import"./types-CCAgRS29.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-Bj_FeK6Z.js";import"./symbol-uBdmaQJZ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CJAbl6Xw.js";import"./uniqBy-B8i0l-yZ.js";import"./iteratee-DMbjXWAk.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-16kGh6Cm.js";import"./Cross-CdrL-G6k.js";import"./Rectangle-DIms2ErP.js";import"./util-Dxo8gN5i.js";import"./Sector-0V5V0PtF.js";import"./activeStyles-Bhs50nun.js";import"./ActivePoints-DWVIWGut.js";import"./Dot-BvCj9lGB.js";import"./RegisterGraphicalItemId-BEb5c735.js";import"./ErrorBarContext-DCWPzwAV.js";import"./SetGraphicalItem-CHnk-ZHw.js";import"./getRadiusAndStrokeWidthFromDot-CEgP0kCP.js";import"./ActiveShapeUtils-BD2nIqux.js";import"./useEffectiveDataKey-C7ZRWxHk.js";import"./step-BOD7ejsf.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Qt as __namedExportsOrder,Jt as default};
