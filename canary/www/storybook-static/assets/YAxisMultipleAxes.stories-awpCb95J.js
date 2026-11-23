import{R as t}from"./iframe-BPMC3WYJ.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis--I1P1gwH.js";import{R as l}from"./zIndexSlice-Dj40vb7g.js";import{C as x}from"./ComposedChart-q5KBJ-2n.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BW2viFRG.js";import{L as a}from"./Line-D5wU_WBD.js";import{X as c}from"./XAxis-BFqeDJUQ.js";import{T as g}from"./Tooltip-B4_19yMM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-pm6AJFCJ.js";import"./Text-DQWN35zZ.js";import"./resolveDefaultProps-DrqSG9Sb.js";import"./ZIndexLayer-edtK9VrY.js";import"./index--Kmbgs-i.js";import"./index-AyLBa-KC.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BUrPAP_8.js";import"./throttle-B4k3GkVg.js";import"./axisSelectors-CrZDIgWl.js";import"./d3-scale-DWK10Otc.js";import"./CartesianAxis-Fpal_j0O.js";import"./Layer-Cp3c10oW.js";import"./types-w6DZXHOl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DlYiisC_.js";import"./index-RBnEXtxa.js";import"./index-CYO9i6D-.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DOOVVQ84.js";import"./index-sIio76FK.js";import"./fillDefinitions-D5RroE9V.js";import"./CartesianChart-DjwHqbL7.js";import"./chartDataContext-Duv-qyDG.js";import"./CategoricalChart-3WFZ3cEW.js";import"./dataEntryStyles-BuPGiwQu.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BGQF-aUM.js";import"./useAnimationId-BI9f9iTm.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-yBzGzkry.js";import"./tooltipContext-Dr52N-ZM.js";import"./ErrorBarContext-CgYrVc8t.js";import"./activeStyles-Ci2F5zQC.js";import"./SetGraphicalItem-BZWLeuys.js";import"./getZIndexFromUnknown-Ds15p0gl.js";import"./useEffectiveDataKey-o3mJFvm5.js";import"./omit-BiRC9x0X.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-Dlem8Fc0.js";import"./Curve-S3vEoheb.js";import"./step-DsVBo6Bh.js";import"./path-BBMZd4YL.js";import"./ActivePoints-D3NC-ckk.js";import"./Dot-Ctn63yOC.js";import"./Symbols-BiXrA8HB.js";import"./symbol-DMDdywXz.js";import"./useElementOffset-Bx4aDwVk.js";import"./uniqBy-UcILfQxJ.js";import"./iteratee-BJq6bg2a.js";import"./Cross-28qifeJz.js";import"./Sector-ejBSjkz7.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
