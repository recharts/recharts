import{R as t}from"./iframe-Bk-N4eh5.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DOohWhTk.js";import{R as l}from"./zIndexSlice-Cks1L1uQ.js";import{C as x}from"./ComposedChart-DlCpTDyp.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-5lZlmrkr.js";import{L as a}from"./Line-C4E-S0qs.js";import{X as c}from"./XAxis-cKkeo31Z.js";import{T as g}from"./Tooltip-BSEw8bGY.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-QAvV2VO9.js";import"./Text-DZhX5I78.js";import"./resolveDefaultProps-jzV4S5LU.js";import"./DOMUtils-CUQy7sD1.js";import"./isWellBehavedNumber-Du6Kj5-5.js";import"./useId-DXE2NHZ6.js";import"./useBackwardsCompatibleTheme-D_Q-cp9k.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CDXbUJjY.js";import"./index-BJIQUKOl.js";import"./index-B9y8Kqsp.js";import"./RechartsWrapper-CRZxnEvO.js";import"./axisSelectors-gsi5pnh3.js";import"./throttle-DGspa7An.js";import"./d3-scale-CUR5a_d2.js";import"./index-B3QvH7n1.js";import"./index-CeTsENmr.js";import"./renderedTicksSlice-aqmhLMa0.js";import"./index-B5-JQ7_N.js";import"./CartesianAxis-CxuhGA1B.js";import"./Layer-DmcaQ_dN.js";import"./types-j43mBGpT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BKZN7ovI.js";import"./chartDataContext-ypeuzWgT.js";import"./CategoricalChart-CfQ-7jwV.js";import"./AnimatedItems-4I_eYob_.js";import"./useAnimationId-CXJms9_M.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-PRK7HGFg.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Bhki9N6s.js";import"./tooltipContext-DUDoIiWX.js";import"./RegisterGraphicalItemId-Cdmmbnos.js";import"./ErrorBarContext-Cph_wYMA.js";import"./GraphicalItemClipPath-CAT_76cH.js";import"./SetGraphicalItem-BzXi6hBa.js";import"./getZIndexFromUnknown-DAYgt_AQ.js";import"./useGraphicalItemIdentity-BC_MJ-E6.js";import"./Curve-DMEOHSug.js";import"./step-DpQO_Upn.js";import"./path-DyVhHtw_.js";import"./ActivePoints-C-zYvbZ2.js";import"./Dot-DLh3Hb31.js";import"./getRadiusAndStrokeWidthFromDot-DmXYl-lA.js";import"./useElementOffset-g5hoKJqf.js";import"./uniqBy-jCy-kd0v.js";import"./iteratee-CoUURpSM.js";import"./Cross-Tsv72TGu.js";import"./Sector-DPm02ZqN.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
