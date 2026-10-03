import{R as r}from"./iframe-BUclCYGi.js";import{R as c}from"./zIndexSlice-Cw_uenFh.js";import{C as d}from"./ComposedChart-_Z_eYeqh.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DafDKuok.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-SXE1z9w6.js";import"./index-Bn5su_0t.js";import"./index-BQEsNi1X.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CDaHLq6V.js";import"./isWellBehavedNumber-DhRe89GX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DwnYFdtG.js";import"./axisSelectors-D1NJ4aqF.js";import"./d3-scale-BmoaGtPl.js";import"./index-ChGyrwHq.js";import"./index-gTT2X1bJ.js";import"./renderedTicksSlice-BS7nbOgQ.js";import"./index-BsSpSNv1.js";import"./CartesianChart-C6YloXmX.js";import"./chartDataContext-RCVSOfKr.js";import"./CategoricalChart-mNhIGUHY.js";import"./Layer-DDGYJVwv.js";import"./AnimatedItems-BNylu8US.js";import"./Label-BB58AW_H.js";import"./Text-CMwjB0Gb.js";import"./DOMUtils-CDNaNL9M.js";import"./useId-Cf0k-OMu.js";import"./useBackwardsCompatibleTheme-D2gq_Aw8.js";import"./ZIndexLayer-tXuqEnu1.js";import"./useAnimationId-CydbYcnQ.js";import"./ActivePoints-C2LY5I7a.js";import"./Dot-DxUjT08J.js";import"./types-aN_pljKn.js";import"./RegisterGraphicalItemId-BqK8bbcf.js";import"./GraphicalItemClipPath-DAWuVc0K.js";import"./SetGraphicalItem-DrDTFijX.js";import"./getRadiusAndStrokeWidthFromDot-CFQbdYts.js";import"./ActiveShapeUtils-CW3_54sQ.js";import"./Curve--oo5YHjc.js";import"./step-CfDvQFtP.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-DY8lhZ2G.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
