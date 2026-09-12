import{R as t}from"./iframe-BFM8x9PA.js";import{a as p}from"./isWellBehavedNumber-D4sYzu_F.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DUdLTdY3.js";import{R as T}from"./zIndexSlice-Dx9mYmyj.js";import{C as M}from"./CartesianGrid-BAwEJUXS.js";import{X as $}from"./XAxis-sqq-OrNO.js";import{Y as I}from"./YAxis-2TBACSCB.js";import{L as O}from"./Legend--gsA69NI.js";import{T as W}from"./Tooltip-D2g0io9c.js";import{L as C}from"./Line-_czTNmY9.js";import{C as X}from"./Curve-C8AnJvF8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bd_5xcSs.js";import"./RechartsWrapper-DYXkzF69.js";import"./axisSelectors-DiNaBi7F.js";import"./throttle-DqtHcGYb.js";import"./index-BWGXcjC4.js";import"./index-DVzpkoDY.js";import"./d3-scale-BV6eo-EO.js";import"./index-CngxH_6L.js";import"./index-BWjxNJoO.js";import"./renderedTicksSlice-CjeZk4XK.js";import"./index-CMQv9dM_.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CkSZZlig.js";import"./chartDataContext-BTZBL-Eg.js";import"./CategoricalChart-Bte4O3H1.js";import"./CartesianAxis-DRX8HKZ_.js";import"./Layer-Be0Rd-Q7.js";import"./Text-D2FZ9-P8.js";import"./DOMUtils-eLbycdkH.js";import"./useId-BKuqsutR.js";import"./useBackwardsCompatibleTheme-BTrqDtcc.js";import"./Label-Br3cCz6i.js";import"./ZIndexLayer-DP5puj9b.js";import"./types-CNyTn7M4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-8NkpZttM.js";import"./symbol-CU5XoSW9.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DtoiQLb6.js";import"./uniqBy-CMNVf6Sn.js";import"./iteratee-D0e9_Et7.js";import"./useAnimationId-B4FOQMwj.js";import"./Cross-Duoll-u4.js";import"./Rectangle-Cn3rNWTe.js";import"./util-Dxo8gN5i.js";import"./Sector-BTJusckX.js";import"./AnimatedItems-B1_R-VqI.js";import"./ActivePoints-BCJal-aM.js";import"./Dot-CpCQ4QvO.js";import"./RegisterGraphicalItemId-Cv5_OQqk.js";import"./ErrorBarContext-BazLNBpB.js";import"./GraphicalItemClipPath-jUcNwVzc.js";import"./SetGraphicalItem-CfBe4xfA.js";import"./getRadiusAndStrokeWidthFromDot-b4U3g1Ny.js";import"./ActiveShapeUtils-Ct3yDoqv.js";import"./useGraphicalItemIdentity-CRa1F1Pi.js";import"./step-BN1FmChO.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
