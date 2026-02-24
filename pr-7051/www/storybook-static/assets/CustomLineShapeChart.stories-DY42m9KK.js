import{e as t}from"./iframe-DTgyoVvk.js";import{R as D,i as s}from"./arrayEqualityCheck-EHbEP26L.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-DgRpSIRN.js";import{C as K}from"./CartesianGrid-BOtFk4fE.js";import{X as T}from"./XAxis-BkL5cMjG.js";import{Y as M}from"./YAxis-CeCrGO4m.js";import{L as $}from"./Legend-CH5sFI1F.js";import{T as O}from"./Tooltip-BCMvRAtG.js";import{L as C}from"./Line-BiUeNFy3.js";import{R as W}from"./RechartsHookInspector-CEM_bNOG.js";import{C as X}from"./Curve-DHT2OdXm.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D6qERWpv.js";import"./immer-Cali6Ur_.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Chfcl0hS.js";import"./index-BZ07V7b0.js";import"./hooks-C2ewgjKA.js";import"./axisSelectors-etAOI9l8.js";import"./d3-scale-OH59Lrba.js";import"./zIndexSlice-C5hUHulT.js";import"./renderedTicksSlice-lIBtZyXl.js";import"./CartesianChart-3k35313H.js";import"./chartDataContext-DEXCwpe8.js";import"./CategoricalChart-tWQ6qvk8.js";import"./CartesianAxis-BkWnH6i3.js";import"./Layer-CN_vGRpI.js";import"./Text-DzAJvHlo.js";import"./DOMUtils-BzN38qwO.js";import"./Label-Ceoi0MO2.js";import"./ZIndexLayer-BR0xXhbH.js";import"./types-CFHwNx79.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DIOiPUYO.js";import"./symbol-DLAst82x.js";import"./step-C7wlxZdo.js";import"./useElementOffset-D954DiA4.js";import"./uniqBy-BLib71RJ.js";import"./iteratee-DowDcm4g.js";import"./useAnimationId-fmEgFYYy.js";import"./Cross-CaCIF03z.js";import"./Rectangle-pA7LeOq9.js";import"./Sector-lyZE52ex.js";import"./ReactUtils-BYwaZR_U.js";import"./ActivePoints-kvFI_pNp.js";import"./Dot-DzhxTZg1.js";import"./RegisterGraphicalItemId-B8FdEXiZ.js";import"./ErrorBarContext-DyEpq3qQ.js";import"./GraphicalItemClipPath-fMgbbWOb.js";import"./SetGraphicalItem-DlupFmAY.js";import"./getRadiusAndStrokeWidthFromDot-DnU7-Gnj.js";import"./ActiveShapeUtils-D1UYsbu-.js";import"./isPlainObject-cO95R4gJ.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-C0NYHdgo.js";import"./index-BSHSP00B.js";import"./ChartSizeDimensions-DEWYFyG1.js";import"./OffsetShower-DkHEZ74E.js";import"./PlotAreaShower-VzN6bTnW.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
