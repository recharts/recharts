import{R as t}from"./iframe-BFM8x9PA.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-2TBACSCB.js";import{R as l}from"./zIndexSlice-Dx9mYmyj.js";import{C as x}from"./ComposedChart-kK9tUW2C.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CwVYgJ1R.js";import{L as a}from"./Line-_czTNmY9.js";import{X as c}from"./XAxis-sqq-OrNO.js";import{T as g}from"./Tooltip-D2g0io9c.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Br3cCz6i.js";import"./Text-D2FZ9-P8.js";import"./resolveDefaultProps-Bd_5xcSs.js";import"./DOMUtils-eLbycdkH.js";import"./isWellBehavedNumber-D4sYzu_F.js";import"./useId-BKuqsutR.js";import"./useBackwardsCompatibleTheme-BTrqDtcc.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DP5puj9b.js";import"./index-BWGXcjC4.js";import"./index-DVzpkoDY.js";import"./RechartsWrapper-DYXkzF69.js";import"./axisSelectors-DiNaBi7F.js";import"./throttle-DqtHcGYb.js";import"./d3-scale-BV6eo-EO.js";import"./index-CngxH_6L.js";import"./index-BWjxNJoO.js";import"./renderedTicksSlice-CjeZk4XK.js";import"./index-CMQv9dM_.js";import"./CartesianAxis-DRX8HKZ_.js";import"./Layer-Be0Rd-Q7.js";import"./types-CNyTn7M4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CkSZZlig.js";import"./chartDataContext-BTZBL-Eg.js";import"./CategoricalChart-Bte4O3H1.js";import"./AnimatedItems-B1_R-VqI.js";import"./useAnimationId-B4FOQMwj.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cn3rNWTe.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Ct3yDoqv.js";import"./tooltipContext-DUWCCZNf.js";import"./RegisterGraphicalItemId-Cv5_OQqk.js";import"./ErrorBarContext-BazLNBpB.js";import"./GraphicalItemClipPath-jUcNwVzc.js";import"./SetGraphicalItem-CfBe4xfA.js";import"./getZIndexFromUnknown-CBMOvbuQ.js";import"./useGraphicalItemIdentity-CRa1F1Pi.js";import"./Curve-C8AnJvF8.js";import"./step-BN1FmChO.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BCJal-aM.js";import"./Dot-CpCQ4QvO.js";import"./getRadiusAndStrokeWidthFromDot-b4U3g1Ny.js";import"./useElementOffset-DtoiQLb6.js";import"./uniqBy-CMNVf6Sn.js";import"./iteratee-D0e9_Et7.js";import"./Cross-Duoll-u4.js";import"./Sector-BTJusckX.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Rt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
