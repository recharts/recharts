import{e as t}from"./iframe-CIxNp6W3.js";import{R as D,i as s}from"./arrayEqualityCheck-ZcVH4_uJ.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-DA0DeYDH.js";import{C as K}from"./CartesianGrid-Bwn46UyA.js";import{X as T}from"./XAxis-DSbNXcpO.js";import{Y as M}from"./YAxis-Dt9ZpeSD.js";import{L as $}from"./Legend-ZvZsLZ5G.js";import{T as O}from"./Tooltip-BgRZ59dg.js";import{L as C}from"./Line-6m2pOD5-.js";import{R as W}from"./RechartsHookInspector-B8l4NQFC.js";import{C as X}from"./Curve-CcclPR5V.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cf5_CJke.js";import"./immer-CkfrG0rl.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CnQHtrMt.js";import"./index-Cib5zjST.js";import"./hooks-BNI7_4lT.js";import"./axisSelectors-BeBP2I3U.js";import"./d3-scale-BQ18Pqvj.js";import"./zIndexSlice-BEW6pf_v.js";import"./renderedTicksSlice-CbtbEbDH.js";import"./CartesianChart-CaQ1UeLW.js";import"./chartDataContext-DEZM9FrZ.js";import"./CategoricalChart-FVnBP1Tu.js";import"./CartesianAxis-vyecr7Hl.js";import"./Layer-Bp29xhoh.js";import"./Text-B-dRdN-u.js";import"./DOMUtils-SOpGz0EB.js";import"./Label-DM_zt9zM.js";import"./ZIndexLayer-DPYjXPVc.js";import"./types-D88TaevE.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CH9tQV3q.js";import"./symbol-R0iacGzj.js";import"./step-CuAsm7Fe.js";import"./useElementOffset-Dmh3D1tB.js";import"./uniqBy-DJM3sMwv.js";import"./iteratee-Boi3uKMm.js";import"./useAnimationId-BJAtAhRd.js";import"./Cross-C5XQf3gP.js";import"./Rectangle-BDKHqCIu.js";import"./Sector-NGTsm_Cr.js";import"./ReactUtils-CD81hbcy.js";import"./ActivePoints-JOR1SBd5.js";import"./Dot-DbPKwx4_.js";import"./RegisterGraphicalItemId-B3XRN-uf.js";import"./ErrorBarContext-Dko46g4M.js";import"./GraphicalItemClipPath-DxCJ5NSr.js";import"./SetGraphicalItem-CExaHKdU.js";import"./getRadiusAndStrokeWidthFromDot-DecXli92.js";import"./ActiveShapeUtils-DJ7hB8mH.js";import"./isPlainObject-B_udAERF.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-BynO58oQ.js";import"./index-CEgQsKlh.js";import"./ChartSizeDimensions-CNahkAGh.js";import"./OffsetShower-CBcMXDRG.js";import"./PlotAreaShower-BJdN30iA.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
