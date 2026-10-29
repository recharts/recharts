import{R as t}from"./iframe-CA9m8GYo.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CbW8C0_5.js";import{R as l}from"./zIndexSlice-DtH5keZE.js";import{C as x}from"./ComposedChart-Cxv2A6YY.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D3_zL3hU.js";import{L as a}from"./Line-7sQ58Sto.js";import{X as c}from"./XAxis-CC3YYdgQ.js";import{T as g}from"./Tooltip-oV_VKaqR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-ekuzQLiz.js";import"./Text-BFxpfCQD.js";import"./resolveDefaultProps-CyX6DFN8.js";import"./pageBackground-O7JuB7S_.js";import"./ZIndexLayer-DnamAcTi.js";import"./index-CErELZnL.js";import"./index-BmamNDCv.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C9u8TkQ8.js";import"./throttle-o0TVEzLp.js";import"./axisSelectors-BayOnfvg.js";import"./d3-scale-C2dTdr93.js";import"./CartesianAxis-D4TNjeO6.js";import"./Layer-Hxk-5S8n.js";import"./types-Cvx_7iJj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CIfh4CCk.js";import"./index-CqNMjBNA.js";import"./index-B2booWlS.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-PB4GMrwR.js";import"./index-AvPiQd-I.js";import"./CartesianChart-BMo55UJv.js";import"./ZIndexPortal-CP5nbT1n.js";import"./CategoricalChart-CxzHbLbb.js";import"./LabelList-CV5x_Azz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bu0iEdVM.js";import"./useAnimationId-CvualzzB.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DBAVXS8z.js";import"./tooltipContext-Pjqm9-1w.js";import"./dataEntryStyles-XE7WR2iA.js";import"./ErrorBarContext-DjcN2az-.js";import"./activeStyles-PpyfPCVq.js";import"./SetGraphicalItem-C9x_j8Aw.js";import"./getZIndexFromUnknown-CGbH__1H.js";import"./useEffectiveDataKey-VJMj_VC4.js";import"./omit-C6FqV6o3.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DZjiB-zR.js";import"./step-DF34UguZ.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CEzGZ3l_.js";import"./Dot-CmRgS_7G.js";import"./Symbols-BokwsXNu.js";import"./symbol-DmvnuhBw.js";import"./getRadiusAndStrokeWidthFromDot-CYDrKKi3.js";import"./useElementOffset-DILgA3Om.js";import"./uniqBy-Cx6V6RxR.js";import"./iteratee-BlwalV7N.js";import"./Cross-oYr6BlXY.js";import"./Sector-6yiBA46s.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
