import{R as t}from"./iframe-FwppTpHM.js";import{R as p}from"./zIndexSlice-Cdyw1_Nw.js";import{C as m}from"./ComposedChart-B8bgAvdx.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-D-SbpP9V.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DynP12Or.js";import"./index-CTPoMXid.js";import"./index-C7fIk2L2.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dg1uW6dq.js";import"./isWellBehavedNumber-BtAr22s4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dkm03yWw.js";import"./axisSelectors-CYDcyh2t.js";import"./d3-scale-CvbHukpk.js";import"./index-j_zzBaKn.js";import"./index-CjtLyLD1.js";import"./renderedTicksSlice-CFwd7tbS.js";import"./index-BJCItLgT.js";import"./CartesianChart-C3hX79Jh.js";import"./chartDataContext-Cg_fY9Ny.js";import"./CategoricalChart-fXjCF4k1.js";import"./Layer-RexR8ZVM.js";import"./activeStyles-BjBEPVwb.js";import"./Label-CAlmg9Ax.js";import"./Text-BHYGaRJX.js";import"./pageBackground-b_qu_h6D.js";import"./useId-BHaTovYI.js";import"./useBackwardsCompatibleTheme-C6cobGh6.js";import"./ZIndexLayer-DRZokez8.js";import"./useAnimationId-C9td6Uok.js";import"./dataEntryStyles-DQ6Q68IL.js";import"./ActivePoints-Dq2ONYdH.js";import"./Dot-DDum5Zjk.js";import"./types-X--Y4OUw.js";import"./GraphicalItemClipPath-DQPgZbCX.js";import"./SetGraphicalItem-y_hedEIa.js";import"./getRadiusAndStrokeWidthFromDot-C9HuDRcP.js";import"./ActiveShapeUtils-DfcLFOOu.js";import"./Curve-DWgCdSwb.js";import"./step-CMSN2AEQ.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-edM5h020.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
