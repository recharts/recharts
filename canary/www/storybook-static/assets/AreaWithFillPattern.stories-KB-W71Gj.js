import{R as t}from"./iframe-DnFxx7IH.js";import{R as p}from"./zIndexSlice-DMQesRjL.js";import{C as m}from"./ComposedChart-nZqnVWXT.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CDSN85Rp.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D9ypYn8O.js";import"./index-rcoyIDVk.js";import"./index-Brqhvl0Y.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BrQSc28h.js";import"./isWellBehavedNumber-DwCdsfaa.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BEVhWh0t.js";import"./index-GUUQK7eb.js";import"./index-CAdU6H6S.js";import"./axisSelectors-5k6UVVXW.js";import"./d3-scale-Bs_R4IxC.js";import"./renderedTicksSlice-D0pYs9KP.js";import"./CartesianChart-DEdd4Z6y.js";import"./chartDataContext-DJs6EXfK.js";import"./CategoricalChart-DJUCMkjn.js";import"./Layer-D_Gfp3eA.js";import"./AnimatedItems-C4h-Xaxi.js";import"./Label--8_ga_Yz.js";import"./Text-DMuBrTIK.js";import"./DOMUtils-L7csA6Z4.js";import"./useId-DrpNe8Nn.js";import"./useBackwardsCompatibleTheme-DDCq5JLw.js";import"./ZIndexLayer-DWUDk33_.js";import"./useAnimationId-CvbAXd24.js";import"./ActivePoints-6Gybe8Hc.js";import"./Dot-CMt5bDBr.js";import"./types-BDVRIOHN.js";import"./RegisterGraphicalItemId-CKqNw0Tr.js";import"./GraphicalItemClipPath-Cr1fTws_.js";import"./SetGraphicalItem-BEKqBC8O.js";import"./getRadiusAndStrokeWidthFromDot-Dzo4OknT.js";import"./ActiveShapeUtils-DMhAfvBj.js";import"./Curve-J32t11pu.js";import"./step-Bso1aipe.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Qui8nPll.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const rt=["FillPattern"];export{e as FillPattern,rt as __namedExportsOrder,et as default};
