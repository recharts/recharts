import{R as t}from"./iframe-BrId7CKe.js";import{z as a}from"./RechartsWrapper-C0PTLzSu.js";import{R as p}from"./zIndexSlice-DF5zMGO6.js";import{C as n}from"./ComposedChart-Cnp7765T.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CgfEpiSf.js";import{X as l}from"./XAxis-CGJzYa5v.js";import{Y as h}from"./YAxis-CGC-AYss.js";import{L as c}from"./Legend-ByWeI-o6.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DIgz9kBc.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BWicBn7w.js";import"./throttle-CvD-CMS9.js";import"./index-D7ICnWyX.js";import"./index-EO2EMNzs.js";import"./polarAxisSelectors-BScTjZiA.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Did4wLnp.js";import"./index-B4UkUUGe.js";import"./index-CKY_1Z5f.js";import"./renderedTicksSlice-DAS2rh9P.js";import"./index-Drj8yiU0.js";import"./fillDefinitions-dpOaLydo.js";import"./CartesianChart-BQoBJqDq.js";import"./chartDataContext-BtKuFOy0.js";import"./CategoricalChart-D7PumRDT.js";import"./getRadiusAndStrokeWidthFromDot-2ewH2R2L.js";import"./Layer-CxlvVVO_.js";import"./Curve-CODof7zW.js";import"./types-BIH_CFXa.js";import"./step-D0GmmZR_.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-Dl3_KD-K.js";import"./Label-BOSTGjYW.js";import"./Text-CtzCspEf.js";import"./ZIndexLayer-DtobrSuN.js";import"./ActivePoints-BfbfOk4s.js";import"./Dot-Bz04y-El.js";import"./activeStyles-haHqTj48.js";import"./useAnimationId-DnW4K7Yj.js";import"./Symbols-DW8eGAaV.js";import"./symbol-Bas1pNoF.js";import"./ErrorBarContext-Di-OPTeN.js";import"./SetGraphicalItem-Bx9N4hIP.js";import"./ActiveShapeUtils-B-iMU9qH.js";import"./useEffectiveDataKey-BlMggeza.js";import"./CartesianAxis-CGWn72D3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-CyYI02cJ.js";import"./uniqBy-DKGrDlDL.js";import"./iteratee-BEaiqON8.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
