import{R as t}from"./iframe-DUU2nC7E.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Ba7XqdaR.js";import{R as l}from"./zIndexSlice-B1qxAnWW.js";import{C as x}from"./ComposedChart-DbguBWi6.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CJOmLuua.js";import{L as a}from"./Line-kXxR1dvE.js";import{X as c}from"./XAxis-C5ZNeLXM.js";import{T as g}from"./Tooltip-BGrHqXpU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BpgemmXF.js";import"./Text-Dq73j3Z8.js";import"./resolveDefaultProps-BqMh5-lE.js";import"./DOMUtils-CWtn717I.js";import"./isWellBehavedNumber-QUwuvSMb.js";import"./useId-D3HKJv3C.js";import"./useBackwardsCompatibleTheme-i7diorAo.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-09JGIcjO.js";import"./index-DfISOqFY.js";import"./index-BweKhhB8.js";import"./RechartsWrapper-DlUPtncW.js";import"./axisSelectors-oYeY2Mwn.js";import"./throttle-DU8m77oh.js";import"./d3-scale-cKq8MwgY.js";import"./index-By0b-RMY.js";import"./index-BLrpc9iL.js";import"./renderedTicksSlice-CQmIW09G.js";import"./index-eVEWj-zV.js";import"./CartesianAxis-D6Xv7Kst.js";import"./Layer-CpTHNZLk.js";import"./types-D26lJf4n.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D01briWp.js";import"./chartDataContext-DFaXfB60.js";import"./CategoricalChart-CP242KCm.js";import"./AnimatedItems-CtOvBSOT.js";import"./useAnimationId-Hor1kczP.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B0PZq1UN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DXSvZ-3T.js";import"./tooltipContext-BeWmmBgM.js";import"./RegisterGraphicalItemId-DH-o1j-9.js";import"./ErrorBarContext-ql3O-cNM.js";import"./GraphicalItemClipPath-CFHEX7Zj.js";import"./SetGraphicalItem-DSRKMZ7M.js";import"./getZIndexFromUnknown-QbHxmcCA.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Dhw2oYc2.js";import"./Curve-Dejht0kU.js";import"./step-DsOIwvhZ.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Wt40jbbC.js";import"./Dot-DSPh_RO_.js";import"./getRadiusAndStrokeWidthFromDot-D_T6WBHX.js";import"./useElementOffset-CVQocJ2R.js";import"./uniqBy-BjaaEqQ9.js";import"./iteratee-DLKh6RnP.js";import"./Cross-E50swgB7.js";import"./Sector-otXYrezk.js";const Rt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Lt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
