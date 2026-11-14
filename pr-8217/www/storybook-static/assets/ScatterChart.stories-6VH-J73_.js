import{R as t}from"./iframe-BH2TtHlY.js";import{g as c}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-HUsljIU4.js";import{R as g}from"./zIndexSlice-BUPzf8FY.js";import{X as S}from"./XAxis-COZT_uqw.js";import{Y as h}from"./YAxis-B0vif2kn.js";import{S as A}from"./Scatter-oPBQuPjB.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DzLFc6RH.js";import"./resolveDefaultProps-BaFcvJtj.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DsRwL_k-.js";import"./throttle-Dx7o9_lY.js";import"./index-Sghl8E88.js";import"./index-C9KoigcN.js";import"./polarAxisSelectors-CrYx-glo.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CXj_dWXw.js";import"./index-DPzL1RFj.js";import"./index-TbzLaF3S.js";import"./renderedTicksSlice-DLQHvIeX.js";import"./index-DbFZkhWq.js";import"./fillDefinitions-BmoMSVON.js";import"./CartesianChart-CdAq2ZGm.js";import"./chartDataContext-CW5gEqv4.js";import"./CategoricalChart-3Oqm6Z_m.js";import"./CartesianAxis-0pfTl-hM.js";import"./Layer-IM2jrBt3.js";import"./Text-CevbSlGY.js";import"./ZIndexLayer-Doizp3A4.js";import"./Label-CIPQeI3a.js";import"./types-DOMxGpI2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-oNDiL7vD.js";import"./activeStyles-C4DAj0Um.js";import"./useAnimationId-CDSf-pzR.js";import"./Curve-CJ99zN7P.js";import"./step-ChPkaUxk.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CxVj4CRN.js";import"./Symbols-CxGDxLq8.js";import"./symbol-Dum7koiK.js";import"./ActiveShapeUtils-CWwwV9zV.js";import"./ErrorBarContext-4rxkwyEB.js";import"./SetGraphicalItem-Cr0BjIMT.js";import"./useEffectiveDataKey-BXRZCQow.js";const dt={argTypes:m,component:i},r={name:"Simple",render:p=>{const{data:n,...s}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...s},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:n})))},args:{...c(m),data:d,margin:{top:0,right:0,bottom:0,left:0}}},gt=["API"];var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(a=(e=r.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};export{r as API,gt as __namedExportsOrder,dt as default};
