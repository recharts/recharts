import{R as t}from"./iframe-Cb2PTRZu.js";import{R as p}from"./zIndexSlice-BOcdwE9B.js";import{C as m}from"./ComposedChart-B38G4g5a.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BboXBMrv.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-3iOH7y6s.js";import"./index-CgcevczK.js";import"./index-D3ECOqH8.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-38f2qAXo.js";import"./isWellBehavedNumber-DqADXXOT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DJJRHEYU.js";import"./axisSelectors-YCR54JUg.js";import"./d3-scale-BEDYL0lJ.js";import"./index-sJmnv_Ao.js";import"./index-BHmwOcB9.js";import"./renderedTicksSlice-CGIalbK2.js";import"./index-DnXVLer0.js";import"./CartesianChart-bwFjxITE.js";import"./chartDataContext-DEoJ-_XA.js";import"./CategoricalChart-yk48FjSr.js";import"./Layer-CYH1X6I5.js";import"./activeStyles-utpSO3wr.js";import"./Label-60x-b7-u.js";import"./Text-D_NeQFRY.js";import"./pageBackground-Bn3yH5Mf.js";import"./useId-7AGdzjEK.js";import"./useBackwardsCompatibleTheme-DVeueyf3.js";import"./ZIndexLayer-CMs0nKoK.js";import"./dataEntryStyles-BA7za2_q.js";import"./useAnimationId-BSibkTQy.js";import"./ActivePoints-BINdFJVn.js";import"./Dot-CdjxtqZf.js";import"./types-A7qt-X3A.js";import"./RegisterGraphicalItemId-B9ytj1I9.js";import"./SetGraphicalItem-DtRHo2_o.js";import"./getRadiusAndStrokeWidthFromDot-iL1mBvr8.js";import"./ActiveShapeUtils-BmjVX6xw.js";import"./Curve-CXzUSEYX.js";import"./step-D0d2-Qo8.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-Me0QsLaT.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
