import{R as r}from"./iframe-BqTe2UMP.js";import{R as c}from"./zIndexSlice-GTynhOsS.js";import{C as d}from"./ComposedChart-BWB9SKNi.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BB-h_TCD.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-PmeTbXwQ.js";import"./index-CM2oe_lg.js";import"./index-CG7aEEME.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-1c7_8SpD.js";import"./isWellBehavedNumber-BqrJeuDz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CWqjI8ow.js";import"./axisSelectors-lM2vG64O.js";import"./d3-scale-DWaVLjKI.js";import"./index-DCgfcJWI.js";import"./index-CwY_lGiF.js";import"./renderedTicksSlice-CNIelq8e.js";import"./index-2KC7EUkH.js";import"./CartesianChart-BNeCXpfh.js";import"./chartDataContext-Bf8mKNm_.js";import"./CategoricalChart-D6_cM4w9.js";import"./Layer-BZqCsxZY.js";import"./activeStyles-A8WZQcUr.js";import"./Label-C4tYPzVx.js";import"./Text-DWSqExsy.js";import"./pageBackground-CkUHzRfu.js";import"./useId-C8HkpFIm.js";import"./useBackwardsCompatibleTheme-B_ORpNqj.js";import"./ZIndexLayer-CvPcnuan.js";import"./useAnimationId-D1_C1lZo.js";import"./dataEntryStyles-jb_0UPIc.js";import"./ActivePoints-B0febV6B.js";import"./Dot-jbPDGXVe.js";import"./types-YR4m-55g.js";import"./GraphicalItemClipPath-B2ZrWFWd.js";import"./SetGraphicalItem-BGuonubA.js";import"./getRadiusAndStrokeWidthFromDot-Ddhrr2Nr.js";import"./ActiveShapeUtils-gWmw8qk4.js";import"./Curve-DW1_vQIY.js";import"./step-BBQ8ZX6a.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-x1RSS2yk.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
