import{R as t}from"./iframe-Dckhh8TP.js";import{R as D,m as p}from"./zIndexSlice-DvqxU_fJ.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DboTSwLr.js";import{C as M}from"./CartesianGrid-B58hkoEe.js";import{X as $}from"./XAxis-DZSKVUHO.js";import{Y as I}from"./YAxis-C2iUlU97.js";import{L as O}from"./Legend-BhPG6qOW.js";import{T as W}from"./Tooltip-Biuxj1Al.js";import{L as f}from"./Line-B8-PDDhu.js";import{C as X}from"./Curve-CPC4BdrH.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DoWt88Bk.js";import"./throttle-nSMGIYBk.js";import"./index-BTZnO4jD.js";import"./index-BZ7EiUeE.js";import"./RechartsWrapper-DN3bSeN0.js";import"./axisSelectors-iU-8zlMU.js";import"./polarAxisSelectors-ClcX1Sfv.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CVKSBoJ3.js";import"./index-Bf6cRldK.js";import"./index-DfEyCTx4.js";import"./renderedTicksSlice-BoRV-MuC.js";import"./index-BEi4ZfWK.js";import"./CartesianChart-ds3qEH6n.js";import"./chartDataContext-CqDlrvyh.js";import"./CategoricalChart-DiJWdssm.js";import"./CartesianAxis-B8NfN4oe.js";import"./Layer-Gqc-Z-cf.js";import"./Text-ixAKnQea.js";import"./pageBackground-Bsi5t8mD.js";import"./useId-BAdhA99P.js";import"./ZIndexLayer-DYLMgu3X.js";import"./Label-BPfiwVrc.js";import"./dataEntryStyles-C1y9indW.js";import"./types-orR6Wh5t.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CuFQCUW8.js";import"./symbol-DC65CFDy.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CkmVvcV5.js";import"./uniqBy-DzK7VybD.js";import"./iteratee-NdqP5HqK.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-DwypxVGS.js";import"./Cross-DHf5MgcB.js";import"./Rectangle-BCB0dWGj.js";import"./util-Dxo8gN5i.js";import"./Sector-DakbPoQS.js";import"./activeStyles-DNDVPQVu.js";import"./ActivePoints-DqM_7cwl.js";import"./Dot-DLFfnKNz.js";import"./RegisterGraphicalItemId-jdQ-nkDB.js";import"./ErrorBarContext-D50rt7ip.js";import"./SetGraphicalItem-B5R69AhG.js";import"./getRadiusAndStrokeWidthFromDot-BPZD6QvL.js";import"./ActiveShapeUtils-CZclTza4.js";import"./useEffectiveDataKey-Dh_S8XsG.js";import"./step-Be2Z97Jg.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
