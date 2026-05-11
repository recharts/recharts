import{e as t}from"./iframe-DHSCsAdF.js";import{R as D,i as s}from"./arrayEqualityCheck-DejELsrN.js";import{L as v}from"./LineChartArgs-_mND0tRp.js";import{g as I}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-ByyADZkz.js";import{C as T}from"./CartesianGrid-zapa5v6t.js";import{X as M}from"./XAxis-rIWvyQc_.js";import{Y as $}from"./YAxis-B3RnLl7T.js";import{L as O}from"./Legend-wGf0l-XN.js";import{T as W}from"./Tooltip-DmuGD4wR.js";import{L as C}from"./Line-xRKz7Lqu.js";import{R as X}from"./RechartsHookInspector-Bl_b1l7P.js";import{C as Y}from"./Curve-DdDf1hH6.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DdBt44A0.js";import"./immer-B7vO4s3P.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DegZicoB.js";import"./index-CpBtaSsl.js";import"./hooks-Ed4LhnTQ.js";import"./axisSelectors-CI0vprku.js";import"./d3-scale-m9dtnhXI.js";import"./zIndexSlice-CsWdvizj.js";import"./renderedTicksSlice-BJJo2R47.js";import"./CartesianChart-OvkPOyqJ.js";import"./chartDataContext-CG3f3Y43.js";import"./CategoricalChart-DOIkqHpB.js";import"./CartesianAxis-BCj8T9-Z.js";import"./Layer-CgIzBpZ9.js";import"./Text-BU_Eo4vH.js";import"./DOMUtils-DnRUdIba.js";import"./Label-C3rJ2_4a.js";import"./ZIndexLayer-NxKSFRC9.js";import"./types-BJ3oAoHr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-ChUxQx2e.js";import"./symbol-Dw26CW2u.js";import"./step-BXBXLUST.js";import"./useElementOffset-DK8TM0kx.js";import"./uniqBy-BXsrqUuV.js";import"./iteratee-RqtmE6ui.js";import"./useAnimationId-DdH8uK_v.js";import"./Cross-DqE97NNl.js";import"./Rectangle-D-nZJBYK.js";import"./Sector-DwAaS_QE.js";import"./ReactUtils-CI0cWBwW.js";import"./ActivePoints-BU40hces.js";import"./Dot-BKOJ7ZOA.js";import"./RegisterGraphicalItemId-Co8itO9h.js";import"./ErrorBarContext-BnFLkwS3.js";import"./GraphicalItemClipPath-7TaZPKiL.js";import"./SetGraphicalItem-CGPj629n.js";import"./getRadiusAndStrokeWidthFromDot-C6SN24Cr.js";import"./ActiveShapeUtils-D-9eavqk.js";import"./isPlainObject-DIsRAxNl.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-DaZMlX5v.js";import"./index-C9zRLUqd.js";import"./ChartSizeDimensions-na2CXaMS.js";import"./OffsetShower-BYL_rrah.js";import"./PlotAreaShower-BF-kz2CC.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...I(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
