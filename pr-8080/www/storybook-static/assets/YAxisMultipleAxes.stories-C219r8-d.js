import{R as t}from"./iframe-zw95Jg5I.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DxhDNNfO.js";import{R as l}from"./zIndexSlice-BhhR1tic.js";import{C as x}from"./ComposedChart-CTgj0L1M.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CrGl-kvA.js";import{L as a}from"./Line-DC_4pa8I.js";import{X as c}from"./XAxis-FSNVlg8z.js";import{T as g}from"./Tooltip-hAQMQs7N.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-B1gN_1pg.js";import"./Text-d1Lwh7G9.js";import"./resolveDefaultProps-oavmg9-5.js";import"./pageBackground-04zbeTMB.js";import"./useId-CtBeXuXP.js";import"./ZIndexLayer-DT4lNh0N.js";import"./index-CWbrX-i7.js";import"./index-CWy5ARPc.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DUH0PWke.js";import"./throttle-Cgnp6_V2.js";import"./dataEntryStyles-B6Pg3he4.js";import"./axisSelectors-DAhbEMcv.js";import"./d3-scale-BXUDNojI.js";import"./CartesianAxis-Ps3DKwB1.js";import"./Layer-KXbvniH8.js";import"./types-BkYRfFSe.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BhGNFZVD.js";import"./index-BPsqxPXN.js";import"./index-BEzQf4L4.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DNF4noKd.js";import"./index-bXT-B2Zu.js";import"./CartesianChart-CAbKVIox.js";import"./chartDataContext-DsEiNuFy.js";import"./CategoricalChart-DSpSOmf_.js";import"./activeStyles-Dzq6_wuP.js";import"./useAnimationId-DHyavBGa.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B120DpgE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-KL7GHwh1.js";import"./tooltipContext-BlO69eeP.js";import"./RegisterGraphicalItemId-Ci1zbwmF.js";import"./ErrorBarContext-D3KXG5mH.js";import"./SetGraphicalItem-D5SILBm3.js";import"./getZIndexFromUnknown-CtV9dAbo.js";import"./useEffectiveDataKey-ak6DNGcC.js";import"./omit-CK7M7hQH.js";import"./isArguments-yB-y1yaH.js";import"./Curve-D_d6vzaM.js";import"./step-Q9jA4NJI.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DhDmo-r8.js";import"./Dot-gB6O6AIc.js";import"./Symbols-g6eOoLF6.js";import"./symbol-D4N1oQUq.js";import"./getRadiusAndStrokeWidthFromDot-BjYb5x8U.js";import"./useElementOffset-DSktO4lL.js";import"./uniqBy-BGk6LrH6.js";import"./iteratee-Dt64Sdjl.js";import"./Cross-C0WKTy_J.js";import"./Sector-B4pIaq7y.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Wt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Wt as __namedExportsOrder,Tt as default};
