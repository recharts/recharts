import{e as t}from"./iframe-DbhhbAlo.js";import{R as D,i as s}from"./arrayEqualityCheck-Lx_TMjyu.js";import{L as v}from"./LineChartArgs-E1uHAgXQ.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-9TYNzxzE.js";import{C as K}from"./CartesianGrid-S4-Vu-NK.js";import{X as T}from"./XAxis-DjIfDDta.js";import{Y as M}from"./YAxis-Dj1421bZ.js";import{L as $}from"./Legend-DEzUpdX0.js";import{T as O}from"./Tooltip-DIj2Xmdl.js";import{L as C}from"./Line-DU9DHTcH.js";import{R as W}from"./RechartsHookInspector-BSvxhUzi.js";import{C as X}from"./Curve-Dxoto--N.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DqjP-SJZ.js";import"./immer-CXubSzbd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BqWeXDcR.js";import"./index-bP3uccvR.js";import"./hooks-rkaChWzj.js";import"./axisSelectors-CG6dK3nK.js";import"./d3-scale-CD7WeVUs.js";import"./zIndexSlice-tEJEPfMp.js";import"./renderedTicksSlice-Br_sCV6u.js";import"./CartesianChart-2XwRf_I_.js";import"./chartDataContext-BjOOHIMo.js";import"./CategoricalChart-lS70JkQC.js";import"./CartesianAxis-DOxCqOnp.js";import"./Layer-BLRPCKMQ.js";import"./Text-9tx7qVgJ.js";import"./DOMUtils-CxI3YG9P.js";import"./Label-BD-AsMTb.js";import"./ZIndexLayer-BXjMifaG.js";import"./types-DCl9eSsv.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-C4vV8xjD.js";import"./symbol-PPpy3bVe.js";import"./step-B3CTsvyi.js";import"./useElementOffset-CbJZLsqP.js";import"./uniqBy-U5UIwqKu.js";import"./iteratee-CrbAK_cu.js";import"./useAnimationId-CLYn9ysU.js";import"./Cross-a_jLjoDo.js";import"./Rectangle-BIGKSdSo.js";import"./Sector-C3VJLfsw.js";import"./ReactUtils-DlRYbFyy.js";import"./ActivePoints-DtxAI_Pv.js";import"./Dot-CgUaw4tF.js";import"./RegisterGraphicalItemId-CiV8HnYd.js";import"./ErrorBarContext-8lDTik7_.js";import"./GraphicalItemClipPath-Bl8bx72_.js";import"./SetGraphicalItem-CKtT4vYj.js";import"./getRadiusAndStrokeWidthFromDot-CIAhrogS.js";import"./ActiveShapeUtils-BiQ2ESb_.js";import"./isPlainObject-D743ttwB.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-okY0yamA.js";import"./index-BEJpunbk.js";import"./ChartSizeDimensions-BHCR1SDL.js";import"./OffsetShower-D8NGzvq1.js";import"./PlotAreaShower-CmMEUx8D.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
