import{R as t}from"./iframe-Dli_FHsd.js";import{g as c}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-DBYLUG7j.js";import{R as g}from"./zIndexSlice-BKyYlhak.js";import{X as S}from"./XAxis-CgWc3L0L.js";import{Y as h}from"./YAxis-BgeWKEji.js";import{S as A}from"./Scatter-Dn4AkV0_.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-gcMhRjLK.js";import"./index-654UjlcV.js";import"./index-TBfimrOP.js";import"./index-B6ei3fzd.js";import"./index-eEp7ik7X.js";import"./immer-BDVTnirG.js";import"./get-D8Bu4bN4.js";import"./renderedTicksSlice-Cr_zgIG9.js";import"./axisSelectors-BOuTa97x.js";import"./d3-scale-BaROhcEs.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-KCoOvOQy.js";import"./isWellBehavedNumber-DwKce9OS.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B0dTZgGZ.js";import"./chartDataContext-Dh-3jSeu.js";import"./CategoricalChart-YvrRZEH2.js";import"./CartesianAxis-CDtTSBJJ.js";import"./Layer-D_tWiSqM.js";import"./Text-mDBdIk3r.js";import"./DOMUtils-CD-Gvcib.js";import"./Label-BlCBYS7y.js";import"./ZIndexLayer-56CQrnNK.js";import"./types-CxkhEKh5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-DgK_VlyJ.js";import"./useAnimationId-CYxQwOrZ.js";import"./Curve-V2biDmKc.js";import"./step-DJ-Uc0dW.js";import"./path-DyVhHtw_.js";import"./tooltipContext-2ddqG6Hj.js";import"./Symbols-DsJLAOJ5.js";import"./symbol-6EDMfIW2.js";import"./ActiveShapeUtils-pciG5q6n.js";import"./RegisterGraphicalItemId-rjfoubwa.js";import"./ErrorBarContext-DHC85wCi.js";import"./GraphicalItemClipPath-BJpRRLBw.js";import"./SetGraphicalItem-DN3sQjPD.js";const ct={argTypes:m,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:s})))},args:{...c(m),data:d,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
