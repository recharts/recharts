import{R as e}from"./iframe-BECHMrDZ.js";import{R as c}from"./zIndexSlice-ZZYOt5ZJ.js";import{C as d}from"./ComposedChart-DEoquINt.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CXHKPkHT.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DNeblauM.js";import"./index-DsWKibNG.js";import"./index-BdtLPmOn.js";import"./get-CPwaVA9l.js";import"./resolveDefaultProps-BtqON1I7.js";import"./isWellBehavedNumber-Zub9mv9t.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DNofag6x.js";import"./index-Cdabc56c.js";import"./index-BHRyfSkK.js";import"./renderedTicksSlice-CcmJJV_E.js";import"./axisSelectors-Do_tBIrF.js";import"./d3-scale-D-I2gAvK.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BmqQmt9e.js";import"./chartDataContext-ievxR12T.js";import"./CategoricalChart-CZw-S4E-.js";import"./Layer-ESOqu-Gc.js";import"./AnimatedItems-CQmyu7n-.js";import"./Label-VQOoexxL.js";import"./Text-C9QSstgR.js";import"./DOMUtils-BMatnmOn.js";import"./ZIndexLayer-dzP4UBMr.js";import"./useAnimationId-BT4jYtUB.js";import"./ActivePoints-Cmc10X0Q.js";import"./Dot-C7DD26qy.js";import"./types-n4LQ-b_y.js";import"./RegisterGraphicalItemId-DV64Udii.js";import"./GraphicalItemClipPath-BUhmAU6I.js";import"./SetGraphicalItem-DhkvModl.js";import"./getRadiusAndStrokeWidthFromDot-C9KiXcw0.js";import"./ActiveShapeUtils-LDykMPUP.js";import"./Curve-Bn_0oI69.js";import"./step-DbGI_ztS.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-LrHXndN_.js";const it={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
