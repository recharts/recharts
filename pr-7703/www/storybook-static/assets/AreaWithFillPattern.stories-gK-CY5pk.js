import{R as t}from"./iframe-COd9kUku.js";import{R as p}from"./zIndexSlice-BfP4v1bS.js";import{C as m}from"./ComposedChart-Vvr56aGu.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CeNueVjo.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-5ro8HE4Y.js";import"./index-COL2WR0f.js";import"./index-BSevdux3.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D_OJMKIx.js";import"./isWellBehavedNumber-Bypxk17g.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CqMN8AUr.js";import"./axisSelectors-i296AGH9.js";import"./d3-scale-uQ_gA658.js";import"./index-BJ9jwzw4.js";import"./index-5Vml1b2p.js";import"./renderedTicksSlice-CZAtvUE5.js";import"./index-RUiFmAll.js";import"./CartesianChart-DI_xXxUF.js";import"./chartDataContext-D64HN0cL.js";import"./CategoricalChart-Cy8ngVMI.js";import"./Layer-riiSoJFM.js";import"./AnimatedItems-RKe26m0b.js";import"./Label-BfhUPh9D.js";import"./Text-osvpinWz.js";import"./DOMUtils-csxZCivv.js";import"./useId-Cuf_ayBp.js";import"./useBackwardsCompatibleTheme-B805O1fX.js";import"./ZIndexLayer-06cimeo-.js";import"./useAnimationId-xpwU92YM.js";import"./ActivePoints-ZUmLEJxd.js";import"./Dot-DFTXaHC9.js";import"./types-5NhdCA1W.js";import"./RegisterGraphicalItemId-rqUDDANA.js";import"./GraphicalItemClipPath-DjJkXpBH.js";import"./SetGraphicalItem-Cdo5fsgn.js";import"./getRadiusAndStrokeWidthFromDot-BduJCXYw.js";import"./ActiveShapeUtils-vcId9Asm.js";import"./Curve-C2nwlVhI.js";import"./step-C5ZSArS6.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DhNgM9I4.js";const rt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
