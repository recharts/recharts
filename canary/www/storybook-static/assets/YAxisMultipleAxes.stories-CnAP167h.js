import{R as t}from"./iframe-Bo9DV_RF.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-CK1muElb.js";import{R as l}from"./zIndexSlice-ChGxP5I9.js";import{C as x}from"./ComposedChart-BSjH4eO6.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-f-NW4gqj.js";import{L as a}from"./Line-A1JFBNP7.js";import{X as c}from"./XAxis-hzMML8e7.js";import{T as g}from"./Tooltip-CgTtgD3h.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BywaPoTf.js";import"./Text-DQn8LN2h.js";import"./resolveDefaultProps-D7E8wIuA.js";import"./ZIndexLayer-D-AkOEB1.js";import"./index-Bm5Sdcd_.js";import"./index-BpsrDHro.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DgJeannD.js";import"./throttle-CaIo9_rk.js";import"./axisSelectors-BUIYbOzk.js";import"./d3-scale-BoInTKj4.js";import"./CartesianAxis-_PdJmc1T.js";import"./Layer-C6lb2zxM.js";import"./types-DltK9JsS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BwP3mXWs.js";import"./index-Dj5W-yVu.js";import"./index-PvdQicqP.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-D6SFyLdk.js";import"./index-9iDWVYtT.js";import"./fillDefinitions-CP3VVI6H.js";import"./CartesianChart-8vtQlYBx.js";import"./chartDataContext-PPXpQSNc.js";import"./CategoricalChart-BdPgBmoC.js";import"./dataEntryStyles-DVGQZ3dA.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-RS1J8Vgk.js";import"./useAnimationId-TvJ5tZp1.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cnqk-jZd.js";import"./tooltipContext-BjT-zSCp.js";import"./ErrorBarContext-BobbhAG8.js";import"./activeStyles-mw-DKPXy.js";import"./SetGraphicalItem-BA1U1Prk.js";import"./getZIndexFromUnknown-CC6iyV75.js";import"./useEffectiveDataKey-Er14ucR5.js";import"./omit-CWBJZb8U.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-CqTAMhL0.js";import"./Curve-Dm-GvmWp.js";import"./step-5knHZEdX.js";import"./path-BBMZd4YL.js";import"./ActivePoints-CviyBCS_.js";import"./Dot-DxKRRRBk.js";import"./Symbols-CudC3e00.js";import"./symbol-4lof-nfP.js";import"./useElementOffset-UcOt8HAd.js";import"./uniqBy-Dalz8XIr.js";import"./iteratee-CXGy7xEC.js";import"./Cross-DKdlw8Q0.js";import"./Sector-DgCGLhDo.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
