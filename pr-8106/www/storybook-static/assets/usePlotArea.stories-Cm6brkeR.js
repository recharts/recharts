import{R as t}from"./iframe-C82DQHN8.js";import{z as a}from"./RechartsWrapper-C7FIcLUG.js";import{R as p}from"./zIndexSlice-KEmmKuiN.js";import{C as n}from"./ComposedChart-CYmsodFg.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DR6e76wi.js";import{X as l}from"./XAxis-HS7HwOQV.js";import{Y as h}from"./YAxis-CY_V7IWg.js";import{L as c}from"./Legend-CBS3sR82.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-VPX7RWl5.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BBwIpa2g.js";import"./throttle-DrIjUdEi.js";import"./index-DS_o04pJ.js";import"./index-CrBCcUcr.js";import"./polarAxisSelectors-CI9V5B2f.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-YRVCFiEs.js";import"./index-Dxrl0h9V.js";import"./index-BzW5Id2r.js";import"./renderedTicksSlice-Dyzu-B2T.js";import"./index-Q0hLYzZW.js";import"./CartesianChart-DkUBM6DF.js";import"./ZIndexPortal-CwXxcVKW.js";import"./CategoricalChart-CSFGEuTa.js";import"./Layer-C-QkALxJ.js";import"./Curve-DL-Hbuxt.js";import"./types-zIpyflln.js";import"./step-CNEvn2Wv.js";import"./path-DyVhHtw_.js";import"./LabelList-CqrMkTfo.js";import"./Label-Ckx9XYdx.js";import"./Text-BsKwg4yV.js";import"./pageBackground-fR40L72L.js";import"./ZIndexLayer-BbgqXMZY.js";import"./ActivePoints-BwyWhSZo.js";import"./Dot-BljD15xb.js";import"./activeStyles-BTVFwqk3.js";import"./useAnimationId-B8gyVu2h.js";import"./dataEntryStyles-Dn-nirF7.js";import"./Symbols-CFD8lW7l.js";import"./symbol-BmeELTCq.js";import"./ErrorBarContext-D11z8twA.js";import"./SetGraphicalItem-Bgxm3FOo.js";import"./getRadiusAndStrokeWidthFromDot-LeBNisO_.js";import"./ActiveShapeUtils-DQaA7sJq.js";import"./useEffectiveDataKey-bWUuu12H.js";import"./CartesianAxis-DKLzLHvo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-CVdUc2iG.js";import"./uniqBy-DXinuiHK.js";import"./iteratee-0NsStHsr.js";import"./isArguments-yB-y1yaH.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},At=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
