import{R as t}from"./iframe-DRd8L1ij.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Dzj0j6ti.js";import{R as l}from"./zIndexSlice-DWK0mKBW.js";import{C as x}from"./ComposedChart-BgiL4Xm-.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-tke9XL7t.js";import{L as a}from"./Line-CN_lgmVk.js";import{X as c}from"./XAxis-DYHP_qTD.js";import{T as g}from"./Tooltip-CGl1c65o.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Dlqk38Aa.js";import"./Text-DOqNkwx7.js";import"./resolveDefaultProps--2iGUKCh.js";import"./DOMUtils-BMkGHkgN.js";import"./ZIndexLayer-BYH3DLDW.js";import"./index-DuLNwG6c.js";import"./index-GNzKGxFd.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-B7CzXU5n.js";import"./throttle-BZHSEq8k.js";import"./axisSelectors-DKYErlU4.js";import"./d3-scale-Degm7ixx.js";import"./CartesianAxis-BCEsA_1Q.js";import"./Layer-C-w_mvnX.js";import"./types-99rmuj1o.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-VRZysoJN.js";import"./index-BOBLZBKw.js";import"./index-BnUkaxQb.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CVHpNPrj.js";import"./index-DZh8SmTQ.js";import"./fillDefinitions-BcJsDDFO.js";import"./CartesianChart-xzJeK0ZT.js";import"./ZIndexPortal-BX35EtJy.js";import"./CategoricalChart-C3H_aI_M.js";import"./LabelList-C56jidjO.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DdQ2_4X9.js";import"./useAnimationId-C1EYHtHK.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dj9_Xfwc.js";import"./tooltipContext-B2CjN-pI.js";import"./dataEntryStyles-CMr7JuEI.js";import"./ErrorBarContext-DGvI8kwC.js";import"./activeStyles-N3dA5laV.js";import"./SetGraphicalItem-Cted8rHa.js";import"./getZIndexFromUnknown-D1D0jIp4.js";import"./useEffectiveDataKey-C0wXpfOI.js";import"./omit-CdCfDepK.js";import"./isArguments-yB-y1yaH.js";import"./Curve-B3UG50Pe.js";import"./step-CVL70ILG.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DpFFg10s.js";import"./Dot-Dinx-ymZ.js";import"./Symbols-C10Tu53k.js";import"./symbol-CYG96CRr.js";import"./getRadiusAndStrokeWidthFromDot-CcwRzSoX.js";import"./useElementOffset-DvtLZm2w.js";import"./uniqBy-CQ6eO9fT.js";import"./iteratee-0XuJHBpI.js";import"./Cross-C3EgGr3a.js";import"./Sector-BQUVlDaO.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
