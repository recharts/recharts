import{R as r}from"./iframe-DKDUQR4e.js";import{R as c}from"./zIndexSlice-aRYQG5Yn.js";import{C as d}from"./ComposedChart-CCmbfoN3.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Bbg7RtUT.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CZQWytra.js";import"./index-aMLVbRVP.js";import"./index-DFSigqQi.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CoYFUk2l.js";import"./isWellBehavedNumber-CmolPL3d.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CFbHWja9.js";import"./axisSelectors-CByMsFVX.js";import"./d3-scale-D08aSlXl.js";import"./index-DYLqyLpB.js";import"./index-DKbxb5pM.js";import"./renderedTicksSlice-C672n-_-.js";import"./index-gqnOst7j.js";import"./CartesianChart-C3BMrTr-.js";import"./chartDataContext-BTH-lGko.js";import"./CategoricalChart-DNyG6Cdr.js";import"./Layer-4AR486QQ.js";import"./AnimatedItems-BsWKOVBJ.js";import"./Label-CIwsUObl.js";import"./Text-BiZmy8Q_.js";import"./DOMUtils-DdCdIfAV.js";import"./useId-CIh7gguH.js";import"./useBackwardsCompatibleTheme-CrqKBooM.js";import"./ZIndexLayer-Cdmw8GXd.js";import"./useAnimationId-DdSCrHov.js";import"./ActivePoints-CCt2MIZg.js";import"./Dot-D2dES3Mc.js";import"./types-D2xbrN5O.js";import"./RegisterGraphicalItemId-DuhR9Fep.js";import"./GraphicalItemClipPath-BZD6-JFP.js";import"./SetGraphicalItem-BnsQpP5e.js";import"./getRadiusAndStrokeWidthFromDot-RqSgqbxV.js";import"./ActiveShapeUtils-DNb4gSFX.js";import"./Curve-CN5kBDOi.js";import"./step-C6ZJXuGC.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-Dy2kZYij.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
