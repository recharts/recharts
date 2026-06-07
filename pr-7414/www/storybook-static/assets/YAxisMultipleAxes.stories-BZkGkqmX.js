import{R as t}from"./iframe-D-W27Aye.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-1JyMBgNW.js";import{R as l}from"./zIndexSlice-DGQfYPGt.js";import{C as x}from"./ComposedChart-DJkZQXCm.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DK0yZ8oU.js";import{L as a}from"./Line-DtGbdsRs.js";import{X as c}from"./XAxis-gk42ZI-1.js";import{T as g}from"./Tooltip-BHjgq3bQ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BDQ-VaUY.js";import"./CartesianAxis-zyf7i4Uk.js";import"./Layer-BBvq20uw.js";import"./resolveDefaultProps-BroczFsN.js";import"./Text-Ch5M4wnL.js";import"./DOMUtils-ClafKG0n.js";import"./isWellBehavedNumber-Du_dam65.js";import"./Label-xP0TYJi-.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-g9kGWnPX.js";import"./index-CWu2xMKi.js";import"./index-DLfEBe63.js";import"./types-DQNR05Kl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CN4MtC-5.js";import"./immer-CbhGTgvn.js";import"./RechartsWrapper-D3NlvT8L.js";import"./index-DE37ce3k.js";import"./index-Cnxyq0Mm.js";import"./axisSelectors-BvFrWOiO.js";import"./d3-scale-BQjrtTI1.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BPw6EL6m.js";import"./chartDataContext-mE2SEo_G.js";import"./CategoricalChart-CsqvwlsS.js";import"./tooltipContext-C5AUgsaf.js";import"./AnimatedItems-DVypXaLh.js";import"./useAnimationId-Bs22yXlG.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BaBIbp7f.js";import"./ActiveShapeUtils-D1Ceary0.js";import"./RegisterGraphicalItemId-EzN9TJ6u.js";import"./ErrorBarContext-CUSYqY7l.js";import"./GraphicalItemClipPath-C_UztI7f.js";import"./SetGraphicalItem-50FO49Qg.js";import"./getZIndexFromUnknown-CTjUHcCG.js";import"./graphicalItemSelectors-8PqpMo0U.js";import"./Curve-CDWlC7vY.js";import"./step-e-ZH1_z5.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DIioQ5_v.js";import"./Dot-BRpnxUKp.js";import"./getRadiusAndStrokeWidthFromDot-DqIa6S6d.js";import"./useElementOffset-B60rjUQO.js";import"./uniqBy-Wx1pUBZp.js";import"./iteratee-DbBg1eKT.js";import"./Cross-CoPyHlfO.js";import"./Sector-BdTeyyH9.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
