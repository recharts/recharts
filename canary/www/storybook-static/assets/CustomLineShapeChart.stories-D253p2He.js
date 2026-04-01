import{e as t}from"./iframe-BEaYZ8Ke.js";import{R as D,i as s}from"./arrayEqualityCheck-BO9iL3J2.js";import{L as v}from"./LineChartArgs-E1uHAgXQ.js";import{g as I}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-BKECRmdg.js";import{C as T}from"./CartesianGrid-BgVx0tSK.js";import{X as M}from"./XAxis-B2ZFMdFE.js";import{Y as $}from"./YAxis-D75udpV7.js";import{L as O}from"./Legend-D3Gn7qKA.js";import{T as W}from"./Tooltip-D6xLsXsd.js";import{L as C}from"./Line-DgcXsGuE.js";import{R as X}from"./RechartsHookInspector-D2tl7RgO.js";import{C as Y}from"./Curve-atLapjtD.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-w4GCi4u5.js";import"./immer-ByOrN6rV.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BxjX8qFn.js";import"./index-BUXBVCXz.js";import"./hooks-BJ-fa7mf.js";import"./axisSelectors-DCKCETlC.js";import"./d3-scale-BqTC062g.js";import"./zIndexSlice-DSliDKHU.js";import"./renderedTicksSlice-2DyJU65H.js";import"./CartesianChart-Da_Lqy5J.js";import"./chartDataContext-416DyL2h.js";import"./CategoricalChart-CsR3P7Yd.js";import"./CartesianAxis-CxvGMdSy.js";import"./Layer-BLQnqq8X.js";import"./Text-DmuVr28j.js";import"./DOMUtils-w1bHB0TX.js";import"./Label-CF7kInX4.js";import"./ZIndexLayer-D6bVHPc-.js";import"./types-N9mcSd1s.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BPjsU5gQ.js";import"./symbol-CNAvV-XC.js";import"./step-C3Uiieba.js";import"./useElementOffset-C1b_2gcF.js";import"./uniqBy-2GsMXbhA.js";import"./iteratee-Ctj7yK_B.js";import"./useAnimationId-Ngy9FXMV.js";import"./Cross-CwWgzCa3.js";import"./Rectangle-B25XPYc9.js";import"./Sector-CEm4BkOd.js";import"./ReactUtils-DilCfUhS.js";import"./ActivePoints-D_4hsixX.js";import"./Dot-CcBnwLaV.js";import"./RegisterGraphicalItemId-BaBHxSFh.js";import"./ErrorBarContext-BjGO5YSj.js";import"./GraphicalItemClipPath-CM553tH1.js";import"./SetGraphicalItem-CxB6zzLj.js";import"./getRadiusAndStrokeWidthFromDot-Ditulol4.js";import"./ActiveShapeUtils-MXRMbrW9.js";import"./isPlainObject-DJ4nWZqf.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-q196FHE8.js";import"./index-D7lPj8lh.js";import"./ChartSizeDimensions-57Mz-9Pr.js";import"./OffsetShower-D0pz8TZy.js";import"./PlotAreaShower-uQsOnF-d.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...I(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
