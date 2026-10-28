import{R as t}from"./iframe-v0-Os2yM.js";import{g as c}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-nmCYFnpD.js";import{R as g}from"./zIndexSlice-_iZ3OTIR.js";import{X as S}from"./XAxis-DNiYKSvx.js";import{Y as h}from"./YAxis-CgkQKIAn.js";import{S as A}from"./Scatter-CioAizCh.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DpMxjJPI.js";import"./resolveDefaultProps-BcTNVKvX.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Db_FhKX_.js";import"./throttle-CSC07CA1.js";import"./index-CjGezUyu.js";import"./index-DwxXslvM.js";import"./polarAxisSelectors-Bp8G6CJB.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Dv-uHWFd.js";import"./index-DjMmN7uR.js";import"./index-COci_OUD.js";import"./renderedTicksSlice-Z7zIrOC1.js";import"./index-ClZJ5H50.js";import"./CartesianChart-CSMk8NrA.js";import"./ZIndexPortal-IUufwUyf.js";import"./CategoricalChart-DUPn6ZbT.js";import"./CartesianAxis-BkO3xjcX.js";import"./Layer--oy12MjQ.js";import"./Text-CJd7Lo81.js";import"./pageBackground-BMquVDd2.js";import"./ZIndexLayer-CZxM3zqX.js";import"./Label-DI0UjsSd.js";import"./types-BJeT-aZk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-lSE4rpjb.js";import"./activeStyles-CbGGlVk2.js";import"./useAnimationId-CXPH24GZ.js";import"./dataEntryStyles-DfwnSxIB.js";import"./Curve-NJea3yIB.js";import"./step-DpC9Q9rs.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DyQkeChB.js";import"./Symbols-Cw6oiD0A.js";import"./symbol-DlOomsec.js";import"./ActiveShapeUtils-BRXSym3E.js";import"./ErrorBarContext-Dj2syV2g.js";import"./SetGraphicalItem-C-WANBtu.js";import"./useEffectiveDataKey-DAI_6E1U.js";const gt={argTypes:m,component:i},r={name:"Simple",render:p=>{const{data:n,...s}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...s},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:n})))},args:{...c(m),data:d,margin:{top:0,right:0,bottom:0,left:0}}},St=["API"];var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(a=(e=r.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};export{r as API,St as __namedExportsOrder,gt as default};
