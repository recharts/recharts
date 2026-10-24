import{R as t}from"./iframe-z3NgSViZ.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Cq1FHamq.js";import{R as l}from"./zIndexSlice-BX0CZtnZ.js";import{C as x}from"./ComposedChart-BMGZ_TwG.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-ny9MIXZN.js";import{L as a}from"./Line-DHD91CBZ.js";import{X as c}from"./XAxis-6HQNOcHb.js";import{T as g}from"./Tooltip-CkAHByW4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Cv5DkZGS.js";import"./Text-Bf3Z0ESX.js";import"./resolveDefaultProps-DKxZJqnD.js";import"./pageBackground-SSHR1dqO.js";import"./isWellBehavedNumber-B9JEbcQX.js";import"./useId-BBfhtQXH.js";import"./useBackwardsCompatibleTheme-DpJUriCO.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B4GmRtpr.js";import"./index-B3bVO830.js";import"./index-h-xMeUpP.js";import"./dataEntryStyles-C3z4X2RS.js";import"./axisSelectors-CgbkNJhz.js";import"./throttle-CwdrNliT.js";import"./d3-scale-CwYOu9hN.js";import"./CartesianAxis-aatvopbC.js";import"./Layer-DIcps5If.js";import"./types-2rYpOkQj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DYq8RKWJ.js";import"./index-CZd_v0hL.js";import"./index-gkGbSS0A.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-D_oQRH40.js";import"./index-bcahlE0Z.js";import"./CartesianChart-BZn7jg65.js";import"./chartDataContext-rha9Z1YY.js";import"./CategoricalChart-DXqdBwWs.js";import"./activeStyles-CeGdwWio.js";import"./useAnimationId-Cz2G0J8W.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BneWyhZX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CBpakVvV.js";import"./tooltipContext-ByiR1jPw.js";import"./RegisterGraphicalItemId-BSkjC-ao.js";import"./ErrorBarContext-Cu9qYyvb.js";import"./SetGraphicalItem-C6QUze-d.js";import"./getZIndexFromUnknown-Cmh0Tl84.js";import"./useEffectiveDataKey-CRDGSrQh.js";import"./omit-DX_AvoGg.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CyxMxsdR.js";import"./step-BrvgHvKB.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B_9Jv1Nk.js";import"./Dot-CpIhdaoH.js";import"./getRadiusAndStrokeWidthFromDot-CUlrtQzF.js";import"./useElementOffset-CRwL0Zci.js";import"./uniqBy-BT4Juj7F.js";import"./iteratee-DkLC-6Nh.js";import"./Cross-CGpKLZqq.js";import"./Sector-Cus5LS6r.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Tt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Tt as __namedExportsOrder,Lt as default};
