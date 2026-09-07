import{R as t}from"./iframe-s76JLJT4.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Dp0QA8yk.js";import{R as l}from"./zIndexSlice-BAzWj5Bm.js";import{C as x}from"./ComposedChart-CrJ4dqI5.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BSi9jFZQ.js";import{L as a}from"./Line-cLMgFbkH.js";import{X as c}from"./XAxis-oY-MxrDT.js";import{T as g}from"./Tooltip-CV4gO8AH.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BK0AZvtz.js";import"./Text-B6LThSxq.js";import"./resolveDefaultProps-BacpidNF.js";import"./DOMUtils-duej-PH-.js";import"./isWellBehavedNumber-BfAJeodP.js";import"./useId-DWgk4q6e.js";import"./useBackwardsCompatibleTheme-C6S0KGB6.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-RER6T0Dj.js";import"./index-D791KxLc.js";import"./index-u4HpiE5R.js";import"./RechartsWrapper-CzmQgFdw.js";import"./axisSelectors-BVRh__it.js";import"./throttle-DlYzKYH1.js";import"./d3-scale-3iO39mKP.js";import"./index-BP9e58dC.js";import"./index-5KrtyyBx.js";import"./renderedTicksSlice-YO-Fp9Ef.js";import"./index-v7GV83G6.js";import"./CartesianAxis-wofyjDXK.js";import"./Layer-S_x0F8ws.js";import"./types-B1A5enlV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BHvBdOos.js";import"./chartDataContext-heFiBO7H.js";import"./CategoricalChart-Bnpv8dk8.js";import"./AnimatedItems-DJi7GpYq.js";import"./useAnimationId-Co4tnqM8.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B7G5cTce.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CMuKiAIO.js";import"./tooltipContext-DkwIY1lu.js";import"./RegisterGraphicalItemId-CojxeIbK.js";import"./ErrorBarContext-DjrrsITr.js";import"./GraphicalItemClipPath-4yehoiu3.js";import"./SetGraphicalItem-jdZDqL_N.js";import"./getZIndexFromUnknown-CmANxnd-.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DJ3n2ftC.js";import"./Curve-q_CY-4KJ.js";import"./step-zmbHrnqa.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DcCT_xea.js";import"./Dot-bQR7q4wH.js";import"./getRadiusAndStrokeWidthFromDot-DDb6xR6G.js";import"./useElementOffset-BEqwyN49.js";import"./uniqBy-Cdtb4h_K.js";import"./iteratee-C2acX8LZ.js";import"./Cross-v4KNwmm3.js";import"./Sector-Sh4f_eZn.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
