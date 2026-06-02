import{c as t}from"./iframe-DcZ25aZq.js";import{g as c}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DWgqGcPH.js";import{c as g}from"./Coordinate-CcdTesrj.js";import{S as i}from"./ScatterChart-AGhx93al.js";import{g as d}from"./zIndexSlice-Bx385Wu5.js";import{X as S}from"./XAxis-DyhIsrPh.js";import{Y as h}from"./YAxis-C_fkHFUI.js";import{S as A}from"./Scatter-CsVY_ba2.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DsTdodcN.js";import"./index-CxwbJNHI.js";import"./index-kO-m-NHC.js";import"./index-DUKnKSji.js";import"./index-6by7EgtV.js";import"./immer-CNH0Qykv.js";import"./get-BBHPk0wF.js";import"./renderedTicksSlice-CAWK7f2V.js";import"./axisSelectors-C3VexB3f.js";import"./d3-scale-COdDGNPP.js";import"./resolveDefaultProps-C_CQ9UBc.js";import"./isWellBehavedNumber-DH8Wjvkj.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Cl4arGk4.js";import"./chartDataContext-DIHsMymB.js";import"./CategoricalChart-im9vFRI0.js";import"./CartesianAxis-BygLm6pY.js";import"./Layer-BPFmWcLz.js";import"./Text-B5Z71jGK.js";import"./DOMUtils-CBs1V0PN.js";import"./Label-madSHGhS.js";import"./ZIndexLayer-CX9fDFPC.js";import"./types-CDVpgISI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./ReactUtils-BfQpQwdE.js";import"./Curve-C4CaZCwE.js";import"./step-BUy109CO.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DRhfxuNN.js";import"./Symbols-FaOp8ptw.js";import"./symbol-Cpj73b5m.js";import"./ActiveShapeUtils-cdOmSqYT.js";import"./RegisterGraphicalItemId-Cyx6k34u.js";import"./ErrorBarContext-3J6T58S3.js";import"./GraphicalItemClipPath-CXNX3kTP.js";import"./SetGraphicalItem-BsEDaVAo.js";import"./useAnimationId-wbWpU06B.js";const nt={argTypes:m,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(d,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:s})))},args:{...c(m),data:g,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
