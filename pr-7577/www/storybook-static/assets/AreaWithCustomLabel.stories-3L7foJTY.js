import{R as e}from"./iframe-DDIh6oSg.js";import{R as c}from"./zIndexSlice-D80Tj10e.js";import{C as d}from"./ComposedChart-Bwi8FpMM.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-qqq4KSFr.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bz-N2EDI.js";import"./index-Dxp0N8dY.js";import"./index-BAP9iPcz.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BovobWDa.js";import"./isWellBehavedNumber-m0qYgEug.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DOoCLeb6.js";import"./index-BwBS1vT9.js";import"./index-CVFqeXWK.js";import"./renderedTicksSlice-CodWg03c.js";import"./axisSelectors-Cj35qO4m.js";import"./d3-scale-DyPEX_SS.js";import"./CartesianChart-B73dWYbg.js";import"./chartDataContext-CsvjkcDn.js";import"./CategoricalChart-B8WXtgJK.js";import"./Layer-BjK-uYm4.js";import"./AnimatedItems-BksUzG9w.js";import"./Label-7ECcoRBX.js";import"./Text-DiDEm6xU.js";import"./DOMUtils-DNdwN9ud.js";import"./ZIndexLayer-CDkdwb16.js";import"./useAnimationId-Cx3p02Wi.js";import"./ActivePoints-D9ieR1r7.js";import"./Dot-C-WD7XjH.js";import"./types-CnDlnigw.js";import"./RegisterGraphicalItemId-CqU17xv7.js";import"./GraphicalItemClipPath-BMP70uQv.js";import"./SetGraphicalItem-BS0-pWrT.js";import"./getRadiusAndStrokeWidthFromDot-B0O65Yh_.js";import"./ActiveShapeUtils-DSNDz2f-.js";import"./Curve-Cd-wWA8T.js";import"./step-i4RfCE80.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CiQeUF16.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
