import{R as e}from"./iframe-COvhlo3n.js";import{R as c}from"./zIndexSlice-UjQyxCBO.js";import{C as d}from"./ComposedChart-B7Y6WjOd.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-6-i-eYQy.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BpCohf0r.js";import"./index-HVKWfhx-.js";import"./index-S2en6f0x.js";import"./get-DcOFzyCK.js";import"./resolveDefaultProps-DJ7OALvu.js";import"./isWellBehavedNumber-y7VTG9QG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dx2dgZSl.js";import"./index-iNixOGJn.js";import"./index-DX1qvyWd.js";import"./renderedTicksSlice-DbzHTb4p.js";import"./axisSelectors-Zbm12FCw.js";import"./d3-scale-BlVLCp11.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Dy7YVWuh.js";import"./chartDataContext-iIol8Xhi.js";import"./CategoricalChart-CLWSl7gV.js";import"./Layer-B-6Is3nc.js";import"./AnimatedItems-DpY5jibk.js";import"./Label-Vr2WzXIC.js";import"./Text-opN_hZQa.js";import"./DOMUtils-C6WNHbS7.js";import"./ZIndexLayer-B0TWuVZ-.js";import"./useAnimationId-BKJNFkSk.js";import"./ActivePoints-Dfm7fkiJ.js";import"./Dot-DfhacusV.js";import"./types-p5b3Q5GI.js";import"./RegisterGraphicalItemId-C7wd0umC.js";import"./GraphicalItemClipPath-CI-F5EmQ.js";import"./SetGraphicalItem-CwV_dfS_.js";import"./getRadiusAndStrokeWidthFromDot-D1_dalUD.js";import"./ActiveShapeUtils-C3R6UHJX.js";import"./Curve-DZz8_CrJ.js";import"./step-hf0ZFvgG.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-Bn7U8IOW.js";const it={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
