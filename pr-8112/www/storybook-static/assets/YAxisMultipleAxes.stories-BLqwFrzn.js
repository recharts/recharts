import{R as t}from"./iframe-DEalUshl.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DlX9l8Ve.js";import{R as l}from"./zIndexSlice-CAksOI_1.js";import{C as x}from"./ComposedChart-CdALL1sF.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D4JelM4K.js";import{L as a}from"./Line-KtdY_z4O.js";import{X as c}from"./XAxis-BITqqVCe.js";import{T as g}from"./Tooltip-BCvfBg18.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CBgDJ6T5.js";import"./Text-DnHyAqDr.js";import"./resolveDefaultProps-BRTQsXjp.js";import"./pageBackground-CVwWBmc5.js";import"./ZIndexLayer-BXnvY1k7.js";import"./index-Bi7Cs1mM.js";import"./index-DdKBddy3.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BYiBdmVV.js";import"./throttle-DufRm-wd.js";import"./axisSelectors-DjgJ2Mrx.js";import"./d3-scale-R09LkYsV.js";import"./CartesianAxis-kcZBykzp.js";import"./Layer-Bw1dSYwu.js";import"./types-CObAiW_q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-f1LuiShq.js";import"./index-XZ5w84xu.js";import"./index-C7wIczSG.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BK5G7zbx.js";import"./index-DCjef1wh.js";import"./CartesianChart-BhhkInk7.js";import"./ZIndexPortal-CZV1ifs7.js";import"./CategoricalChart-pEhIoip4.js";import"./LabelList-hToPfPST.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CnZc9_Rc.js";import"./useAnimationId-_MrDTWeG.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C0qxzm6E.js";import"./tooltipContext-BwZmmqwW.js";import"./dataEntryStyles-D4Y7WVvW.js";import"./ErrorBarContext-CNmRRpz3.js";import"./activeStyles-DOcC-AXu.js";import"./SetGraphicalItem-QRv9uJVL.js";import"./getZIndexFromUnknown-CAZViM58.js";import"./useEffectiveDataKey-Bk8kAFIQ.js";import"./omit-DyRDxTHk.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BXiJvEeV.js";import"./step-BwbLlF7G.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CRXr9H7D.js";import"./Dot-DCVDv1q-.js";import"./Symbols-BT8pREls.js";import"./symbol-DXqIeeEX.js";import"./getRadiusAndStrokeWidthFromDot-DBGr2m_l.js";import"./useElementOffset-DRy_rfXg.js";import"./uniqBy-D0fLoUi4.js";import"./iteratee-aVpqpOpW.js";import"./Cross-zedPutIO.js";import"./Sector-Ou1iFUt1.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
