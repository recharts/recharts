import{R as t}from"./iframe-Dpvc5Yjz.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CRJBTUK4.js";import{R as l}from"./zIndexSlice-Dho3i8T5.js";import{C as x}from"./ComposedChart-B3mWCRuK.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-4Pjf3WK0.js";import{L as a}from"./Line-D72OFrJ_.js";import{X as c}from"./XAxis-DH81C7oh.js";import{T as g}from"./Tooltip-BQAbbeVI.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DIzmtP1_.js";import"./Text-DV8ChouY.js";import"./resolveDefaultProps-CRYxfVCI.js";import"./DOMUtils-B1JUaPdm.js";import"./isWellBehavedNumber-C1q3yIjs.js";import"./useId-BTdNu9Gm.js";import"./useBackwardsCompatibleTheme-CtPFlS3s.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BroloYIp.js";import"./index-Bl2eW-CY.js";import"./index-CVG-Xgr5.js";import"./RechartsWrapper-Y3ZAzA3v.js";import"./axisSelectors-B0MCU6bk.js";import"./throttle-ChqzHVQ0.js";import"./d3-scale-B7bmEbYw.js";import"./index-D1MAn6gI.js";import"./index-BGJHRM8B.js";import"./renderedTicksSlice-oAd8rZHP.js";import"./index-hEOzvS9k.js";import"./CartesianAxis-6_XALvtr.js";import"./Layer-DB4rVtgq.js";import"./types-PTwxeL9Y.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-AKEzFsPm.js";import"./chartDataContext-BXOKjidD.js";import"./CategoricalChart-kI0T_bBx.js";import"./AnimatedItems-Dqknvwue.js";import"./useAnimationId-8x9555ZS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DMGyTNc0.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B4yE9O3b.js";import"./tooltipContext-S2LkvAh-.js";import"./RegisterGraphicalItemId-BrxaJpgc.js";import"./ErrorBarContext-DgnCQmwB.js";import"./GraphicalItemClipPath-DoYX_rje.js";import"./SetGraphicalItem-WpaZzJ--.js";import"./getZIndexFromUnknown-CwozXNaI.js";import"./useGraphicalItemIdentity-B6UUBA8h.js";import"./Curve-D8gKKjbw.js";import"./step-CbGZbdjm.js";import"./path-DyVhHtw_.js";import"./ActivePoints-_iSEV7nC.js";import"./Dot-BbHheHK4.js";import"./getRadiusAndStrokeWidthFromDot-BNtk_UOf.js";import"./useElementOffset-DFxcHkws.js";import"./uniqBy-DPOJBwGI.js";import"./iteratee-BEgn-_6q.js";import"./Cross-DAmovQ-J.js";import"./Sector-DZDoxeje.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
