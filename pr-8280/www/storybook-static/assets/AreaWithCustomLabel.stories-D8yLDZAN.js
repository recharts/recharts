import{R as r}from"./iframe-B3Q9BieZ.js";import{R as c}from"./zIndexSlice-sqFd1bzt.js";import{C as d}from"./ComposedChart-D1EiQGBZ.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CMruUb5Q.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BfktPE_A.js";import"./throttle-D7B_fzZD.js";import"./index-BCJi3GJg.js";import"./index-vYqwVqCg.js";import"./RechartsWrapper-Cfrbgio_.js";import"./axisSelectors-DvTAFEOk.js";import"./polarAxisSelectors-DPwJ5LbZ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C94aTEcE.js";import"./index-DcskzPeY.js";import"./index-orRyden8.js";import"./renderedTicksSlice-1Ib_b5H5.js";import"./index-CII0l-xa.js";import"./fillDefinitions-DFJ8_pt7.js";import"./CartesianChart-Cr3Ujgb_.js";import"./chartDataContext-BZMC5ZNk.js";import"./CategoricalChart-DW1p8FyC.js";import"./getRadiusAndStrokeWidthFromDot-CVv--GX5.js";import"./Layer-CM6IL6TI.js";import"./dataEntryStyles-DvvOVUEP.js";import"./Label-DqBOaUXK.js";import"./Text-vJxvkBMX.js";import"./ZIndexLayer-D273i2uL.js";import"./ActivePoints-tqDqo9N4.js";import"./Dot-ClUpNew-.js";import"./types-D4j33x05.js";import"./activeStyles-BLYIXqri.js";import"./useAnimationId-2VJaNjeA.js";import"./Symbols-CWY2nbRa.js";import"./symbol-MUjZPdnP.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-B51ay4rQ.js";import"./ActiveShapeUtils-axs2zJFe.js";import"./Curve-1WEPDMRv.js";import"./step-CLCxHiga.js";import"./useEffectiveDataKey-CELfbHpr.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,mt as __namedExportsOrder,at as default};
