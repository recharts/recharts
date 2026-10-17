import{R as t}from"./iframe-BYNQK8LM.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CHFcgGbi.js";import{R as l}from"./zIndexSlice-CnKvPC-T.js";import{C as x}from"./ComposedChart-CliK5bO3.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BcpcZOGd.js";import{L as a}from"./Line-Bz6FXF4d.js";import{X as c}from"./XAxis-CBcIWiwv.js";import{T as g}from"./Tooltip-BwvdLtUL.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label--8HpHVT6.js";import"./Text-uEN8Pqjn.js";import"./resolveDefaultProps-e-zsAsB1.js";import"./pageBackground-ezRX3My0.js";import"./isWellBehavedNumber-BZZV9Me7.js";import"./useId-Dpi4gaCB.js";import"./useBackwardsCompatibleTheme-Dydi4_BE.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DnQxIb9c.js";import"./index-PSgPxbx_.js";import"./index-C0msNLyf.js";import"./axisSelectors-f_hhqOEQ.js";import"./throttle-DlEVZZqo.js";import"./d3-scale-D4yBTTO3.js";import"./CartesianAxis-DHgd3hOW.js";import"./Layer-CWziNCLd.js";import"./types-8Tp7AoeZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D3c5wsjJ.js";import"./index-Cg_72k7E.js";import"./index-CsXf8i4B.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Di3THVkM.js";import"./index-C5WITlKt.js";import"./CartesianChart-C_kwKDBD.js";import"./chartDataContext-clQVsdi0.js";import"./CategoricalChart-CJdqn6cX.js";import"./activeStyles-CDuvBT6X.js";import"./useAnimationId-BA2hTS6j.js";import"./dataEntryStyles-BhOKhuEL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CtScsc5f.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CozVnlhs.js";import"./tooltipContext-DdQ6U365.js";import"./ErrorBarContext-ymRWszCz.js";import"./GraphicalItemClipPath-BzYQ5qPw.js";import"./SetGraphicalItem-C56xRO9a.js";import"./getZIndexFromUnknown-BD35HtNd.js";import"./useEffectiveDataKey-Cq2dQ4RC.js";import"./omit-x0RYk8Kc.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CjpgSr7n.js";import"./step-CHupxKkt.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Cvp-MGqu.js";import"./Dot-Dz9YgpZb.js";import"./getRadiusAndStrokeWidthFromDot-B9dFz0h2.js";import"./useElementOffset-Dn-sBbsw.js";import"./uniqBy-CHpNcSg2.js";import"./iteratee-CAw-gtof.js";import"./Cross-Beqbl3tN.js";import"./Sector-DUKwAFay.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
