import{R as t}from"./iframe-DNnhIzqd.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-DL1XukoQ.js";import{R as l}from"./zIndexSlice-CZnRUfU-.js";import{C as x}from"./ComposedChart-Dwrm7GV8.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DD1GfBl4.js";import{L as a}from"./Line-Bslt7b3k.js";import{X as c}from"./XAxis-DyyKFn3c.js";import{T as g}from"./Tooltip-Dhrf56F8.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CTqEvKA7.js";import"./get-CjriyByo.js";import"./Label-zRO_Glrc.js";import"./Text-eO__rozb.js";import"./ZIndexLayer-BbOOCV2_.js";import"./index-WikYS3OE.js";import"./index-C-IHZC0A.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D96CZuW6.js";import"./throttle-QyoUWs98.js";import"./axisSelectors-D3RI42dK.js";import"./diverging-DjL9qVWl.js";import"./CartesianAxis-DyWgnQe6.js";import"./Layer-BC8osa1v.js";import"./types-BRWBXBDp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CiWxl1hZ.js";import"./index-DDptWEzO.js";import"./index-B4kmWeHl.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CrR43_nu.js";import"./index-DCQUdeKB.js";import"./fillDefinitions-C2isIUYI.js";import"./CartesianChart-Dh9mzh7h.js";import"./chartDataContext-C9vkNbCm.js";import"./CategoricalChart-Baa8HnHb.js";import"./dataEntryStyles-BLzS4I_n.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BldvyN6i.js";import"./useAnimationId-nuwJNMaM.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BT3Mq8P-.js";import"./tooltipContext-BL5AVfuY.js";import"./ErrorBarContext-BEOQHAHp.js";import"./activeStyles-C2NC3gaF.js";import"./SetGraphicalItem-CNXPVtw_.js";import"./getZIndexFromUnknown-CDoNNBeO.js";import"./useEffectiveDataKey-DDl_vZE8.js";import"./omit-CCPfwULE.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-D2jL9mPV.js";import"./Curve-BuuEl7Oa.js";import"./step-CcvBplbA.js";import"./path-BBMZd4YL.js";import"./ActivePoints-CcA8jx8b.js";import"./Dot-1G0Boo2p.js";import"./Symbols-DFH9iE38.js";import"./symbol-B9mQM-FG.js";import"./useElementOffset-BaFq-POl.js";import"./uniqBy-_gekbtiv.js";import"./iteratee-6f6iZKQ8.js";import"./Cross-Q3vpjsWn.js";import"./Sector-DVFeULU9.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
