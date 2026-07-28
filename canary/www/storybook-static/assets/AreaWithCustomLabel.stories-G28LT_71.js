import{R as e}from"./iframe-Byz0CZgU.js";import{R as c}from"./zIndexSlice-DotL-Jp7.js";import{C as d}from"./ComposedChart-C88qarp6.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DYAbeSRQ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-4aokm5Ko.js";import"./index-CK-fZH2A.js";import"./index-CQCdoqal.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DuQSjIkO.js";import"./isWellBehavedNumber-B1YKzF79.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D5qdTAip.js";import"./index-CNmE48Wz.js";import"./index-D4FuUZjH.js";import"./renderedTicksSlice-BW0ZnHiJ.js";import"./axisSelectors-CN4g76wg.js";import"./d3-scale-D3FDPfRZ.js";import"./CartesianChart-QxAb7wSw.js";import"./chartDataContext-E1G0KTyW.js";import"./CategoricalChart-Dqx0x7Kl.js";import"./Layer-jJo0ut9m.js";import"./AnimatedItems-2XdTa_Uh.js";import"./Label-DuUl9C5P.js";import"./Text-DEkD8bId.js";import"./DOMUtils-DwTCLKyl.js";import"./ZIndexLayer-DaxIl4jI.js";import"./useAnimationId-CqGGvgKC.js";import"./ActivePoints-CwZhWFk3.js";import"./Dot-B1fpIP2w.js";import"./types-DE0YJD6S.js";import"./RegisterGraphicalItemId-CPoQFzzX.js";import"./GraphicalItemClipPath-CC2ibiyE.js";import"./SetGraphicalItem-D0qKavYL.js";import"./getRadiusAndStrokeWidthFromDot-BTyL3OgJ.js";import"./ActiveShapeUtils-RF04AL4M.js";import"./Curve-BcJaCZSu.js";import"./step-Cb3pk4Rp.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CtWClP3j.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
