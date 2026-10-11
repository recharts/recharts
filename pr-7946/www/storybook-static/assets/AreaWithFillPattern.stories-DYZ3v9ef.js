import{R as t}from"./iframe-Cz1yxjbp.js";import{R as p}from"./zIndexSlice-DX3VWAAP.js";import{C as m}from"./ComposedChart-B3FIpviW.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-C-N5jBxs.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C8kMLDgG.js";import"./index-Dy-7Z4OS.js";import"./index-BeLMDhbN.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C4uWhlBE.js";import"./isWellBehavedNumber-DJ2sQW5i.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DNAVCaGG.js";import"./axisSelectors-aNzSC39T.js";import"./d3-scale-DcjoLk-1.js";import"./index-Cvw52HpG.js";import"./index-CrhYCmzz.js";import"./renderedTicksSlice-B4zhNEhU.js";import"./index-BH1YgSAq.js";import"./CartesianChart-Bs3sClFN.js";import"./chartDataContext-D9TeAJoj.js";import"./CategoricalChart-L3mAew-j.js";import"./Layer-DX0-A7eX.js";import"./activeStyles-DBmoV7wT.js";import"./Label-CKYWHIAB.js";import"./Text-Ct14p3WC.js";import"./pageBackground-Aluj06Yi.js";import"./useId-BgDV8Bbk.js";import"./useBackwardsCompatibleTheme-DMuqWF8p.js";import"./ZIndexLayer-CpvAEusS.js";import"./useAnimationId-Bstcgfr3.js";import"./dataEntryStyles-Cvogs2XX.js";import"./ActivePoints-fNvRWKnn.js";import"./Dot-FtP_Pc_K.js";import"./types-CaS-TM-K.js";import"./GraphicalItemClipPath-C4RVkUJq.js";import"./SetGraphicalItem-DcIBNzJU.js";import"./getRadiusAndStrokeWidthFromDot-CVKuJNBK.js";import"./ActiveShapeUtils-TTXriytS.js";import"./Curve-BuFNKnyX.js";import"./step-BxjwmJ_I.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-D9IvhHId.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
