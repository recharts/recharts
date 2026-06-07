import{R as t}from"./iframe-DsrD6wpT.js";import{g as c}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-C5v_AuVN.js";import{R as g}from"./zIndexSlice-DkgP7dBP.js";import{X as S}from"./XAxis-DizM2ccM.js";import{Y as h}from"./YAxis-C8AD80e7.js";import{S as A}from"./Scatter-oHqmXtwh.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DIY-yJrq.js";import"./index-D23QGT2y.js";import"./index-DLTbKQJZ.js";import"./index-Z0dAwhZH.js";import"./index-CKvlhhLQ.js";import"./immer-BAPcb6RO.js";import"./get-C10pg2Pt.js";import"./renderedTicksSlice-VRajnlWn.js";import"./axisSelectors-CJUUuARo.js";import"./d3-scale-CqXFZCr9.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-DQfgYWkZ.js";import"./isWellBehavedNumber-CgPFccj7.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BgP_pNrE.js";import"./chartDataContext-CD2wssdB.js";import"./CategoricalChart-BwGaQnIJ.js";import"./CartesianAxis-CiwuyPTT.js";import"./Layer-Cn-q1z5M.js";import"./Text-BEnCKmcO.js";import"./DOMUtils-Cn9VGpSS.js";import"./Label-TNDcrVM2.js";import"./ZIndexLayer-D3qjSsRd.js";import"./types-B5JJF1dm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-8lESwhOr.js";import"./useAnimationId-BDJzCpgi.js";import"./Curve-CpP-gaVa.js";import"./step-7WGc90nH.js";import"./path-DyVhHtw_.js";import"./tooltipContext-D4wXR-2t.js";import"./Symbols-DVJc4iiL.js";import"./symbol-DrFIzzE-.js";import"./ActiveShapeUtils-BxUohkw2.js";import"./RegisterGraphicalItemId-Ch7WvGaf.js";import"./ErrorBarContext-H2sebB4O.js";import"./GraphicalItemClipPath-CeOkm8u8.js";import"./SetGraphicalItem-DZD_Etrn.js";const ct={argTypes:m,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:s})))},args:{...c(m),data:d,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Simple',
  render: (args: Args) => {
    const {
      data,
      ...rest
    } = args;
    return <ResponsiveContainer width="100%" height={400}>
        <ScatterChart {...rest}>
          <XAxis dataKey="x" />
          <YAxis dataKey="y" />
          <Scatter data={data} />
        </ScatterChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(ScatterChartArgs),
    data: coordinateData,
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  }
}`,...(a=(e=r.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};const dt=["API"];export{r as API,dt as __namedExportsOrder,ct as default};
