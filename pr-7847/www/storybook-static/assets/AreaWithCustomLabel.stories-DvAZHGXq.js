import{R as r}from"./iframe-hd_pfHvo.js";import{R as c}from"./zIndexSlice-Dp2BKzs8.js";import{C as d}from"./ComposedChart-CLRu4YV9.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Cc0g1W3U.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C2q4COo1.js";import"./index-v0QewD8A.js";import"./index-SCBhOffb.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-drD7xYIQ.js";import"./isWellBehavedNumber-C1tuJPSP.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CyksNjdk.js";import"./axisSelectors-eHIx7hMS.js";import"./d3-scale-CciOkO_z.js";import"./index-C3NZEEPx.js";import"./index-Dl1k2Uag.js";import"./renderedTicksSlice-CD7ArbZx.js";import"./index-zFom7GTd.js";import"./CartesianChart-lsa6cjfM.js";import"./chartDataContext-BzYnwGm5.js";import"./CategoricalChart-DK0H-Nig.js";import"./Layer-egOiXfr6.js";import"./AnimatedItems-DCH1YBa_.js";import"./Label-DeYie9Lh.js";import"./Text-C6732HHA.js";import"./DOMUtils-B5fqbFU1.js";import"./useId-_Yta7G-c.js";import"./useBackwardsCompatibleTheme-SiYIdPDZ.js";import"./ZIndexLayer-BHjO29Bs.js";import"./useAnimationId-D0lfWmyy.js";import"./ActivePoints-DqLOTWDO.js";import"./Dot-D7no8cFh.js";import"./types-B1tRcN2v.js";import"./RegisterGraphicalItemId-_fhB3pIC.js";import"./GraphicalItemClipPath-Bsg-Zi-D.js";import"./SetGraphicalItem-CYmPmGcd.js";import"./getRadiusAndStrokeWidthFromDot-BcIv-0gg.js";import"./ActiveShapeUtils-BDpXGuZx.js";import"./Curve-MYVJeGQI.js";import"./step-C33N2LGT.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-hHj77cNE.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
