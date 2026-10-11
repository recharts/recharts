import{R as t}from"./iframe-DIGZheBd.js";import{R as p}from"./zIndexSlice-_cU-ODvm.js";import{C as m}from"./ComposedChart-AI3knhdQ.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BeeDoZRF.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BSuBUnwb.js";import"./index-d4xmlami.js";import"./index-Ddn_7QMu.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-7SQuNWZq.js";import"./isWellBehavedNumber-DN4lRp81.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CZtBBFTk.js";import"./axisSelectors-D8SOTwsy.js";import"./d3-scale-DdurYsOp.js";import"./index-CQhVaGTX.js";import"./index-DhWUPbJL.js";import"./renderedTicksSlice-v8ZBDgTH.js";import"./index-CiMP-PEk.js";import"./CartesianChart-qIKAIThb.js";import"./chartDataContext-F14SePCT.js";import"./CategoricalChart-CmpWafRJ.js";import"./Layer-CyJKyehG.js";import"./activeStyles-BNdVOgR8.js";import"./Label-DdnBRnzY.js";import"./Text-OwXAxNhC.js";import"./pageBackground-CxPMNoKP.js";import"./useId-C_XdBO39.js";import"./useBackwardsCompatibleTheme-CVHM2al0.js";import"./ZIndexLayer-Csfe5z3g.js";import"./useAnimationId-ddL2Z7oo.js";import"./dataEntryStyles-B4e5hdgG.js";import"./ActivePoints-DCRcJ-JV.js";import"./Dot-Dr6-XXth.js";import"./types-MK9UFfTC.js";import"./GraphicalItemClipPath-DV_97DBL.js";import"./SetGraphicalItem-BLdBkmkm.js";import"./getRadiusAndStrokeWidthFromDot-CEhKuZ-K.js";import"./ActiveShapeUtils-Cn4dsa1I.js";import"./Curve-DTsvKbrn.js";import"./step-DnA-tUNV.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-DDZKQvTb.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
