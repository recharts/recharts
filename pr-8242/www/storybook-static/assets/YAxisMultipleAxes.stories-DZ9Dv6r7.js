import{R as t}from"./iframe-BRs2DqB3.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-DidbNqGc.js";import{R as l}from"./zIndexSlice-XRTrDK7l.js";import{C as x}from"./ComposedChart-DVPdEFZp.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BJb5F-sS.js";import{L as a}from"./Line-BkTgv4cu.js";import{X as c}from"./XAxis-BJyhb9sC.js";import{T as g}from"./Tooltip-CqMuKwCH.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-utTJNWp0.js";import"./Text-DRaltNnR.js";import"./resolveDefaultProps-BRTztjAc.js";import"./ZIndexLayer-BCRtaoEe.js";import"./index-CqTGU6qX.js";import"./index-C0uv-V1O.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DwLugqE9.js";import"./throttle-BN55ZsBD.js";import"./axisSelectors-DBUHuATQ.js";import"./d3-scale-B39-KfBv.js";import"./CartesianAxis-C23TAeVf.js";import"./Layer-DqrqtEm2.js";import"./types-BN549hIA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BjdRfY4C.js";import"./index-BL5_00_X.js";import"./index-Co-V1H3-.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CJYaD9xA.js";import"./index-IgyX-1iw.js";import"./fillDefinitions-Cww6uxJT.js";import"./CartesianChart-Dsxkw-P3.js";import"./chartDataContext-QcS0sZvi.js";import"./CategoricalChart-BZHqfx2A.js";import"./dataEntryStyles-B5I1MPoS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BivqHDne.js";import"./useAnimationId-De06VpE9.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cvk6a1r9.js";import"./tooltipContext-Datniygv.js";import"./ErrorBarContext-D0NsIgk-.js";import"./activeStyles-gnY1xuwf.js";import"./SetGraphicalItem-C9srr3mG.js";import"./getZIndexFromUnknown-D7iRE9IP.js";import"./useEffectiveDataKey-_AqelCoa.js";import"./omit-Bx3nEryi.js";import"./isArguments-yB-y1yaH.js";import"./Curve-YmdI71--.js";import"./step-UgzMRyWu.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DywQ8pFt.js";import"./Dot-DCtDqOty.js";import"./Symbols-Cy-ALuGW.js";import"./symbol-rCFxuDnc.js";import"./getRadiusAndStrokeWidthFromDot-CwwAN-KH.js";import"./useElementOffset-DjI6NDB8.js";import"./uniqBy-aZImii2x.js";import"./iteratee-CrjEP9l6.js";import"./Cross-Bogn5Ydo.js";import"./Sector-CsRUhTp7.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
