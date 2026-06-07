import{R as t}from"./iframe-ZPRKoU1G.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-CL1cp1D0.js";import{R as l}from"./zIndexSlice-BsSz6rnO.js";import{C as x}from"./ComposedChart-BHINqNhm.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DOMMTlAp.js";import{L as a}from"./Line-B1M2NTAD.js";import{X as c}from"./XAxis-C6ITfnkV.js";import{T as g}from"./Tooltip-CcXCtMjc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CGa3_Ok6.js";import"./CartesianAxis-BoMdju9k.js";import"./Layer-Cw8ar51S.js";import"./resolveDefaultProps-DXwWTI5c.js";import"./Text-Cx16epvV.js";import"./DOMUtils-CWTdPns0.js";import"./isWellBehavedNumber-C1VSg6lY.js";import"./Label-BBlujwtM.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C_hsauba.js";import"./index-CDtIYzd-.js";import"./index-DWchyl7z.js";import"./types-BUDAoUUu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bj0AstQ5.js";import"./immer-Dqh26iK6.js";import"./RechartsWrapper-BYyxQWjf.js";import"./index-D9shaHbl.js";import"./index-CyTcUuX3.js";import"./axisSelectors-B6X9oFFj.js";import"./d3-scale-YZIwu0YS.js";import"./string-B6fdYHAA.js";import"./CartesianChart-9gHk08A4.js";import"./chartDataContext-C8DnaOK4.js";import"./CategoricalChart-C8cl1dv9.js";import"./tooltipContext-Cu_qaLjm.js";import"./AnimatedItems-D4M5eO1p.js";import"./useAnimationId-CZUjtEje.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-ToWWd5IB.js";import"./ActiveShapeUtils-T50lNrG4.js";import"./RegisterGraphicalItemId-NfBTs_Yc.js";import"./ErrorBarContext-C1hygpA9.js";import"./GraphicalItemClipPath-DcCaGC5D.js";import"./SetGraphicalItem-Dl4Vmegz.js";import"./getZIndexFromUnknown-BLYZ8KBm.js";import"./graphicalItemSelectors-Ca7XSQj9.js";import"./Curve-ePYEilGq.js";import"./step-BGVwbWHg.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BkkgePC3.js";import"./Dot-DfLTDUuc.js";import"./getRadiusAndStrokeWidthFromDot-BJaZ3V1E.js";import"./useElementOffset-p0zX6-6P.js";import"./uniqBy-BfU0_UHc.js";import"./iteratee-Coqn7yfn.js";import"./Cross-DCF7w7-e.js";import"./Sector-CUM60_Y6.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
