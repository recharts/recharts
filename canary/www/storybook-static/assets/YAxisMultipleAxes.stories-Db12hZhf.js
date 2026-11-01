import{R as t}from"./iframe-LXaU_yGQ.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CSeoCJK5.js";import{R as l}from"./zIndexSlice-BSsrgEaY.js";import{C as x}from"./ComposedChart-Dk11ZJ3E.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-vF4XoZWk.js";import{L as a}from"./Line-DVYXuLoQ.js";import{X as c}from"./XAxis-p7HCxuCB.js";import{T as g}from"./Tooltip-CMuc6rXN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DYJ5zyBE.js";import"./Text-B2wTTXhn.js";import"./resolveDefaultProps-DbWwNOSn.js";import"./DOMUtils-wasDQX09.js";import"./ZIndexLayer-D76BtQdI.js";import"./index-DZIymj_T.js";import"./index-C00bVPiJ.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Bwd8WsKu.js";import"./throttle-ByKIQNrZ.js";import"./axisSelectors-COTFFsL0.js";import"./d3-scale-xVZA29h1.js";import"./CartesianAxis-DZ_FsRV8.js";import"./Layer-CHoN3bhu.js";import"./types-WPs3xsFH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-bFWdrA3f.js";import"./index-Cj2wRU1Y.js";import"./index-DCFuZ4eP.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-D3XMumfr.js";import"./index-D3Vd1Yho.js";import"./fillDefinitions-GJQeghKS.js";import"./CartesianChart-BiL3U0u_.js";import"./ZIndexPortal-B1CrZPtb.js";import"./CategoricalChart-DH4yc53T.js";import"./LabelList-edsO3Rk5.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CE9_TMcs.js";import"./useAnimationId-BI8ofMSC.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-57-jWYU2.js";import"./tooltipContext-DgNaqLpi.js";import"./dataEntryStyles-CwUtW2sJ.js";import"./ErrorBarContext-DEyq_U4L.js";import"./activeStyles-PwSBVgUE.js";import"./SetGraphicalItem-GbWatXWt.js";import"./getZIndexFromUnknown-CDDdElLq.js";import"./useEffectiveDataKey-zCOJ1kMm.js";import"./omit-VLbbGC-r.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Bdp5Gfaz.js";import"./step-nDdn65YX.js";import"./path-DyVhHtw_.js";import"./ActivePoints-NFoR1iD6.js";import"./Dot-DyfeLkRk.js";import"./Symbols-DwjhqM4z.js";import"./symbol-BBQKO5RK.js";import"./getRadiusAndStrokeWidthFromDot-DPvgYAJF.js";import"./useElementOffset-BTM80VK-.js";import"./uniqBy-BQLHmkt7.js";import"./iteratee-CVfcQAqg.js";import"./Cross-BjDFY2Wu.js";import"./Sector-DHye28nJ.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
