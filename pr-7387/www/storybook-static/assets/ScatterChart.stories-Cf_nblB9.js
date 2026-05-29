import{c as t}from"./iframe-C5MHh42j.js";import{g as c}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DWgqGcPH.js";import{c as g}from"./Coordinate-CcdTesrj.js";import{S as i}from"./ScatterChart-DKgHINAo.js";import{g as d}from"./zIndexSlice-BAxAD9Hd.js";import{X as S}from"./XAxis-Dv4taIi_.js";import{Y as h}from"./YAxis-BesflX3C.js";import{S as A}from"./Scatter-XqufsvAr.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BXiQbHg3.js";import"./index-DTHX5ifG.js";import"./index-Ddmpcm8d.js";import"./index-BtGgX82p.js";import"./index-CtWdDAnJ.js";import"./immer-BEKu5nAB.js";import"./get-w_pNkTrF.js";import"./renderedTicksSlice-DJahilIk.js";import"./axisSelectors-l2EEhLAN.js";import"./d3-scale-DROX3YQd.js";import"./resolveDefaultProps-50eaHBP1.js";import"./isWellBehavedNumber-Fry2DCdR.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DdDBbaWH.js";import"./chartDataContext-B3IBL15G.js";import"./CategoricalChart-iSFUJ3mM.js";import"./CartesianAxis-hicrxO07.js";import"./Layer-BTdnKXgq.js";import"./Text-Dd3m04ll.js";import"./DOMUtils-DPyYMl93.js";import"./Label-DPuGsfIc.js";import"./ZIndexLayer-BqFMND8v.js";import"./types-DIsFNNUR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./ReactUtils-BVj-7vfo.js";import"./Curve-thevB7o-.js";import"./step-CW5jkV_V.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CC-43_y7.js";import"./Symbols-BZjZW0di.js";import"./symbol-EmTrNRMN.js";import"./ActiveShapeUtils-B0TwIl-q.js";import"./RegisterGraphicalItemId-D7dR1c0l.js";import"./ErrorBarContext-BqD49I1j.js";import"./GraphicalItemClipPath-D6R49ofK.js";import"./SetGraphicalItem-3zA0iFCt.js";import"./useAnimationId-D3rbPHOS.js";const nt={argTypes:m,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(d,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:s})))},args:{...c(m),data:g,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
