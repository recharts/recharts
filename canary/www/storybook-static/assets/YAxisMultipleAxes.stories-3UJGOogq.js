import{R as t}from"./iframe-DbHNynaQ.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BKqQ4P5e.js";import{R as l}from"./zIndexSlice-seYPsfER.js";import{C as x}from"./ComposedChart-OopH4fQy.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CSJ2yP5a.js";import{L as a}from"./Line-C3qaM2j5.js";import{X as c}from"./XAxis-IVt4eUDa.js";import{T as g}from"./Tooltip-Bh5NqKKB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CahCPYhY.js";import"./Text-CnT4LfU-.js";import"./resolveDefaultProps-BxCdwk1t.js";import"./DOMUtils-W_YN1JiB.js";import"./isWellBehavedNumber-B8EuhNZV.js";import"./useId-JKbSdXmU.js";import"./useBackwardsCompatibleTheme-BrfbM-bw.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DLZyPL-y.js";import"./index-CRIpJa5f.js";import"./index-BGBt4hW8.js";import"./RechartsWrapper-B8ljz37p.js";import"./axisSelectors-DuRw_22M.js";import"./throttle-BLg26bcw.js";import"./d3-scale-ChODOj9m.js";import"./index-C6ClRwPj.js";import"./index-C0g1ZRMH.js";import"./renderedTicksSlice-BqyFHlMV.js";import"./index-uIcexEpZ.js";import"./CartesianAxis-BKzDRc2K.js";import"./Layer-McKs3jBR.js";import"./types-Dtr2g2lR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-B7Bt3OSw.js";import"./chartDataContext-EUMNNHrQ.js";import"./CategoricalChart-D9jf8lgu.js";import"./AnimatedItems-DQqNxpCY.js";import"./useAnimationId-aseG17e8.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BiI27SKD.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-FJemOztc.js";import"./tooltipContext-BhPrTQGI.js";import"./RegisterGraphicalItemId-CTY00hAi.js";import"./ErrorBarContext-BMuc8qch.js";import"./GraphicalItemClipPath-GbTn8y2C.js";import"./SetGraphicalItem-eyDqIX5L.js";import"./getZIndexFromUnknown-DvxcZaPv.js";import"./useGraphicalItemIdentity-Ox7A1s1f.js";import"./Curve-DSpvGQJR.js";import"./step-DpeM9sZC.js";import"./path-DyVhHtw_.js";import"./ActivePoints-C-6wZqrA.js";import"./Dot-CnXT2FP3.js";import"./getRadiusAndStrokeWidthFromDot-K22oepzJ.js";import"./useElementOffset-DsZ5J3Ev.js";import"./uniqBy-B46YDIdh.js";import"./iteratee-DXP-yn47.js";import"./Cross-B86aT3hY.js";import"./Sector-CYz6hNF2.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
