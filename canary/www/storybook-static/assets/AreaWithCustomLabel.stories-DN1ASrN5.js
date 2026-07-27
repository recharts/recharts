import{R as e}from"./iframe-C_py9VKy.js";import{R as c}from"./zIndexSlice-CXPNbLh0.js";import{C as d}from"./ComposedChart-Dh9zcQ5L.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Bkinsq1d.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-y-97qzKM.js";import"./index-om3Avrtj.js";import"./index-DFxAgAdx.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DKxyIA_C.js";import"./isWellBehavedNumber-wktK8CV7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CyYB6xNR.js";import"./index-ConrPCjE.js";import"./index-B6PDA8Su.js";import"./renderedTicksSlice-XRbHFGyF.js";import"./axisSelectors-B-GKTKT_.js";import"./d3-scale-pH2VCnNX.js";import"./CartesianChart-Dc2BthVN.js";import"./chartDataContext-CG11iTCQ.js";import"./CategoricalChart-DJCSwk8E.js";import"./Layer-CJpPulsx.js";import"./AnimatedItems-BApiggtL.js";import"./Label-DaE8MMQO.js";import"./Text-CnffV04t.js";import"./DOMUtils-B2RmK7a8.js";import"./ZIndexLayer-cfs89nNi.js";import"./useAnimationId-BmA3o4RX.js";import"./ActivePoints-VBrZY_w6.js";import"./Dot-CgRov5lu.js";import"./types-BjPO6Abx.js";import"./RegisterGraphicalItemId-BKPrbhTB.js";import"./GraphicalItemClipPath-oE60EnJf.js";import"./SetGraphicalItem-B_lgAFV8.js";import"./getRadiusAndStrokeWidthFromDot-CRhSkevf.js";import"./ActiveShapeUtils-SIhXzT4o.js";import"./Curve-Ca8nGQE4.js";import"./step-CMEfwDT5.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-RdnKikYv.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
