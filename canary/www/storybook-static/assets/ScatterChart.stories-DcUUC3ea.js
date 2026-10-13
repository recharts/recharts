import{R as t}from"./iframe-BpQ7m7wo.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-BpaDSsyX.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-CTF3q61O.js";import{R as g}from"./zIndexSlice-MwSCz61s.js";import{X as S}from"./XAxis-DE6o4Zll.js";import{Y as h}from"./YAxis-DRCAJ4BY.js";import{S as A}from"./Scatter-YwVB03bj.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BVbz7wfB.js";import"./resolveDefaultProps-33rcogn6.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BYDkrwMW.js";import"./throttle-dkzrvgSW.js";import"./index-DAB_MUnB.js";import"./index-CD4MTvij.js";import"./isWellBehavedNumber-BVcmp2ni.js";import"./d3-scale-Byhs4CrR.js";import"./index-CXa8VbQ8.js";import"./index-BbHMTUSJ.js";import"./renderedTicksSlice-82sk-Quf.js";import"./index-ByFVwCBJ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DMhVIjmV.js";import"./chartDataContext-84s_zl93.js";import"./CategoricalChart-CxhuSAqC.js";import"./CartesianAxis-1RRtp3t2.js";import"./Layer-DlRoNKW0.js";import"./Text-QB9mhIk2.js";import"./pageBackground-jCojFoRf.js";import"./useId-Ba0OHruW.js";import"./useBackwardsCompatibleTheme-BV9LHmnt.js";import"./Label-BBIpfhf_.js";import"./ZIndexLayer-BrTVgKud.js";import"./types-XUWAitbU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-C2IhZeJz.js";import"./useAnimationId-D3uGeL-A.js";import"./dataEntryStyles-CFn7kNor.js";import"./Curve-B_xnDCFo.js";import"./step-aBp-EU0i.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DDhPdX-u.js";import"./Symbols-DkzNgIJq.js";import"./symbol-C9XCxtRU.js";import"./ActiveShapeUtils-DiATo6ey.js";import"./ErrorBarContext-DyJjK28E.js";import"./GraphicalItemClipPath-CDr7mMLr.js";import"./SetGraphicalItem-FOIPn71v.js";import"./useEffectiveDataKey-yqjBtOm2.js";const ht={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:n,...s}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...s},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:n})))},args:{...c(a),data:d,margin:{top:0,right:0,bottom:0,left:0}}},At=["API"];var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
