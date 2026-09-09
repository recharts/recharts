import{R as t}from"./iframe-DFG5UB_B.js";import{R as p}from"./zIndexSlice-BfnucyES.js";import{C as m}from"./ComposedChart-DvBb4g9X.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BPvEvumh.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-8CKkbV4u.js";import"./index-CvfO2mCp.js";import"./index-DZ38vEa6.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BatIk00Z.js";import"./isWellBehavedNumber-LLrASzdJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B6oLib6N.js";import"./axisSelectors-THUDlcaK.js";import"./d3-scale-CVPVhJLx.js";import"./index-DPl35esh.js";import"./index-CFKpipae.js";import"./renderedTicksSlice-BAoPBO0b.js";import"./index-Bx8tOa6m.js";import"./CartesianChart-CyJda43K.js";import"./chartDataContext-CMj3DEnW.js";import"./CategoricalChart-DoM1RUNO.js";import"./Layer-CTQ0XvXO.js";import"./AnimatedItems-DaUsoCvA.js";import"./Label-BlYeas0v.js";import"./Text-CeNXkw59.js";import"./DOMUtils-BhwdevaN.js";import"./useId-s4zjQZaU.js";import"./useBackwardsCompatibleTheme-CQyv0Qul.js";import"./ZIndexLayer-BhF6Z1GT.js";import"./useAnimationId-DtAgjjoV.js";import"./ActivePoints-DcPgsYfH.js";import"./Dot-DokBxO_D.js";import"./types-DcAH2tiO.js";import"./RegisterGraphicalItemId-7hocZulP.js";import"./GraphicalItemClipPath-Dn5pirN6.js";import"./SetGraphicalItem-B5Jco2Ub.js";import"./getRadiusAndStrokeWidthFromDot-BtIvPgrq.js";import"./ActiveShapeUtils-BBhCvNS_.js";import"./Curve-D7P2ouTL.js";import"./step-Cpq8yTJq.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-D1Y6AxtT.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,rt as __namedExportsOrder,et as default};
