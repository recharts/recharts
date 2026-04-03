import{e as t}from"./iframe-C3UZ-t_V.js";import{R as D,i as s}from"./arrayEqualityCheck-DIL50JWa.js";import{L as v}from"./LineChartArgs-E1uHAgXQ.js";import{g as I}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CyVw2tte.js";import{C as T}from"./CartesianGrid-D2p0Ir6T.js";import{X as M}from"./XAxis-DMAObJwa.js";import{Y as $}from"./YAxis-B5LKtkqe.js";import{L as O}from"./Legend-BAX1K06t.js";import{T as W}from"./Tooltip-BtNIb_6F.js";import{L as C}from"./Line-gDEmZD-v.js";import{R as X}from"./RechartsHookInspector-BFtfPmXC.js";import{C as Y}from"./Curve-C7Xh0Uh3.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-aaXGpNRZ.js";import"./immer-Bf7Gcqi0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bsvy-j69.js";import"./index-ClWM-yv2.js";import"./hooks-DPl2sBv5.js";import"./axisSelectors-DmOEhaOy.js";import"./d3-scale-UHw6FirY.js";import"./zIndexSlice-Dx4k4ZlJ.js";import"./renderedTicksSlice-CLnyFrSg.js";import"./CartesianChart-BmK7YYly.js";import"./chartDataContext-BmElG8Xh.js";import"./CategoricalChart-DaGR7SKz.js";import"./CartesianAxis-CYGD0r1r.js";import"./Layer-CI6sC4Pl.js";import"./Text-DPTsyd0A.js";import"./DOMUtils-BUXVBs_y.js";import"./Label-BrcoQVek.js";import"./ZIndexLayer-D78RDR2e.js";import"./types-5hKD9RW5.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DCi2amY7.js";import"./symbol-DGgXQDAi.js";import"./step-mUeGDqfh.js";import"./useElementOffset-Ck5QmzIm.js";import"./uniqBy-Bm8Zesxj.js";import"./iteratee-tmynXvCY.js";import"./useAnimationId-DB48Qg13.js";import"./Cross-WoMoQ1i4.js";import"./Rectangle-DGuVg7wO.js";import"./Sector-BhwWS5u1.js";import"./ReactUtils-BnJyydkM.js";import"./ActivePoints-Donj28kx.js";import"./Dot-CQmFG6vz.js";import"./RegisterGraphicalItemId-CRHVW6BC.js";import"./ErrorBarContext-D1tpAEu1.js";import"./GraphicalItemClipPath-CM4WNw68.js";import"./SetGraphicalItem-aZjM1KWs.js";import"./getRadiusAndStrokeWidthFromDot-Cj9gBiC7.js";import"./ActiveShapeUtils-faJHcahZ.js";import"./isPlainObject-CwlSp2ia.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-VJ5gUEBt.js";import"./index-iiKok6sI.js";import"./ChartSizeDimensions-C9L6kdtQ.js";import"./OffsetShower-DbJZQebV.js";import"./PlotAreaShower-B5C3jvki.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...I(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Qt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Qt as __namedExportsOrder,Jt as default};
