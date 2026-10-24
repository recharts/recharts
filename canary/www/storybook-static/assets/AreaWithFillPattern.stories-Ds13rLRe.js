import{R as t}from"./iframe-Bibrvi93.js";import{R as p}from"./zIndexSlice-IRdU2Eq4.js";import{C as m}from"./ComposedChart-BDBh58IM.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-5Vl_29LF.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BYyvulfq.js";import"./index-DMM3MhtL.js";import"./index-30mt-Xh2.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DuLA9rob.js";import"./isWellBehavedNumber-DEJNr0Qw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bt5qeROs.js";import"./axisSelectors-DSlGSk_i.js";import"./d3-scale-Cv38ge3f.js";import"./index-DWooAmJS.js";import"./index-DnZq9tde.js";import"./renderedTicksSlice-B9WL6t6z.js";import"./index-BJXhTZS7.js";import"./CartesianChart-CEqCUP4y.js";import"./chartDataContext-uGfw2Upg.js";import"./CategoricalChart-DFHR8N3d.js";import"./Layer-DE86HNiB.js";import"./activeStyles-DrZDHncN.js";import"./Label-cYp5UoGe.js";import"./Text-BO_ppYYl.js";import"./pageBackground-XzqliJgP.js";import"./useId-BgICeW4-.js";import"./useBackwardsCompatibleTheme-DU3b-TNc.js";import"./ZIndexLayer-CR2StRvF.js";import"./dataEntryStyles-DDDSAcpo.js";import"./useAnimationId-CyOwunze.js";import"./ActivePoints-BrjJnJ33.js";import"./Dot-DajOJSdD.js";import"./types-Bq4foVci.js";import"./RegisterGraphicalItemId-Cbm3m_DF.js";import"./SetGraphicalItem-CE5ARGmx.js";import"./getRadiusAndStrokeWidthFromDot-CuI68Hzl.js";import"./ActiveShapeUtils-D9IZw5gW.js";import"./Curve-CMNJVVoM.js";import"./step-CRsn2MAq.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-BbVSYZl7.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
