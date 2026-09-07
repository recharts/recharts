import{R as t}from"./iframe-CnWp8UDJ.js";import{R as p}from"./zIndexSlice-Bxeoa1fM.js";import{C as m}from"./ComposedChart-DhJ0H7PO.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-Cdi1SYuT.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-aLzKR_Gj.js";import"./index-39D9i7_F.js";import"./index-Data0V-G.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-omDmhEQP.js";import"./isWellBehavedNumber-B6aemPPP.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BLeW-6qK.js";import"./axisSelectors-LX60wKXF.js";import"./d3-scale-C7Jq6zIj.js";import"./index-gtYqs59B.js";import"./index-Dehtp_44.js";import"./renderedTicksSlice-BKgb7qhp.js";import"./index-Doynhu3_.js";import"./CartesianChart-DsDmw2jX.js";import"./chartDataContext-CO0CX1GC.js";import"./CategoricalChart-CM4dP2j4.js";import"./Layer-C_mDLxAs.js";import"./AnimatedItems-Dbq_Hz9T.js";import"./Label-WwV9YhCJ.js";import"./Text-B0OOyN3r.js";import"./DOMUtils-CiASkXFs.js";import"./useId-EGP6ZE8R.js";import"./useBackwardsCompatibleTheme-UXRLdwDp.js";import"./ZIndexLayer-BZ4idX5Z.js";import"./useAnimationId-Maj24DOj.js";import"./ActivePoints-C5ifQD97.js";import"./Dot-CVjhwEFH.js";import"./types-BIFao3Et.js";import"./RegisterGraphicalItemId-F3i4J8HM.js";import"./GraphicalItemClipPath-BoXmuKsm.js";import"./SetGraphicalItem-BDu63G4F.js";import"./getRadiusAndStrokeWidthFromDot-DT21Og_Z.js";import"./ActiveShapeUtils-BhVsu49r.js";import"./Curve-BQDaiCsn.js";import"./step-4VYt7eZC.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CTYaIKnf.js";const rt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},it=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,it as __namedExportsOrder,rt as default};
