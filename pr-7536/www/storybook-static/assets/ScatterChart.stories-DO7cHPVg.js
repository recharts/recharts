import{R as t}from"./iframe-blo479ea.js";import{g as c}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-cz5MzvXM.js";import{R as g}from"./zIndexSlice-B-NboAfn.js";import{X as S}from"./XAxis-D2AMCCh6.js";import{Y as h}from"./YAxis-CbVMh33A.js";import{S as A}from"./Scatter-DFsbnX2c.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DZW1xtMc.js";import"./index-Bk8DAVsF.js";import"./index-D98VNpy1.js";import"./index-5Xauv1a1.js";import"./index-DwOveEH0.js";import"./throttle-CAybpjPd.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-DSEoRhRT.js";import"./axisSelectors-BsWadBKB.js";import"./resolveDefaultProps-d-c_EfmU.js";import"./isWellBehavedNumber-vMDquOd-.js";import"./d3-scale-D5iAOdDh.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-QYdWDySw.js";import"./chartDataContext-Dkqb0EXV.js";import"./CategoricalChart-B3UrSPAC.js";import"./CartesianAxis-Cbfv_t23.js";import"./Layer-C26T8E2g.js";import"./Text-CjpmWysE.js";import"./DOMUtils-Tw2iKYp4.js";import"./Label-CXH82xbV.js";import"./ZIndexLayer-2I4OO_bH.js";import"./types-CAFMP27K.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-Bj_FYwBV.js";import"./useAnimationId-NeumBkdx.js";import"./Curve-2n5H6-9L.js";import"./step-D2-UZcK5.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Dz5BQX4S.js";import"./Symbols-CwWjLN1R.js";import"./symbol-CKhYuu_e.js";import"./ActiveShapeUtils-DIyj0lNk.js";import"./RegisterGraphicalItemId-D8SJKJaD.js";import"./ErrorBarContext-C5s-a9Tb.js";import"./GraphicalItemClipPath-BMIU9EC2.js";import"./SetGraphicalItem-DxPgsw5M.js";const nt={argTypes:m,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:s})))},args:{...c(m),data:d,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(a=(e=r.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};const ct=["API"];export{r as API,ct as __namedExportsOrder,nt as default};
