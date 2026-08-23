import{R as r}from"./iframe-sd_X8bAz.js";import{R as c}from"./zIndexSlice-DbArepHL.js";import{C as d}from"./ComposedChart-CKHYOg18.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BmNM8kYZ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-2gz7Gpxn.js";import"./index-DQHeaU2g.js";import"./index-B4I4wfZA.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-bueunEgf.js";import"./isWellBehavedNumber-D-FFIB2G.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DMlKTkdw.js";import"./index-zmb0gbyG.js";import"./index-DZ983I6W.js";import"./axisSelectors-DssFyd1_.js";import"./d3-scale-C-KqVawR.js";import"./renderedTicksSlice-BaC5qXRY.js";import"./CartesianChart-BDbsS6IT.js";import"./chartDataContext-B6Fdiy4W.js";import"./CategoricalChart-Cqi_maR-.js";import"./Layer-D66jRg_t.js";import"./AnimatedItems-B5JWoVFx.js";import"./Label-BPdPutID.js";import"./Text-BxgHUkK-.js";import"./DOMUtils-koMSW9nS.js";import"./useId-D6dXaFl8.js";import"./useBackwardsCompatibleTheme-CIVTy4Me.js";import"./ZIndexLayer-DVaVbWL-.js";import"./useAnimationId-iF8C_Nzd.js";import"./ActivePoints-Bx0X1g0d.js";import"./Dot-JozVq32O.js";import"./types-BfsDnBCz.js";import"./RegisterGraphicalItemId-1K3qw_t6.js";import"./GraphicalItemClipPath-CoP9pSKP.js";import"./SetGraphicalItem-DN7uVNhv.js";import"./getRadiusAndStrokeWidthFromDot-Bvk01GUs.js";import"./ActiveShapeUtils-CFyZWuxn.js";import"./Curve-VFw1Cyl5.js";import"./step-SkwaH9zG.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-rD-nYf5o.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const pt=["CustomizedLabel"];export{t as CustomizedLabel,pt as __namedExportsOrder,at as default};
