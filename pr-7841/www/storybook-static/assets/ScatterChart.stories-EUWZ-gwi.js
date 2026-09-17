import{R as t}from"./iframe-BYch73GC.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-BpaDSsyX.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-5MNp3Bsj.js";import{R as g}from"./zIndexSlice-mAK65TxS.js";import{X as S}from"./XAxis-DvBxon3R.js";import{Y as h}from"./YAxis-lTNE--Lq.js";import{S as A}from"./Scatter-HuHeZ8eN.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BLQkthbe.js";import"./resolveDefaultProps-DWdkSMZg.js";import"./get-C2VjdU0L.js";import"./axisSelectors-B4VSjfJY.js";import"./throttle-BEoPPt7A.js";import"./index-BeTLkY2H.js";import"./index-Bc_o9NJn.js";import"./isWellBehavedNumber-BP9XFgrX.js";import"./d3-scale-B2BH8dUM.js";import"./index-BIGQU915.js";import"./index-Q_fYP1Tj.js";import"./renderedTicksSlice-BkcMIj-K.js";import"./index-D3IuKIwS.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Cwhwr6-l.js";import"./chartDataContext-WIuoRrqx.js";import"./CategoricalChart-13njktaQ.js";import"./CartesianAxis-CWGo8wQX.js";import"./Layer-BCbhxOAa.js";import"./Text-C5jLRMCm.js";import"./DOMUtils-DGuhwttO.js";import"./useId-BzCCYXNS.js";import"./useBackwardsCompatibleTheme-BIqSCxVj.js";import"./Label-BRuA27Hh.js";import"./ZIndexLayer-CKmbkchN.js";import"./types-CIbUV0Xf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-D4BR2dBY.js";import"./useAnimationId-CPbSSa-W.js";import"./Curve-6yvIYj3p.js";import"./step-dz2nmhBH.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DojgVIyB.js";import"./Symbols-B9l_Ouh1.js";import"./symbol-DSvElD_H.js";import"./ActiveShapeUtils-p0MunX2r.js";import"./RegisterGraphicalItemId-C0FXSJZg.js";import"./ErrorBarContext-BZq9v9h8.js";import"./GraphicalItemClipPath-6dEZaUUD.js";import"./SetGraphicalItem-BJF1DUih.js";import"./useGraphicalItemIdentity-_0Nc-geg.js";const ht={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:n,...s}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...s},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:n})))},args:{...c(a),data:d,margin:{top:0,right:0,bottom:0,left:0}}},At=["API"];var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(e=r.parameters)==null?void 0:e.docs)==null?void 0:m.source}}};export{r as API,At as __namedExportsOrder,ht as default};
