import{R as t}from"./iframe-IEvG1YpM.js";import{a as p}from"./isWellBehavedNumber-tc8VJoOF.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CbO-jNop.js";import{R as T}from"./zIndexSlice-Cihis5J4.js";import{C as M}from"./CartesianGrid-CjJbgPpH.js";import{X as $}from"./XAxis-DtybEOgK.js";import{Y as I}from"./YAxis-Ci6Vvz28.js";import{L as O}from"./Legend-DdM0jFep.js";import{T as W}from"./Tooltip-CuSaJkwq.js";import{L as C}from"./Line-CUy9vJUP.js";import{C as X}from"./Curve--AmmIjVJ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-bAVDGQbe.js";import"./RechartsWrapper-CcfL5xRi.js";import"./axisSelectors-Df8E9bUD.js";import"./throttle-By8-YJwd.js";import"./index-POEf-RyB.js";import"./index-CK_MpSkX.js";import"./d3-scale-TRidtPn4.js";import"./index-BBOVdE4u.js";import"./index-DwR3lO_P.js";import"./renderedTicksSlice-CllAnVPd.js";import"./index-DdsMrJb_.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DCzoDDQF.js";import"./chartDataContext-xd-wjTQ9.js";import"./CategoricalChart-DdwxNdAm.js";import"./CartesianAxis-CPXu2kHS.js";import"./Layer-BKPgTeR2.js";import"./Text-Dae-pI4X.js";import"./DOMUtils-DCB2CSvd.js";import"./useId-CcNvwQMQ.js";import"./useBackwardsCompatibleTheme-BUS5d1Jo.js";import"./Label-CuRdPt5D.js";import"./ZIndexLayer-DyfcVau_.js";import"./types-CuB5x_0O.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Cj-zSnNx.js";import"./symbol-LU74KwaU.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D5R4rosy.js";import"./uniqBy-CGJXAfXB.js";import"./iteratee-ilBKujfJ.js";import"./useAnimationId-qJZeznSq.js";import"./Cross-D5MxY4H5.js";import"./Rectangle-BjOMJxA-.js";import"./util-Dxo8gN5i.js";import"./Sector-BZhYQRRH.js";import"./AnimatedItems-UW_5IIXp.js";import"./ActivePoints-C4j-E_4c.js";import"./Dot-Dp0Tai_6.js";import"./RegisterGraphicalItemId-CAU5eRLw.js";import"./ErrorBarContext-BWjTRxXS.js";import"./GraphicalItemClipPath-BuVEsdiO.js";import"./SetGraphicalItem-Du-9XCGr.js";import"./getRadiusAndStrokeWidthFromDot-DStXY72J.js";import"./ActiveShapeUtils-BSvyuOAY.js";import"./useGraphicalItemIdentity-BKM5eyt0.js";import"./step-DtrjPrha.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
