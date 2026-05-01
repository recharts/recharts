import{e as t}from"./iframe-CG0qDtBl.js";import{R as D,i as s}from"./arrayEqualityCheck-nJzMu5L8.js";import{L as v}from"./LineChartArgs-E1uHAgXQ.js";import{g as I}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-C08lsZ5f.js";import{C as T}from"./CartesianGrid-D5faMACC.js";import{X as M}from"./XAxis-DN51EeVs.js";import{Y as $}from"./YAxis-BFtNCWGe.js";import{L as O}from"./Legend-BL2IEIGb.js";import{T as W}from"./Tooltip-B6jdnQ2I.js";import{L as C}from"./Line-DFOB5IU8.js";import{R as X}from"./RechartsHookInspector-BhrhKqGk.js";import{C as Y}from"./Curve--tzE_BoT.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-68SeDKrz.js";import"./immer-BaG7xZes.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B645yxTo.js";import"./index-LX72MUsT.js";import"./hooks-DK5-oMyB.js";import"./axisSelectors-Cs152sBG.js";import"./d3-scale-BKHwRxJ5.js";import"./zIndexSlice-DlNAFrb6.js";import"./renderedTicksSlice-BjAt54f-.js";import"./CartesianChart-BOM1G1ij.js";import"./chartDataContext-BK7b2xjO.js";import"./CategoricalChart-gdykgj2P.js";import"./CartesianAxis-CFrXRlKT.js";import"./Layer-C6aCRlIK.js";import"./Text-D5ILnTXV.js";import"./DOMUtils-2oBG8NIz.js";import"./Label-xzQt__ei.js";import"./ZIndexLayer-_OpZUWnc.js";import"./types--uSAtEO5.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BbHBglZG.js";import"./symbol-BC68W8wa.js";import"./step-CYBADRl-.js";import"./useElementOffset-DLWQ62qI.js";import"./uniqBy-BeGVfblk.js";import"./iteratee-MVxaMNGn.js";import"./useAnimationId-CKL_PQXN.js";import"./Cross-9nxareQx.js";import"./Rectangle-_mXRa_P4.js";import"./Sector-D2vf8wF7.js";import"./ReactUtils-B6bmemMx.js";import"./ActivePoints-2-a50J1l.js";import"./Dot-rS4fPZDW.js";import"./RegisterGraphicalItemId-CznzVPtc.js";import"./ErrorBarContext-BZfLXdZw.js";import"./GraphicalItemClipPath-BUh3FPdj.js";import"./SetGraphicalItem-IaY6gKdE.js";import"./getRadiusAndStrokeWidthFromDot-BIESFlMm.js";import"./ActiveShapeUtils-5FEmW25K.js";import"./isPlainObject-BUIBTXtZ.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-DlYu-bjE.js";import"./index-DjPC5fQL.js";import"./ChartSizeDimensions-BGpNAELR.js";import"./OffsetShower-D2nsT2yB.js";import"./PlotAreaShower-CPUgyAdx.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...I(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
