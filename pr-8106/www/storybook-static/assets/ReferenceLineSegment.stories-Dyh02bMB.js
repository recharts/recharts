import{R as e}from"./iframe-C82DQHN8.js";import{R as i}from"./zIndexSlice-KEmmKuiN.js";import{C as n}from"./ComposedChart-CYmsodFg.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-BguhZg3D.js";import{X as s}from"./XAxis-HS7HwOQV.js";import{Y as c}from"./YAxis-CY_V7IWg.js";import{L as d}from"./Line-DR6e76wi.js";import{R as g}from"./ReferenceLine-DLL3x-QO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-VPX7RWl5.js";import"./throttle-DrIjUdEi.js";import"./index-DS_o04pJ.js";import"./index-CrBCcUcr.js";import"./RechartsWrapper-C7FIcLUG.js";import"./axisSelectors-BBwIpa2g.js";import"./polarAxisSelectors-CI9V5B2f.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-YRVCFiEs.js";import"./index-Dxrl0h9V.js";import"./index-BzW5Id2r.js";import"./renderedTicksSlice-Dyzu-B2T.js";import"./index-Q0hLYzZW.js";import"./CartesianChart-DkUBM6DF.js";import"./ZIndexPortal-CwXxcVKW.js";import"./CategoricalChart-CSFGEuTa.js";import"./CartesianAxis-DKLzLHvo.js";import"./Layer-C-QkALxJ.js";import"./Text-BsKwg4yV.js";import"./pageBackground-fR40L72L.js";import"./ZIndexLayer-BbgqXMZY.js";import"./Label-Ckx9XYdx.js";import"./types-zIpyflln.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-DL-Hbuxt.js";import"./step-CNEvn2Wv.js";import"./path-DyVhHtw_.js";import"./LabelList-CqrMkTfo.js";import"./ActivePoints-BwyWhSZo.js";import"./Dot-BljD15xb.js";import"./activeStyles-BTVFwqk3.js";import"./useAnimationId-B8gyVu2h.js";import"./dataEntryStyles-Dn-nirF7.js";import"./Symbols-CFD8lW7l.js";import"./symbol-BmeELTCq.js";import"./ErrorBarContext-D11z8twA.js";import"./SetGraphicalItem-Bgxm3FOo.js";import"./getRadiusAndStrokeWidthFromDot-LeBNisO_.js";import"./ActiveShapeUtils-DQaA7sJq.js";import"./useEffectiveDataKey-bWUuu12H.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,fe as __namedExportsOrder,ge as default};
