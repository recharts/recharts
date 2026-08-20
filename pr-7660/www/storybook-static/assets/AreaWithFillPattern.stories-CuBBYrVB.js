import{R as t}from"./iframe-DsANpUmI.js";import{R as p}from"./zIndexSlice-DvbQ_xRM.js";import{C as m}from"./ComposedChart-CC1tviS_.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-A9wsEu38.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-vYgBP45f.js";import"./index-DLEQ2NY5.js";import"./index-D3xqrgS8.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-VCXcnZ86.js";import"./isWellBehavedNumber-Dg3vRfwI.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BDrHj0U2.js";import"./index-5L0AuTID.js";import"./index-BNBrr31l.js";import"./axisSelectors-B-1KrEKd.js";import"./d3-scale-_QauBjGX.js";import"./renderedTicksSlice-BUDGobd4.js";import"./CartesianChart-Cwf-uiEG.js";import"./chartDataContext-C2aYZmpD.js";import"./CategoricalChart-Di7Ri-zj.js";import"./Layer-DYWDW_71.js";import"./AnimatedItems-rVlz1FJX.js";import"./Label-B4DeKwN7.js";import"./Text-CjTSiniW.js";import"./DOMUtils-kNujPIKB.js";import"./useId-B0Q44yTc.js";import"./useBackwardsCompatibleTheme-BBpmGxx6.js";import"./ZIndexLayer-MPr2tp5c.js";import"./useAnimationId-DetthuUW.js";import"./ActivePoints-B0q4xgtH.js";import"./Dot-DxPtGh3x.js";import"./types-CnYkNLV_.js";import"./RegisterGraphicalItemId-Cpe7Zv2c.js";import"./GraphicalItemClipPath-YjZkau9w.js";import"./SetGraphicalItem-BGt3myf-.js";import"./getRadiusAndStrokeWidthFromDot-Dxn9p5np.js";import"./ActiveShapeUtils-nZLcFoMw.js";import"./Curve-CRdwjUaH.js";import"./step-BYrDDVtV.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors--ZUkVueJ.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
