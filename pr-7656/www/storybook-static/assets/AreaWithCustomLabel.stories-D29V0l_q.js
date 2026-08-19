import{R as r}from"./iframe-r_02-Jx1.js";import{R as c}from"./zIndexSlice-DicCmdef.js";import{C as d}from"./ComposedChart-RzNAfe4m.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Bm_CzmuT.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BdAdSRQA.js";import"./index-1kThdQ6e.js";import"./index-wzqytK4Q.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DyxRtFzB.js";import"./isWellBehavedNumber-CBLlozNg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BQFxUNUu.js";import"./index-N0rIL4Gt.js";import"./index-3jrDyBev.js";import"./axisSelectors-Dk3JE-i1.js";import"./d3-scale-ZwXuuq5P.js";import"./renderedTicksSlice-DFasVLMR.js";import"./CartesianChart-BGJHdGBf.js";import"./chartDataContext-BdayT2-p.js";import"./CategoricalChart-BXr2d9-i.js";import"./Layer-dybzDHm9.js";import"./AnimatedItems-CW8FYpXu.js";import"./Label-CNQryUt-.js";import"./Text-DCZHyyNe.js";import"./DOMUtils-BlgfTScp.js";import"./useBackwardsCompatibleTheme-WaqTwaFy.js";import"./ZIndexLayer-DmaqXjfN.js";import"./useAnimationId-R3ZNERdL.js";import"./ActivePoints-B4uNP6Ql.js";import"./Dot-CPXaMvXV.js";import"./types-DPBZ02ip.js";import"./RegisterGraphicalItemId-BP1XikYq.js";import"./GraphicalItemClipPath-D_fliYIp.js";import"./SetGraphicalItem-ByUdxl3U.js";import"./getRadiusAndStrokeWidthFromDot-CrfZ4miq.js";import"./ActiveShapeUtils-BgiK615A.js";import"./Curve-BS9D-rBh.js";import"./step-CkxDYVc4.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CJZHVbEk.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const mt=["CustomizedLabel"];export{t as CustomizedLabel,mt as __namedExportsOrder,at as default};
