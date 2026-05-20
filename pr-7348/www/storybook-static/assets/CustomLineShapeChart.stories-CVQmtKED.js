import{e as t}from"./iframe-Cpa_K2wH.js";import{g as D,J as s}from"./arrayEqualityCheck-B3CGbERi.js";import{L as v}from"./LineChartArgs-_mND0tRp.js";import{g as I}from"./utils-ePvtT4un.js";import{p as K}from"./Page-DPte-9pC.js";import{L as A}from"./LineChart-DtZjfpbN.js";import{C as T}from"./CartesianGrid-BlvjnmIK.js";import{X as M}from"./XAxis-BzN0sbb6.js";import{Y as $}from"./YAxis-D01H3xLK.js";import{L as O}from"./Legend-BfSU8Aqx.js";import{T as W}from"./Tooltip-BhCnUH6y.js";import{L as C}from"./Line-Dn6n2q0g.js";import{R as X}from"./RechartsHookInspector-Bqt-aS6w.js";import{C as Y}from"./Curve-rXHg5I_o.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CjUJiL9-.js";import"./immer-DMfm46iJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D0afUUed.js";import"./index-d0_kz5ki.js";import"./hooks-B0YV-Gb0.js";import"./axisSelectors-Cmllf_me.js";import"./d3-scale-Bfg_RKT9.js";import"./zIndexSlice-BHc5vdfp.js";import"./renderedTicksSlice-kARXbS5M.js";import"./CartesianChart-Oxo-XTmW.js";import"./chartDataContext-DWc0FZ1G.js";import"./CategoricalChart-U85gevCj.js";import"./CartesianAxis-BYutAp1h.js";import"./Layer-C28Vj2nU.js";import"./Text-DwR88wHZ.js";import"./DOMUtils-BkGoz7XV.js";import"./Label-9gVLBIOF.js";import"./ZIndexLayer-CVL2PXNl.js";import"./types-BYysGBoP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Bzs7g2p8.js";import"./symbol-DqufiAtJ.js";import"./step-csQH98gw.js";import"./useElementOffset-CxLjeYJj.js";import"./uniqBy-BwhAZYz-.js";import"./iteratee-DoCUAkfC.js";import"./useAnimationId-BXAU-yXd.js";import"./Cross-DR-MDVhZ.js";import"./Rectangle-_TjkgDNn.js";import"./Sector-CErlt9yR.js";import"./ReactUtils-BowWIwT6.js";import"./ActivePoints-gBLXy0JF.js";import"./Dot-BhWE0LKt.js";import"./RegisterGraphicalItemId-s90PoDx_.js";import"./ErrorBarContext-BJDGu-MY.js";import"./GraphicalItemClipPath-CP_rA2Hw.js";import"./SetGraphicalItem-BFrPL6Zw.js";import"./getRadiusAndStrokeWidthFromDot-DEe3jrRF.js";import"./ActiveShapeUtils-DZgn0W6W.js";import"./isPlainObject-Cv9egWS8.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-MfEacaGn.js";import"./index-fBY_53TJ.js";import"./ChartSizeDimensions-_3CJ7Z39.js";import"./OffsetShower-BpeLegDD.js";import"./PlotAreaShower-LKM4gBGb.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let a=1,S=p.length;a<S;++a){let b=0;const r=p[a-1],i=p[a];if(s(r.x)&&s(r.y)&&s(i.x)&&s(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...I(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Qt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Qt as __namedExportsOrder,zt as default};
