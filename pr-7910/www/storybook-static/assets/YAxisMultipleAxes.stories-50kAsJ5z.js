import{R as t}from"./iframe-C6yJYV4z.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CkYznIce.js";import{R as l}from"./zIndexSlice-mBP7ycwT.js";import{C as x}from"./ComposedChart-6mo15iiQ.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DnQpOlWx.js";import{L as a}from"./Line-DkJ7OpB5.js";import{X as c}from"./XAxis-gLEHw-pb.js";import{T as g}from"./Tooltip-CgvqsQ1Y.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-xmY0FOhv.js";import"./Text-DjSFzWjg.js";import"./resolveDefaultProps-DmIaNxK6.js";import"./DOMUtils-DIjRf9zs.js";import"./isWellBehavedNumber-ovfPMeKD.js";import"./useId-BXkBt9SK.js";import"./useBackwardsCompatibleTheme-BmZuK7R_.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-bw7pXUay.js";import"./index-yxNm8k9x.js";import"./index-DRfGxCUi.js";import"./RechartsWrapper-_g--7_B0.js";import"./axisSelectors-D_pqJ7Ai.js";import"./throttle-BxZZQXD3.js";import"./d3-scale-U4E3X2xZ.js";import"./index-DqnMLpa_.js";import"./index-nciU1bgU.js";import"./renderedTicksSlice-Ju5mjaas.js";import"./index-DhjcBG7u.js";import"./CartesianAxis-DAfwjJLC.js";import"./Layer-C3EX9flk.js";import"./types--kLCfUVs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CP9Fvg-3.js";import"./chartDataContext-E_YlGMud.js";import"./CategoricalChart-e6KCKA8N.js";import"./AnimatedItems-5jNEDjqz.js";import"./useAnimationId-C3itl5g8.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DPYg-u0q.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B6ISajHR.js";import"./tooltipContext-BaQgNVV2.js";import"./RegisterGraphicalItemId-CCRb1xbW.js";import"./ErrorBarContext-Iszmpeof.js";import"./GraphicalItemClipPath-S_9K0RuN.js";import"./SetGraphicalItem-Be6goNI2.js";import"./getZIndexFromUnknown-3g0T-cex.js";import"./useGraphicalItemIdentity-CR7heWJW.js";import"./dataEntryStyles-CJ5GKpcP.js";import"./Curve-BUAb8EfH.js";import"./step-C-IligCD.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Dm2yavg5.js";import"./Dot-kJhNeSCF.js";import"./getRadiusAndStrokeWidthFromDot-C5C4oMko.js";import"./useElementOffset-8O56CP7s.js";import"./uniqBy-mjkakhsi.js";import"./iteratee-DvNTUumB.js";import"./Cross-BU3xExZw.js";import"./Sector-C-i8U4lW.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
