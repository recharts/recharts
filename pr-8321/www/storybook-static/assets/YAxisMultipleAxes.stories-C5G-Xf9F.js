import{R as t}from"./iframe-CvaFu5-c.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-3HuEzFma.js";import{R as l}from"./zIndexSlice-BCgb8eXa.js";import{C as x}from"./ComposedChart-CJeqweUj.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DNJCJq_u.js";import{L as a}from"./Line-Bo0hpeCk.js";import{X as c}from"./XAxis-DQoNxyYu.js";import{T as g}from"./Tooltip-BuWKvjd4.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CVIJCqoI.js";import"./get-CjriyByo.js";import"./Label-D9P4cAWK.js";import"./Text-BlqBUDkB.js";import"./ZIndexLayer-DO68mxLb.js";import"./index-Dtg5gRR9.js";import"./index-D2kSQ0HF.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-nhz4Skhy.js";import"./throttle-CPKsFv9V.js";import"./axisSelectors-BvhvBZte.js";import"./diverging-1_Z3dmgw.js";import"./CartesianAxis-71DKFDGT.js";import"./Layer-GSzXSKza.js";import"./types-B8ocCfqn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DknGqI4w.js";import"./index-gm9J6V3Z.js";import"./index-DnvnPPwe.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-B-sPOqKb.js";import"./index-6xLnrqw3.js";import"./fillDefinitions-DWPX2s4U.js";import"./CartesianChart-DGNKw331.js";import"./chartDataContext-LmmBbzgU.js";import"./CategoricalChart-Cug4ru24.js";import"./dataEntryStyles-B7SMVv85.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BN9-Ud6u.js";import"./useAnimationId-UMR0vx8i.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-nr8N1oHW.js";import"./tooltipContext-DP5JJD-s.js";import"./ErrorBarContext-Y9Ni32mE.js";import"./activeStyles-TP9Js-Ix.js";import"./SetGraphicalItem-A7-SSfJY.js";import"./getZIndexFromUnknown-DCzd4AEq.js";import"./useEffectiveDataKey-BIeeRG6o.js";import"./omit-CJDDCLUj.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-9zV8sg_8.js";import"./Curve-CMLV0YB3.js";import"./step-C9qQ8yhV.js";import"./path-BBMZd4YL.js";import"./ActivePoints-DxXTbZF0.js";import"./Dot-C2Vb3upB.js";import"./Symbols-BJcGRvsQ.js";import"./symbol-CBJm44QG.js";import"./useElementOffset-CPc3MDMB.js";import"./uniqBy-DqEP9E_e.js";import"./iteratee-BOojH3GU.js";import"./Cross-BwS2T31m.js";import"./Sector-By2AYXm5.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
