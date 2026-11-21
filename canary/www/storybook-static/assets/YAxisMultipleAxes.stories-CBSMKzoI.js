import{R as t}from"./iframe-ClXUkryL.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-CSB-tj7Q.js";import{R as l}from"./zIndexSlice-DzUiPhG1.js";import{C as x}from"./ComposedChart-D4GI_a_J.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CL-TKqP4.js";import{L as a}from"./Line-CTNZd68_.js";import{X as c}from"./XAxis-DAmFlkh4.js";import{T as g}from"./Tooltip-CVS8zOAR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BMxAhfb3.js";import"./Text-C9XRZpa-.js";import"./resolveDefaultProps-Be-R1NDV.js";import"./ZIndexLayer-CVBpK4Om.js";import"./index-1IQ6h1fT.js";import"./index-D1YVhIqp.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-B2T5HNNu.js";import"./throttle-CEjR9znF.js";import"./axisSelectors-BImpBlrZ.js";import"./d3-scale-Crqvu4_S.js";import"./CartesianAxis-DC6JqvO0.js";import"./Layer-L872TvYf.js";import"./types-la06XTph.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-0uwg5ZfK.js";import"./index-DTBjcvrn.js";import"./index-CrY7M_Vr.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C4CsKSyh.js";import"./index-BN7SKK3J.js";import"./fillDefinitions-C705icco.js";import"./CartesianChart-Dl8SN8lO.js";import"./chartDataContext-vv2pvmYC.js";import"./CategoricalChart-B-f9dtfF.js";import"./dataEntryStyles-Br1h1G1A.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-KaRylKEj.js";import"./useAnimationId-Dks1GaGE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Co4M2_jg.js";import"./tooltipContext-BY7561bJ.js";import"./ErrorBarContext-BbIl9cJe.js";import"./activeStyles-CbEtMY8z.js";import"./SetGraphicalItem-XdL-o-fT.js";import"./getZIndexFromUnknown-C_8ZJkTx.js";import"./useEffectiveDataKey-OGRxErZi.js";import"./omit-CGaxN5Wh.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-BBOOYriq.js";import"./Curve-MAqNRQ5D.js";import"./step-DKRQgBi6.js";import"./path-BBMZd4YL.js";import"./ActivePoints-FWIT6xTU.js";import"./Dot-ACUQcHT1.js";import"./Symbols-x2c8SqkY.js";import"./symbol-DbkjlHpo.js";import"./useElementOffset-DeqYTBDK.js";import"./uniqBy-BpqYijuT.js";import"./iteratee-B2tmauo-.js";import"./Cross-5JluxCld.js";import"./Sector-BP6odGN8.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
