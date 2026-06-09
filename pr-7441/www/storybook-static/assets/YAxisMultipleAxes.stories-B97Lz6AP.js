import{R as t}from"./iframe-DDZvWz04.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-DzAaZg6g.js";import{R as l}from"./zIndexSlice-Dl_4acsk.js";import{C as x}from"./ComposedChart-DP1ubrAE.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CUpV6aA0.js";import{L as a}from"./Line-gYyeMRzs.js";import{X as c}from"./XAxis-Dq8ay66-.js";import{T as g}from"./Tooltip-BiO0tLvP.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Dd2obrAg.js";import"./CartesianAxis-CHHSHG1a.js";import"./Layer-C4SWy0Ia.js";import"./resolveDefaultProps-BL5_8bl7.js";import"./Text-dGyvvmq0.js";import"./DOMUtils-EJWG7PRQ.js";import"./isWellBehavedNumber-BqwSOCro.js";import"./Label-Cyb3kyRK.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dxkr3Ydq.js";import"./index-DmZKUkji.js";import"./index-BmsWrTVR.js";import"./types-Du07Jl7S.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D1_yHzJs.js";import"./immer-DcmssRfV.js";import"./RechartsWrapper-BgX57Ihb.js";import"./index-DdYDVMgh.js";import"./index-DEl5rper.js";import"./axisSelectors-M3yg6AJ9.js";import"./d3-scale-BmewetN_.js";import"./string-B6fdYHAA.js";import"./CartesianChart-C1c9k30X.js";import"./chartDataContext-hTPBvtpR.js";import"./CategoricalChart-DTcOD6T5.js";import"./tooltipContext-Bgus1cP3.js";import"./AnimatedItems-DJruvPbG.js";import"./useAnimationId-CXggq5FE.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C7Fz1mfx.js";import"./ActiveShapeUtils-C9HYZ7qc.js";import"./RegisterGraphicalItemId-CPL9aXD0.js";import"./ErrorBarContext-BYuEjy_F.js";import"./GraphicalItemClipPath-1JKRh9Qz.js";import"./SetGraphicalItem-DQRf2yyu.js";import"./getZIndexFromUnknown-B-XKAuQ6.js";import"./graphicalItemSelectors-CUAxioQq.js";import"./Curve-sIzeAZHK.js";import"./step-BEPub2ZD.js";import"./path-DyVhHtw_.js";import"./ActivePoints-VMcsu_Fc.js";import"./Dot-CtB54zVw.js";import"./getRadiusAndStrokeWidthFromDot-Ba3A1cdU.js";import"./useElementOffset-CUIuFj27.js";import"./uniqBy-aPqG2Rlh.js";import"./iteratee-hWa_REQK.js";import"./Cross-B9Z2IOcq.js";import"./Sector-yTNUroLz.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
