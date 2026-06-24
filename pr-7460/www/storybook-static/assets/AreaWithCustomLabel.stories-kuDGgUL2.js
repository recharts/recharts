import{R as e}from"./iframe-ChdTnuJZ.js";import{R as c}from"./zIndexSlice-DTuHfx_p.js";import{C as d}from"./ComposedChart-BLgRXBFB.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DP6OtnG2.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DHJNVAe2.js";import"./index-DteGnOzp.js";import"./index-Dq9WTpJB.js";import"./get-BljYdgC6.js";import"./resolveDefaultProps-CmZ2lQdU.js";import"./isWellBehavedNumber-CwWlLsdj.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-VmQ82j3S.js";import"./index-Dl7IIVL4.js";import"./index-BnBFbJTw.js";import"./renderedTicksSlice-IsDkktPX.js";import"./axisSelectors-UyjPZuEn.js";import"./d3-scale-Ch-uXsQ6.js";import"./CartesianChart-DV13kS8z.js";import"./chartDataContext-COA3hxu-.js";import"./CategoricalChart-JBgYyUd3.js";import"./Layer-CbZTDJjb.js";import"./AnimatedItems-BDYJ2E_L.js";import"./Label-ODDr4Kfk.js";import"./Text-BqDkAbeE.js";import"./DOMUtils-BvzDzAj2.js";import"./ZIndexLayer-DzezyKwN.js";import"./useAnimationId-w9_6HKPK.js";import"./ActivePoints-zze0EoKb.js";import"./Dot-B3nzfqLK.js";import"./types-Blkff1hk.js";import"./RegisterGraphicalItemId-BcQylArw.js";import"./GraphicalItemClipPath-D0CBaYt_.js";import"./SetGraphicalItem-Dx80ZtIC.js";import"./getRadiusAndStrokeWidthFromDot-JQNnNq8i.js";import"./ActiveShapeUtils-t-acR5v1.js";import"./Curve-BLJbrdKh.js";import"./step-C9h4VCgc.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CN8u0mca.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
