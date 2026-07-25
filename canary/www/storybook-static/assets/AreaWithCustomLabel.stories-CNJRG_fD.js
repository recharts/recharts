import{R as e}from"./iframe-DNItCT7m.js";import{R as c}from"./zIndexSlice-BIc7DaAW.js";import{C as d}from"./ComposedChart-C5LgD4az.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CTFjU93O.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C6rBLGvR.js";import"./index-CATLtXB_.js";import"./index-COLkHtZe.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Bl2ououO.js";import"./isWellBehavedNumber-CgbpTCVR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BMs8UQqD.js";import"./index-ROxRgVl8.js";import"./index-C_m6BLaT.js";import"./renderedTicksSlice-DtPKT0nb.js";import"./axisSelectors-BBK9nbq3.js";import"./d3-scale-CToN17b5.js";import"./CartesianChart-CPv-NLLr.js";import"./chartDataContext-abx-D_mf.js";import"./CategoricalChart-DyfBdBCf.js";import"./Layer-Db2cjn9q.js";import"./AnimatedItems-CA_PH1lw.js";import"./Label-Dd-8-k84.js";import"./Text-CG5VQSen.js";import"./DOMUtils-D-QZZqkA.js";import"./ZIndexLayer-C8mc3Rgo.js";import"./useAnimationId-0YgIZ0Y8.js";import"./ActivePoints-DrmmrcJw.js";import"./Dot-CBZvltEJ.js";import"./types-BUhan55B.js";import"./RegisterGraphicalItemId-DzuoUeII.js";import"./GraphicalItemClipPath-DTm1hIPW.js";import"./SetGraphicalItem-B0-RRBJT.js";import"./getRadiusAndStrokeWidthFromDot-DPqVYI7W.js";import"./ActiveShapeUtils-DbSW9g1N.js";import"./Curve-DUQP-DVq.js";import"./step-CV_HIcdR.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DTMH4QI8.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const it=["CustomizedLabel"];export{t as CustomizedLabel,it as __namedExportsOrder,ot as default};
