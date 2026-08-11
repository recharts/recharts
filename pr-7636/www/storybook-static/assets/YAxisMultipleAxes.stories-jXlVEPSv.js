import{R as t}from"./iframe-CtnQdIY7.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-18LfpUGe.js";import{R as l}from"./zIndexSlice-uhZ24fvC.js";import{C as x}from"./ComposedChart-CQbfWDL_.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Bh7Gg3Gf.js";import{L as a}from"./Line-BhbLTTAA.js";import{X as c}from"./XAxis-XO5v4-hr.js";import{T as g}from"./Tooltip-DKc99BpK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-qBa5cEUX.js";import"./Text-B-1OewBP.js";import"./resolveDefaultProps-BhVUJJl8.js";import"./DOMUtils-BvAafYtQ.js";import"./isWellBehavedNumber-BafIqGdu.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DMqHwKfA.js";import"./index-D6huCRxI.js";import"./index-DamwuQ06.js";import"./RechartsWrapper-DnMXuDt4.js";import"./index-C7Llpbdk.js";import"./index-CsEievrw.js";import"./throttle-BK98nfBm.js";import"./axisSelectors-RZmSNqcb.js";import"./d3-scale-DhrbdntK.js";import"./renderedTicksSlice-C6Ijq1lt.js";import"./CartesianAxis-B2-Emwk9.js";import"./Layer-CrHPq_vq.js";import"./types-CuvpKj9W.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-v9ngAxmb.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CtmjJLbI.js";import"./chartDataContext-CjvKHNlA.js";import"./CategoricalChart-DN8vznAz.js";import"./tooltipContext-CgvFYzEb.js";import"./AnimatedItems-C-8qrP3C.js";import"./useAnimationId-DN6fR6pH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dt_H66Jb.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B0TODl5s.js";import"./RegisterGraphicalItemId-nrbEOJ2H.js";import"./ErrorBarContext-ryDidWCv.js";import"./GraphicalItemClipPath-DTrO8h0n.js";import"./SetGraphicalItem-CeeM15rn.js";import"./getZIndexFromUnknown-CHBAdc_K.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BZA8fGlN.js";import"./Curve-maCREAuN.js";import"./step-Dqi6RR6U.js";import"./path-DyVhHtw_.js";import"./ActivePoints-pXmyAmZV.js";import"./Dot-C0XFWsWB.js";import"./getRadiusAndStrokeWidthFromDot-B6TsNsTR.js";import"./useElementOffset-qg6DMFTI.js";import"./uniqBy-B5Eni1L2.js";import"./iteratee-Cjnl5Vus.js";import"./Cross-B5r5VRis.js";import"./Sector-DI1mC89a.js";const Kt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Mt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Mt as __namedExportsOrder,Kt as default};
