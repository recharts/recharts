import{R as t}from"./iframe-5yXyXnaZ.js";import{g as c}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-ClI9wgZ4.js";import{R as g}from"./zIndexSlice-BDAt33KO.js";import{X as S}from"./XAxis-DBNQ58f8.js";import{Y as h}from"./YAxis-DrQXbr6a.js";import{S as A}from"./Scatter-BDWAjGxd.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DA6sibZ3.js";import"./index-BHMzx10I.js";import"./index-sztAkQPC.js";import"./index-Bglp-BB_.js";import"./index-B8ryNKY3.js";import"./throttle-Cv9w3d5_.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-C1OGHM2B.js";import"./axisSelectors-BXq32W01.js";import"./resolveDefaultProps-DO3cHs1F.js";import"./isWellBehavedNumber-CjXf4Ny0.js";import"./d3-scale-qreNZqM_.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-9hlK9pZx.js";import"./chartDataContext-CuGicOh1.js";import"./CategoricalChart-DQJ8zgbM.js";import"./CartesianAxis-B2yef_ws.js";import"./Layer-DvsJVPiG.js";import"./Text-CgBcsLfs.js";import"./DOMUtils-BV08T-c-.js";import"./Label-BYYKCmSa.js";import"./ZIndexLayer-DtzoUjMA.js";import"./types-D9gPTTpR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-B7Ugi4uF.js";import"./useAnimationId-C0yd1tvr.js";import"./Curve-BJjaxUht.js";import"./step-7JpJFPkO.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CvAnpwYG.js";import"./Symbols-CHIguC1u.js";import"./symbol-DQ9BiUzn.js";import"./ActiveShapeUtils-C8Wl3VBj.js";import"./RegisterGraphicalItemId-BWyrz_yh.js";import"./ErrorBarContext-3caAFu0Q.js";import"./GraphicalItemClipPath-C3T_bjgu.js";import"./SetGraphicalItem-ChFugbQc.js";const ct={argTypes:m,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:s})))},args:{...c(m),data:d,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
