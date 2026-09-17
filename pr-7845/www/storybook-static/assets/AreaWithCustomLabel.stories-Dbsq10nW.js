import{R as r}from"./iframe-DKiAUKfj.js";import{R as c}from"./zIndexSlice-DRDYTCs-.js";import{C as d}from"./ComposedChart-7seVkJ1o.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DhgccsRl.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C4io43Xn.js";import"./index-B0JUl7NQ.js";import"./index-CGte46WL.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-wQyeqB4t.js";import"./isWellBehavedNumber-BQkgEIAs.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-V6OGhvVE.js";import"./axisSelectors-CgDB5I1Y.js";import"./d3-scale-DhJR9ZRz.js";import"./index-D64JEJSP.js";import"./index-BZWqRos3.js";import"./renderedTicksSlice-BJG2XwKW.js";import"./index-CTMR6STe.js";import"./CartesianChart-BTQ_MHvG.js";import"./chartDataContext-CVDaw3GU.js";import"./CategoricalChart-DJIGb7_j.js";import"./Layer-TOA8EzlX.js";import"./AnimatedItems-CPnSyqXV.js";import"./Label-BqJsTdph.js";import"./Text-DzjLOXSn.js";import"./DOMUtils-kE23eB48.js";import"./useId-DXDEV1Zs.js";import"./useBackwardsCompatibleTheme-Bntz2N2r.js";import"./ZIndexLayer-Cu2kJPTs.js";import"./useAnimationId-D05enbBD.js";import"./ActivePoints-loRSqDJl.js";import"./Dot-B085JP8i.js";import"./types-CesjT3HQ.js";import"./RegisterGraphicalItemId-DL0AdrUW.js";import"./GraphicalItemClipPath-DJ7nq7QD.js";import"./SetGraphicalItem-B2eXT-xm.js";import"./getRadiusAndStrokeWidthFromDot-Bn_cXEBB.js";import"./ActiveShapeUtils-CameuY1c.js";import"./Curve-NEEyYudm.js";import"./step-DrkPABVT.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-BklSfqcr.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
