import{R as t}from"./iframe-dnbYLFAD.js";import{R as p}from"./zIndexSlice-Tzq48rK3.js";import{C as m}from"./ComposedChart-CVfDUoKF.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-Cle0_KYg.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CrGf0NM1.js";import"./index-D5_wYljM.js";import"./index-EbTzNNy6.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DaDkCz04.js";import"./isWellBehavedNumber-B4er61T0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CUiYn_74.js";import"./axisSelectors-BxcK-66k.js";import"./d3-scale-DOYXtK-0.js";import"./index-C2tfzzVf.js";import"./index-BeP9odN1.js";import"./renderedTicksSlice-ByAoIIAo.js";import"./index-Dcl79aHz.js";import"./CartesianChart-l5SDlhyQ.js";import"./chartDataContext-kt33HbbB.js";import"./CategoricalChart-BIzQL4lC.js";import"./Layer-BJ7lSbQt.js";import"./AnimatedItems-CZJCXzZR.js";import"./Label-DfEdNEi7.js";import"./Text-BaKv6O4H.js";import"./DOMUtils-BtlArb_7.js";import"./useId-BZKwUvxw.js";import"./useBackwardsCompatibleTheme-QZyWgv_8.js";import"./ZIndexLayer-DjGyUWfd.js";import"./useAnimationId-p2irW4JC.js";import"./ActivePoints-D6BTfiYQ.js";import"./Dot-BOs-mB4N.js";import"./types-ryOPFJaw.js";import"./RegisterGraphicalItemId-BpbR-Lho.js";import"./GraphicalItemClipPath-DvPPmxSV.js";import"./SetGraphicalItem-BXaCF56M.js";import"./getRadiusAndStrokeWidthFromDot-BaTLVLjz.js";import"./ActiveShapeUtils-BbwV3h3t.js";import"./Curve-By68icMD.js";import"./step-Mew-CIDE.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-B2SStYkQ.js";const rt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <defs>
            <pattern id="left" width="12" height="4" patternUnits="userSpaceOnUse">
              <rect width="4" height="4" fill="#8884d8" />
            </pattern>
            <pattern id="right" width="8" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="4" height="4" fill="#82ca9d" />
            </pattern>
          </defs>
          <Area type="monotone" dataKey="x" stroke="#8884d8" fillOpacity={1} fill="url(#left)" />
          <Area type="monotone" dataKey="y" stroke="#82ca9d" fillOpacity={1} fill="url(#right)" />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const it=["FillPattern"];export{e as FillPattern,it as __namedExportsOrder,rt as default};
