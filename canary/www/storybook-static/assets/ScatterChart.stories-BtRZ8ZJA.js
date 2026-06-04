import{R as t}from"./iframe-D7yt-ZhS.js";import{g as c}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-DfZE7YWn.js";import{R as g}from"./zIndexSlice-B3_xMC6k.js";import{X as S}from"./XAxis-dYNJxVBm.js";import{Y as h}from"./YAxis-C5MIsZgm.js";import{S as A}from"./Scatter-6rziqhIC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CArYIH40.js";import"./index-CglBtasG.js";import"./index-8zJni8A2.js";import"./index-CHXGCi4x.js";import"./index-nuP2vluJ.js";import"./immer-HxqS16dW.js";import"./get-Cebs6l6-.js";import"./renderedTicksSlice-DNerh-qI.js";import"./axisSelectors-CW8UYJLW.js";import"./d3-scale-BUBb-XjW.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-BUJk688E.js";import"./isWellBehavedNumber-NaDCVAJY.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C6SOYYpl.js";import"./chartDataContext-_IqHUZU5.js";import"./CategoricalChart-CMCxIWsh.js";import"./CartesianAxis-CuPdOLrD.js";import"./Layer-B34T8oTs.js";import"./Text-DWwT0_EQ.js";import"./DOMUtils-DoEzEhWE.js";import"./Label-C0p1CWe9.js";import"./ZIndexLayer-BjlE0UF2.js";import"./types-CuLQosun.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-CUAQ84gk.js";import"./useAnimationId-gSm0_FsD.js";import"./Curve-DbP7_Dvx.js";import"./step-OtS6f_xO.js";import"./path-DyVhHtw_.js";import"./tooltipContext-C7RfWuHE.js";import"./Symbols-CgBZX9Up.js";import"./symbol-DAthuMSh.js";import"./ActiveShapeUtils-C4okiOLS.js";import"./RegisterGraphicalItemId-Bj0awerq.js";import"./ErrorBarContext-BCc7VHSV.js";import"./GraphicalItemClipPath-CSwP3plz.js";import"./SetGraphicalItem-BFSgsIRt.js";const ct={argTypes:m,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:s})))},args:{...c(m),data:d,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
