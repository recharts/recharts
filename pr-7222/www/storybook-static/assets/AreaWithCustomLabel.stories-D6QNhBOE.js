import{e as t}from"./iframe-BbLTqg_I.js";import{R as c}from"./arrayEqualityCheck-CBxHnj40.js";import{C as d}from"./ComposedChart-D4zp_1Is.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DANYwqRi.js";import{R as u}from"./RechartsHookInspector-D5b-YMWc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DeEvTvqp.js";import"./immer-0I19eR8v.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-sXCJwmzA.js";import"./index-t2-XMrpS.js";import"./hooks-lBsi1Lte.js";import"./axisSelectors-Bham5zd3.js";import"./d3-scale-DytBNPzq.js";import"./zIndexSlice-DaNYP2h4.js";import"./renderedTicksSlice-mAMVqgeM.js";import"./CartesianChart-6nDSe5MW.js";import"./chartDataContext-CkbwJfZ5.js";import"./CategoricalChart-CiUZR458.js";import"./Curve-Bfkmy_Vr.js";import"./types-BQQUehNG.js";import"./step-DZPsS0dg.js";import"./Layer-De7FJLXT.js";import"./ReactUtils-BKGICeIT.js";import"./Label-Dp17yuaT.js";import"./Text-Doa3jS46.js";import"./DOMUtils-_WjkpCG3.js";import"./ZIndexLayer-CG-7pAPx.js";import"./ActivePoints-BtWDyisY.js";import"./Dot-BQWhfV5T.js";import"./RegisterGraphicalItemId-BMAYZOJ5.js";import"./GraphicalItemClipPath-BQ69dXZ4.js";import"./SetGraphicalItem-BZCA2PlV.js";import"./useAnimationId-Dzq-5vwQ.js";import"./getRadiusAndStrokeWidthFromDot-CwIeBf7B.js";import"./graphicalItemSelectors-aeE1LDGN.js";import"./index-BvC3nlY0.js";import"./ChartSizeDimensions-BXlHCl-n.js";import"./OffsetShower-ifdzBZ5-.js";import"./PlotAreaShower-CxkyObXY.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
