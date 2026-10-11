import{R as t}from"./iframe-Z4zOoLz7.js";import{a as p}from"./isWellBehavedNumber-Ds32fXh1.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-BxYqEgdH.js";import{R as T}from"./zIndexSlice-07-9uDTC.js";import{C as M}from"./CartesianGrid-CoLshd-b.js";import{X as $}from"./XAxis-vC51wnfX.js";import{Y as I}from"./YAxis-DcaBIqq9.js";import{L as O}from"./Legend-BLQGVug1.js";import{T as W}from"./Tooltip-BQCBXkHh.js";import{L as C}from"./Line-D2Sd7QBy.js";import{C as X}from"./Curve-B2kFPXHR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DOQLwwUl.js";import"./RechartsWrapper-B6jGY5P2.js";import"./axisSelectors-D5RAwviA.js";import"./throttle-9WzIUwC-.js";import"./index-DyaBjL-T.js";import"./index-xqTHFQSV.js";import"./d3-scale-By1WrWdl.js";import"./index-DNpJ-y1s.js";import"./index-DU7fosbq.js";import"./renderedTicksSlice-XpkPmQP6.js";import"./index-YATDX38S.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-r7CDK1kg.js";import"./chartDataContext-B0vVK4FP.js";import"./CategoricalChart-D5-WelqS.js";import"./CartesianAxis-D0qgtLuE.js";import"./Layer-DROZCM5S.js";import"./Text-D1NXAhAr.js";import"./pageBackground-cgE2GIfC.js";import"./useId-d3zx3clY.js";import"./useBackwardsCompatibleTheme-DoS7t3mQ.js";import"./Label-CznRo0qq.js";import"./ZIndexLayer-CzgpVDV6.js";import"./types-BIzeqQN_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols--vCw1LR_.js";import"./symbol-bhdOsLww.js";import"./path-DyVhHtw_.js";import"./useElementOffset-S6uYAEYX.js";import"./uniqBy-D7Oablgk.js";import"./iteratee-BmQxJUF4.js";import"./useAnimationId-CclGmA5U.js";import"./Cross-Cs-2djo7.js";import"./Rectangle-BRzNxGc4.js";import"./util-Dxo8gN5i.js";import"./Sector-CO7Pa82d.js";import"./activeStyles-Clj_q_02.js";import"./dataEntryStyles-jPYjF1-F.js";import"./ActivePoints-Cf8I1OR_.js";import"./Dot-BYY6Lyl-.js";import"./ErrorBarContext-DyrSqIsA.js";import"./GraphicalItemClipPath-Dh8t0UHl.js";import"./SetGraphicalItem-D_Y4scs-.js";import"./getRadiusAndStrokeWidthFromDot-oWL_gOl_.js";import"./ActiveShapeUtils-DptdzhMF.js";import"./useGraphicalItemIdentity-Bz_dea2_.js";import"./step-Bz8uLEg2.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
