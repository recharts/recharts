import{R as t}from"./iframe-Gg4ukcCI.js";import{R as p}from"./zIndexSlice-DlNyh_xi.js";import{C as m}from"./ComposedChart-C1UNd2GX.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BqnxD3_3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DhxEFOug.js";import"./throttle-CUgxKpyu.js";import"./index-C2HXgDT0.js";import"./index-CXFDGi8T.js";import"./RechartsWrapper-D9XD6s1l.js";import"./axisSelectors-a1SI1Wf4.js";import"./polarAxisSelectors-D8GOATX4.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Br8c0ClH.js";import"./index-HuopnsCQ.js";import"./index-BeAfusT4.js";import"./renderedTicksSlice-DvSqlga1.js";import"./index-BpeL0xzJ.js";import"./fillDefinitions-ihHkonIl.js";import"./CartesianChart-BjLEuFc_.js";import"./chartDataContext-CnuflyS8.js";import"./CategoricalChart-COQQ2eYQ.js";import"./getRadiusAndStrokeWidthFromDot-DvraL6JM.js";import"./Layer-BoT4M5vY.js";import"./dataEntryStyles-oHOQ7SK5.js";import"./Label-DdUKW8N3.js";import"./Text-b8eoKvTG.js";import"./ZIndexLayer-D5rwnqu2.js";import"./ActivePoints-BD-WR_m2.js";import"./Dot-KKWWgG3f.js";import"./types-BPcXCIuq.js";import"./activeStyles-tWC5f0r5.js";import"./useAnimationId-DNK2Kfuo.js";import"./Symbols-Dd8eQ8SU.js";import"./symbol-KoL4YSEk.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-_cwLqG8F.js";import"./ActiveShapeUtils-DuHRv64l.js";import"./Curve-EfD-yUMs.js";import"./step-ClUmF8Xf.js";import"./useEffectiveDataKey-DtjZjT7w.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,et as __namedExportsOrder,tt as default};
