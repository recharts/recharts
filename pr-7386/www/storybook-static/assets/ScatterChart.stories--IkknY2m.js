import{c as t}from"./iframe-DmBQ8HMz.js";import{g as c}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DWgqGcPH.js";import{c as g}from"./Coordinate-CcdTesrj.js";import{S as i}from"./ScatterChart-CEvFl12B.js";import{g as d}from"./zIndexSlice-DIRHIjeL.js";import{X as S}from"./XAxis-BaDVYnrk.js";import{Y as h}from"./YAxis-D8ss-GGA.js";import{S as A}from"./Scatter-DZevZ0y4.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DWg7_V2c.js";import"./index-o0mRVwTr.js";import"./index-Drn3R5Q6.js";import"./index-kdRFnVq9.js";import"./index-RSqbnpUZ.js";import"./immer-CvETSy6i.js";import"./get-Ckx5uNL8.js";import"./renderedTicksSlice-DVSCP4nP.js";import"./axisSelectors-COTb3exH.js";import"./d3-scale-CE7Es6uL.js";import"./resolveDefaultProps-DuJ2-4bL.js";import"./isWellBehavedNumber-BHVm_SNT.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-uAfb6KQX.js";import"./chartDataContext-CpJyWUlD.js";import"./CategoricalChart-DUJKtdcW.js";import"./CartesianAxis-B9da2UAY.js";import"./Layer-BhYZ1XdM.js";import"./Text-DDANB2NF.js";import"./DOMUtils-o09_GivZ.js";import"./Label-C1M61kae.js";import"./ZIndexLayer-eAbRrt0r.js";import"./types-DUdiMbO-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./ReactUtils-DKCxnkHT.js";import"./Curve-Ddn0Q7My.js";import"./step-CN9Am_zJ.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Cg0_U2Ap.js";import"./Symbols-L1gtdK7X.js";import"./symbol-D5N6_vHE.js";import"./ActiveShapeUtils-DVhmDt4u.js";import"./RegisterGraphicalItemId-Dup5UL4N.js";import"./ErrorBarContext-DC5ZfMR_.js";import"./GraphicalItemClipPath-pcxJ2TmH.js";import"./SetGraphicalItem-CsbBVlmH.js";import"./useAnimationId-BZ5U8z_o.js";const nt={argTypes:m,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(d,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:s})))},args:{...c(m),data:g,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
