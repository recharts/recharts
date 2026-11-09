import{R as t}from"./iframe-CMDkES_H.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-C3tuYQmx.js";import{R as l}from"./zIndexSlice-CEXNkTXm.js";import{C as x}from"./ComposedChart-AN7xQ-23.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CS1mktTM.js";import{L as a}from"./Line-Cw74JevM.js";import{X as c}from"./XAxis-B5q3F6Uy.js";import{T as g}from"./Tooltip-kAPsWdL8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DkUV91yB.js";import"./Text-CXN2lt2h.js";import"./resolveDefaultProps-BBu38DQb.js";import"./ZIndexLayer-Dr7m0amd.js";import"./index-nmLk2qd-.js";import"./index-Cycxm7rW.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-B2-HhSnm.js";import"./throttle-BV0akTiG.js";import"./axisSelectors-BgqFub1M.js";import"./d3-scale-Vem8QkvK.js";import"./CartesianAxis-KTct3My8.js";import"./Layer-Dxo4pAJK.js";import"./types-BRdSNrFn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BzpVxRSL.js";import"./index-CDFg-t_S.js";import"./index-CQ6GchDM.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-YdCgLXYS.js";import"./index-Dwicv9nR.js";import"./fillDefinitions-aMvFJMZF.js";import"./CartesianChart-D9ZN9vwZ.js";import"./chartDataContext-U2SqLEu1.js";import"./CategoricalChart-CNCtCgVg.js";import"./dataEntryStyles-CQKyrMQS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B0Yk3Jnp.js";import"./useAnimationId-Br5Fw6SL.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BI-HqHtF.js";import"./tooltipContext-BfYJ3kCm.js";import"./ErrorBarContext-DWVCzs9M.js";import"./activeStyles-uNCwuaQZ.js";import"./SetGraphicalItem-BWtk-2FX.js";import"./getZIndexFromUnknown-DV_2JkUf.js";import"./useEffectiveDataKey-DEHLWy8h.js";import"./omit-D-A9C4xh.js";import"./isArguments-yB-y1yaH.js";import"./Curve-lt9C0hSq.js";import"./step-CtpAouP5.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BkO0kzKb.js";import"./Dot-DVBxqdJG.js";import"./Symbols-KRGqLXgG.js";import"./symbol-CkUX_hdb.js";import"./getRadiusAndStrokeWidthFromDot-DhdxEzB3.js";import"./useElementOffset-CfLeRl1x.js";import"./uniqBy-CBQHwdan.js";import"./iteratee-DQxlQ_gO.js";import"./Cross-CQ724W_w.js";import"./Sector-CpmtdMyq.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
