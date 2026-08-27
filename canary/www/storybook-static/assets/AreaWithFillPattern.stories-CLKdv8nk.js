import{R as t}from"./iframe-DGsKi3sD.js";import{R as p}from"./zIndexSlice-KX0_yctO.js";import{C as m}from"./ComposedChart-ZhGI63Ch.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CQ4xYBBJ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DCh63S7N.js";import"./index-Dco7y41f.js";import"./index-Bp6gYlCO.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-WH78MRVQ.js";import"./isWellBehavedNumber-O5p8iLqQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DYCPiSo2.js";import"./axisSelectors-DtyBM-5t.js";import"./d3-scale-D5k0CP0B.js";import"./index-BcRP16iL.js";import"./index-C3o7ztbZ.js";import"./renderedTicksSlice-BV6OKQcy.js";import"./index-BUKcBCac.js";import"./CartesianChart-DqPq6dfa.js";import"./chartDataContext-YSpCe_4G.js";import"./CategoricalChart-kDHsGv00.js";import"./Layer-BEEnYnIh.js";import"./AnimatedItems-oaPm5uVb.js";import"./Label-kB9Gr9Je.js";import"./Text-ChCNWouT.js";import"./DOMUtils-Bj-nNPQP.js";import"./useId-DbfF67AC.js";import"./useBackwardsCompatibleTheme-CdHfIa1f.js";import"./ZIndexLayer-C-hUG3-A.js";import"./useAnimationId-CpfROKBj.js";import"./ActivePoints-ALRvVDi0.js";import"./Dot-BfPTVnro.js";import"./types-BYQ55WzM.js";import"./RegisterGraphicalItemId-Ci3kKosu.js";import"./GraphicalItemClipPath-DAhebsqX.js";import"./SetGraphicalItem-TmtzSo0n.js";import"./getRadiusAndStrokeWidthFromDot-D62b7kUR.js";import"./ActiveShapeUtils-D1-7_dRK.js";import"./Curve-Jm82kUWT.js";import"./step-B-VK-dxT.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-C4ge5-Nz.js";const rt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
