import{R as t}from"./iframe-BvC_nX2I.js";import{z as p}from"./RechartsWrapper-YXBLwPUp.js";import{R as a}from"./zIndexSlice-Deux2KLj.js";import{C as n}from"./ComposedChart-D6o-RTOM.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DlYE1LdE.js";import{X as l}from"./XAxis-DJblgq_P.js";import{Y as h}from"./YAxis-Dnd7ECK6.js";import{L as c}from"./Legend-CiXsHN1E.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DT691zhh.js";import"./get-cF5BDHN6.js";import"./axisSelectors-D1Op89Ra.js";import"./throttle-CirueaOA.js";import"./index-CbvgqQkR.js";import"./index-C-6557Zz.js";import"./polarAxisSelectors-Bv7-VLAe.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-oQwuANVt.js";import"./index-CVNtrs8_.js";import"./index-Cthsl8Eg.js";import"./renderedTicksSlice-Bg6jRWvt.js";import"./index-C59oTpld.js";import"./CartesianChart-C1otsVa1.js";import"./ZIndexPortal-BgIvcEBP.js";import"./CategoricalChart-BNHZ2U_e.js";import"./Layer-BgbmxeTS.js";import"./Curve-Dwq2onbG.js";import"./fillDefinitions-CZGVPI6N.js";import"./pageBackground-BygNKisP.js";import"./types-CcK0_WR7.js";import"./step-MgrEs1-v.js";import"./path-DyVhHtw_.js";import"./LabelList-CRaDVB5f.js";import"./Label-CNqVbewr.js";import"./Text-3ao1DtcI.js";import"./DOMUtils-DlV8uPCF.js";import"./ZIndexLayer-CJcw2vh_.js";import"./ActivePoints-K5tloKEU.js";import"./Dot-B0BFGoSP.js";import"./activeStyles-D5yKyFeN.js";import"./useAnimationId-CfSQBeBZ.js";import"./dataEntryStyles-DH8AExSk.js";import"./Symbols-DHQWc_0k.js";import"./symbol-BOIFwd4y.js";import"./ErrorBarContext-p-ctGfT-.js";import"./SetGraphicalItem-P596Nxos.js";import"./getRadiusAndStrokeWidthFromDot-BvCb0Nrn.js";import"./ActiveShapeUtils-CHw2ZkCc.js";import"./useEffectiveDataKey-B9rISrD-.js";import"./CartesianAxis-CcuHoEVr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-C7rqP3X3.js";import"./uniqBy-BF0sKSrQ.js";import"./iteratee-B6a_e8WW.js";import"./isArguments-yB-y1yaH.js";const ft={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},o={name:"usePlotAreaExample",render:r=>t.createElement(a,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},yt=["UsePlotArea"];var e,i,m;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{o as UsePlotArea,yt as __namedExportsOrder,ft as default};
