import{c as e}from"./iframe-C5MHh42j.js";import{g as i}from"./zIndexSlice-BAxAD9Hd.js";import{C as a}from"./ComposedChart-WRhT-Z7E.js";import{p}from"./Page-DPte-9pC.js";import{C as n}from"./CartesianGrid-BK0lHkTK.js";import{X as s}from"./XAxis-Dv4taIi_.js";import{Y as c}from"./YAxis-BesflX3C.js";import{L as d}from"./Line-Das4hafc.js";import{R as g}from"./ReferenceLine-DGf51nrW.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BEKu5nAB.js";import"./index-BtGgX82p.js";import"./index-CtWdDAnJ.js";import"./get-w_pNkTrF.js";import"./resolveDefaultProps-50eaHBP1.js";import"./isWellBehavedNumber-Fry2DCdR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BXiQbHg3.js";import"./index-DTHX5ifG.js";import"./index-Ddmpcm8d.js";import"./renderedTicksSlice-DJahilIk.js";import"./axisSelectors-l2EEhLAN.js";import"./d3-scale-DROX3YQd.js";import"./CartesianChart-DdDBbaWH.js";import"./chartDataContext-B3IBL15G.js";import"./CategoricalChart-iSFUJ3mM.js";import"./CartesianAxis-hicrxO07.js";import"./Layer-BTdnKXgq.js";import"./Text-Dd3m04ll.js";import"./DOMUtils-DPyYMl93.js";import"./Label-DPuGsfIc.js";import"./ZIndexLayer-BqFMND8v.js";import"./types-DIsFNNUR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-thevB7o-.js";import"./step-CW5jkV_V.js";import"./path-DyVhHtw_.js";import"./ReactUtils-BVj-7vfo.js";import"./ActivePoints-hHK0AETy.js";import"./Dot-C9bGlN1x.js";import"./RegisterGraphicalItemId-D7dR1c0l.js";import"./ErrorBarContext-BqD49I1j.js";import"./GraphicalItemClipPath-D6R49ofK.js";import"./SetGraphicalItem-3zA0iFCt.js";import"./useAnimationId-D3rbPHOS.js";import"./getRadiusAndStrokeWidthFromDot-Om5tnWtK.js";import"./ActiveShapeUtils-B0TwIl-q.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ne=["Segment"];export{t as Segment,ne as __namedExportsOrder,pe as default};
