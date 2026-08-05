import{R as t}from"./iframe-D972tbhF.js";import{u as a}from"./CategoricalChart-DKJz-sZX.js";import{R as p}from"./zIndexSlice-Dmvy26G-.js";import{C as s}from"./ComposedChart-CTTx4JQZ.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DPj7HunO.js";import{X as l}from"./XAxis-QP_2w1I7.js";import{Y as h}from"./YAxis-MB1xCt9L.js";import{L as c}from"./Legend-Du5VkTqb.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-ouFvztbg.js";import"./index-oKVWKKHt.js";import"./index-zPQcggW0.js";import"./index-D9VN6yju.js";import"./index-C5z2sCvf.js";import"./throttle-D2OThsuy.js";import"./get-C2VjdU0L.js";import"./axisSelectors-uJIqnO2D.js";import"./resolveDefaultProps-D_CwbNhq.js";import"./isWellBehavedNumber-CISTmZa5.js";import"./d3-scale-CR9xOcuY.js";import"./renderedTicksSlice-Dv4CGxUS.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BjAe6VAT.js";import"./chartDataContext-Cq56uXGO.js";import"./Layer-C5RVdPDc.js";import"./Curve-DGKxAkYd.js";import"./types-DLeA2L4w.js";import"./step-9Pc3Vsuh.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-2p3qtLJi.js";import"./Label-BZnc8KKN.js";import"./Text-Dysxol0f.js";import"./DOMUtils-DPBa-ha3.js";import"./ZIndexLayer-Dhusbhig.js";import"./useAnimationId-BPwHrlOs.js";import"./ActivePoints-SQF2J3GR.js";import"./Dot-DBr8YjaB.js";import"./RegisterGraphicalItemId-ySe1Fca9.js";import"./ErrorBarContext-DNvNglsi.js";import"./GraphicalItemClipPath-DuVjniBd.js";import"./SetGraphicalItem-EZqGepIx.js";import"./graphicalItemIdentity-BolIVYF7.js";import"./ActiveShapeUtils-D5m6KacQ.js";import"./RechartsThemeContext-C7EwwBej.js";import"./CartesianAxis-B06URywl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-duaXYgIE.js";import"./symbol-v0Ok8s8m.js";import"./useElementOffset-BmB2opmc.js";import"./uniqBy-Dj3fIOcG.js";import"./iteratee-BauBQiDY.js";const ct={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const gt=["UsePlotArea"];export{e as UsePlotArea,gt as __namedExportsOrder,ct as default};
