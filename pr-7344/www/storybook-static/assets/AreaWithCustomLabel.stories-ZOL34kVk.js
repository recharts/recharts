import{e as t}from"./iframe-DZ8hthY-.js";import{g as c}from"./arrayEqualityCheck-CM4xUg98.js";import{C as d}from"./ComposedChart-BBz9TwIo.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as h}from"./Area-bGtN1JDv.js";import{R as u}from"./RechartsHookInspector-UTj_zoVi.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B_ys-f75.js";import"./immer-BecrFbrr.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BUTuEf4Y.js";import"./index-D76bsI4z.js";import"./hooks-DoB3DHlQ.js";import"./axisSelectors-DgKTbZDy.js";import"./d3-scale-DZsU5NlZ.js";import"./zIndexSlice-DRYSH0d1.js";import"./renderedTicksSlice-B11M6loL.js";import"./CartesianChart-zFbedmPR.js";import"./chartDataContext-CrXAevUQ.js";import"./CategoricalChart-Bvtk9acs.js";import"./Curve-BwYo_aCq.js";import"./types-CeA2W1WE.js";import"./step-C2ZxtsDR.js";import"./Layer-CVDrdQdQ.js";import"./ReactUtils-BDnHjpWV.js";import"./Label-NDKa2SGb.js";import"./Text-CCJtZgZH.js";import"./DOMUtils-DNsRktQS.js";import"./ZIndexLayer-CigE4wdP.js";import"./ActivePoints-CQPlZabl.js";import"./Dot-CK1-CRkK.js";import"./RegisterGraphicalItemId-p_DkQNMI.js";import"./GraphicalItemClipPath-Cgx5E8W2.js";import"./SetGraphicalItem-CO1zjpRd.js";import"./useAnimationId-EGG1FiRd.js";import"./getRadiusAndStrokeWidthFromDot-BCNCi0Sv.js";import"./graphicalItemSelectors-B7-sYK2t.js";import"./index-DZqpEK_T.js";import"./ChartSizeDimensions-ULUEOeMz.js";import"./OffsetShower-BU-kozBz.js";import"./PlotAreaShower-BchYlFwA.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
