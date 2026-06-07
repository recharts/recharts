import{R as e}from"./iframe-D7uas6gE.js";import{R as c}from"./zIndexSlice-CAxEqTk2.js";import{C as d}from"./ComposedChart-Bu5G-rAT.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DLm7jpEL.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Bz_FyVM_.js";import"./index-f8LaKELp.js";import"./index-Dk8a2p8j.js";import"./get-DF7xdNw5.js";import"./resolveDefaultProps-D-Lsr8PC.js";import"./isWellBehavedNumber-sBFjFrrH.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DPySDgBx.js";import"./index-Dt2ZjhLE.js";import"./index-BtWXQEei.js";import"./renderedTicksSlice-D97r0PID.js";import"./axisSelectors-BhBGSIM3.js";import"./d3-scale-DiIEKRDM.js";import"./string-B6fdYHAA.js";import"./CartesianChart-vfyIL2vN.js";import"./chartDataContext-BvY4an5W.js";import"./CategoricalChart-BfBc4XBk.js";import"./Layer-CiOv_hF8.js";import"./AnimatedItems-DfQiZ4K_.js";import"./Label-CK9JMWUG.js";import"./Text-BI32KZkM.js";import"./DOMUtils-BN2-dIl7.js";import"./ZIndexLayer-C4cBgWge.js";import"./useAnimationId-PEz7c_71.js";import"./ActivePoints-BJoa2H8O.js";import"./Dot-DBpQmpJD.js";import"./types-ChkVH57z.js";import"./RegisterGraphicalItemId-9gLwt1vY.js";import"./GraphicalItemClipPath-DuOXc9m5.js";import"./SetGraphicalItem-BFYbkBHm.js";import"./getRadiusAndStrokeWidthFromDot-CDEMAmhz.js";import"./ActiveShapeUtils-BP0tkgwI.js";import"./Curve-D_EYdykS.js";import"./step-5js8pNAW.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CYuNarMa.js";const it={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
