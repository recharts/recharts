import{R as t}from"./iframe-Dgm4gy-U.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-mX4prg2G.js";import{R as l}from"./zIndexSlice-CiwacDpC.js";import{C as x}from"./ComposedChart-ByttuQ_a.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-4abJSklm.js";import{L as a}from"./Line-CUAXGkMg.js";import{X as c}from"./XAxis-CfrEw3PN.js";import{T as g}from"./Tooltip-CWY5UpWW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-D7CpXrZ4.js";import"./Text-8gs2XgOQ.js";import"./resolveDefaultProps-Dd95FcLW.js";import"./pageBackground-Cm2lHn8y.js";import"./isWellBehavedNumber-BJRZFbyv.js";import"./useId-C1YsdgdZ.js";import"./useBackwardsCompatibleTheme-BpARltC_.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-IYsblH0Q.js";import"./index-DB1nW_kS.js";import"./index-B8zxjei6.js";import"./axisSelectors-mj5UOSEK.js";import"./throttle-zAOqa1T8.js";import"./d3-scale-CRCwBtC_.js";import"./CartesianAxis-B7Oepgsg.js";import"./Layer-BihfHLDn.js";import"./types-BUhHmnCY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DyR3wyNf.js";import"./index-BdUNqqcp.js";import"./index-CjMT8r2k.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-ZSLGTFtH.js";import"./index-C9uskWuj.js";import"./CartesianChart-BqW0iuwz.js";import"./chartDataContext-DoVd5A16.js";import"./CategoricalChart-DkwsSuns.js";import"./activeStyles-DhaHnmuT.js";import"./useAnimationId-Bq4IYhf5.js";import"./dataEntryStyles-DqmWF7tK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-jgrU2osW.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CQNP7AWp.js";import"./tooltipContext-nIYBKPjd.js";import"./ErrorBarContext-DQKU8Ti5.js";import"./GraphicalItemClipPath-D_X4MzO8.js";import"./SetGraphicalItem-Dc743XQT.js";import"./getZIndexFromUnknown-DUuliOZl.js";import"./useEffectiveDataKey-Dpv4-4ke.js";import"./Curve-CtDZfaqJ.js";import"./step-BcutOZJj.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BL0uan1q.js";import"./Dot-DF3bSaZ9.js";import"./getRadiusAndStrokeWidthFromDot-LRjZ0GPt.js";import"./useElementOffset-Chv-8FgP.js";import"./uniqBy-B4vXZz4G.js";import"./iteratee-DeFhKk0a.js";import"./Cross-B0iF6zDj.js";import"./Sector-bkH3Vvhm.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
