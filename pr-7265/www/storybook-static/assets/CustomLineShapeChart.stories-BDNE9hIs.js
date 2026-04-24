import{e as t}from"./iframe-jbS-E__g.js";import{R as D,i as s}from"./arrayEqualityCheck-Bc6HaNgk.js";import{L as v}from"./LineChartArgs-E1uHAgXQ.js";import{g as I}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-Rue16AiH.js";import{C as T}from"./CartesianGrid-D6FefVEI.js";import{X as M}from"./XAxis-D2ruk6hB.js";import{Y as $}from"./YAxis-pXEMWudQ.js";import{L as O}from"./Legend-arlg7icL.js";import{T as W}from"./Tooltip-OajYP7Ju.js";import{L as C}from"./Line-Etl43fu5.js";import{R as X}from"./RechartsHookInspector-BHyXn1pK.js";import{C as Y}from"./Curve-BHonL5AG.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-AZHx8nL2.js";import"./immer-1JIHG1sP.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B-Sq2tux.js";import"./index-CUlk-TbT.js";import"./hooks-BJbsnZ8W.js";import"./axisSelectors--9NjHi9J.js";import"./d3-scale-CgsVpM20.js";import"./zIndexSlice-fK74Fe27.js";import"./renderedTicksSlice-kref20Pz.js";import"./CartesianChart-Bb9w7oEt.js";import"./chartDataContext-ZjVOMNJz.js";import"./CategoricalChart-Ca7o1_-0.js";import"./CartesianAxis-DVvLgkRy.js";import"./Layer-D3-cQotP.js";import"./Text-DPOTj-ff.js";import"./DOMUtils-Co4AyA4r.js";import"./Label-CqNEB3cA.js";import"./ZIndexLayer-C0UmvjN1.js";import"./types-KpzOghRu.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BT1y5TAN.js";import"./symbol-DR7gyPC3.js";import"./step-CRkklqfM.js";import"./useElementOffset-CiRQlEhg.js";import"./uniqBy-CPO7hTdl.js";import"./iteratee-BUzB0L-p.js";import"./useAnimationId-Dl-7lH7S.js";import"./Cross-Bba4Q0Eg.js";import"./Rectangle-CttT3kPR.js";import"./Sector-C7-FdoJb.js";import"./ReactUtils-CmIIaVE7.js";import"./ActivePoints-BAygIn8R.js";import"./Dot-B5SXOt0E.js";import"./RegisterGraphicalItemId-B4Mgvmap.js";import"./ErrorBarContext-BTnDLWKc.js";import"./GraphicalItemClipPath-DQWRROhy.js";import"./SetGraphicalItem-CLdOZJOU.js";import"./getRadiusAndStrokeWidthFromDot-BQh-5tcv.js";import"./ActiveShapeUtils-BRRS2IIP.js";import"./isPlainObject-CVxhLbCo.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-BNwixCzS.js";import"./index-BLWb42Ez.js";import"./ChartSizeDimensions-BpE-Gxiy.js";import"./OffsetShower-BXbfoimB.js";import"./PlotAreaShower-CIgqmqyc.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...I(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
