import{R as t}from"./iframe-BB3m-jQ-.js";import{a as p}from"./isWellBehavedNumber-CFV6UIHi.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-WRZI52TR.js";import{R as T}from"./zIndexSlice-FQKZcMr3.js";import{C as M}from"./CartesianGrid-D-mGIltq.js";import{X as $}from"./XAxis-pxNAoOYF.js";import{Y as I}from"./YAxis-DFvGwgRl.js";import{L as O}from"./Legend-CNZk2NxG.js";import{T as W}from"./Tooltip-MUgVRJs6.js";import{L as C}from"./Line-BbNuxZg2.js";import{C as X}from"./Curve-DSs4mNcf.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Bu83WliH.js";import"./resolveDefaultProps-D0AMNGzs.js";import"./RechartsWrapper-BeVmqhAg.js";import"./index-AMNPHvWI.js";import"./index-CDnCFTh2.js";import"./index-iRCZcjtj.js";import"./index-B5zT9Os4.js";import"./immer-Bb2hNnOx.js";import"./renderedTicksSlice-eHBrq3FU.js";import"./axisSelectors-D1VEbPH5.js";import"./d3-scale-m2Sr9nLg.js";import"./string-B6fdYHAA.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CVsCYNZX.js";import"./chartDataContext-DDcaXf9b.js";import"./CategoricalChart-5b78-xMl.js";import"./CartesianAxis-DNzSt2Ud.js";import"./Layer-Bqk0isqQ.js";import"./Text-CQr6lPUD.js";import"./DOMUtils-v0Nl75wH.js";import"./Label-DntCvjB2.js";import"./ZIndexLayer-BGBP_zx3.js";import"./types-DSXkzfdz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DrzCmBWa.js";import"./symbol-BOqiXccp.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CexjbpfR.js";import"./uniqBy-CGQlZ1n7.js";import"./iteratee-B1717eE-.js";import"./useAnimationId-D5BtmEUA.js";import"./Cross-N7Is12JC.js";import"./Rectangle-BZncl5wy.js";import"./Sector-YzzTDgsn.js";import"./AnimatedItems-CAeOjIy6.js";import"./ActivePoints-C8hQhNqS.js";import"./Dot-D2XHIErC.js";import"./RegisterGraphicalItemId-Co_tAnFn.js";import"./ErrorBarContext-BC4Vqnor.js";import"./GraphicalItemClipPath-Bd5aR1hb.js";import"./SetGraphicalItem-QprqGCl_.js";import"./getRadiusAndStrokeWidthFromDot-V3DuSoMt.js";import"./ActiveShapeUtils-DMvn0j27.js";import"./step-BVafN2Sf.js";const Bt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Nt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Nt as __namedExportsOrder,Bt as default};
