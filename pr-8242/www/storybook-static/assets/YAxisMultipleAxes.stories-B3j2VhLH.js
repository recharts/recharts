import{R as t}from"./iframe-ChMBHEXU.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-CnSUrpEe.js";import{R as l}from"./zIndexSlice-Cd2z3Eer.js";import{C as x}from"./ComposedChart-B7Dgc5aq.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Dwx_3AuD.js";import{L as a}from"./Line-DFvVHptl.js";import{X as c}from"./XAxis-BEcsoff8.js";import{T as g}from"./Tooltip-Dx4yH64z.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-ZGXU1are.js";import"./Text-BiLv0S0Y.js";import"./resolveDefaultProps-X_3NC_87.js";import"./ZIndexLayer-OHuleK-j.js";import"./index-hGd76TNN.js";import"./index-SyLToHDG.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D-ZNarpI.js";import"./throttle-Cnp_ppL_.js";import"./axisSelectors-CyYfX19F.js";import"./d3-scale-B_LSdR1o.js";import"./CartesianAxis-8eiEJoC1.js";import"./Layer-Db_exIRl.js";import"./types-DgDe6MQb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BLUfpxyl.js";import"./index-DyVFOlJ7.js";import"./index-B193mqnD.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DPxS5GGe.js";import"./index-Dyev39ZM.js";import"./fillDefinitions-BXMuCbY2.js";import"./CartesianChart-AmmyZjSo.js";import"./chartDataContext-Q7_H0Fyo.js";import"./CategoricalChart-mubfvuGW.js";import"./dataEntryStyles-BARWQZ2-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CRyPjtQg.js";import"./useAnimationId-CSNfiiSW.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dx41DMd2.js";import"./tooltipContext-D3BNOiAv.js";import"./ErrorBarContext-BeNGW58S.js";import"./activeStyles-BxZootHE.js";import"./SetGraphicalItem-RJE-RN3x.js";import"./getZIndexFromUnknown-73NX_-Km.js";import"./useEffectiveDataKey-Djw6ESIG.js";import"./omit-C4ghczme.js";import"./isArguments-yB-y1yaH.js";import"./Curve-C_M0JkPD.js";import"./step-BAe_ZTJZ.js";import"./path-DyVhHtw_.js";import"./ActivePoints-mf0f4bpo.js";import"./Dot-DD7kJ9X3.js";import"./Symbols-DH6a8AH_.js";import"./symbol-CSHS3Q6e.js";import"./getRadiusAndStrokeWidthFromDot-CwS8CmXh.js";import"./useElementOffset-CendnaSI.js";import"./uniqBy-CLumAGO5.js";import"./iteratee-B1mbQ6FI.js";import"./Cross-DCShNf2L.js";import"./Sector-P1tYRqCr.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
