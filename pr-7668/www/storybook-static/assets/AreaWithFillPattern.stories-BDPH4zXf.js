import{R as t}from"./iframe-CZFgSFnm.js";import{R as p}from"./zIndexSlice-CTISp4tv.js";import{C as m}from"./ComposedChart-DvkJAhLc.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DtbnDJpx.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DrSRHMPG.js";import"./index-DX3tFi2I.js";import"./index-BJs7iDzc.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-e55Twtbt.js";import"./isWellBehavedNumber-DUdaibLy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DvRLJ5Qk.js";import"./index-DYK-T1Xx.js";import"./index-CW1iMe2m.js";import"./axisSelectors-LF1AULtu.js";import"./d3-scale-Brc85VvE.js";import"./renderedTicksSlice-D-MBTj4C.js";import"./CartesianChart-PmCypDgu.js";import"./chartDataContext-CvAeifx3.js";import"./CategoricalChart-dvJV-_Rh.js";import"./Layer-C6R-wMgD.js";import"./AnimatedItems-DmVERa1o.js";import"./Label-CMeQeDmk.js";import"./Text-Dna8Rnzv.js";import"./DOMUtils-Ba5sbmYY.js";import"./useId-C0SVDnoD.js";import"./useBackwardsCompatibleTheme-xKYPlRvL.js";import"./ZIndexLayer-Xe1tLTY7.js";import"./useAnimationId-DM0V1ULk.js";import"./ActivePoints-B418SJ-y.js";import"./Dot-CWSN_a_c.js";import"./types-C_Z_MS2b.js";import"./RegisterGraphicalItemId-CA2MokDU.js";import"./GraphicalItemClipPath-BA_NbQWw.js";import"./SetGraphicalItem-DBiVF70L.js";import"./getRadiusAndStrokeWidthFromDot-195plUkS.js";import"./ActiveShapeUtils-CWrsW3HO.js";import"./Curve-BnTjqqkL.js";import"./step-CY8jqLlm.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DlwaWh21.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
