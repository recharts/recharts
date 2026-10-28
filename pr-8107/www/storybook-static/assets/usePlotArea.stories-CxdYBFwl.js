import{R as t}from"./iframe-CFREJgKh.js";import{z as a}from"./RechartsWrapper-i5dbrXIz.js";import{R as p}from"./zIndexSlice-BlChPiJc.js";import{C as n}from"./ComposedChart-BHYrkphp.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-RQeT_xTt.js";import{X as l}from"./XAxis-C8rslJeD.js";import{Y as h}from"./YAxis-BpqGKlEV.js";import{L as c}from"./Legend-RpMQdupJ.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D2NJN12P.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BWBf8JbO.js";import"./throttle-D0fuDWYv.js";import"./index-BnRinVhV.js";import"./index-9ppQqeZ5.js";import"./polarAxisSelectors-U9vqJLN4.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CSfabLms.js";import"./index-DNbnfthz.js";import"./index-CXWxUzol.js";import"./renderedTicksSlice-BlPhjOzM.js";import"./index-BMrIm2ob.js";import"./CartesianChart-DKqxdz5e.js";import"./ZIndexPortal-CxkIiCll.js";import"./CategoricalChart-wyRiJqKi.js";import"./Layer-C0qOZ959.js";import"./Curve-CftG2h3G.js";import"./types-DVbjgkU5.js";import"./step-BcalNNwl.js";import"./path-DyVhHtw_.js";import"./LabelList-D_a5qFT1.js";import"./Label-CqB5IeGz.js";import"./Text-CdYm4waL.js";import"./pageBackground-BhcEVreL.js";import"./ZIndexLayer-C1WGeCae.js";import"./ActivePoints-C0jpDbhM.js";import"./Dot-CbZEK9HK.js";import"./activeStyles-DZOohqxv.js";import"./useAnimationId-D_reCqg_.js";import"./dataEntryStyles-D-tUw7To.js";import"./Symbols-C448CvWL.js";import"./symbol-nJMR8kbN.js";import"./ErrorBarContext-Ckc5teto.js";import"./SetGraphicalItem-DdrEYt3d.js";import"./getRadiusAndStrokeWidthFromDot-C8BFWNtM.js";import"./ActiveShapeUtils-D0KAMjVA.js";import"./useEffectiveDataKey-D5PSAWPt.js";import"./CartesianAxis-DYae0Cq3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-D9x3IcJV.js";import"./uniqBy-DeAafqXU.js";import"./iteratee-iRN6k7X2.js";import"./isArguments-yB-y1yaH.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},At=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,At as __namedExportsOrder,ut as default};
