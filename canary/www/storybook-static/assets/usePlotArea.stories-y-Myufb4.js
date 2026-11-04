import{R as t}from"./iframe-G0Ik9O6t.js";import{z as a}from"./RechartsWrapper-C0SK3-tY.js";import{R as p}from"./zIndexSlice-CYnNRWxE.js";import{C as n}from"./ComposedChart-B4cIjG4K.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-umGGBS5k.js";import{X as l}from"./XAxis-CWTgMLCK.js";import{Y as h}from"./YAxis-CryECj4R.js";import{L as c}from"./Legend-d7TBOIw0.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-6jYqE8VH.js";import"./get-cF5BDHN6.js";import"./axisSelectors-D9yir6Xs.js";import"./throttle-0RzAOwSl.js";import"./index-DJn7_RRX.js";import"./index-BSx-eOuX.js";import"./polarAxisSelectors-DbTpX6rz.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B1oMv4d2.js";import"./index-CZjz2J7d.js";import"./index-CrEwjtpS.js";import"./renderedTicksSlice-DJGvkPcQ.js";import"./index-yaYz5_hL.js";import"./fillDefinitions-DtfSekMJ.js";import"./CartesianChart-D9yJCYyl.js";import"./ZIndexPortal-DXabDpK4.js";import"./CategoricalChart-62rauA-s.js";import"./Layer-DsYtJDK_.js";import"./Curve-BM_Sw2Bx.js";import"./types-D7lN_jRq.js";import"./step-CKk5L9t9.js";import"./path-DyVhHtw_.js";import"./LabelList-Bc94H-h2.js";import"./Label-CylpphjQ.js";import"./Text-B4HlcW6K.js";import"./DOMUtils-BLMelfj-.js";import"./ZIndexLayer-rUK8h3YF.js";import"./ActivePoints-DtZW7fDP.js";import"./Dot-CCKVvK0p.js";import"./activeStyles-BHukLnjd.js";import"./useAnimationId-BSSTqixR.js";import"./dataEntryStyles-C4cqIMlE.js";import"./Symbols-DuXBDnMk.js";import"./symbol-D_Su1EIX.js";import"./ErrorBarContext-BMXI6Vn7.js";import"./SetGraphicalItem-CbwdoUqN.js";import"./getRadiusAndStrokeWidthFromDot-BGcbbY8R.js";import"./ActiveShapeUtils-BT1ALZoA.js";import"./useEffectiveDataKey-DGTKBWN-.js";import"./CartesianAxis-CcGZ5e89.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-Cix9UpUK.js";import"./uniqBy-CkgI_JIc.js";import"./iteratee-lKPQ2sEZ.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
