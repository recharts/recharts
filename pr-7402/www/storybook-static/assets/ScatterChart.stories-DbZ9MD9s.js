import{c as t}from"./iframe-CbFBC3pt.js";import{g as c}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DWgqGcPH.js";import{c as g}from"./Coordinate-CcdTesrj.js";import{S as i}from"./ScatterChart-pQBuhhHI.js";import{g as d}from"./zIndexSlice-B8XantvI.js";import{X as S}from"./XAxis-CuiMGrX2.js";import{Y as h}from"./YAxis-DVG7yXmp.js";import{S as A}from"./Scatter-DaskE-Cl.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C8YdywQb.js";import"./index-C4IztgfQ.js";import"./index-TGdP4Icg.js";import"./index-ZsssZYUM.js";import"./index-C2rCfHQ6.js";import"./immer-BwRByMMH.js";import"./get-CeJ-O4Ro.js";import"./renderedTicksSlice-DaB_pXBU.js";import"./axisSelectors-DV4HNdRQ.js";import"./d3-scale-C98YhsaH.js";import"./resolveDefaultProps-DZFSM3t8.js";import"./isWellBehavedNumber-D0PjXqnv.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-ByXMh7XU.js";import"./chartDataContext-DASovuhK.js";import"./CategoricalChart-BMWFvZBg.js";import"./CartesianAxis-CA9u32-P.js";import"./Layer-DTzSPWpf.js";import"./Text-BLKgh8ue.js";import"./DOMUtils-rSL8yp4p.js";import"./Label-8xdcvYL4.js";import"./ZIndexLayer-BgzH297Q.js";import"./types-CX4nwvsZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./ReactUtils-PDSB0db_.js";import"./Curve-BlF3DWpa.js";import"./step-NntPL7PC.js";import"./path-DyVhHtw_.js";import"./tooltipContext-1cf4NF_l.js";import"./Symbols-xbBzb2HM.js";import"./symbol-CDDmFjF_.js";import"./ActiveShapeUtils-CC3LhhHX.js";import"./RegisterGraphicalItemId-BWff6MJa.js";import"./ErrorBarContext-eKi9YHyC.js";import"./GraphicalItemClipPath-3Dbzdjfh.js";import"./SetGraphicalItem-D4AnrrJM.js";import"./useAnimationId-B6jMJ5_9.js";const nt={argTypes:m,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(d,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:s})))},args:{...c(m),data:g,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
