import{e as t}from"./iframe-Cr_9Zxyz.js";import{R as D,i as s}from"./arrayEqualityCheck-C67VePae.js";import{L as v}from"./LineChartArgs-E1uHAgXQ.js";import{g as I}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-C3CbyYe6.js";import{C as T}from"./CartesianGrid-BGDg0quO.js";import{X as M}from"./XAxis-DoXEBn_P.js";import{Y as $}from"./YAxis-don10v8F.js";import{L as O}from"./Legend-C0TPdzjM.js";import{T as W}from"./Tooltip-YpxbE3PS.js";import{L as C}from"./Line-gQxLIXL4.js";import{R as X}from"./RechartsHookInspector-CkzoI9c0.js";import{C as Y}from"./Curve-BqHbKpq8.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-TCwXH7Ec.js";import"./immer-C4QSyCgb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CqKKWRfj.js";import"./index-WCTFjGJ3.js";import"./hooks-BpLTq7P8.js";import"./axisSelectors-B1y7r4Cr.js";import"./d3-scale-BBKGKrVC.js";import"./zIndexSlice-DN_TI4P2.js";import"./renderedTicksSlice-CLpIiVNo.js";import"./CartesianChart-CrypXdK_.js";import"./chartDataContext-B_zHpYbg.js";import"./CategoricalChart-Dwl_niiN.js";import"./CartesianAxis-D2bUE24b.js";import"./Layer-LRa_hkeo.js";import"./Text-B2FTpI2T.js";import"./DOMUtils-ZnDVm2Wt.js";import"./Label-C4NmpEg6.js";import"./ZIndexLayer-DdInyA8Z.js";import"./types-DtvHHfJA.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Q-kK09Rp.js";import"./symbol-Ch9ZDTsO.js";import"./step-BUGJ6v3P.js";import"./useElementOffset-BpxKPshg.js";import"./uniqBy-DKNQUoMm.js";import"./iteratee-DFCHVqZZ.js";import"./useAnimationId-CtG5S8C9.js";import"./Cross-B18P-68P.js";import"./Rectangle-CigjyTr6.js";import"./Sector-oF4rAsT4.js";import"./ReactUtils-B4MRvMvn.js";import"./ActivePoints-Bn9vOXXn.js";import"./Dot-B1MaLxXk.js";import"./RegisterGraphicalItemId-DimfmF2M.js";import"./ErrorBarContext-DhjdhMru.js";import"./GraphicalItemClipPath-CDQxSlO_.js";import"./SetGraphicalItem-CPb0K0Vx.js";import"./getRadiusAndStrokeWidthFromDot-DY-AYx3Z.js";import"./ActiveShapeUtils-DQ3B1xFd.js";import"./isPlainObject-DzUH2tSn.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-BlblqctV.js";import"./index-BCUg-3d0.js";import"./ChartSizeDimensions-BSIBvgzx.js";import"./OffsetShower-CxfJShSk.js";import"./PlotAreaShower-28Fi8dPq.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...I(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
