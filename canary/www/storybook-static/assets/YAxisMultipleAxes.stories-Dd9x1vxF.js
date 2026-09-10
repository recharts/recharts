import{R as t}from"./iframe-D-sDuIqM.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-C3R1kIjz.js";import{R as l}from"./zIndexSlice-DkRDAG1K.js";import{C as x}from"./ComposedChart-BqFvX779.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-B4l2brso.js";import{L as a}from"./Line-Dg79dF8E.js";import{X as c}from"./XAxis-C9qauAI0.js";import{T as g}from"./Tooltip-Ba02LnDa.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-mzqnfF5y.js";import"./Text-cGP75sAD.js";import"./resolveDefaultProps-DRUr7G4m.js";import"./DOMUtils-BlK1UfYz.js";import"./isWellBehavedNumber-n1fKw3Ik.js";import"./useId-DJy_IGRL.js";import"./useBackwardsCompatibleTheme-Bt2NRZPB.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dl5V_Hf6.js";import"./index-DOwSNtIW.js";import"./index-D-ZcLjnp.js";import"./RechartsWrapper-BR0dPwJa.js";import"./axisSelectors-CcFzWzBk.js";import"./throttle-BwwGSoU-.js";import"./d3-scale-D2yJqL8j.js";import"./index-sXSxEpdM.js";import"./index-DlgBIkPT.js";import"./renderedTicksSlice-DoL3t7Bc.js";import"./index-Dfhf8xit.js";import"./CartesianAxis-Bbla4SrJ.js";import"./Layer-C3zxw81n.js";import"./types-D7y8jC37.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-ZdAO4m3f.js";import"./chartDataContext-DR95QKXv.js";import"./CategoricalChart-Bvu_kn7d.js";import"./AnimatedItems-CAyQvTlC.js";import"./useAnimationId-BdWTgj5e.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-cVKynJUN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B7KMSlGv.js";import"./tooltipContext-FI4aLtaR.js";import"./RegisterGraphicalItemId-BpgvVZBx.js";import"./ErrorBarContext-COUU5Hme.js";import"./GraphicalItemClipPath-BqyJWtfu.js";import"./SetGraphicalItem-CoBxoWuP.js";import"./getZIndexFromUnknown-BRHZLqbc.js";import"./useGraphicalItemIdentity-CglCalgl.js";import"./Curve-CiGjQv1I.js";import"./step-CSXkfkZq.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Ctj_jtde.js";import"./Dot-nUj7Emhk.js";import"./getRadiusAndStrokeWidthFromDot-CyWtRfsI.js";import"./useElementOffset-CnzQeRxh.js";import"./uniqBy-B7ZujxYX.js";import"./iteratee-pAczANug.js";import"./Cross-CFjweDtM.js";import"./Sector-Clw-GRhk.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Rt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
