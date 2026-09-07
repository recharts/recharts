import{R as t}from"./iframe-vkuvwsVK.js";import{a as p}from"./isWellBehavedNumber-CEhn0nxL.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CaVgNq9o.js";import{R as T}from"./zIndexSlice-Dv-4_3RD.js";import{C as M}from"./CartesianGrid-fmAjXW7p.js";import{X as $}from"./XAxis-CpNjxui_.js";import{Y as I}from"./YAxis-BRsD9NZr.js";import{L as O}from"./Legend-CCBI4fn3.js";import{T as W}from"./Tooltip-M8YEfCnF.js";import{L as C}from"./Line-CP5o0VFe.js";import{C as X}from"./Curve-Dio-qnL1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B-kKD-dq.js";import"./RechartsWrapper-BGV5QqYH.js";import"./axisSelectors-BTwgcDWt.js";import"./throttle-BLHvZaft.js";import"./index-D41S2RZq.js";import"./index-Chk0yUZO.js";import"./d3-scale-5XjKmDSJ.js";import"./index-_iLGw6z5.js";import"./index-CowJ9bbH.js";import"./renderedTicksSlice-CkUsoCJX.js";import"./index-BegFXIYu.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C28eI56R.js";import"./chartDataContext-D8moszCG.js";import"./CategoricalChart-C__CUkoq.js";import"./CartesianAxis-DxB0GpiS.js";import"./Layer-Bi6vQt34.js";import"./Text-Bzv8HE1I.js";import"./DOMUtils-Bw-pfRF7.js";import"./useId-CkK6agKe.js";import"./useBackwardsCompatibleTheme-DDVT5RRa.js";import"./Label-MPhkREO_.js";import"./ZIndexLayer-Ds3zCArg.js";import"./types-BvD7j9i8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-C_xc1Cec.js";import"./symbol-BZ9PCIAn.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C3uG_kWl.js";import"./uniqBy-Dq3TlbF7.js";import"./iteratee-Da6DrtKw.js";import"./useAnimationId-DDynUN7k.js";import"./Cross-BPIIlaLH.js";import"./Rectangle-9gytVjHV.js";import"./util-Dxo8gN5i.js";import"./Sector-DMXrhCec.js";import"./AnimatedItems-DBPnILuv.js";import"./ActivePoints-BpGdn-ZL.js";import"./Dot-DDw4Jjdd.js";import"./RegisterGraphicalItemId-BNZMo2JA.js";import"./ErrorBarContext-BiVVJplW.js";import"./GraphicalItemClipPath-B9JB0AOy.js";import"./SetGraphicalItem-CZfOWNG9.js";import"./getRadiusAndStrokeWidthFromDot-CXXRrtxr.js";import"./ActiveShapeUtils-BdYG65ei.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./step-BXgLPagR.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
