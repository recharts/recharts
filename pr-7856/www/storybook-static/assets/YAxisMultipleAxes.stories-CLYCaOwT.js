import{R as t}from"./iframe-B-kCJkOw.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-D8VGqcIq.js";import{R as l}from"./zIndexSlice-Clv-Wr_e.js";import{C as x}from"./ComposedChart-BAXW9VrG.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CMswvrej.js";import{L as a}from"./Line-CGQuGR8D.js";import{X as c}from"./XAxis-C88jehXC.js";import{T as g}from"./Tooltip-DHZ_8KJV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CshHc_P8.js";import"./Text-DvIEDZcH.js";import"./resolveDefaultProps-BhhOMDdt.js";import"./DOMUtils-CWJWmJqm.js";import"./isWellBehavedNumber-C4FzwffV.js";import"./useId-DGNKKzIZ.js";import"./useBackwardsCompatibleTheme-D27rYUis.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-yM8iQkyd.js";import"./index-DcAa2UuL.js";import"./index-CBKTbWE1.js";import"./RechartsWrapper-D3el3knR.js";import"./axisSelectors-DT9SmTCn.js";import"./throttle-DVuM4iFd.js";import"./d3-scale-IzH54SGl.js";import"./index-2QimBBuf.js";import"./index-BVh04Hzh.js";import"./renderedTicksSlice-C6ma__-i.js";import"./index-CmAyTwir.js";import"./CartesianAxis-DmQK4you.js";import"./Layer-DUmzLecA.js";import"./types-1S0vnYpD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-C3VLYHct.js";import"./chartDataContext-CikOGl8V.js";import"./CategoricalChart-CVXqoPY8.js";import"./AnimatedItems-BgnTcQ58.js";import"./useAnimationId-Bkh3_vjS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CgoNg2OD.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C14ipRtW.js";import"./tooltipContext-BjlGROJz.js";import"./RegisterGraphicalItemId-DX8EYk4F.js";import"./ErrorBarContext-PD5E_qHe.js";import"./GraphicalItemClipPath-Bf7ClEec.js";import"./SetGraphicalItem-DlY4dRC7.js";import"./getZIndexFromUnknown-BI5uVghB.js";import"./useGraphicalItemIdentity-wZgDD3hk.js";import"./Curve-__pvox1D.js";import"./step-DoJnsDJu.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DYudjPxL.js";import"./Dot-BKZoXX6K.js";import"./getRadiusAndStrokeWidthFromDot-DPuw4jnu.js";import"./useElementOffset-BJT03Q9O.js";import"./uniqBy-_dq4LJrc.js";import"./iteratee-Dxw4ISyk.js";import"./Cross-DBczKRIH.js";import"./Sector-CsqMh6gD.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
