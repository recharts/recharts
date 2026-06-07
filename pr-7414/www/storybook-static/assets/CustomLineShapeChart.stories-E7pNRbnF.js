import{R as t}from"./iframe-ZPRKoU1G.js";import{a as p}from"./isWellBehavedNumber-C1VSg6lY.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-ByVixgLP.js";import{R as T}from"./zIndexSlice-BsSz6rnO.js";import{C as M}from"./CartesianGrid-D_0MrnMU.js";import{X as $}from"./XAxis-C6ITfnkV.js";import{Y as I}from"./YAxis-CL1cp1D0.js";import{L as O}from"./Legend-TCTvzd7q.js";import{T as W}from"./Tooltip-CcXCtMjc.js";import{L as C}from"./Line-B1M2NTAD.js";import{C as X}from"./Curve-ePYEilGq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CGa3_Ok6.js";import"./resolveDefaultProps-DXwWTI5c.js";import"./RechartsWrapper-BYyxQWjf.js";import"./index-D9shaHbl.js";import"./index-CyTcUuX3.js";import"./index-CDtIYzd-.js";import"./index-DWchyl7z.js";import"./immer-Dqh26iK6.js";import"./renderedTicksSlice-Bj0AstQ5.js";import"./axisSelectors-B6X9oFFj.js";import"./d3-scale-YZIwu0YS.js";import"./string-B6fdYHAA.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-9gHk08A4.js";import"./chartDataContext-C8DnaOK4.js";import"./CategoricalChart-C8cl1dv9.js";import"./CartesianAxis-BoMdju9k.js";import"./Layer-Cw8ar51S.js";import"./Text-Cx16epvV.js";import"./DOMUtils-CWTdPns0.js";import"./Label-BBlujwtM.js";import"./ZIndexLayer-C_hsauba.js";import"./types-BUDAoUUu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-VbHdftIF.js";import"./symbol-BcEJ41EE.js";import"./path-DyVhHtw_.js";import"./useElementOffset-p0zX6-6P.js";import"./uniqBy-BfU0_UHc.js";import"./iteratee-Coqn7yfn.js";import"./useAnimationId-CZUjtEje.js";import"./Cross-DCF7w7-e.js";import"./Rectangle-ToWWd5IB.js";import"./Sector-CUM60_Y6.js";import"./AnimatedItems-D4M5eO1p.js";import"./ActivePoints-BkkgePC3.js";import"./Dot-DfLTDUuc.js";import"./RegisterGraphicalItemId-NfBTs_Yc.js";import"./ErrorBarContext-C1hygpA9.js";import"./GraphicalItemClipPath-DcCaGC5D.js";import"./SetGraphicalItem-Dl4Vmegz.js";import"./getRadiusAndStrokeWidthFromDot-BJaZ3V1E.js";import"./ActiveShapeUtils-T50lNrG4.js";import"./step-BGVwbWHg.js";const Bt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
