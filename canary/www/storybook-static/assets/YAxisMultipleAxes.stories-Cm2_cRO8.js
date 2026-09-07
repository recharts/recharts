import{R as t}from"./iframe-ZwmkHOWK.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-PaDHJ4i8.js";import{R as l}from"./zIndexSlice-B8sjij8M.js";import{C as x}from"./ComposedChart-CFgERvuY.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DWXDaHTG.js";import{L as a}from"./Line-yCuGdR2u.js";import{X as c}from"./XAxis-C1z9LD8A.js";import{T as g}from"./Tooltip-Cjuu3IKj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BVR5F0n2.js";import"./Text-BI3-3dXY.js";import"./resolveDefaultProps-CbN-GnY2.js";import"./DOMUtils-CP0ZeXZR.js";import"./isWellBehavedNumber-DzkihPO6.js";import"./useId-CFRlQjhC.js";import"./useBackwardsCompatibleTheme-CHv0D4hM.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Bm6SGbYz.js";import"./index-B4E9I_5C.js";import"./index-BAGpmxlA.js";import"./RechartsWrapper-CLkBAicL.js";import"./axisSelectors-DaNNrydT.js";import"./throttle-C39dOrQS.js";import"./d3-scale-DKWhOpVH.js";import"./index-BAV2Qa9k.js";import"./index-Cf44-e7y.js";import"./renderedTicksSlice-CKHEQg46.js";import"./index-DyLWGJaj.js";import"./CartesianAxis-Djmj8VDf.js";import"./Layer-i_0u2Crx.js";import"./types-v1ATzDHk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-B4XfQoQU.js";import"./chartDataContext-Dk9qGRs-.js";import"./CategoricalChart-CMRgznGD.js";import"./AnimatedItems-CFufr1UH.js";import"./useAnimationId-BCL-lQv_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BqK5FaGX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CuQ7F7ce.js";import"./tooltipContext-CfqH0KIF.js";import"./RegisterGraphicalItemId-DwO6JeUN.js";import"./ErrorBarContext-ik09lEWu.js";import"./GraphicalItemClipPath-DA7NUISl.js";import"./SetGraphicalItem-D-pUVL2E.js";import"./getZIndexFromUnknown-A30bylKl.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CYn-McYw.js";import"./Curve-BC_5nDae.js";import"./step-DANxpaDn.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CJLUsm-B.js";import"./Dot-DBtVqS4S.js";import"./getRadiusAndStrokeWidthFromDot-ScUuE-rr.js";import"./useElementOffset-CEleLGXj.js";import"./uniqBy-O2aI4kAk.js";import"./iteratee-AI8PmdR5.js";import"./Cross-DUDPSYz2.js";import"./Sector-BhWTn6vH.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
