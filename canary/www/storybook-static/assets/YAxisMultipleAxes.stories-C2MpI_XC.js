import{R as t}from"./iframe-oSm8ncin.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BivtkPP6.js";import{R as l}from"./zIndexSlice-DvT_amFo.js";import{C as x}from"./ComposedChart-BTCoOoqj.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Dorjniof.js";import{L as a}from"./Line-DROjObTD.js";import{X as c}from"./XAxis-rWMx021r.js";import{T as g}from"./Tooltip-078BydMz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DPyx96_s.js";import"./Text-BWvwrxPl.js";import"./resolveDefaultProps-CiTJI47d.js";import"./DOMUtils-BGxUAFyQ.js";import"./isWellBehavedNumber-CCMQKmI-.js";import"./useId-BLP9z_DT.js";import"./useBackwardsCompatibleTheme-B6W0Pzfd.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Csw-EOMR.js";import"./index-BcLgASAz.js";import"./index-DhJ936Cx.js";import"./RechartsWrapper-DD_spGc2.js";import"./axisSelectors-CKiFWBK6.js";import"./throttle-Cx1ccipN.js";import"./d3-scale-VuQaHR8V.js";import"./index-BEgTYoe2.js";import"./index-Bu5ia8Fq.js";import"./renderedTicksSlice-DvZXVX5V.js";import"./index-b9HoDQHW.js";import"./CartesianAxis-DnYW7AG9.js";import"./Layer-DyWXZatW.js";import"./types-DFgJchiK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-kW9NXKsO.js";import"./chartDataContext-Bj9GKAto.js";import"./CategoricalChart-_S_x7otk.js";import"./AnimatedItems-BqDLnMl8.js";import"./useAnimationId-Bxm77g86.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-kf9gK_tK.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C_Yr1SfA.js";import"./tooltipContext-CdjrfRy-.js";import"./RegisterGraphicalItemId-BjlJzRIf.js";import"./ErrorBarContext--MZg4-Ns.js";import"./GraphicalItemClipPath-B4m_JP2k.js";import"./SetGraphicalItem-3c27uR51.js";import"./getZIndexFromUnknown-GPJC2rgR.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Be2NxRtb.js";import"./Curve-0eRV3Tfk.js";import"./step-NYzyT-_J.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BDnVkWFc.js";import"./Dot-R8_RPRPn.js";import"./getRadiusAndStrokeWidthFromDot-CJie2LqZ.js";import"./useElementOffset-4nozGT_V.js";import"./uniqBy-BItzAnk5.js";import"./iteratee-CvG7v8HH.js";import"./Cross-D-dBfYi-.js";import"./Sector-BJs3gvjr.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
