import{R as t}from"./iframe-D_khPHZ1.js";import{a as p}from"./isWellBehavedNumber-DGsU9FBh.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-viFhErxX.js";import{R as T}from"./zIndexSlice-KFlckT-7.js";import{C as M}from"./CartesianGrid-DtW2jkRV.js";import{X as $}from"./XAxis-CG7KNKev.js";import{Y as I}from"./YAxis-CYrms82_.js";import{L as O}from"./Legend-CSNjMX4v.js";import{T as W}from"./Tooltip-B6p5KddX.js";import{L as C}from"./Line-CHEB0oTV.js";import{C as X}from"./Curve-D4vzOHVD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BBG9DHK8.js";import"./RechartsWrapper-Do2gsgG0.js";import"./axisSelectors-CBjKjY28.js";import"./throttle-BBn7lrSC.js";import"./index-CB03tEHO.js";import"./index-BuxDgG-t.js";import"./d3-scale-BLOap0UK.js";import"./index-syOpg8yK.js";import"./index-BI2dlpsL.js";import"./renderedTicksSlice-Jho7gpOC.js";import"./index-CHrlhwwU.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Ci9HbE6G.js";import"./chartDataContext-DTR5p3jS.js";import"./CategoricalChart-Bfua2ObC.js";import"./CartesianAxis-DtPap_2c.js";import"./Layer-D1docXzT.js";import"./Text-CRLTQjiS.js";import"./pageBackground-Cdf9H4fo.js";import"./useId-DisFqhsr.js";import"./useBackwardsCompatibleTheme-BLiMjfFD.js";import"./Label-DNajAghq.js";import"./ZIndexLayer-BGvEmvHh.js";import"./dataEntryStyles-2My5Q2VA.js";import"./types-DL7z7syQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BCYNi6oJ.js";import"./symbol-CdZ0n7Lr.js";import"./path-DyVhHtw_.js";import"./useElementOffset-9IHiAY7G.js";import"./uniqBy-DXUw7-JM.js";import"./iteratee-C2BbWe9-.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-BOA4oZA_.js";import"./Cross-BSu4ikXf.js";import"./Rectangle-BifmVm-G.js";import"./util-Dxo8gN5i.js";import"./Sector-B4BO-2Ae.js";import"./activeStyles-DVSsJDko.js";import"./ActivePoints-B4rNmWdt.js";import"./Dot-DSp-kazZ.js";import"./RegisterGraphicalItemId-CFGUNGbT.js";import"./ErrorBarContext-DWMtIAoI.js";import"./SetGraphicalItem-CGqBV4nA.js";import"./getRadiusAndStrokeWidthFromDot-ycj1XfTC.js";import"./ActiveShapeUtils-C8SJzoVE.js";import"./useEffectiveDataKey-B2F1WAcU.js";import"./step-BnRh-hkR.js";const Qt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Ut=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
