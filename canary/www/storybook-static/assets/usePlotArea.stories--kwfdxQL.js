import{R as t}from"./iframe-C55y8OzM.js";import{e as a}from"./RechartsWrapper-DsEVXtD9.js";import{R as p}from"./zIndexSlice-mi5wuovt.js";import{C as n}from"./ComposedChart-DsJNQyNb.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DWmuFfd6.js";import{X as l}from"./XAxis-BhP0mslG.js";import{Y as h}from"./YAxis-DGa7nV3z.js";import{L as c}from"./Legend-DyRKl7qb.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Cgrl3e7D.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DyDkozWt.js";import"./throttle-zPKptILV.js";import"./index-B1erB4OF.js";import"./index-Bbw2aGRN.js";import"./isWellBehavedNumber-mxdqJrTq.js";import"./d3-scale-CwLPJ1sG.js";import"./index-kqQD3Gpu.js";import"./index-DnfvrK_t.js";import"./renderedTicksSlice-BczpgcuJ.js";import"./index-Dykf-EVS.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-HAuDRHmx.js";import"./chartDataContext-DnaKmrEK.js";import"./CategoricalChart-BdM0esTK.js";import"./Layer-D0VzgPFA.js";import"./Curve-B6Vmc8K0.js";import"./types-BjarwEzr.js";import"./step-CWyhxLD0.js";import"./path-DyVhHtw_.js";import"./activeStyles-DVnALFej.js";import"./Label-BceBwSRN.js";import"./Text-BSBFwZ1P.js";import"./pageBackground-D6U7S1qf.js";import"./useId-XdK2U0Ar.js";import"./useBackwardsCompatibleTheme-B8dADBlT.js";import"./ZIndexLayer-BdI7uft_.js";import"./useAnimationId-4Vo2vEHF.js";import"./dataEntryStyles-Cic1JpuQ.js";import"./ActivePoints-B8YNryID.js";import"./Dot-Co-mG1jW.js";import"./ErrorBarContext-DIbssQ08.js";import"./GraphicalItemClipPath-BHQAz3ae.js";import"./SetGraphicalItem-PlWMyb2e.js";import"./getRadiusAndStrokeWidthFromDot-D-jKdLSh.js";import"./ActiveShapeUtils-7zk5n9mh.js";import"./useEffectiveDataKey-BY6K7cit.js";import"./CartesianAxis-UMkVq4pL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Brox2qm_.js";import"./symbol-Btd-f6kS.js";import"./useElementOffset--zSzp9Ca.js";import"./uniqBy-Cvg7I5_E.js";import"./iteratee-B67uZlwB.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
