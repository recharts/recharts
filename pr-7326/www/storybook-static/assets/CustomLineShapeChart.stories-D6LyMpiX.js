import{e as t}from"./iframe-BH41_KsK.js";import{R as D,i as s}from"./arrayEqualityCheck-CGbsBh9H.js";import{L as v}from"./LineChartArgs-_mND0tRp.js";import{g as I}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-BdnxEPzC.js";import{C as T}from"./CartesianGrid-BP9uzeVR.js";import{X as M}from"./XAxis-CohOmQtN.js";import{Y as $}from"./YAxis-qj5w2hU5.js";import{L as O}from"./Legend-DmBcfzVs.js";import{T as W}from"./Tooltip-CEdHYHgy.js";import{L as C}from"./Line-C-svjPgG.js";import{R as X}from"./RechartsHookInspector-DcrWhI6K.js";import{C as Y}from"./Curve-CO9gbDjZ.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C5jg0EzG.js";import"./immer-ZwRip_iH.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B5rnF5yF.js";import"./index-Bz_RkPth.js";import"./hooks-DSeH88Zv.js";import"./axisSelectors-C71PNMoj.js";import"./d3-scale-DNp6AOXD.js";import"./zIndexSlice-Dbf9wnDO.js";import"./renderedTicksSlice-3bqcLC8e.js";import"./CartesianChart-DMgQ1LDd.js";import"./chartDataContext-DMreHK63.js";import"./CategoricalChart-Cd1ApljN.js";import"./CartesianAxis-DLqmQhKV.js";import"./Layer-C2G5KafR.js";import"./Text-DDTyrmBt.js";import"./DOMUtils-BSZC47d4.js";import"./Label-CXdyAx7z.js";import"./ZIndexLayer-CP6TEiwa.js";import"./types-BL4s3hIy.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DfJpNQwy.js";import"./symbol-aaNUhI62.js";import"./step-DW6seU4F.js";import"./useElementOffset-Cuf0LXOB.js";import"./uniqBy-6xFv1rvL.js";import"./iteratee-Y_N2yMWH.js";import"./useAnimationId-BwPLyDxM.js";import"./Cross-BOW0T4uq.js";import"./Rectangle-B9TxAhtg.js";import"./Sector-CWlkVSPf.js";import"./ReactUtils-DkBJREDm.js";import"./ActivePoints-C4m1trAF.js";import"./Dot-_SaUOdRl.js";import"./RegisterGraphicalItemId-r9QXM6NT.js";import"./ErrorBarContext-zSTRxri5.js";import"./GraphicalItemClipPath-Bh82AnDN.js";import"./SetGraphicalItem-DdDIdBuP.js";import"./getRadiusAndStrokeWidthFromDot-av-B5cKk.js";import"./ActiveShapeUtils-mHpAd-Np.js";import"./isPlainObject-BU-7yv7P.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-uwg0MM0K.js";import"./index-Dm7aDTFq.js";import"./ChartSizeDimensions-DM4vIE32.js";import"./OffsetShower-U9U3cZHq.js";import"./PlotAreaShower-D2pJ4Br5.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...I(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
