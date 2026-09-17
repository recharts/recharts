import{R as r}from"./iframe-u4ce63CG.js";import{R as c}from"./zIndexSlice-BYJycarP.js";import{C as d}from"./ComposedChart-C2sXY6fb.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BW87PAw6.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B6MgLZYN.js";import"./index-BVP_svq1.js";import"./index-BKlhDgWa.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CgaWkI-c.js";import"./isWellBehavedNumber-DjD-6vVv.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Zz5ful62.js";import"./axisSelectors-CGHflyYT.js";import"./d3-scale-B8KmfmKn.js";import"./index-pI1Zm9lH.js";import"./index-PkCf_CwH.js";import"./renderedTicksSlice-Cs4cysVU.js";import"./index-CMticpJd.js";import"./CartesianChart-Ddb32mjN.js";import"./chartDataContext-0PEmuSXk.js";import"./CategoricalChart-BiBJy5y7.js";import"./Layer-DNxK11xQ.js";import"./AnimatedItems-B0QYHb0Z.js";import"./Label-D-DGLST-.js";import"./Text-B-fKZlN3.js";import"./DOMUtils-DPz05X-i.js";import"./useId-CDzZCSG6.js";import"./useBackwardsCompatibleTheme-BMXS8hwA.js";import"./ZIndexLayer-BDv8sIeq.js";import"./useAnimationId-CFY7vA8F.js";import"./ActivePoints-CmJoQcI8.js";import"./Dot-CyCokxWF.js";import"./types-BSKo_D-h.js";import"./RegisterGraphicalItemId-CERn6dbU.js";import"./GraphicalItemClipPath-BkjNj3rm.js";import"./SetGraphicalItem-R2AcNzTI.js";import"./getRadiusAndStrokeWidthFromDot-BNYPB0Rc.js";import"./ActiveShapeUtils-D76eZVf4.js";import"./Curve-Cpv10agS.js";import"./step-B8l-YbAv.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-DQSDp_oq.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,pt as __namedExportsOrder,at as default};
