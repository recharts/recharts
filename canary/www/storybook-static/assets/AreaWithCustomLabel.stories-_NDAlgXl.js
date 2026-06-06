import{R as e}from"./iframe-CLfZCDGm.js";import{R as c}from"./zIndexSlice-CA_idCig.js";import{C as d}from"./ComposedChart-2Labsqm5.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DJUg17Oq.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-QRpJ3co-.js";import"./index-DnUMf4Cl.js";import"./index-CDzW5wMM.js";import"./get-DkSz9-jm.js";import"./resolveDefaultProps-x0HcBOxj.js";import"./isWellBehavedNumber-COd4_fF0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-atPiLOuE.js";import"./index-DssGAL0P.js";import"./index-BOf2N6VY.js";import"./renderedTicksSlice-Chi1ci-p.js";import"./axisSelectors-DMG299p3.js";import"./d3-scale-Xh1lphWt.js";import"./string-B6fdYHAA.js";import"./CartesianChart-B0jH1uhv.js";import"./chartDataContext-BNkTUWKr.js";import"./CategoricalChart-BbsCvjmJ.js";import"./Layer-Byvx6_V4.js";import"./AnimatedItems-2Sc0l-_O.js";import"./Label-D3bkn6cZ.js";import"./Text-CGIrE8uN.js";import"./DOMUtils-BuwrxSLS.js";import"./ZIndexLayer-DyKLPJQn.js";import"./useAnimationId-vAkCmZi7.js";import"./ActivePoints-DxCVVL9F.js";import"./Dot-B2U87Uh_.js";import"./types-Dbi5OTiB.js";import"./RegisterGraphicalItemId-BL3S-b5-.js";import"./GraphicalItemClipPath-DB3DHpQ4.js";import"./SetGraphicalItem-MghETS_R.js";import"./getRadiusAndStrokeWidthFromDot-Du9ACRIL.js";import"./ActiveShapeUtils-CmBRxm29.js";import"./Curve-CEx7pPNr.js";import"./step-BvrgBlnG.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DVpE8neB.js";const it={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const at=["CustomizedLabel"];export{t as CustomizedLabel,at as __namedExportsOrder,it as default};
