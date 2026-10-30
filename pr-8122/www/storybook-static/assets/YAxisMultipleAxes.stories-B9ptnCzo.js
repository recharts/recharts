import{R as t}from"./iframe-C478ayfe.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CL1QJJED.js";import{R as l}from"./zIndexSlice-T3ZFb7Aa.js";import{C as x}from"./ComposedChart-DISnWYF6.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DiJNqbpP.js";import{L as a}from"./Line-CGbNyLDk.js";import{X as c}from"./XAxis-CU4ivSNq.js";import{T as g}from"./Tooltip-DRflteeY.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-yNY_-txU.js";import"./Text-rWn3Xmx5.js";import"./resolveDefaultProps-BQGOYpJv.js";import"./DOMUtils-DMUojBll.js";import"./ZIndexLayer-B9pzlGWv.js";import"./index-J8Ragxup.js";import"./index-Dt6G_B5v.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CAckEIKE.js";import"./throttle-B99v42cc.js";import"./axisSelectors-Biv-SyAO.js";import"./d3-scale-Cz0p_M0k.js";import"./CartesianAxis-D6yrNWVj.js";import"./Layer-BzE3AtiA.js";import"./types-1IO_LGzE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BwSyvBJ_.js";import"./index-Bgd7L3TE.js";import"./index-CujM32ev.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-D6tIgYO1.js";import"./index-NXORGKPb.js";import"./CartesianChart-D2eUya_e.js";import"./ZIndexPortal-CaG6-xRf.js";import"./CategoricalChart-nvv--0et.js";import"./LabelList-CXPk-iUW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DvnRkiIM.js";import"./useAnimationId-DsdBvcVE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-em0-Yj9t.js";import"./tooltipContext-EbmqIB_N.js";import"./dataEntryStyles-DLRWmObc.js";import"./ErrorBarContext-Cxtks1NA.js";import"./activeStyles-BTHRjD5i.js";import"./SetGraphicalItem-7DZt9-vL.js";import"./getZIndexFromUnknown-BJzUWkXe.js";import"./themeFill-BkM1x4hA.js";import"./useEffectiveDataKey-HlgT5Uu2.js";import"./fillDefinitions-7wVPS1Ff.js";import"./omit-BJPZ4RLA.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BR7rWdNb.js";import"./step-5qm5cD0x.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CRj_seyq.js";import"./Dot-BEwirPZP.js";import"./Symbols-B5clnuWh.js";import"./symbol-Djp9TiFA.js";import"./getRadiusAndStrokeWidthFromDot-0vkflCw5.js";import"./useElementOffset-BEuMbuoA.js";import"./uniqBy-kU7oDpQ6.js";import"./iteratee-bJQZKjxj.js";import"./Cross-LboJznFC.js";import"./Sector-BrpLJe1k.js";const Wt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Xt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Xt as __namedExportsOrder,Wt as default};
