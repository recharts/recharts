import{R as t}from"./iframe-ULtY-NVK.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-BQ0jDyxm.js";import{R as l}from"./zIndexSlice-jBtZtiCi.js";import{C as x}from"./ComposedChart-BLU8rp3_.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CnB-dAcN.js";import{L as a}from"./Line-CXxZTyaf.js";import{X as c}from"./XAxis-BxexlvNE.js";import{T as g}from"./Tooltip-R8qLM_P2.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-RNo0-Kup.js";import"./Text-DIgVe04Z.js";import"./resolveDefaultProps-CnMrFr-n.js";import"./ZIndexLayer-3L32Zbp4.js";import"./index-Bra2wTck.js";import"./index-CnlGEyBG.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DJMQca_o.js";import"./throttle-CHVCCuLD.js";import"./axisSelectors-DyOG1uRh.js";import"./d3-scale-ZBKsHMes.js";import"./CartesianAxis-B-ohTpBX.js";import"./Layer-DhwnXi08.js";import"./types-YE6r9ekT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CHJPPtWm.js";import"./index-Do3BZ6Ro.js";import"./index-Btm1B8SY.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-JXy35Des.js";import"./index-BJmOGKKZ.js";import"./fillDefinitions-BGQhPk93.js";import"./CartesianChart-CrgxKX8P.js";import"./chartDataContext-BeD9TymV.js";import"./CategoricalChart-DwptyBKz.js";import"./dataEntryStyles-DVOUqZ2G.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CgoAn4IQ.js";import"./useAnimationId-BnN3bcdg.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-S-fma9uX.js";import"./tooltipContext-jXwpxvM2.js";import"./ErrorBarContext-DkSuy-bE.js";import"./activeStyles-nNAh6kPS.js";import"./SetGraphicalItem-C0LXV43X.js";import"./getZIndexFromUnknown-BJNwi2ms.js";import"./useEffectiveDataKey-DbYUjo2f.js";import"./omit-BAMQNq7o.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CN39irzx.js";import"./step-qhW1rf6_.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DVHPdhuz.js";import"./Dot-D81fGPmQ.js";import"./Symbols-D8MIyMXa.js";import"./symbol-C9fiuppk.js";import"./getRadiusAndStrokeWidthFromDot-DoYvpvg5.js";import"./useElementOffset-DhIwgz5u.js";import"./uniqBy-DTA7LqR-.js";import"./iteratee-DNbp_EuJ.js";import"./Cross-DardZkkK.js";import"./Sector-KxRZamhw.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
