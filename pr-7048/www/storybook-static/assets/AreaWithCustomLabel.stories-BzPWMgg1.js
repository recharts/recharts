import{e as t}from"./iframe-EDkYpgFH.js";import{R as c}from"./arrayEqualityCheck-3I37HEG_.js";import{C as d}from"./ComposedChart-BiuyaRDP.js";import{A as l}from"./Area-L6QuLaNi.js";import{R as h}from"./RechartsHookInspector-CH0J_Gc_.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CektsYXT.js";import"./immer-OU7Y0bVq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D3m4uKer.js";import"./index-g2grDsWN.js";import"./hooks-9dyjFB2O.js";import"./axisSelectors-DuoLroUy.js";import"./d3-scale-Da0yFaRI.js";import"./zIndexSlice-CEaJbv0z.js";import"./renderedTicksSlice-tL_S_nSy.js";import"./CartesianChart-Dj1xYMR5.js";import"./chartDataContext-D4KzV5Tt.js";import"./CategoricalChart-AyWzdtKe.js";import"./Curve-CaKiPo4V.js";import"./types-BIaRI4-l.js";import"./step-CNqQtAg0.js";import"./Layer-B_dQgSH5.js";import"./ReactUtils-pbZTnHEY.js";import"./Label-tpHL658P.js";import"./Text-_RLDIMGf.js";import"./DOMUtils-BmamCvsY.js";import"./ZIndexLayer-CFOztK9t.js";import"./ActivePoints-qcJtAAIs.js";import"./Dot-Ci-MCQ4Y.js";import"./RegisterGraphicalItemId-BmJCRqzh.js";import"./GraphicalItemClipPath-LiQwpHfd.js";import"./SetGraphicalItem-DkwojxeX.js";import"./useAnimationId-BbddIEaK.js";import"./getRadiusAndStrokeWidthFromDot-DMXaZtjW.js";import"./graphicalItemSelectors-sZK0U5G_.js";import"./index-VaoQyGQZ.js";import"./ChartSizeDimensions-zH_0qASi.js";import"./OffsetShower-C_V4W_fW.js";import"./PlotAreaShower-DtLh3AKd.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const mt=["CustomizedLabel"];export{e as CustomizedLabel,mt as __namedExportsOrder,at as default};
