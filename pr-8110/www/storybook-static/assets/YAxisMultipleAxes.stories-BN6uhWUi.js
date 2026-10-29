import{R as t}from"./iframe-oYyBRks2.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CQwSDKOg.js";import{R as l}from"./zIndexSlice-CbmXT1dz.js";import{C as x}from"./ComposedChart-B-eq2Fp1.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Dg4fxgNN.js";import{L as a}from"./Line-BvBumo1d.js";import{X as c}from"./XAxis-DvAGam0D.js";import{T as g}from"./Tooltip-Btr-uBpU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-D2Ghzufd.js";import"./Text-BTTN-58y.js";import"./resolveDefaultProps-lgcxhifZ.js";import"./DOMUtils-oL4xRmBr.js";import"./ZIndexLayer-D9yXy4ut.js";import"./index-uP8uPv2q.js";import"./index-C0E8rQWU.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-FwVZQ2F9.js";import"./throttle-teQP-xJt.js";import"./axisSelectors-CzrEReB-.js";import"./d3-scale-Dsmu7PfS.js";import"./CartesianAxis-C0SgAXkt.js";import"./Layer-CyxA7s2s.js";import"./types-C_jjefDJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-PDwTct7N.js";import"./index-CorLv6ho.js";import"./index-DI7MM_Df.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BEJButs1.js";import"./index-DhsLJ5T7.js";import"./CartesianChart-Bd-kZVr0.js";import"./ZIndexPortal-B7800aDw.js";import"./CategoricalChart-DoegTXhB.js";import"./LabelList-D0at5SMs.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-8sd_KAoB.js";import"./useAnimationId-C-eWMsqK.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BUKShifC.js";import"./tooltipContext-BsFwGvkO.js";import"./dataEntryStyles-C_5MqVGt.js";import"./ErrorBarContext-CVpEUN9z.js";import"./activeStyles-chOek7GE.js";import"./SetGraphicalItem-CofyTZmK.js";import"./getZIndexFromUnknown-DFrO-Gqk.js";import"./useEffectiveDataKey-BvG_PE5-.js";import"./fillDefinitions-BuAadA4s.js";import"./omit-AsRof3ey.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BV9qBPRD.js";import"./step-DY5Xaa9y.js";import"./path-DyVhHtw_.js";import"./ActivePoints-N3FvSUzX.js";import"./Dot-hWqukiPc.js";import"./Symbols-DyH8vTj1.js";import"./symbol-DfdL_uUz.js";import"./getRadiusAndStrokeWidthFromDot-DhNYhgAE.js";import"./useElementOffset-DYKRqk9h.js";import"./uniqBy-DpT0Q-qD.js";import"./iteratee-6fmcBfsh.js";import"./Cross-XUExNxnx.js";import"./Sector-DHLUdzNp.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
