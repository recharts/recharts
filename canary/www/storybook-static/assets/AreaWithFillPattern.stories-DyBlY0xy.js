import{R as t}from"./iframe-C55y8OzM.js";import{R as p}from"./zIndexSlice-mi5wuovt.js";import{C as m}from"./ComposedChart-DsJNQyNb.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CWqegKST.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-zPKptILV.js";import"./index-B1erB4OF.js";import"./index-Bbw2aGRN.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cgrl3e7D.js";import"./isWellBehavedNumber-mxdqJrTq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DsEVXtD9.js";import"./axisSelectors-DyDkozWt.js";import"./d3-scale-CwLPJ1sG.js";import"./index-kqQD3Gpu.js";import"./index-DnfvrK_t.js";import"./renderedTicksSlice-BczpgcuJ.js";import"./index-Dykf-EVS.js";import"./CartesianChart-HAuDRHmx.js";import"./chartDataContext-DnaKmrEK.js";import"./CategoricalChart-BdM0esTK.js";import"./Layer-D0VzgPFA.js";import"./activeStyles-DVnALFej.js";import"./Label-BceBwSRN.js";import"./Text-BSBFwZ1P.js";import"./pageBackground-D6U7S1qf.js";import"./useId-XdK2U0Ar.js";import"./useBackwardsCompatibleTheme-B8dADBlT.js";import"./ZIndexLayer-BdI7uft_.js";import"./useAnimationId-4Vo2vEHF.js";import"./dataEntryStyles-Cic1JpuQ.js";import"./ActivePoints-B8YNryID.js";import"./Dot-Co-mG1jW.js";import"./types-BjarwEzr.js";import"./GraphicalItemClipPath-BHQAz3ae.js";import"./SetGraphicalItem-PlWMyb2e.js";import"./getRadiusAndStrokeWidthFromDot-D-jKdLSh.js";import"./ActiveShapeUtils-7zk5n9mh.js";import"./Curve-B6Vmc8K0.js";import"./step-CWyhxLD0.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-BY6K7cit.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
