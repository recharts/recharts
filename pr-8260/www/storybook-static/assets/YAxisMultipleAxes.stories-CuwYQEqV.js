import{R as t}from"./iframe-BrId7CKe.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-CGC-AYss.js";import{R as l}from"./zIndexSlice-DF5zMGO6.js";import{C as x}from"./ComposedChart-Cnp7765T.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C3ge_sdb.js";import{L as a}from"./Line-CgfEpiSf.js";import{X as c}from"./XAxis-CGJzYa5v.js";import{T as g}from"./Tooltip-BVNGnJB1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BOSTGjYW.js";import"./Text-CtzCspEf.js";import"./resolveDefaultProps-DIgz9kBc.js";import"./ZIndexLayer-DtobrSuN.js";import"./index-D7ICnWyX.js";import"./index-EO2EMNzs.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BScTjZiA.js";import"./throttle-CvD-CMS9.js";import"./axisSelectors-BWicBn7w.js";import"./d3-scale-Did4wLnp.js";import"./CartesianAxis-CGWn72D3.js";import"./Layer-CxlvVVO_.js";import"./types-BIH_CFXa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DAS2rh9P.js";import"./index-B4UkUUGe.js";import"./index-CKY_1Z5f.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C0PTLzSu.js";import"./index-Drj8yiU0.js";import"./fillDefinitions-dpOaLydo.js";import"./CartesianChart-BQoBJqDq.js";import"./chartDataContext-BtKuFOy0.js";import"./CategoricalChart-D7PumRDT.js";import"./dataEntryStyles-Dl3_KD-K.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BiqZRBIg.js";import"./useAnimationId-DnW4K7Yj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B-iMU9qH.js";import"./tooltipContext-CzexA5ec.js";import"./ErrorBarContext-Di-OPTeN.js";import"./activeStyles-haHqTj48.js";import"./SetGraphicalItem-Bx9N4hIP.js";import"./getZIndexFromUnknown-DuaM8Eae.js";import"./useEffectiveDataKey-BlMggeza.js";import"./omit-3XqNU2p2.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-2ewH2R2L.js";import"./Curve-CODof7zW.js";import"./step-D0GmmZR_.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BfbfOk4s.js";import"./Dot-Bz04y-El.js";import"./Symbols-DW8eGAaV.js";import"./symbol-Bas1pNoF.js";import"./useElementOffset-CyYI02cJ.js";import"./uniqBy-DKGrDlDL.js";import"./iteratee-BEaiqON8.js";import"./Cross-CUleMcJR.js";import"./Sector-DU6IjnP4.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
