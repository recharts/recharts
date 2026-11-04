import{R as t}from"./iframe-B_nNZpI2.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-2XrZ_LwE.js";import{R as l}from"./zIndexSlice-FViTDxbD.js";import{C as x}from"./ComposedChart-IJuZ_x55.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Bu7FASb1.js";import{L as a}from"./Line-CXhhFX8j.js";import{X as c}from"./XAxis-BnGisaM6.js";import{T as g}from"./Tooltip-D8OOgtrt.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CETIJz5j.js";import"./Text-D-JNnNjs.js";import"./resolveDefaultProps-BCFRFaLp.js";import"./DOMUtils-adSDEv62.js";import"./ZIndexLayer-DP7ICro2.js";import"./index-CvC1anYi.js";import"./index-CLDy2H7V.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-c40A3UY1.js";import"./throttle-CfowHFSP.js";import"./axisSelectors-BlrbKtsJ.js";import"./d3-scale-BP2r_61E.js";import"./CartesianAxis-CmpohTUe.js";import"./Layer-BI_5R4V_.js";import"./types-CwUR8ti8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BZkCDNTa.js";import"./index-D3rZTjme.js";import"./index-CMcdxE-j.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C-v3LlOW.js";import"./index-CkI1O38Z.js";import"./fillDefinitions-BvN15Ps2.js";import"./CartesianChart-Ct6HzlQ7.js";import"./ZIndexPortal-fcfY6DBt.js";import"./CategoricalChart-CN7dS280.js";import"./LabelList-DxewBo1N.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C8RP3-tc.js";import"./useAnimationId-DARA-gCu.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B2gG84cu.js";import"./tooltipContext-goTd0_TX.js";import"./dataEntryStyles-RBGB6YIO.js";import"./ErrorBarContext-DhTGqk3o.js";import"./activeStyles-BsBbQeVt.js";import"./SetGraphicalItem-BWi71ya4.js";import"./getZIndexFromUnknown-UdxXNnsn.js";import"./useEffectiveDataKey-BKhq6vYl.js";import"./omit-lQ-G7lRl.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CDY88Bak.js";import"./step-Bq7ByKAT.js";import"./path-DyVhHtw_.js";import"./ActivePoints-2YuDFMtV.js";import"./Dot-DlBvAs_S.js";import"./Symbols-zxsCudAN.js";import"./symbol-CQ43VyHp.js";import"./getRadiusAndStrokeWidthFromDot-C7tNLDQS.js";import"./useElementOffset-Q6NphwPQ.js";import"./uniqBy-B6gg-PM7.js";import"./iteratee-pGgkjcUZ.js";import"./Cross-_mk-19-J.js";import"./Sector-PJXI1L2R.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Wt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Wt as __namedExportsOrder,Tt as default};
