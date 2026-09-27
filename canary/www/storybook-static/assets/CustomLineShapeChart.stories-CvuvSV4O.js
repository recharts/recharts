import{R as t}from"./iframe-y6pZoBOe.js";import{a as p}from"./isWellBehavedNumber-Cb3oTnMu.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-C7CRLJI0.js";import{R as T}from"./zIndexSlice-BAPHOf-A.js";import{C as M}from"./CartesianGrid-efNEWZH4.js";import{X as $}from"./XAxis-B75EARC_.js";import{Y as I}from"./YAxis-BDc8eAjx.js";import{L as O}from"./Legend-DSqX6ZaY.js";import{T as W}from"./Tooltip-ChXA4rjD.js";import{L as C}from"./Line-CGSclP_m.js";import{C as X}from"./Curve-fod9LGdb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DK41N9kV.js";import"./RechartsWrapper-Bd4_Y8lY.js";import"./axisSelectors-BmcHsTRr.js";import"./throttle-sUHqZCtQ.js";import"./index-DViwT0RC.js";import"./index-vL-3KTyV.js";import"./d3-scale-DRlyCOFP.js";import"./index-B6N9MB9B.js";import"./index-0bNzEg3t.js";import"./renderedTicksSlice-CTLbpy90.js";import"./index-CSbalAtk.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bvg5MZxQ.js";import"./chartDataContext-Dpe-QKhv.js";import"./CategoricalChart-aAiDUiAX.js";import"./CartesianAxis-CoHDQG06.js";import"./Layer-34ncCtUV.js";import"./Text-DdGQmpzq.js";import"./DOMUtils-Co8gRLU9.js";import"./useId-DiCeZzyc.js";import"./useBackwardsCompatibleTheme-DpzVFbqN.js";import"./Label-9NqXhRk3.js";import"./ZIndexLayer-C7BuriGU.js";import"./types-DtUXsqBa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BvJQgg8W.js";import"./symbol-Bpchgci6.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CqhuSHwW.js";import"./uniqBy-BLfo-8DX.js";import"./iteratee-DxrRJU94.js";import"./useAnimationId-9X7pomqp.js";import"./Cross-dbnoW1cd.js";import"./Rectangle-CfUU1stN.js";import"./util-Dxo8gN5i.js";import"./Sector-BO-ECtM7.js";import"./AnimatedItems-DIgNuRUa.js";import"./ActivePoints-CLmTgrQX.js";import"./Dot-ClwGjlu0.js";import"./RegisterGraphicalItemId-DljjsDCZ.js";import"./ErrorBarContext-TnpfkRXW.js";import"./GraphicalItemClipPath-6O7hO6A5.js";import"./SetGraphicalItem-BmPIFAsA.js";import"./getRadiusAndStrokeWidthFromDot-BsnIiv2v.js";import"./ActiveShapeUtils-CrA6HvN5.js";import"./useGraphicalItemIdentity-CXZPeRzX.js";import"./step-CafFQeb3.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
