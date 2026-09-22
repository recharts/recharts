import{R as t}from"./iframe-CsUJaUxM.js";import{a as p}from"./isWellBehavedNumber-B1KHZ9NA.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CzOsIUza.js";import{R as T}from"./zIndexSlice-DR8GOdx_.js";import{C as M}from"./CartesianGrid-CDnT15vk.js";import{X as $}from"./XAxis-CECMNFnt.js";import{Y as I}from"./YAxis-oUxgU8a1.js";import{L as O}from"./Legend-BqCds3GH.js";import{T as W}from"./Tooltip-BEnwF5SI.js";import{L as C}from"./Line-T7c7_Mqn.js";import{C as X}from"./Curve-BBNZ0-qm.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-wCngT9vT.js";import"./RechartsWrapper-T8mD1Lc3.js";import"./axisSelectors-CPJkZcPs.js";import"./throttle-jYQKZYpr.js";import"./index-DwbFMAfW.js";import"./index-CuzTPq-B.js";import"./d3-scale-BlcUMonb.js";import"./index-B6LqR4R9.js";import"./index-LRMsLTDO.js";import"./renderedTicksSlice-DMUlxU_r.js";import"./index-BkMQdhAs.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-9AGq9zI6.js";import"./chartDataContext-Dl9PHzyn.js";import"./CategoricalChart-BPTMFHzn.js";import"./CartesianAxis-DGUFe4-P.js";import"./Layer-BL2WKRfB.js";import"./Text-Ca7ex0z4.js";import"./DOMUtils-DV9i-gvX.js";import"./useId-DskunR0V.js";import"./useBackwardsCompatibleTheme-CzetmO85.js";import"./Label-BBIMhlH3.js";import"./ZIndexLayer-y8FwKDfZ.js";import"./types-DY32nFAv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CM0b_dES.js";import"./symbol-COICJbUr.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C_sTQTtU.js";import"./uniqBy-BPwJ3JcN.js";import"./iteratee-BC6ZgAay.js";import"./useAnimationId-CIIiKuIL.js";import"./Cross-C4zgdPc0.js";import"./Rectangle-D6D4yI4Z.js";import"./util-Dxo8gN5i.js";import"./Sector-M0Sbbnyt.js";import"./AnimatedItems-BwJboHDv.js";import"./ActivePoints-DgXpbHzY.js";import"./Dot-3GIj0k7o.js";import"./RegisterGraphicalItemId-BOfAVeru.js";import"./ErrorBarContext-BOrR3fwL.js";import"./GraphicalItemClipPath-yorSgC5b.js";import"./SetGraphicalItem-y4Qrn0nd.js";import"./getRadiusAndStrokeWidthFromDot-qziiS-Bg.js";import"./ActiveShapeUtils-CrmNWRMG.js";import"./useGraphicalItemIdentity-Dtj6CrmT.js";import"./step-E2BXM1O_.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
