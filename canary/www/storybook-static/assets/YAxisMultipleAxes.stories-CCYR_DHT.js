import{R as t}from"./iframe-XShEXmHR.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CC_fCC6K.js";import{R as l}from"./zIndexSlice-BbKyzabk.js";import{C as x}from"./ComposedChart-Buz-P00K.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-vbL9-DWq.js";import{L as a}from"./Line-BHkg6SFm.js";import{X as c}from"./XAxis-DWLQMeD5.js";import{T as g}from"./Tooltip-Bgj8opTW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-PHQocy7u.js";import"./Text-DdUz3atv.js";import"./resolveDefaultProps-DM0s23ft.js";import"./pageBackground-Caz1wwpV.js";import"./isWellBehavedNumber-D-ZqJjZ8.js";import"./useId-DooYhcnw.js";import"./useBackwardsCompatibleTheme-CMApgrjd.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BjS9bgAg.js";import"./index-Bvkt8vSC.js";import"./index-B7mLrG61.js";import"./axisSelectors-CSJ2InJO.js";import"./throttle-DGpDaXVx.js";import"./d3-scale-DlV_OlJQ.js";import"./CartesianAxis-DXjpiMVV.js";import"./Layer-C_-u4_qv.js";import"./types-Du-HQFzW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CDzS9pio.js";import"./index-B0AN-0kz.js";import"./index-C8Ku-gFK.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-WU0hX8ZH.js";import"./index-CNWPVzDl.js";import"./CartesianChart-CO72z_mS.js";import"./chartDataContext-CdQA1wIP.js";import"./CategoricalChart-D5nhR2iF.js";import"./activeStyles-JUu5k5N9.js";import"./useAnimationId-Dhnt88bC.js";import"./dataEntryStyles-BYJ6H9tg.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-3DMVp7GS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-bxL5SxNf.js";import"./tooltipContext-BEGw6oth.js";import"./ErrorBarContext-D_UY1Ewg.js";import"./GraphicalItemClipPath-CSHX6ion.js";import"./SetGraphicalItem-DeDaE9OF.js";import"./getZIndexFromUnknown--N4SIXFB.js";import"./useEffectiveDataKey-Ca_DBmdg.js";import"./Curve-BLSppaDw.js";import"./step-DYrGddVY.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BWEWclRb.js";import"./Dot-CF6MExt8.js";import"./getRadiusAndStrokeWidthFromDot-B8bE17TU.js";import"./useElementOffset-CDXnga2p.js";import"./uniqBy-2p13vlX2.js";import"./iteratee-Dckbnh0N.js";import"./Cross-MJ9lCMTF.js";import"./Sector-CTPlL39z.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
