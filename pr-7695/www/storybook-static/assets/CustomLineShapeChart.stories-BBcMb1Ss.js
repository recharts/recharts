import{R as t}from"./iframe-DqR9Wcc8.js";import{a as s}from"./isWellBehavedNumber-CwOhzfGR.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-BUbtnRjr.js";import{R as T}from"./zIndexSlice-xGZRRsol.js";import{C as M}from"./CartesianGrid-DnLHzwag.js";import{X as $}from"./XAxis-D6ZHtCxW.js";import{Y as I}from"./YAxis-aADwIUIe.js";import{L as O}from"./Legend-BoNDQHF7.js";import{T as W}from"./Tooltip-erEqSpoz.js";import{L as C}from"./Line-B9-enMa0.js";import{C as X}from"./Curve-BJ-wJMc8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CE9KWHQ7.js";import"./RechartsWrapper-1r2IRn89.js";import"./index-BM32474r.js";import"./index-Dri9MlSm.js";import"./index-CbJoLlYH.js";import"./index-D7HcE4ER.js";import"./throttle-Die-14D_.js";import"./axisSelectors-C4f15nEZ.js";import"./d3-scale-CAWaFyWJ.js";import"./renderedTicksSlice-D_2jrhVU.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-sKen-XIs.js";import"./chartDataContext-CtOkxvrA.js";import"./CategoricalChart-IMV6Cr9c.js";import"./CartesianAxis-1hhq5YML.js";import"./Layer-DIEU6Rsu.js";import"./Text-CCjVuIgd.js";import"./DOMUtils-gqBnduPC.js";import"./useId-DKdBWodA.js";import"./useBackwardsCompatibleTheme-CwCCGp3S.js";import"./Label-BYPDwyti.js";import"./ZIndexLayer-CGt7Qqz1.js";import"./types-CwWmwHzD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BzCZOBO3.js";import"./symbol-Bi-bNY82.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B9s5QY5V.js";import"./uniqBy-BMuxe0j6.js";import"./iteratee-DmaCZN6x.js";import"./useAnimationId-BRWCn8G_.js";import"./Cross-BMahMfpW.js";import"./Rectangle-rLnjQriQ.js";import"./util-Dxo8gN5i.js";import"./Sector-BST40rBb.js";import"./AnimatedItems-BnD_-gzN.js";import"./ActivePoints-BTHz1vc8.js";import"./Dot-D1oj5oJp.js";import"./RegisterGraphicalItemId-DE2Efd51.js";import"./ErrorBarContext-mgM-6MAT.js";import"./GraphicalItemClipPath-DlZT7n4i.js";import"./SetGraphicalItem-Y-0P1f8y.js";import"./getRadiusAndStrokeWidthFromDot-CbfPJyLi.js";import"./ActiveShapeUtils-RlM9Arec.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./step-BtguIK0L.js";const Ht={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let b=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Jt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Jt as __namedExportsOrder,Ht as default};
