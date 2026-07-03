import{R as t}from"./iframe-Dlbg_GZB.js";import{g as c}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-cfyYvCMB.js";import{R as g}from"./zIndexSlice-CMn4Cwlm.js";import{X as S}from"./XAxis-g3Yqs_q0.js";import{Y as h}from"./YAxis-K45jOkJG.js";import{S as A}from"./Scatter-BgxzRrMD.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-_RHeF5kh.js";import"./index-5rk_KAjc.js";import"./index-De4F06zW.js";import"./index-CFtDWJsT.js";import"./index-C4pT71Bv.js";import"./throttle-C3Y4hQMj.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-CsfsF6Cn.js";import"./axisSelectors-C_hiMAlk.js";import"./resolveDefaultProps-CIJSTnSl.js";import"./isWellBehavedNumber-BSYl2eep.js";import"./d3-scale-DJYjYDtT.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DHiwjDYa.js";import"./chartDataContext-MC8Fu7xC.js";import"./CategoricalChart-BQo9vmvV.js";import"./CartesianAxis-dbSJQeo2.js";import"./Layer-DlhGxg7N.js";import"./Text-BLnCmUHB.js";import"./DOMUtils-vSgsVfRP.js";import"./Label-d3wc6rF5.js";import"./ZIndexLayer-feAlcx_0.js";import"./types-Ctdv5TaQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-xmicP7QL.js";import"./useAnimationId-K2Oa5cBe.js";import"./Curve-Dcq__Vxv.js";import"./step-BcjH0w06.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DM-EFah7.js";import"./Symbols-CUnsQXWy.js";import"./symbol-BBKXJ5vn.js";import"./ActiveShapeUtils-BApyZjjc.js";import"./RegisterGraphicalItemId-Dj61QivB.js";import"./ErrorBarContext-BKnwTpIO.js";import"./GraphicalItemClipPath-8DGGiF_D.js";import"./SetGraphicalItem-jqk9vogH.js";const nt={argTypes:m,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:s})))},args:{...c(m),data:d,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
