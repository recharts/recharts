import{R as t}from"./iframe-BmdtsHI1.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-D_YhB_w8.js";import{R as l}from"./zIndexSlice-CLt9waUo.js";import{C as x}from"./ComposedChart-DHlxdvQ8.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BLD4fDC5.js";import{L as a}from"./Line-BFAqQ4J_.js";import{X as c}from"./XAxis-SiUufnTD.js";import{T as g}from"./Tooltip-DQ6Ncotp.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-efFOyHP_.js";import"./Text-DgdwosBP.js";import"./resolveDefaultProps-D3fedd0f.js";import"./DOMUtils-BrHrYr07.js";import"./ZIndexLayer-BPViM-b3.js";import"./index-D1G26n6J.js";import"./index-BU9XUo1g.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DqiScafe.js";import"./throttle-DIqkA_6B.js";import"./axisSelectors-CWAMaE0j.js";import"./d3-scale-C4n2-g_Q.js";import"./CartesianAxis-6ZKwTVD2.js";import"./Layer-uwW889ah.js";import"./types-TcTpNVA6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Cbbwd8m4.js";import"./index-dsp9FHu2.js";import"./index-B-lO_Vmy.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CW25TSBD.js";import"./index-JJYVBYhC.js";import"./CartesianChart-Q5wSSY7L.js";import"./ZIndexPortal-BR-Xx9Bs.js";import"./CategoricalChart-BetF0ARA.js";import"./LabelList-BBJeoy6S.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-oyaeTZIU.js";import"./useAnimationId-C4l6OBef.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Du3AePOl.js";import"./tooltipContext-BNM5udMa.js";import"./dataEntryStyles-C-VVWe1s.js";import"./ErrorBarContext-C7bFffEo.js";import"./activeStyles-0PlrA4t0.js";import"./SetGraphicalItem-wZmxt-s3.js";import"./getZIndexFromUnknown-DYeOV0S6.js";import"./useEffectiveDataKey-Bt6hIrJm.js";import"./fillDefinitions-C7_rhOBH.js";import"./omit-Es-d5Yne.js";import"./isArguments-yB-y1yaH.js";import"./Curve-St2o1Zg2.js";import"./step-C3G0yHTA.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DOV6z7vt.js";import"./Dot-D4FfFK1V.js";import"./Symbols-DTd7inGs.js";import"./symbol-OLqGol2l.js";import"./getRadiusAndStrokeWidthFromDot-J3eGzewL.js";import"./useElementOffset-Dh1asSMz.js";import"./uniqBy-BUDfukUQ.js";import"./iteratee-B0xN_w6V.js";import"./Cross-BJJumAQM.js";import"./Sector-D68kMANZ.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
