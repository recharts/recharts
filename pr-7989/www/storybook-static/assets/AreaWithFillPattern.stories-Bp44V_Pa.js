import{R as t}from"./iframe-VT8pQoe7.js";import{R as p}from"./zIndexSlice-DEK4NARd.js";import{C as m}from"./ComposedChart-DEL7m4Nl.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BTRMorFF.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DAkHgZkc.js";import"./index-dScKVoLs.js";import"./index-CiAsw9yg.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-aXzZoAdw.js";import"./isWellBehavedNumber-CWd9TGG5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C5t5FA9b.js";import"./axisSelectors-rzVbGAjY.js";import"./d3-scale-CNl0eHX-.js";import"./index-DaTNpRtK.js";import"./index-B3obxpbN.js";import"./renderedTicksSlice-BV0dqoNF.js";import"./index-BZU6X58j.js";import"./CartesianChart-D86ig2Qu.js";import"./chartDataContext-C-2DcCuQ.js";import"./CategoricalChart-xbuH4iHs.js";import"./Layer-C1VwbLrz.js";import"./activeStyles-XDL1Xm2T.js";import"./Label-CntNwugN.js";import"./Text-5GPWLOFl.js";import"./pageBackground-biSlCu9n.js";import"./useId-CUgdtS7Q.js";import"./useBackwardsCompatibleTheme-BVkaGEGO.js";import"./ZIndexLayer-BK4Sn8Ml.js";import"./useAnimationId-D_S6bHPT.js";import"./dataEntryStyles-D0zUo3h2.js";import"./ActivePoints-DbYtZgI1.js";import"./Dot-LKfGzrCm.js";import"./types-7pH1IAPS.js";import"./GraphicalItemClipPath-TTQOfMqQ.js";import"./SetGraphicalItem-B3Fmseum.js";import"./getRadiusAndStrokeWidthFromDot-B6XdCt_x.js";import"./ActiveShapeUtils-C3QPXajl.js";import"./Curve-BDSThsVb.js";import"./step-BpcsguCq.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-DiTGjvML.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
