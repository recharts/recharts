import{R as t}from"./iframe-Dt7VmJVd.js";import{z as a}from"./RechartsWrapper-DmetyJsw.js";import{R as p}from"./zIndexSlice-CsJRlQGe.js";import{C as n}from"./ComposedChart-BEVdjL9z.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-NbDON0kK.js";import{X as l}from"./XAxis-6DHVILmw.js";import{Y as h}from"./YAxis-BGz_S1YP.js";import{L as c}from"./Legend-YTTvCKln.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D90LOu0B.js";import"./get-CjriyByo.js";import"./axisSelectors-DsQjGGXt.js";import"./throttle-DKLEp5Cv.js";import"./index-DIUBesy2.js";import"./index-r5JwRAUa.js";import"./polarAxisSelectors-CfQ5T7pN.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-DKSFl2hd.js";import"./index-L0jXhzhq.js";import"./index-4O_IsFKD.js";import"./renderedTicksSlice-Dq9RCDmE.js";import"./index-CJYqS20C.js";import"./fillDefinitions-cJ_Pkre2.js";import"./CartesianChart-DLv9S8DO.js";import"./chartDataContext-DwcTyBcz.js";import"./CategoricalChart-DfxrMEj6.js";import"./getRadiusAndStrokeWidthFromDot-Gis92voa.js";import"./Layer-CKqAbqeS.js";import"./Curve-zF9ULVmH.js";import"./types-D6xyOnmX.js";import"./step-C8vG3ka0.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-BTAsZYzb.js";import"./Label-DBOYMKjR.js";import"./Text-CcewevJy.js";import"./ZIndexLayer-DkTMeL_u.js";import"./ActivePoints-rxDVwUzw.js";import"./Dot-BNusXcbA.js";import"./activeStyles-CXzu6olF.js";import"./useAnimationId-CZxgU6AP.js";import"./Symbols-CEcN4H71.js";import"./symbol-BNyIiosb.js";import"./ErrorBarContext-BfQEnsTO.js";import"./SetGraphicalItem-meI4aCtS.js";import"./ActiveShapeUtils-Boj2HH09.js";import"./useEffectiveDataKey-DfkEl2f7.js";import"./CartesianAxis-D2lewiOd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-D-hWuImz.js";import"./uniqBy-DBz81KvG.js";import"./iteratee-Csv0o0lQ.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ut as __namedExportsOrder,gt as default};
