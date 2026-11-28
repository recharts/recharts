import{R as t}from"./iframe-yFUZOAXo.js";import{z as a}from"./RechartsWrapper-Bghi6ZRK.js";import{R as p}from"./zIndexSlice-gBXHaIY6.js";import{C as n}from"./ComposedChart-CLIGRHzc.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DBwfQOxZ.js";import{X as l}from"./XAxis-VuWV4oHL.js";import{Y as h}from"./YAxis-Bm1MK_pl.js";import{L as c}from"./Legend-CuAsWV0B.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B2yJhwFE.js";import"./get-CjriyByo.js";import"./axisSelectors-EZDSIF5u.js";import"./redux-toolkit.esm-D_pQmptz.js";import"./index-CHzPnfIT.js";import"./index-5xbZMWg1.js";import"./polarAxisSelectors-CFbKEyZ8.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-BRWdQdSe.js";import"./index-PETS0UhS.js";import"./index-BK6Ilp-H.js";import"./renderedTicksSlice-CilCeieo.js";import"./index-CtXM72i0.js";import"./fillDefinitions-IzAh6C3K.js";import"./CartesianChart-C-z-JDjQ.js";import"./chartDataContext-BbJwl4x7.js";import"./CategoricalChart-D9q-ZVsT.js";import"./getRadiusAndStrokeWidthFromDot-a_asEMsX.js";import"./Layer-DccvzxoJ.js";import"./Curve-YzirgrH8.js";import"./types-DUCsLnxG.js";import"./step-BqjoQNYS.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-D7kCW6zO.js";import"./Label-C38PHRGq.js";import"./Text-gRe7KF5h.js";import"./ZIndexLayer-BFOdALhB.js";import"./ActivePoints-EuxxAYs7.js";import"./Dot-BxahtCeT.js";import"./activeStyles-DarVPLRL.js";import"./useAnimationId-JmfqkQro.js";import"./Symbols-BNaTe5h-.js";import"./symbol-qTHekaJz.js";import"./ErrorBarContext-Bka5ymRE.js";import"./SetGraphicalItem-ClWcTtiF.js";import"./ActiveShapeUtils-CycVwTKF.js";import"./useEffectiveDataKey-DPchhFnV.js";import"./CartesianAxis-Cl0edJ8g.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getUniqPayload-DAvcTrd6.js";import"./uniqBy-DOg5MgEB.js";import"./iteratee-BGJ_B21x.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
