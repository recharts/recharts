import{R as r}from"./iframe-CazybM5Q.js";import{R as c}from"./zIndexSlice-C8_Ry1FK.js";import{C as d}from"./ComposedChart-U-yCg0Zp.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BKS2Tut0.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-l1Kptz9a.js";import"./index-DnBm6OUb.js";import"./index-DOWHA8mY.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CBYYqUCW.js";import"./isWellBehavedNumber-CpA3kMgp.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CpPe0RTB.js";import"./axisSelectors-DZkp_M3U.js";import"./d3-scale-pDPjkkGb.js";import"./index-SN9fh9yC.js";import"./index-7BXYpUCT.js";import"./renderedTicksSlice-kdcY3T7P.js";import"./index-D_RyOPxQ.js";import"./CartesianChart-DVi_4rZ_.js";import"./chartDataContext-D7DiZH02.js";import"./CategoricalChart-CzkgI-hR.js";import"./Layer-fj-XlG60.js";import"./AnimatedItems-DoL70GVg.js";import"./Label-jvSJhliV.js";import"./Text-x2aI-_E3.js";import"./DOMUtils-D953XyQL.js";import"./useId-C2k1DfII.js";import"./useBackwardsCompatibleTheme-Busncj89.js";import"./ZIndexLayer-ytwD_49s.js";import"./useAnimationId-Bh-TCZxX.js";import"./ActivePoints-BsSeTHgb.js";import"./Dot-BNIKPTnU.js";import"./types-BzWyleSx.js";import"./RegisterGraphicalItemId-DaFrO76U.js";import"./GraphicalItemClipPath-Gh_0CyLf.js";import"./SetGraphicalItem-CGh1GzJA.js";import"./getRadiusAndStrokeWidthFromDot-BNmcBPi1.js";import"./ActiveShapeUtils-D_rLTXV3.js";import"./Curve-DGBASg2P.js";import"./step-CrScPSNY.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-C973phhc.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
