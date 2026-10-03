import{R as t}from"./iframe-DeUe7xmC.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-EaFvavHr.js";import{R as l}from"./zIndexSlice-B-kuFUwH.js";import{C as x}from"./ComposedChart-XVsRLyio.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DOedK7ae.js";import{L as a}from"./Line-CpopKWma.js";import{X as c}from"./XAxis-DZewVXuj.js";import{T as g}from"./Tooltip-BRVfb4Hy.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CJwVVqdY.js";import"./Text-A2KhxUAH.js";import"./resolveDefaultProps-VBNHpirQ.js";import"./DOMUtils-BjCFSCOp.js";import"./isWellBehavedNumber-XmFYrAHS.js";import"./useId-lxxddI0G.js";import"./useBackwardsCompatibleTheme-JgYEE_gV.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-qWMWnECq.js";import"./index-B3VftlGk.js";import"./index-CS0BzYwB.js";import"./RechartsWrapper-ClGwO2Ez.js";import"./axisSelectors-L5D3YGAp.js";import"./throttle-D8_Vf5-y.js";import"./d3-scale-CKlOT7Hq.js";import"./index-D9wuu4lj.js";import"./index-CLX85w7H.js";import"./renderedTicksSlice-zQGjoh1b.js";import"./index-Cegj0e_Y.js";import"./CartesianAxis-DhJE-g8f.js";import"./Layer-CuQjvvoN.js";import"./types-BQuMJRU5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BRUE9SRS.js";import"./chartDataContext-CBR6ctH_.js";import"./CategoricalChart-DXh-O_P4.js";import"./AnimatedItems-BsztCZc7.js";import"./useAnimationId-sq-3c3no.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CawY8KDm.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cd6LbszL.js";import"./tooltipContext-CQr26Kth.js";import"./RegisterGraphicalItemId-CVA94A2X.js";import"./ErrorBarContext-CCYjOK6U.js";import"./GraphicalItemClipPath-CO2IN5Qd.js";import"./SetGraphicalItem-DeV-JbkH.js";import"./getZIndexFromUnknown-BefkiLLK.js";import"./useGraphicalItemIdentity-DKt9Ij8h.js";import"./dataEntryStyles-BdqrCNw4.js";import"./Curve-DmgBVGdH.js";import"./step-CZi2V8Uw.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BeTkB1B9.js";import"./Dot-89j0vp4m.js";import"./getRadiusAndStrokeWidthFromDot-CID7eD-5.js";import"./useElementOffset-B5as_cGC.js";import"./uniqBy-iohiE7eU.js";import"./iteratee-vFmdqAbU.js";import"./Cross-dtI2yoIv.js";import"./Sector-CaazcLkB.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
