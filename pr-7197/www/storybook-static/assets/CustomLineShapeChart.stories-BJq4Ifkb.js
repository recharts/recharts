import{e as t}from"./iframe-CpushxGE.js";import{R as D,i as s}from"./arrayEqualityCheck-VmHOknUh.js";import{L as v}from"./LineChartArgs-E1uHAgXQ.js";import{g as I}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-Kdwl-iY5.js";import{C as T}from"./CartesianGrid-BQfUsrZx.js";import{X as M}from"./XAxis-3mUHVa_Q.js";import{Y as $}from"./YAxis-isuSziaR.js";import{L as O}from"./Legend-1qEFocX2.js";import{T as W}from"./Tooltip-BgOQGlV-.js";import{L as C}from"./Line-bs4retuD.js";import{R as X}from"./RechartsHookInspector-h4ARZYih.js";import{C as Y}from"./Curve-CXWLomdX.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B56n8ket.js";import"./immer-Cv3ASI8f.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DvBLK8o3.js";import"./index-CwlbuTCS.js";import"./hooks-CALuMaxS.js";import"./axisSelectors-BUlu_9c5.js";import"./d3-scale-CLRxj8Kp.js";import"./zIndexSlice-BHiqQbmT.js";import"./renderedTicksSlice-x6hn4tz0.js";import"./CartesianChart-B5J4yM2Q.js";import"./chartDataContext-BCzU7NnM.js";import"./CategoricalChart-CsJClX-e.js";import"./CartesianAxis-C6WYLYP9.js";import"./Layer-CGETD00I.js";import"./Text-y4JjiomS.js";import"./DOMUtils-CJKLrICw.js";import"./Label-Cxa0XqXu.js";import"./ZIndexLayer-B2YDg5m4.js";import"./types-CPRA2Aat.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Dka0CVy4.js";import"./symbol-B3B4BbBB.js";import"./step-C3JKHl5Q.js";import"./useElementOffset-Ccd-OoSx.js";import"./uniqBy-bRpf7OJ5.js";import"./iteratee-BUEQrhsa.js";import"./useAnimationId-CaEP2jnF.js";import"./Cross-BThC6qqJ.js";import"./Rectangle-CagKfqqY.js";import"./Sector-V5LdKq7s.js";import"./ReactUtils-DYxQvQT8.js";import"./ActivePoints-CwpA1DJv.js";import"./Dot-BwRmgNs_.js";import"./RegisterGraphicalItemId-CT6Zr_oQ.js";import"./ErrorBarContext-CLrRGRfs.js";import"./GraphicalItemClipPath-BjHOIpZc.js";import"./SetGraphicalItem-BLLA-ZWB.js";import"./getRadiusAndStrokeWidthFromDot-C3UHG55r.js";import"./ActiveShapeUtils-DlpM3N5z.js";import"./isPlainObject-DBfMrsvU.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-Cc12cYdx.js";import"./index-B4LfVqDu.js";import"./ChartSizeDimensions-sbCQr6f5.js";import"./OffsetShower-BnOXM9oT.js";import"./PlotAreaShower-wypqhv64.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...I(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
