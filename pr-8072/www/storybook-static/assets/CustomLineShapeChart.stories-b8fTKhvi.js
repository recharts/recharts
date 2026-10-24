import{R as t}from"./iframe-z3NgSViZ.js";import{a as p}from"./isWellBehavedNumber-B9JEbcQX.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-ByL8tC9K.js";import{R as T}from"./zIndexSlice-BX0CZtnZ.js";import{C as M}from"./CartesianGrid-BlkW-CCM.js";import{X as $}from"./XAxis-6HQNOcHb.js";import{Y as I}from"./YAxis-Cq1FHamq.js";import{L as O}from"./Legend-Du71ahAl.js";import{T as W}from"./Tooltip-CkAHByW4.js";import{L as C}from"./Line-DHD91CBZ.js";import{C as X}from"./Curve-CyxMxsdR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DKxZJqnD.js";import"./RechartsWrapper-D_oQRH40.js";import"./axisSelectors-CgbkNJhz.js";import"./throttle-CwdrNliT.js";import"./index-B3bVO830.js";import"./index-h-xMeUpP.js";import"./d3-scale-CwYOu9hN.js";import"./index-CZd_v0hL.js";import"./index-gkGbSS0A.js";import"./renderedTicksSlice-DYq8RKWJ.js";import"./index-bcahlE0Z.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BZn7jg65.js";import"./chartDataContext-rha9Z1YY.js";import"./CategoricalChart-DXqdBwWs.js";import"./CartesianAxis-aatvopbC.js";import"./Layer-DIcps5If.js";import"./Text-Bf3Z0ESX.js";import"./pageBackground-SSHR1dqO.js";import"./useId-BBfhtQXH.js";import"./useBackwardsCompatibleTheme-DpJUriCO.js";import"./Label-Cv5DkZGS.js";import"./ZIndexLayer-B4GmRtpr.js";import"./dataEntryStyles-C3z4X2RS.js";import"./types-2rYpOkQj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-Jw1F6xH7.js";import"./symbol-BJRaGT2z.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CRwL0Zci.js";import"./uniqBy-BT4Juj7F.js";import"./iteratee-DkLC-6Nh.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-Cz2G0J8W.js";import"./Cross-CGpKLZqq.js";import"./Rectangle-BneWyhZX.js";import"./util-Dxo8gN5i.js";import"./Sector-Cus5LS6r.js";import"./activeStyles-CeGdwWio.js";import"./ActivePoints-B_9Jv1Nk.js";import"./Dot-CpIhdaoH.js";import"./RegisterGraphicalItemId-BSkjC-ao.js";import"./ErrorBarContext-Cu9qYyvb.js";import"./SetGraphicalItem-C6QUze-d.js";import"./getRadiusAndStrokeWidthFromDot-CUlrtQzF.js";import"./ActiveShapeUtils-CBpakVvV.js";import"./useEffectiveDataKey-CRDGSrQh.js";import"./step-BrvgHvKB.js";const Qt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Ut=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Ut as __namedExportsOrder,Qt as default};
