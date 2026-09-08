import{R as t}from"./iframe-BKCxgEu7.js";import{a as p}from"./isWellBehavedNumber-4uIsFCV6.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-JZ_NKtMH.js";import{R as T}from"./zIndexSlice-DPN7gMs_.js";import{C as M}from"./CartesianGrid-C5_wax7r.js";import{X as $}from"./XAxis-DBpqCofo.js";import{Y as I}from"./YAxis-_Uh6yuoH.js";import{L as O}from"./Legend-U0wGo6Kf.js";import{T as W}from"./Tooltip-BFAWrx2Z.js";import{L as C}from"./Line-BTQ-dt1P.js";import{C as X}from"./Curve-DJnDjTkh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-hjqhlyP6.js";import"./RechartsWrapper-BUOX-u1t.js";import"./axisSelectors-D2VU5o1r.js";import"./throttle-SvLRig2f.js";import"./index-C0FXEVD9.js";import"./index-ByWdUQTm.js";import"./d3-scale-fKLPTI5B.js";import"./index-BQwfhQz_.js";import"./index-bhQBCTAA.js";import"./renderedTicksSlice-7MFbI2Ip.js";import"./index-BL0gWy2l.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dx01wauZ.js";import"./chartDataContext-D7QilCwv.js";import"./CategoricalChart-TFuOhU4H.js";import"./CartesianAxis-CuN00Lvq.js";import"./Layer-GDBs0RPs.js";import"./Text-DbzVeL34.js";import"./DOMUtils-B8pyYDTq.js";import"./useId-DtzVtqW0.js";import"./useBackwardsCompatibleTheme-D4Zi4gsK.js";import"./Label-D0bShNKS.js";import"./ZIndexLayer-Bi2QbHjK.js";import"./types--eHqqtV8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CdXXhC3x.js";import"./symbol-BczE_9ZM.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DpTYfk3M.js";import"./uniqBy-BerM9mz3.js";import"./iteratee-DALipbtq.js";import"./useAnimationId-Dludl8d_.js";import"./Cross-DAVrNPRG.js";import"./Rectangle-DaSdwAeX.js";import"./util-Dxo8gN5i.js";import"./Sector-Djy_oLhj.js";import"./AnimatedItems-BXOuP06z.js";import"./ActivePoints-CP4nca60.js";import"./Dot-DKhQ94yz.js";import"./RegisterGraphicalItemId-DzHzaEjw.js";import"./ErrorBarContext-8H81gPWM.js";import"./GraphicalItemClipPath-Qfm8sxPZ.js";import"./SetGraphicalItem-BTjD6Tnz.js";import"./getRadiusAndStrokeWidthFromDot-CQKvs0EM.js";import"./ActiveShapeUtils-EGktKins.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./step-Bha1rdtW.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
