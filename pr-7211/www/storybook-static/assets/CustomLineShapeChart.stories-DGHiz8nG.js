import{e as t}from"./iframe-DzQrtuqC.js";import{R as D,i as s}from"./arrayEqualityCheck-CcYQ3TlE.js";import{L as v}from"./LineChartArgs-E1uHAgXQ.js";import{g as I}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-B8cdQSZS.js";import{C as T}from"./CartesianGrid-nBlC1WLR.js";import{X as M}from"./XAxis-1ARD5tua.js";import{Y as $}from"./YAxis-22Z8oCxY.js";import{L as O}from"./Legend-Bs5q-XAk.js";import{T as W}from"./Tooltip-CzufazAx.js";import{L as C}from"./Line-Crc5gtVU.js";import{R as X}from"./RechartsHookInspector-CgIXv1De.js";import{C as Y}from"./Curve-DTTWJNZu.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-cBec3zUl.js";import"./immer-BG5eRMY4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-12D3Dnhb.js";import"./index-BWU1iYbm.js";import"./hooks-D1HOa-TD.js";import"./axisSelectors-C3BshaU1.js";import"./d3-scale-CxHdo-Jz.js";import"./zIndexSlice-B16G16Z8.js";import"./renderedTicksSlice-rqGxM86U.js";import"./CartesianChart-CLLa3Dnc.js";import"./chartDataContext-BI_W2HnQ.js";import"./CategoricalChart-BSh5BNmY.js";import"./CartesianAxis-kUZksY3_.js";import"./Layer-OTa1RIrC.js";import"./Text-Boh5u1VK.js";import"./DOMUtils-Bn_VANWj.js";import"./Label-1lnwpSMQ.js";import"./ZIndexLayer-DjjOHeZ_.js";import"./types-BgvOUMxI.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CrC1lk7K.js";import"./symbol-BXGJBtQL.js";import"./step-B5omXXrI.js";import"./useElementOffset-DuP6OLBs.js";import"./uniqBy-Bat9ka49.js";import"./iteratee-Cilelzxb.js";import"./useAnimationId-KT1IxfUT.js";import"./Cross-DQAy_m1j.js";import"./Rectangle-D6c5ofir.js";import"./Sector-lNcT2dw2.js";import"./ReactUtils-QGOY_45A.js";import"./ActivePoints-C5TcXqSX.js";import"./Dot-DPafLRI7.js";import"./RegisterGraphicalItemId-DtvVzUCB.js";import"./ErrorBarContext-BM7URJDC.js";import"./GraphicalItemClipPath-eGbWt4-y.js";import"./SetGraphicalItem-Bcmgk1GN.js";import"./getRadiusAndStrokeWidthFromDot-DbVHh2EC.js";import"./ActiveShapeUtils-B77F2Y7E.js";import"./isPlainObject-C8qmWClL.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-rdFilDCH.js";import"./index-DkvclcRw.js";import"./ChartSizeDimensions-BpnzS4UN.js";import"./OffsetShower-5gMBmZb0.js";import"./PlotAreaShower-BdP0xDxN.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...I(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
