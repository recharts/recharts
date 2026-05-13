import{e as t}from"./iframe-DA7dsAjt.js";import{R as D,i as s}from"./arrayEqualityCheck-B2Tullra.js";import{L as v}from"./LineChartArgs-_mND0tRp.js";import{g as I}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-B00JAxeq.js";import{C as T}from"./CartesianGrid-Q-EMfYy9.js";import{X as M}from"./XAxis-D3BVUN8u.js";import{Y as $}from"./YAxis-C4Bf-We3.js";import{L as O}from"./Legend-CIyYm_rT.js";import{T as W}from"./Tooltip-Cgq-37v9.js";import{L as C}from"./Line-0_vX2c1I.js";import{R as X}from"./RechartsHookInspector-DyuMbIeF.js";import{C as Y}from"./Curve-CSUb-Mmt.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B7E-EJR0.js";import"./immer-CgNeP4Cn.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DUd0AjRv.js";import"./index-CjGLS6_1.js";import"./hooks-D-1ZrX9e.js";import"./axisSelectors-BJkuMl5j.js";import"./d3-scale-vc3zo1Az.js";import"./zIndexSlice-QK0EAxoG.js";import"./renderedTicksSlice-izlEPV0Q.js";import"./CartesianChart-BGT6UcsB.js";import"./chartDataContext-COI91jzY.js";import"./CategoricalChart-OHcwZY8x.js";import"./CartesianAxis-5nCOjy0L.js";import"./Layer-CA2bGkBA.js";import"./Text-BDZGl2AG.js";import"./DOMUtils-g7EKoefO.js";import"./Label-BbSyBdDv.js";import"./ZIndexLayer-CtisNWGZ.js";import"./types-BGlT9ghA.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BhPyOpJM.js";import"./symbol-Cme7zaAq.js";import"./step-D3Kjh6oK.js";import"./useElementOffset-CMdfJDCv.js";import"./uniqBy-R1SES33n.js";import"./iteratee-bjfE0mcN.js";import"./useAnimationId-Ow7TV2bH.js";import"./Cross-qcppa6F_.js";import"./Rectangle-C-tNMC4o.js";import"./Sector-CYPQyxpp.js";import"./ReactUtils-Cqv1MuoY.js";import"./ActivePoints-CYKlTQ6D.js";import"./Dot-B0m4Ez5e.js";import"./RegisterGraphicalItemId-Cw14-A1S.js";import"./ErrorBarContext-Exwfj4Ew.js";import"./GraphicalItemClipPath-CU2uvT1M.js";import"./SetGraphicalItem-M42qZfYw.js";import"./getRadiusAndStrokeWidthFromDot-DJFGm-Zo.js";import"./ActiveShapeUtils-WqUyYvVV.js";import"./isPlainObject-BtsggNmX.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-CUQqnsJW.js";import"./index-WFnamGGq.js";import"./ChartSizeDimensions-DOvk2LHO.js";import"./OffsetShower-G9RnNqRi.js";import"./PlotAreaShower-BULJQmBU.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...I(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
