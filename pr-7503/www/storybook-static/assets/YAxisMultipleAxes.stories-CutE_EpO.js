import{R as t}from"./iframe-yOPx9Gik.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-CkktISrz.js";import{R as l}from"./zIndexSlice-D67vVDIo.js";import{C as x}from"./ComposedChart-CNKZcRKd.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CWyWiV7T.js";import{L as a}from"./Line-C0Fqz3BG.js";import{X as c}from"./XAxis-CJ8HGhD8.js";import{T as g}from"./Tooltip-B5mu-Q18.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BfHGT2kl.js";import"./CartesianAxis-C7MTbV32.js";import"./Layer-Bwtnd2Qr.js";import"./resolveDefaultProps-DB1B-raE.js";import"./Text-BYswpnhx.js";import"./DOMUtils-Cu0iYWZD.js";import"./isWellBehavedNumber-X6n-T2Sz.js";import"./Label-BqUT8U7H.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B4R3RCf9.js";import"./index-DJygjR8e.js";import"./index-gBURTRbi.js";import"./types-BJAf4K7V.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-ClbKT4Vz.js";import"./immer-MwiuxAbo.js";import"./RechartsWrapper-BCqwcFHc.js";import"./index-C-1T0p6G.js";import"./index-CyWWVFG2.js";import"./axisSelectors-BcCjx1Bb.js";import"./d3-scale-BQYCkYi4.js";import"./CartesianChart-tj_Q7LqM.js";import"./chartDataContext-CIZm0aW3.js";import"./CategoricalChart-C2Hn6eQd.js";import"./tooltipContext-D5XslCAM.js";import"./AnimatedItems-CE38GYBB.js";import"./useAnimationId-D3arzwOC.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DeKBG9DN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BD3mqbS1.js";import"./RegisterGraphicalItemId-DtIIsDtI.js";import"./ErrorBarContext-qp41ygoF.js";import"./GraphicalItemClipPath-ByZKWDCp.js";import"./SetGraphicalItem-Bb0dcZso.js";import"./getZIndexFromUnknown-D_za1m-1.js";import"./graphicalItemSelectors-D7_dqTyQ.js";import"./Curve-CyG3DmyO.js";import"./step-Bnv-0_8B.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BnyIHKN-.js";import"./Dot-BOZFOnSK.js";import"./getRadiusAndStrokeWidthFromDot-pUt3tlnV.js";import"./useElementOffset-DPzY_T8I.js";import"./uniqBy-B8wALonH.js";import"./iteratee-C7Rvqn86.js";import"./Cross-TDkCdzSz.js";import"./Sector-DRFegpMv.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
