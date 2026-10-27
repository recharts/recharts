import{R as t}from"./iframe-i00IWHKS.js";import{R as D,l as p}from"./zIndexSlice-CSTmF3GT.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DeHZMAtB.js";import{C as M}from"./CartesianGrid-DbvmYexX.js";import{X as $}from"./XAxis-BA_nHJl6.js";import{Y as I}from"./YAxis-GmTTpsne.js";import{L as O}from"./Legend-DqBmZZp9.js";import{T as W}from"./Tooltip-Dl1AigS9.js";import{L as f}from"./Line-CdspcwSK.js";import{C as X}from"./Curve-hlUyfFhF.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BglOfK6k.js";import"./throttle-VVsSQFBk.js";import"./index-CbwirX63.js";import"./index-CPuGrPsk.js";import"./RechartsWrapper-HLZ5nOEz.js";import"./axisSelectors-CrzJ0No2.js";import"./polarAxisSelectors-krKyM9nF.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-fdx5emX3.js";import"./index-Cdxh422T.js";import"./index-CocutCkO.js";import"./renderedTicksSlice-DZPzUM4n.js";import"./index-Cpb1euZl.js";import"./CartesianChart-cAT52TQ5.js";import"./ZIndexPortal-DfOIGQM0.js";import"./CategoricalChart-CvwnoS-7.js";import"./CartesianAxis-EZZmQ9Qc.js";import"./Layer-DmbMEBZx.js";import"./Text-CB-MiyEA.js";import"./pageBackground-e_M9BLsj.js";import"./ZIndexLayer-C49fDhwr.js";import"./Label-C4qEKDUL.js";import"./types-BWYuSzJG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-DazPmVzQ.js";import"./symbol-BISg9N3x.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Df6LRa99.js";import"./uniqBy-3FD8HgkX.js";import"./iteratee-B5sUlY-H.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-COvKagcg.js";import"./Cross-CMaQneCB.js";import"./Rectangle-BPmgsHsk.js";import"./util-Dxo8gN5i.js";import"./Sector-CesvKHcg.js";import"./LabelList-C1CnC_KK.js";import"./ActivePoints-CbH5u3fp.js";import"./Dot-kJUEeAuC.js";import"./activeStyles-DhZp3R57.js";import"./dataEntryStyles-BgF2g0Ub.js";import"./ErrorBarContext-DjefL6kX.js";import"./SetGraphicalItem-Cn81nTMh.js";import"./getRadiusAndStrokeWidthFromDot-Ce2t7rlw.js";import"./ActiveShapeUtils-CYbFkl4W.js";import"./useEffectiveDataKey-Cy_6W0Je.js";import"./step-fjQhdc2y.js";const Ht={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Jt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Jt as __namedExportsOrder,Ht as default};
