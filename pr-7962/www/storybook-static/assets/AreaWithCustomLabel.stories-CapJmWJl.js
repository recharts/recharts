import{R as r}from"./iframe-CvKbIuDU.js";import{R as c}from"./zIndexSlice-DW-S4til.js";import{C as d}from"./ComposedChart-jlJOyNP5.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-2XdBy8y7.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BTM8S8gx.js";import"./index-Z4qAt8Yv.js";import"./index-BVbsRhGr.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DyOOAUIY.js";import"./isWellBehavedNumber-DlUs4F_M.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Di3s7bBT.js";import"./axisSelectors-BV2JW9EX.js";import"./d3-scale-C5aBguhN.js";import"./index-BexOrbLc.js";import"./index-BIyuXW6c.js";import"./renderedTicksSlice-BomOCwRS.js";import"./index-B5qL6Iq2.js";import"./CartesianChart-CQJv70kz.js";import"./chartDataContext-CefKEXER.js";import"./CategoricalChart-BbjDOIaW.js";import"./Layer-BNmLXrt-.js";import"./activeStyles-Cf2oumzq.js";import"./Label-C9wGNRIk.js";import"./Text-B6N2t5jR.js";import"./pageBackground-ChMXawke.js";import"./useId-6H2iqgtd.js";import"./useBackwardsCompatibleTheme-CkVmHcf-.js";import"./ZIndexLayer-C4jXpx6X.js";import"./useAnimationId-DTylORVO.js";import"./dataEntryStyles-DpltKyOE.js";import"./ActivePoints-D5UTi5xW.js";import"./Dot-DCFEnowe.js";import"./types-ChWN3J9r.js";import"./GraphicalItemClipPath-BmBLy2cz.js";import"./SetGraphicalItem-fk9D7m_b.js";import"./getRadiusAndStrokeWidthFromDot-Dk6kygWL.js";import"./ActiveShapeUtils-DkA-OS5a.js";import"./Curve-CkMLKDtn.js";import"./step-DZOnd08g.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-DWaNxJOV.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,pt as __namedExportsOrder,at as default};
