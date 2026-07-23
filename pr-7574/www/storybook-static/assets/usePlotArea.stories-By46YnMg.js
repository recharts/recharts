import{R as t}from"./iframe-BJ6rGQc6.js";import{u as a}from"./CategoricalChart-BQ-Zgg5z.js";import{R as p}from"./zIndexSlice-BthxejHI.js";import{C as s}from"./ComposedChart-DAq7OREE.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DLjakGIl.js";import{X as l}from"./XAxis-DjB4BtKv.js";import{Y as h}from"./YAxis-41-XvzNM.js";import{L as c}from"./Legend-wOgvA1JX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-ChNksolv.js";import"./index-mopUcmNZ.js";import"./index-Bmr20IMW.js";import"./index-BmNs2kCE.js";import"./index-CByH2eT_.js";import"./throttle-cNz-OreL.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-C0Y7ZKTU.js";import"./axisSelectors-BLC4H6fV.js";import"./resolveDefaultProps-BO6O7yzj.js";import"./isWellBehavedNumber-DPc5CIJW.js";import"./d3-scale-DN-uWHg9.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bgx90lkE.js";import"./chartDataContext-sqlI8BYS.js";import"./Layer-CWFT9o_4.js";import"./Curve-BjFMHVU-.js";import"./types-C1lw_8rt.js";import"./step-D3keTh0D.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DC-H_ZkC.js";import"./Label-GAUKfLbl.js";import"./Text-B3HJfVNK.js";import"./DOMUtils-B9FEHnPQ.js";import"./ZIndexLayer-Ux9EkA8k.js";import"./useAnimationId-DQh6YXIz.js";import"./ActivePoints-BWSLTzTs.js";import"./Dot-WtNB5uJQ.js";import"./RegisterGraphicalItemId-Bwp-eRlf.js";import"./ErrorBarContext-CXKSzW2x.js";import"./GraphicalItemClipPath-C6Rgg4xk.js";import"./SetGraphicalItem-D1cCKorc.js";import"./getRadiusAndStrokeWidthFromDot-BpprK3MD.js";import"./ActiveShapeUtils-CUDn-tDt.js";import"./CartesianAxis-HIzhBiiI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-BFVbA9l-.js";import"./symbol-dyMo-0LQ.js";import"./useElementOffset-DpSWaZPU.js";import"./uniqBy-B13RvOyk.js";import"./iteratee-CgSTNi8h.js";const ht={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ct=["UsePlotArea"];export{e as UsePlotArea,ct as __namedExportsOrder,ht as default};
