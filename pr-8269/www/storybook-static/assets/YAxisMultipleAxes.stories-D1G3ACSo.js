import{R as t}from"./iframe-qp48uAQ7.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-DlgcwvPx.js";import{R as l}from"./zIndexSlice-KCJej1vF.js";import{C as x}from"./ComposedChart-CiZY4n0u.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-GEtuL3Cq.js";import{L as a}from"./Line-DYWFyVWx.js";import{X as c}from"./XAxis-DBjPaOy0.js";import{T as g}from"./Tooltip-Dar0g843.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Sje2x2ae.js";import"./Text-9axAMSSa.js";import"./resolveDefaultProps-H_yb4yD-.js";import"./ZIndexLayer-B5vbT5ul.js";import"./index-neNyiLUw.js";import"./index-BV3Lw9OX.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-B_tUAyjC.js";import"./throttle-DidOwtMq.js";import"./axisSelectors-EQaPQOEj.js";import"./d3-scale-C1UROyMV.js";import"./CartesianAxis-CvElXQWV.js";import"./Layer-3O8BuD1C.js";import"./types-B-Gso0-n.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BsS9ZrzM.js";import"./index-BBO10kZC.js";import"./index-DSRi-YPI.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-1rMBmo6H.js";import"./index-D8wT4PmW.js";import"./fillDefinitions-0M80HuO4.js";import"./CartesianChart-2yA0qqcE.js";import"./chartDataContext-BjUDfEUJ.js";import"./CategoricalChart-Dz_UBlxz.js";import"./dataEntryStyles-MmJGBd3d.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cfn5NBZC.js";import"./useAnimationId-gBLR8eku.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils--ilFziir.js";import"./tooltipContext-CRinBg2b.js";import"./ErrorBarContext-BOAdtyxi.js";import"./activeStyles-CvvZZ1RN.js";import"./SetGraphicalItem-BRHHFk9x.js";import"./getZIndexFromUnknown-BAgHT1YF.js";import"./useEffectiveDataKey-81Od8ro-.js";import"./omit-D2tnasXN.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-DPhFQhmH.js";import"./Curve-D9eNKl8H.js";import"./step-DYSBTYxM.js";import"./path-BBMZd4YL.js";import"./ActivePoints-AeR92xz-.js";import"./Dot-CZVpULkY.js";import"./Symbols-DxoHFJIb.js";import"./symbol-Wa3jzChJ.js";import"./useElementOffset-Dp4_SaWM.js";import"./uniqBy-Cnk-Rop6.js";import"./iteratee-CnEj035Y.js";import"./Cross-CVzQj4ub.js";import"./Sector-CaOTB0DJ.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
