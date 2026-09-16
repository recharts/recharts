import{R as r}from"./iframe-BlpdekQf.js";import{R as c}from"./zIndexSlice-Bd-549Vw.js";import{C as d}from"./ComposedChart-BYV5Fhyo.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-1AdB3F4y.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-8wef2bFQ.js";import"./index-Dg90symq.js";import"./index-Dn5eONY4.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BWwU0p8m.js";import"./isWellBehavedNumber-DfaAxwlE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BZ46sqe8.js";import"./axisSelectors-DwVSh5EL.js";import"./d3-scale-ffqjL1dY.js";import"./index-BcFSE7Eo.js";import"./index-Co2WS3GV.js";import"./renderedTicksSlice-rM-Or7ex.js";import"./index-BjAwxFOu.js";import"./CartesianChart-Dncy8Mq7.js";import"./chartDataContext-CXgp5rOX.js";import"./CategoricalChart-CJrl3V7y.js";import"./Layer-Cz4a7tst.js";import"./AnimatedItems-BKOKH3Gm.js";import"./Label-CrfPybH1.js";import"./Text-CRM9x0B4.js";import"./DOMUtils-C_8Iq0XJ.js";import"./useId-DvrsL6or.js";import"./useBackwardsCompatibleTheme-C9u8MjhE.js";import"./ZIndexLayer-C5ftRxf2.js";import"./useAnimationId-SlAZ3zMA.js";import"./ActivePoints-C1DlvL6S.js";import"./Dot-BsVVT6T8.js";import"./types-DYnYQX3g.js";import"./RegisterGraphicalItemId-D9zcRMey.js";import"./GraphicalItemClipPath-Vs1wvJPe.js";import"./SetGraphicalItem-BG-oAwbp.js";import"./getRadiusAndStrokeWidthFromDot-C3QjOZoW.js";import"./ActiveShapeUtils-BEiBGwD8.js";import"./Curve-DBrSRqYN.js";import"./step-C7NW3t9J.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-BE0cCNWI.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
