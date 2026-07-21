import{R as e}from"./iframe-prgBh1Qf.js";import{R as c}from"./zIndexSlice-DdjKeJcD.js";import{C as d}from"./ComposedChart-ExGsHaJW.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-gjQvfKzG.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DhCsYq_l.js";import"./index-Bl_8pcbE.js";import"./index-DznvQCe0.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DEZlg4EB.js";import"./isWellBehavedNumber-DeolLGU-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-FIpEFVMR.js";import"./index-TRfcR2ow.js";import"./index-p6BXHd-9.js";import"./renderedTicksSlice-C3Oo4Aw2.js";import"./axisSelectors-HShZFAmb.js";import"./d3-scale-CthO7aNE.js";import"./CartesianChart-EDRdBXz4.js";import"./chartDataContext-BRCxcd-D.js";import"./CategoricalChart-C0JPuI-j.js";import"./Layer-B4SceqN1.js";import"./AnimatedItems-JyKHnHqe.js";import"./Label-CpgdF2bt.js";import"./Text-XjkeXE_1.js";import"./DOMUtils-B922snu2.js";import"./ZIndexLayer-Coay8-vh.js";import"./useAnimationId-Dho-yl2L.js";import"./ActivePoints-C6psJDBD.js";import"./Dot-BOonALeI.js";import"./types-BLB4Kpk-.js";import"./RegisterGraphicalItemId-QOUSEuOJ.js";import"./GraphicalItemClipPath-D8U1RFPj.js";import"./SetGraphicalItem-cAeJSBXs.js";import"./getRadiusAndStrokeWidthFromDot-BYQTLLCN.js";import"./ActiveShapeUtils-CCY3sSOl.js";import"./Curve-Dg6pMiMi.js";import"./step-DljApQAs.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DU6HXrJ0.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
