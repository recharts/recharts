import{R as t}from"./iframe-JTvlYrAE.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CVrRck7n.js";import{R as l}from"./zIndexSlice-D7ZMgfig.js";import{C as x}from"./ComposedChart-dEDwCA-a.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DeLKz9gc.js";import{L as a}from"./Line-BHsO2LXO.js";import{X as c}from"./XAxis-D-RPwoLI.js";import{T as g}from"./Tooltip-DdQhOIKa.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DVdjMuKO.js";import"./Text-Dg334Fxc.js";import"./resolveDefaultProps-BQ8E1HnC.js";import"./DOMUtils-9u-qTQJC.js";import"./isWellBehavedNumber-DZJ-wKuN.js";import"./useId-Ddv-MCTo.js";import"./useBackwardsCompatibleTheme-DrI3o7cI.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DRiAaxZ2.js";import"./index-oSnD0z-O.js";import"./index-DIk0NYXt.js";import"./RechartsWrapper-DxDGjzAu.js";import"./axisSelectors-5nOHG62L.js";import"./throttle-CXxUHuO5.js";import"./d3-scale-CyiZcwJt.js";import"./index-6AYKMmGX.js";import"./index-C7e_DiH0.js";import"./renderedTicksSlice-DqB8pESJ.js";import"./index-C2cjqz89.js";import"./CartesianAxis-BCWZ119m.js";import"./Layer-OemeYySJ.js";import"./types-BAT4N-Js.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Car3Atj3.js";import"./chartDataContext-r6ewa5Wc.js";import"./CategoricalChart-Dv8UcXMC.js";import"./AnimatedItems-CtaNoYLp.js";import"./useAnimationId-B-nvf5O7.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C-NwM-8_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BXOO9Xzj.js";import"./tooltipContext-B3YdOV5b.js";import"./RegisterGraphicalItemId-5DR47K5z.js";import"./ErrorBarContext-C1DfV54u.js";import"./GraphicalItemClipPath-BqO5vOXC.js";import"./SetGraphicalItem-3AS-SEti.js";import"./getZIndexFromUnknown-DeP3-gvQ.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BaBnkWw8.js";import"./Curve-D4vRDLjT.js";import"./step-8zevn7on.js";import"./path-DyVhHtw_.js";import"./ActivePoints-ox6ksdpi.js";import"./Dot-CrFaSuhf.js";import"./getRadiusAndStrokeWidthFromDot-BDnKC9y1.js";import"./useElementOffset-DZ6FTXmj.js";import"./uniqBy-CY-58Mlk.js";import"./iteratee-ByQfU6mD.js";import"./Cross-CJpIXaUR.js";import"./Sector-ZvcJKD-T.js";const Rt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Lt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
