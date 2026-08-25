import{R as t}from"./iframe-CkYMKdj_.js";import{R as p}from"./zIndexSlice-BYtB_o4a.js";import{C as m}from"./ComposedChart-aFeYXy0e.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-D8Jc6JqZ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BoLMdPdD.js";import"./index-C3dUdvXE.js";import"./index-DXIKdrQ_.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cash8-Wc.js";import"./isWellBehavedNumber-D3nu-dTg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-nO0TmJ-v.js";import"./index-E2SMYanO.js";import"./index-DL62tWXC.js";import"./axisSelectors-C8zY5_Jl.js";import"./d3-scale-DbX3n6Vg.js";import"./renderedTicksSlice-BQ9kQeWp.js";import"./CartesianChart-CFe3I3j0.js";import"./chartDataContext-B1d2oGRw.js";import"./CategoricalChart-ceXzvbTP.js";import"./Layer-DM-j75FJ.js";import"./AnimatedItems-DOwp1bhS.js";import"./Label-nwXUgC1e.js";import"./Text-DLxJgi7q.js";import"./DOMUtils-CRMwsydF.js";import"./useId-vngItXwU.js";import"./useBackwardsCompatibleTheme-BDT9ZxVM.js";import"./ZIndexLayer-CYcyrDOa.js";import"./useAnimationId-BMO_95FO.js";import"./ActivePoints-SNTIAa6X.js";import"./Dot-DTKTIC4o.js";import"./types-lWnA8D12.js";import"./RegisterGraphicalItemId-xAUQoTNg.js";import"./GraphicalItemClipPath-65lu28GO.js";import"./SetGraphicalItem-BDY3wpRw.js";import"./getRadiusAndStrokeWidthFromDot-B4vOHjlt.js";import"./ActiveShapeUtils-DdvFeJee.js";import"./Curve-BKPB57y0.js";import"./step-CVVw7_T2.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DtWqI1-3.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
