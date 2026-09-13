import{R as t}from"./iframe-CpojRMYz.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-emyLb2hw.js";import{R as l}from"./zIndexSlice-D1ADf7PX.js";import{C as x}from"./ComposedChart-B6PO2aMu.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CBueyJ60.js";import{L as a}from"./Line-DDx2X4LF.js";import{X as c}from"./XAxis-DrbaoPhb.js";import{T as g}from"./Tooltip-DVviryQw.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-C3-HdBMA.js";import"./Text-l7Cxp-9T.js";import"./resolveDefaultProps-CNOzu_Ry.js";import"./DOMUtils-Bwqm48A6.js";import"./isWellBehavedNumber-BniOqqpx.js";import"./useId-C7t9aAMg.js";import"./useBackwardsCompatibleTheme-Bsz0EdPH.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-7f5E7Q4l.js";import"./index-BgVRD4HK.js";import"./index-DmdfXUBp.js";import"./RechartsWrapper-CF4JxjLb.js";import"./axisSelectors-BWpXFhCq.js";import"./throttle-2TOI5CL8.js";import"./d3-scale-BG2fjhI8.js";import"./index-Bx6QmfM2.js";import"./index-CHj19sxw.js";import"./renderedTicksSlice-DOd1w8ZM.js";import"./index-B9WJdOhz.js";import"./CartesianAxis-BQyqi4qL.js";import"./Layer-CCaY3a6J.js";import"./types-BBXJ7Rux.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DX0hjM8N.js";import"./chartDataContext-CP0m3FVl.js";import"./CategoricalChart-DzWKYdxW.js";import"./AnimatedItems-BIcnZI45.js";import"./useAnimationId-CwhUANii.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DMpLU3WW.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DvTz2wmh.js";import"./tooltipContext-DURoZOYw.js";import"./RegisterGraphicalItemId-mR_kXHAC.js";import"./ErrorBarContext-DaXU1Z8v.js";import"./GraphicalItemClipPath-2lYWsPZE.js";import"./SetGraphicalItem-CyRpKe3K.js";import"./getZIndexFromUnknown-DYuX537z.js";import"./useGraphicalItemIdentity-CvTNdUiI.js";import"./Curve-5MG-rBKT.js";import"./step-DMyapVKc.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CSBV62SU.js";import"./Dot-Cf1g1XZp.js";import"./getRadiusAndStrokeWidthFromDot-Z2EK9WFQ.js";import"./useElementOffset-C-WxvLcI.js";import"./uniqBy-CeYNO4r-.js";import"./iteratee-Bb80RnL1.js";import"./Cross-DBEGwuAS.js";import"./Sector-DJq8OywD.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
