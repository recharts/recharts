import{R as t}from"./iframe-bh8Hdh0s.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-3Mh6rYEy.js";import{R as l}from"./zIndexSlice-D-BYbnQO.js";import{C as x}from"./ComposedChart-D0rCA8sN.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BLHn28PB.js";import{L as a}from"./Line-C3vcORAG.js";import{X as c}from"./XAxis-dMhU6DKu.js";import{T as g}from"./Tooltip-DtCvF_1n.js";import"./preload-helper-Dp1pzeXC.js";import"./get-D3Bb09EQ.js";import"./CartesianAxis-Cczt14vl.js";import"./Layer-CFpuUaFs.js";import"./resolveDefaultProps-DrqDcb4q.js";import"./Text-DNFdD7FY.js";import"./DOMUtils-CqbIbq5Q.js";import"./isWellBehavedNumber-BEwe5En6.js";import"./Label-4dzVOcp4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DkZ-MLZl.js";import"./index-BvOZTDpw.js";import"./index-BKp5y7FT.js";import"./types-CGzL9fNM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CAguNiQd.js";import"./immer-Di2Y-BX2.js";import"./RechartsWrapper-bPWrhjV6.js";import"./index-yP_7__bV.js";import"./index-DMGyx--D.js";import"./axisSelectors-CJnElyGk.js";import"./d3-scale-nMJeyC7B.js";import"./string-B6fdYHAA.js";import"./CartesianChart-EUP1j0p6.js";import"./chartDataContext-nAZQwMJZ.js";import"./CategoricalChart-D4vACcZf.js";import"./tooltipContext-DwGfEh7N.js";import"./AnimatedItems-2yvO_B45.js";import"./useAnimationId-CfFImJZH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BSJj6R6N.js";import"./ActiveShapeUtils-BdiO1tHu.js";import"./RegisterGraphicalItemId-D7G5Ydkp.js";import"./ErrorBarContext-Co10Kn-s.js";import"./GraphicalItemClipPath-JLz8ewYQ.js";import"./SetGraphicalItem-Dnctc4Vz.js";import"./getZIndexFromUnknown-f_4lOsrp.js";import"./graphicalItemSelectors-DZZZgMPF.js";import"./Curve-C1GsF6pk.js";import"./step-BRqV4bUq.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BJkC-K95.js";import"./Dot-DpzQ1Tcm.js";import"./getRadiusAndStrokeWidthFromDot-CAc0078J.js";import"./useElementOffset-CQr1dMfv.js";import"./uniqBy-SIO0NZ97.js";import"./iteratee-BMZqNRQz.js";import"./Cross-TLMXGfYl.js";import"./Sector-DNtdUaHG.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
