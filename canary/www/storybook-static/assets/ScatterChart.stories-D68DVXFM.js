import{R as t}from"./iframe-ClhUNVnE.js";import{g as c}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-DFfR8u6P.js";import{R as g}from"./zIndexSlice-Bj_mEjES.js";import{X as S}from"./XAxis-LUnQ02U1.js";import{Y as h}from"./YAxis-CrIc_odO.js";import{S as A}from"./Scatter-CGOg2Txx.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CH-OQa-8.js";import"./index-CKsF35O1.js";import"./index-D_-76jNe.js";import"./index-CMNlKXgY.js";import"./index-WRHCQy9e.js";import"./throttle-CYmjgX02.js";import"./get-Uq0DWhIe.js";import"./renderedTicksSlice-D-beSFYC.js";import"./axisSelectors-B_omKdC_.js";import"./d3-scale-CyxXVHj6.js";import"./resolveDefaultProps-xxbn2Y0z.js";import"./isWellBehavedNumber-BZGd7hgQ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DVNFcAED.js";import"./chartDataContext-DT2zm0Bo.js";import"./CategoricalChart-BXjBj4uL.js";import"./CartesianAxis-6ub_g_j0.js";import"./Layer-De05M5So.js";import"./Text-6OmgeIvW.js";import"./DOMUtils-CtaL4Ln2.js";import"./Label-C7_QXzyC.js";import"./ZIndexLayer-DGNmh353.js";import"./types-B-IY3TCA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-CjVS2mh2.js";import"./useAnimationId-CT1xX_cr.js";import"./Curve-B40-WnjD.js";import"./step-DSY_NY5u.js";import"./path-DyVhHtw_.js";import"./tooltipContext-ZmJNyT4E.js";import"./Symbols-CM_x84Fs.js";import"./symbol-DRYWtuxg.js";import"./ActiveShapeUtils-DM6q8ZUn.js";import"./RegisterGraphicalItemId-EpH2csVt.js";import"./ErrorBarContext-Dhef0H9H.js";import"./GraphicalItemClipPath-BcvmXpNm.js";import"./SetGraphicalItem-D69pntSs.js";const nt={argTypes:m,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:s})))},args:{...c(m),data:d,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
