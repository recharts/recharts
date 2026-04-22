import{e as t}from"./iframe-p2IvJPp5.js";import{R as D,i as s}from"./arrayEqualityCheck-MFpiNrgh.js";import{L as v}from"./LineChartArgs-E1uHAgXQ.js";import{g as I}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-C0NUkdrr.js";import{C as T}from"./CartesianGrid-BNtK6pD-.js";import{X as M}from"./XAxis-TolWHMJv.js";import{Y as $}from"./YAxis-3lSAnX_i.js";import{L as O}from"./Legend-p-Oqpf4n.js";import{T as W}from"./Tooltip-CstLMPkD.js";import{L as C}from"./Line-BhX3KrEI.js";import{R as X}from"./RechartsHookInspector-BTfDdL-Q.js";import{C as Y}from"./Curve-ymYrUrgJ.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D-WOYVwL.js";import"./immer-C-3OxAJ7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CC3JfRCb.js";import"./index-Bbr8AUP0.js";import"./hooks-BwAS4l5Q.js";import"./axisSelectors-BYVqkL8o.js";import"./d3-scale-_MVxtyqx.js";import"./zIndexSlice-DkiB7jtC.js";import"./renderedTicksSlice-BZEkjAjn.js";import"./CartesianChart-sJv9-h8P.js";import"./chartDataContext-RNMGpAdm.js";import"./CategoricalChart-CdP1Gioy.js";import"./CartesianAxis-C8slwFAS.js";import"./Layer-CAMhjis1.js";import"./Text-DybomHzv.js";import"./DOMUtils-JIJzz5BZ.js";import"./Label-dvxvBKxQ.js";import"./ZIndexLayer-DEFjE1si.js";import"./types-BUdqLlBz.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-st46PVLX.js";import"./symbol-D4aZHrvc.js";import"./step-BLz-mTOp.js";import"./useElementOffset-DDZhMm9e.js";import"./uniqBy-BDukc5-8.js";import"./iteratee-Chvr53L9.js";import"./useAnimationId-DfX16akC.js";import"./Cross-DSmLOanO.js";import"./Rectangle--WL1ouFK.js";import"./Sector-DpIUnASU.js";import"./ReactUtils-DS7t9UEd.js";import"./ActivePoints-BszxelsK.js";import"./Dot-B9yHy92F.js";import"./RegisterGraphicalItemId-BMsKHjZL.js";import"./ErrorBarContext-RDHgQQ1P.js";import"./GraphicalItemClipPath-Du63Zh2t.js";import"./SetGraphicalItem-BFQTuzAF.js";import"./getRadiusAndStrokeWidthFromDot-BV_w38gC.js";import"./ActiveShapeUtils-DiQy87fd.js";import"./isPlainObject-vfUJw-kg.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-CfMC4Ru_.js";import"./index-M5GHmuSt.js";import"./ChartSizeDimensions-DmpIaGou.js";import"./OffsetShower-BlCTa7sz.js";import"./PlotAreaShower-BfA3uM21.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...I(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
