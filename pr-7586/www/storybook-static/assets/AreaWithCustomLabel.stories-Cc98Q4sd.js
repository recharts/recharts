import{R as e}from"./iframe-Bj-yQnc2.js";import{R as c}from"./zIndexSlice-DO4y32gA.js";import{C as d}from"./ComposedChart-BMfVAHVi.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BndLTKmv.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CZQMCJbJ.js";import"./index-CXIrlcaX.js";import"./index-C2KJTwEF.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-7WXWf9aL.js";import"./isWellBehavedNumber-A843S5PG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BjwBN1rR.js";import"./index-npMcpUBc.js";import"./index-CUdhCrp9.js";import"./renderedTicksSlice-CagdShEY.js";import"./axisSelectors-DPyctkFQ.js";import"./d3-scale-rY2RSZRS.js";import"./CartesianChart-lhfYoKGZ.js";import"./chartDataContext-CFjDBvvT.js";import"./CategoricalChart-CavyJHAU.js";import"./Layer-BLp5IiBu.js";import"./AnimatedItems-DUyUCCX0.js";import"./Label-Cm9vMlt2.js";import"./Text-RzD6k6DF.js";import"./DOMUtils-DVhKp59x.js";import"./ZIndexLayer-CZNNIEzh.js";import"./useAnimationId-Yo_b-bos.js";import"./ActivePoints-BIrCi9Or.js";import"./Dot-B130eiz7.js";import"./types-YXwkeCBT.js";import"./RegisterGraphicalItemId-DueteZ3j.js";import"./GraphicalItemClipPath-B-sHbKa-.js";import"./SetGraphicalItem-DWNEhJuv.js";import"./getRadiusAndStrokeWidthFromDot-BwxuSyAu.js";import"./ActiveShapeUtils-BoActjfk.js";import"./Curve-CeWd9qmA.js";import"./step-C2Z_nim4.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DrBqiWoN.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
