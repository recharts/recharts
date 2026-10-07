import{R as t}from"./iframe-ZTC5pSfT.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-bg8Qjeqd.js";import{R as l}from"./zIndexSlice-CiW62Ghg.js";import{C as x}from"./ComposedChart-COAup3ak.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C0cbPCz5.js";import{L as a}from"./Line-Oh1arZa1.js";import{X as c}from"./XAxis-Oh1yCkiB.js";import{T as g}from"./Tooltip-DyVJaVK8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CMugnJA-.js";import"./Text-DaoB-dFq.js";import"./resolveDefaultProps-BUix77YN.js";import"./DOMUtils-DpY81Anq.js";import"./isWellBehavedNumber-6xDPwo21.js";import"./useId-PK-UNRth.js";import"./useBackwardsCompatibleTheme-DAjVS6k9.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ilP_ZZPQ.js";import"./index-CzSCaBER.js";import"./index-B4ZumRW0.js";import"./RechartsWrapper-mhohCDVl.js";import"./axisSelectors-K6KGYDFF.js";import"./throttle-KrxK4z_U.js";import"./d3-scale-Cpr3RseV.js";import"./index-CIre6itI.js";import"./index-C6jgkA61.js";import"./renderedTicksSlice-2JPEuPfq.js";import"./index-BMMDR1qW.js";import"./CartesianAxis-CC0XJ4Ez.js";import"./Layer-jaIUArAZ.js";import"./types-C79EZ9QB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BkfStbLb.js";import"./chartDataContext-CsGZnfHI.js";import"./CategoricalChart-Cp6s7k2U.js";import"./AnimatedItems-sBBBQ_aJ.js";import"./useAnimationId-BB_b0zsq.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DfB4STrV.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D8W511PY.js";import"./tooltipContext-CfS-ziab.js";import"./RegisterGraphicalItemId-9ha_OJ2S.js";import"./ErrorBarContext-C3dRgdy-.js";import"./GraphicalItemClipPath-aJ1mq8DH.js";import"./SetGraphicalItem-C-6wJbAO.js";import"./getZIndexFromUnknown-WTK3Cawp.js";import"./useGraphicalItemIdentity-CBZHm2cX.js";import"./dataEntryStyles-BwIZ5osO.js";import"./Curve-DbdnYDgr.js";import"./step-Q9TOfcF_.js";import"./path-DyVhHtw_.js";import"./ActivePoints-LVJzz7nF.js";import"./Dot-YLlzKOXh.js";import"./getRadiusAndStrokeWidthFromDot-B8rGLwDc.js";import"./useElementOffset-C1UlIH_L.js";import"./uniqBy-CkMt6bOR.js";import"./iteratee-Bhxot86J.js";import"./Cross-B8xMgqHE.js";import"./Sector-C8WiRuBf.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
