import{R as t}from"./iframe-CVyYUHBB.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Da2JXkbU.js";import{R as l}from"./zIndexSlice-DQO5Hbgs.js";import{C as x}from"./ComposedChart-m9fhUeFB.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Bcq9lIkk.js";import{L as a}from"./Line-BPoyEZrU.js";import{X as c}from"./XAxis-L2wk8rnW.js";import{T as g}from"./Tooltip-bL6ikWyH.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DUcJCWBn.js";import"./Text-CiA3AAlg.js";import"./resolveDefaultProps-C7voaGK7.js";import"./DOMUtils-ukWQHZl5.js";import"./isWellBehavedNumber-BkHFck3s.js";import"./RechartsThemeContext-NTsyT9p1.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DBw3xiu4.js";import"./index-DyYl91DI.js";import"./index-Bu-B5WMy.js";import"./RechartsWrapper-B47jb7Bg.js";import"./index-Ck0Bo50f.js";import"./index-DLItSsfJ.js";import"./throttle-BBXZcEly.js";import"./axisSelectors-CMqkaAfm.js";import"./d3-scale-G2cHgOnr.js";import"./renderedTicksSlice-Cdp3Xg1W.js";import"./CartesianAxis-890WjR3i.js";import"./Layer-BB5O4xlv.js";import"./types-DESxFXXj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart--y5fp4Ts.js";import"./chartDataContext-CkCkvPBB.js";import"./CategoricalChart-BzwwubIO.js";import"./tooltipContext-B_HOhC8Y.js";import"./AnimatedItems-Clv-mx2A.js";import"./useAnimationId-_KC_AMgU.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-AHQh490H.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D5nCu2Hc.js";import"./RegisterGraphicalItemId-BhQ648vE.js";import"./ErrorBarContext-Buq5hkgo.js";import"./GraphicalItemClipPath-JgdFdpvQ.js";import"./SetGraphicalItem-C8TpD4Nn.js";import"./getZIndexFromUnknown-cYRHZ3Dd.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-UGBu3ofg.js";import"./Curve-BDPvfmPk.js";import"./step-Be_wHVCe.js";import"./path-DyVhHtw_.js";import"./ActivePoints-D1NkQNgM.js";import"./Dot-D0NdtXSm.js";import"./getRadiusAndStrokeWidthFromDot-OHCftA6z.js";import"./useElementOffset-BXKfJxEF.js";import"./uniqBy-CHZtDAbM.js";import"./iteratee-CwapYXfW.js";import"./Cross-BgZQfds0.js";import"./Sector-3KjT9U1p.js";const Kt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Mt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Mt as __namedExportsOrder,Kt as default};
