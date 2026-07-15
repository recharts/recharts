import{R as e}from"./iframe-CbiyPpOQ.js";import{R as c}from"./zIndexSlice-CpGqLNgf.js";import{C as d}from"./ComposedChart-Ml_tEQsO.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-C1cn8-Og.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-qq70w1DA.js";import"./index-DN_zLXSU.js";import"./index-DyGRF9jX.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BWAgYfPV.js";import"./isWellBehavedNumber-CgYUMQU-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-TOXK1lwb.js";import"./index-Bca_d3DG.js";import"./index-D-fswtUu.js";import"./renderedTicksSlice-lYU8ut4F.js";import"./axisSelectors-CCqDM7T-.js";import"./d3-scale-Bap3CkU2.js";import"./CartesianChart-DS8MRKt-.js";import"./chartDataContext-Bznw4op9.js";import"./CategoricalChart-l1FuTysV.js";import"./Layer-DqgjT4E-.js";import"./AnimatedItems-DRdB4DWi.js";import"./Label-Bqdiqqm9.js";import"./Text-6JPkC2Bj.js";import"./DOMUtils-Db0o8Zdl.js";import"./ZIndexLayer-BdQyI4NS.js";import"./useAnimationId-BzqZ1CPr.js";import"./ActivePoints-BcBYuZ18.js";import"./Dot-CrmxLVmG.js";import"./types-CzM6FhOK.js";import"./RegisterGraphicalItemId-DWEdhGSI.js";import"./GraphicalItemClipPath-Bzcd_Jhp.js";import"./SetGraphicalItem-DrfGre3X.js";import"./getRadiusAndStrokeWidthFromDot-CcpM4ut6.js";import"./ActiveShapeUtils-CSCl1dIf.js";import"./Curve-B54n4LWH.js";import"./step-CAX9qAEt.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-BRH2XptT.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
