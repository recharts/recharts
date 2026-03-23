import{e as t}from"./iframe-Ct0PK1iZ.js";import{R as D,i as s}from"./arrayEqualityCheck-cSrg192z.js";import{L as v}from"./LineChartArgs-E1uHAgXQ.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-CHIpQrjQ.js";import{C as K}from"./CartesianGrid-CZTL1fO6.js";import{X as T}from"./XAxis-ZfaBuFta.js";import{Y as M}from"./YAxis-CMvF26TK.js";import{L as $}from"./Legend-DKQdARkQ.js";import{T as O}from"./Tooltip-DXMvgvNn.js";import{L as C}from"./Line-4WhNdwJc.js";import{R as W}from"./RechartsHookInspector-Ct0UJLxA.js";import{C as X}from"./Curve-BtTKqNeq.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CkDZ6rk0.js";import"./immer-C_0hot5p.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-JBNrYn90.js";import"./index-e5TdOq0j.js";import"./hooks-B5ECIQG0.js";import"./axisSelectors-DfI31pZt.js";import"./d3-scale-BIuiM5G6.js";import"./zIndexSlice-C0pIss81.js";import"./renderedTicksSlice-Xed-5Uzt.js";import"./CartesianChart-F11oHMFT.js";import"./chartDataContext-Be_hCN-X.js";import"./CategoricalChart-DBM3lb6I.js";import"./CartesianAxis-DpFipx6Q.js";import"./Layer-BFqbkghr.js";import"./Text-D7gtJPhg.js";import"./DOMUtils-DZtY6UXL.js";import"./Label-kZgIL_LG.js";import"./ZIndexLayer-CPK1fMG2.js";import"./types-B_QiL_OE.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Cz5Eatoq.js";import"./symbol-ORh8C_38.js";import"./step-CfNjb2F4.js";import"./useElementOffset-Dd86n5z-.js";import"./uniqBy-B6CTRDCo.js";import"./iteratee-qHNQkKgM.js";import"./useAnimationId-DhoQEmEH.js";import"./Cross-DXmQ4lnr.js";import"./Rectangle-Bk1l59Or.js";import"./Sector-6TbuA5HM.js";import"./ReactUtils-C9XhBs7w.js";import"./ActivePoints-Bv-BLGDJ.js";import"./Dot-B3FhOR5M.js";import"./RegisterGraphicalItemId-DG67JJW9.js";import"./ErrorBarContext-C_IVi_zE.js";import"./GraphicalItemClipPath-DIAe0jt7.js";import"./SetGraphicalItem-BiB1viSJ.js";import"./getRadiusAndStrokeWidthFromDot-BJC5mRjp.js";import"./ActiveShapeUtils-UwLXsB-I.js";import"./isPlainObject-B12Z6ZLF.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-BzWb9o7I.js";import"./index-DoqQxHuh.js";import"./ChartSizeDimensions-Blj7cX2O.js";import"./OffsetShower-kOurDMwT.js";import"./PlotAreaShower-CxG6J2wp.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
