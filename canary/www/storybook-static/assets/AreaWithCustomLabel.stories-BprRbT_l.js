import{R as e}from"./iframe-DyrNzYfG.js";import{R as c}from"./zIndexSlice-BxcBivH8.js";import{C as d}from"./ComposedChart-CU6tXOSz.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CTI_jWd3.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Cm4al6R2.js";import"./index-CHWPJWR6.js";import"./index-NUd0OKr5.js";import"./get-cagOI5AH.js";import"./resolveDefaultProps-xqaJSNtt.js";import"./isWellBehavedNumber-Bd2sibwy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BdG0zq9-.js";import"./index-CdQUwFqU.js";import"./index-BpeVWu4H.js";import"./renderedTicksSlice-C6uhyxBm.js";import"./axisSelectors-CD9PShsx.js";import"./d3-scale-BldhV8lg.js";import"./CartesianChart-UfO6rtst.js";import"./chartDataContext-CubF16Dj.js";import"./CategoricalChart-CWXn607r.js";import"./Layer-BL2D6iSn.js";import"./AnimatedItems-Cq3mCAt5.js";import"./Label-mQIBMRk4.js";import"./Text-CnNg3gGa.js";import"./DOMUtils-odAOb060.js";import"./ZIndexLayer-BkddZKJi.js";import"./useAnimationId-AVj-rcCC.js";import"./ActivePoints-DnBcqYjd.js";import"./Dot-DyBJR96w.js";import"./types-DDNG0zv9.js";import"./RegisterGraphicalItemId-CvfrlEi9.js";import"./GraphicalItemClipPath-ClGJav6d.js";import"./SetGraphicalItem-xVo5bUKT.js";import"./getRadiusAndStrokeWidthFromDot-DwRxyJur.js";import"./ActiveShapeUtils-9juqJKGt.js";import"./Curve-CV1SC5oG.js";import"./step-BTLusNHS.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-C0la4YRj.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
