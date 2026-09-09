import{R as t}from"./iframe-D0hbihpw.js";import{R as p}from"./zIndexSlice-BQR9Og2n.js";import{C as m}from"./ComposedChart-DG9EmM0m.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DjjpT9HS.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DvTX4uc0.js";import"./index-BZ9qdzrn.js";import"./index-Dh99j1-7.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dmu88e8o.js";import"./isWellBehavedNumber-CZhc5lub.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CXRkLc1K.js";import"./axisSelectors-Va6d-v4h.js";import"./d3-scale-O8h2L0ph.js";import"./index-DrgC61Jv.js";import"./index-8bi5BFX5.js";import"./renderedTicksSlice-CXB8MRbw.js";import"./index-BDFJggKj.js";import"./CartesianChart-V6lubhpa.js";import"./chartDataContext-DAXrP6D1.js";import"./CategoricalChart-Byua6Cow.js";import"./Layer-DikASeyh.js";import"./AnimatedItems-SbRPQVaD.js";import"./Label-CuFmC-Nb.js";import"./Text-CuYqG2IB.js";import"./DOMUtils-pnmg3tR-.js";import"./useId-CqMWBNZ1.js";import"./useBackwardsCompatibleTheme-BB_m6SGU.js";import"./ZIndexLayer-J_UAcRhh.js";import"./useAnimationId-qESP7nT-.js";import"./ActivePoints-CEQslcDp.js";import"./Dot-bpGHDnlK.js";import"./types-C5BTVxoc.js";import"./RegisterGraphicalItemId-DeHO2KGG.js";import"./GraphicalItemClipPath-BlTfPWVo.js";import"./SetGraphicalItem-DqlrOVj_.js";import"./getRadiusAndStrokeWidthFromDot-DEVmJr6b.js";import"./ActiveShapeUtils-5v_sCHFD.js";import"./Curve-ar9QbNVF.js";import"./step-DPrNd-pa.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DmsrIOc1.js";const rt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},it=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
