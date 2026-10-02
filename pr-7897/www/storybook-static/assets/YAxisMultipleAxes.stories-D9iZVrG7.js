import{R as t}from"./iframe-B0sakJiE.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CZvdB1-4.js";import{R as l}from"./zIndexSlice-C2JoSOuc.js";import{C as x}from"./ComposedChart-CtXhtoOd.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C77BTpPn.js";import{L as a}from"./Line-84fb3iOh.js";import{X as c}from"./XAxis-BMxSzB1I.js";import{T as g}from"./Tooltip-CvneTsD4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CXhmz5va.js";import"./Text-YdcYRLnk.js";import"./resolveDefaultProps-ssIH5a_N.js";import"./DOMUtils-Cp8HsdRc.js";import"./isWellBehavedNumber-DiVn1zM4.js";import"./useId-ByzngA9u.js";import"./useBackwardsCompatibleTheme-yTt122QS.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C7T7VX-U.js";import"./index-DsNYe81z.js";import"./index-BXQEz9WW.js";import"./RechartsWrapper-BpIUDAEt.js";import"./axisSelectors-DAvStXmd.js";import"./throttle-C7TX7owl.js";import"./d3-scale-CBENh8dV.js";import"./index-CshZKuHv.js";import"./index-B_LLgB3d.js";import"./renderedTicksSlice-BPkvdwOw.js";import"./index-7d7qLSfx.js";import"./CartesianAxis-6gx2DY-1.js";import"./Layer-CcOy9dqf.js";import"./types-BxUBO_Vd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BkOoMrfQ.js";import"./chartDataContext-Bl9ftmGr.js";import"./CategoricalChart-i5JvNUXt.js";import"./AnimatedItems-DhCfcvtd.js";import"./useAnimationId-fISgZVPU.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-RAovKYee.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DnkyzZr6.js";import"./tooltipContext-2RfoaFX7.js";import"./RegisterGraphicalItemId-BMnnO_Y6.js";import"./ErrorBarContext-lXq8p5sv.js";import"./GraphicalItemClipPath-DDSyttGC.js";import"./SetGraphicalItem-BtMMOS1d.js";import"./getZIndexFromUnknown-DgbGgnBi.js";import"./useGraphicalItemIdentity-CN480731.js";import"./dataEntryStyles-yonOgdkN.js";import"./Curve-B_1SwL8s.js";import"./step-step2nKl.js";import"./path-DyVhHtw_.js";import"./ActivePoints-REhV00gC.js";import"./Dot-CHjZWmhk.js";import"./getRadiusAndStrokeWidthFromDot-Bo_6wHZf.js";import"./useElementOffset-4fRB1JA3.js";import"./uniqBy-CUMmWf25.js";import"./iteratee-XhZZr9kx.js";import"./Cross-jsPGEXbR.js";import"./Sector-CcFisYpN.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Lt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <article style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
        <div style={{
        width: '100%'
      }}>
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart data={pageData}>
              <Bar dataKey="pv" fill="red" yAxisId="right" />
              <Bar dataKey="uv" fill="red" yAxisId="right-mirror" />
              <Line dataKey="amt" fill="green" yAxisId="left" />
              <Line dataKey="amt" fill="green" yAxisId="left-mirror" />

              <XAxis padding={{
              left: 50,
              right: 50
            }} dataKey="name" scale="band" />
              <YAxis {...args} yAxisId="left" orientation="left" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="left-mirror" orientation="left" mirror tickCount={8} />
              <YAxis {...args} yAxisId="right" orientation="right" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="right-mirror" orientation="right" mirror tickCount={20} />

              <Tooltip />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <h4>
          {\`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element\`}
        </h4>
      </article>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
