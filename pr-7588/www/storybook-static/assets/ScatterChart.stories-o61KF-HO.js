import{R as t}from"./iframe-Dk6QtUOm.js";import{g as c}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-CE1KQgM7.js";import{R as g}from"./zIndexSlice-DIYdct83.js";import{X as S}from"./XAxis-DpzwYtrF.js";import{Y as h}from"./YAxis-5MZ6qw-w.js";import{S as A}from"./Scatter-BvacOL-m.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DtQEiJyx.js";import"./index-COkLsuib.js";import"./index-DoCUyrNc.js";import"./index-DoZuvuq0.js";import"./index-U7zmREmi.js";import"./throttle-D98VVn5G.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-1Do5QcM1.js";import"./axisSelectors-D6uzbqkR.js";import"./resolveDefaultProps-iHCSp8Qu.js";import"./isWellBehavedNumber-D_eFFsbn.js";import"./d3-scale-B2mup6zM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BPW_q9xK.js";import"./chartDataContext-BWXJwi3S.js";import"./CategoricalChart-DDK0QtzY.js";import"./CartesianAxis-BFE0ezxc.js";import"./Layer-CriLvMlw.js";import"./Text-B_RemiZL.js";import"./DOMUtils-C0erXEEq.js";import"./Label-Cv9o4t_y.js";import"./ZIndexLayer-CQwtlObF.js";import"./types-Df8kiDN0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-CpjG7pC9.js";import"./useAnimationId-BV1Lvx7_.js";import"./Curve-DD_9uNW0.js";import"./step-74BZyyTl.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CGoUR7V-.js";import"./Symbols-_cvEA0x0.js";import"./symbol-DQm7NK9B.js";import"./ActiveShapeUtils-CJey3tMT.js";import"./RegisterGraphicalItemId-DRrwgsJN.js";import"./ErrorBarContext-60D9zT8I.js";import"./GraphicalItemClipPath-DJOu5Ece.js";import"./SetGraphicalItem-D9C9m9l_.js";const ct={argTypes:m,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:s})))},args:{...c(m),data:d,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
