import{R as t}from"./iframe-C9QnkkRp.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-cnj8Nk2R.js";import{R as l}from"./zIndexSlice-BYQlmGuM.js";import{C as x}from"./ComposedChart-Gx1n6SiU.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CtKrTHeu.js";import{L as a}from"./Line-wEa7wjvf.js";import{X as c}from"./XAxis-49PSd8B9.js";import{T as g}from"./Tooltip-Cq-CR73o.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-yo2OQSgL.js";import"./Text-BwyCofjZ.js";import"./resolveDefaultProps-BwjvRfJi.js";import"./ZIndexLayer-CPmeg_kQ.js";import"./index-Bd4zIGdh.js";import"./index-Dp_pNI9d.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C_EdGVJO.js";import"./throttle-CzhN4mlB.js";import"./axisSelectors-CTzSQU4W.js";import"./d3-scale-Yr2mcnpg.js";import"./CartesianAxis-CyUzu-Nz.js";import"./Layer-CEkcTjee.js";import"./types-DqaK-59q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DR11ylMF.js";import"./index-BwU8wHQt.js";import"./index-WorF6OpA.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Cq91RCWh.js";import"./index-D8Lsm-a-.js";import"./fillDefinitions-cPUsTY--.js";import"./CartesianChart-DUhViccR.js";import"./chartDataContext-BJIrZYve.js";import"./CategoricalChart-BY9HlJis.js";import"./dataEntryStyles-BFdezSvK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CvNdNhfG.js";import"./useAnimationId-CShc60ZQ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Ba4XY1pS.js";import"./tooltipContext-Di65yGev.js";import"./ErrorBarContext-BjyFMzrh.js";import"./activeStyles-CN7lMIFZ.js";import"./SetGraphicalItem-C_jDfqao.js";import"./getZIndexFromUnknown-BQtXUpZz.js";import"./useEffectiveDataKey-DiymfXWH.js";import"./omit-DbiO3X2L.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Dqipz6v0.js";import"./step-DY5nvAcp.js";import"./path-DyVhHtw_.js";import"./ActivePoints-D6MvrL16.js";import"./Dot-Dmq_4Bsa.js";import"./Symbols-D6kGSifP.js";import"./symbol-CG55pC-Z.js";import"./getRadiusAndStrokeWidthFromDot-CyNFak7V.js";import"./useElementOffset-yJR4mmFg.js";import"./uniqBy-B7emlUis.js";import"./iteratee-MiGwBwmm.js";import"./Cross-BmYQMtAS.js";import"./Sector-irNxwfe5.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Lt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
