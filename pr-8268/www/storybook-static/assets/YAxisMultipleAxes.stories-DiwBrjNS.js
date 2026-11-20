import{R as t}from"./iframe-B4BvLeme.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-T0QKWtDf.js";import{R as l}from"./zIndexSlice-DyTYWVcs.js";import{C as x}from"./ComposedChart-D4s6ZbXJ.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CxnmACF7.js";import{L as a}from"./Line-B5NkGOql.js";import{X as c}from"./XAxis-T18YTghU.js";import{T as g}from"./Tooltip-BqwF9dCU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Bp5zUoNH.js";import"./Text-B4NS4A04.js";import"./resolveDefaultProps-6IdFK7Ih.js";import"./ZIndexLayer-Cb7Yxv7n.js";import"./index-ClYdslLd.js";import"./index-59WpEyYi.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DqM84NZ8.js";import"./throttle-DQNRL0AJ.js";import"./axisSelectors-DS5uRUAA.js";import"./d3-scale-DfUXkppW.js";import"./CartesianAxis-reQTS2uW.js";import"./Layer-Bxh7arjC.js";import"./types-UPHeghFs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D5gysmL5.js";import"./index-CwZtWez3.js";import"./index-Ba_PgChy.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-B0OT4wWF.js";import"./index-eMahtaOk.js";import"./fillDefinitions-CE1xVmK7.js";import"./CartesianChart-B8uUCQhO.js";import"./chartDataContext-DPDAwbOK.js";import"./CategoricalChart-gG_kR-cF.js";import"./dataEntryStyles-n779GVpT.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Wqh2w_9O.js";import"./useAnimationId-B1vlq9HU.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CXNsVwUA.js";import"./tooltipContext-D_p8bgOZ.js";import"./ErrorBarContext-BEP_BW62.js";import"./activeStyles-BtDPe58A.js";import"./SetGraphicalItem-WJo3C0-v.js";import"./getZIndexFromUnknown-DrpZLg6y.js";import"./useEffectiveDataKey-cN06FnCm.js";import"./omit-DUdB1-kG.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-CutWxkzF.js";import"./Curve-B5oomGBl.js";import"./step-il89s-4w.js";import"./path-BBMZd4YL.js";import"./ActivePoints-Cz0D4X-h.js";import"./Dot-BDYf7Xcg.js";import"./Symbols-BPMmDEMk.js";import"./symbol-YAvM_-gl.js";import"./useElementOffset-BbIaovZs.js";import"./uniqBy-D7JAzLt7.js";import"./iteratee-DlFoAbv_.js";import"./Cross-CYqaTdkm.js";import"./Sector-BXO2sNen.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
