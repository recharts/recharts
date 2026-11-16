import{R as t}from"./iframe-DHoXusD1.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-_YVzx5KE.js";import{R as l}from"./zIndexSlice-FsvXxdXV.js";import{C as x}from"./ComposedChart-CDDK98iJ.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DKB3P-1-.js";import{L as a}from"./Line-COAixAac.js";import{X as c}from"./XAxis-hvLT-HVR.js";import{T as g}from"./Tooltip-D3ME52ET.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DH0ZiH3v.js";import"./Text-DGMTORnL.js";import"./resolveDefaultProps-htUurm4w.js";import"./ZIndexLayer-ZLuJl0PO.js";import"./index-CCctG3OF.js";import"./index-lVEyBlWW.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BGegD2Hb.js";import"./throttle-bPL_CYHd.js";import"./axisSelectors-pR92cyKp.js";import"./d3-scale-BrVNT65M.js";import"./CartesianAxis-D3kgYeFy.js";import"./Layer-DvTlLbe7.js";import"./types-BuL5d7PW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BXV4OD99.js";import"./index-Dy3TNkua.js";import"./index-DNIoQSRO.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-B415nsX3.js";import"./index-DVO0bVkJ.js";import"./fillDefinitions-BK2qfHam.js";import"./CartesianChart-0nvsDd6J.js";import"./chartDataContext-Cv05qjwa.js";import"./CategoricalChart-C50aZvEG.js";import"./dataEntryStyles-DjrRjJ6y.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DvIJVMhk.js";import"./useAnimationId-BUoKLqt_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CJDCK8tA.js";import"./tooltipContext-bHP8AoZ-.js";import"./ErrorBarContext-BUjEWD9b.js";import"./activeStyles-CtCkxF9Y.js";import"./SetGraphicalItem-x9UkOjiz.js";import"./getZIndexFromUnknown-vHe20no9.js";import"./useEffectiveDataKey-Ckh-4MN_.js";import"./omit-D6XzhNnp.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CobFJY2m.js";import"./step-7L3GLQ3k.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Okwmojju.js";import"./Dot-DjtRy0VI.js";import"./Symbols-Buf-PQNY.js";import"./symbol-CzqK2yND.js";import"./getRadiusAndStrokeWidthFromDot-JLWstI7V.js";import"./useElementOffset-0dudveHh.js";import"./uniqBy-Cb8Ka0OF.js";import"./iteratee-DACkWKhu.js";import"./Cross-Dbucp1-Q.js";import"./Sector-CkJljpkv.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
