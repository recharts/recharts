import{R as t}from"./iframe-BcoARvhY.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BR79w2P2.js";import{R as l}from"./zIndexSlice-Cap7bOGW.js";import{C as x}from"./ComposedChart-Dw_41cnT.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BxhvSvuD.js";import{L as a}from"./Line-DWyUakfU.js";import{X as c}from"./XAxis-CW4XRUun.js";import{T as g}from"./Tooltip-4lPV6aA7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Db4oLrbv.js";import"./Text-DEB5NFXE.js";import"./resolveDefaultProps-DgaC_Lp9.js";import"./DOMUtils-BwQh9Mln.js";import"./ZIndexLayer-e5VNMC6H.js";import"./index-DVE_dPhD.js";import"./index-BIq0I_KS.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C4L0U3vA.js";import"./throttle-DozmwBSC.js";import"./axisSelectors-CF6rFxXt.js";import"./d3-scale-BLsEuD7O.js";import"./CartesianAxis-Dfmzj1DX.js";import"./Layer-BMBcyrHw.js";import"./types-CjeLalhs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dsox9MKA.js";import"./index-SzPYUv7o.js";import"./index-DvX40RdG.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Cwmh20d2.js";import"./index-BhqvlJ2k.js";import"./fillDefinitions-D74AVg8N.js";import"./CartesianChart-C4x2bsCb.js";import"./ZIndexPortal-CGHsRqD4.js";import"./CategoricalChart-DUIKL0FO.js";import"./LabelList-DqQuwlzD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C_t9hqFj.js";import"./useAnimationId-DZvEuqRY.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CvEqRJU-.js";import"./tooltipContext-DlMmvww2.js";import"./dataEntryStyles-oli1U5SG.js";import"./ErrorBarContext-BGCJ_sZx.js";import"./activeStyles-Bdk5Xw9p.js";import"./SetGraphicalItem-D7kHQmaa.js";import"./getZIndexFromUnknown-BFo_3-rb.js";import"./useEffectiveDataKey-1O9VfdX1.js";import"./omit-DCT4h7f4.js";import"./isArguments-yB-y1yaH.js";import"./Curve-hSwQe_mn.js";import"./step-BV4gh9k1.js";import"./path-DyVhHtw_.js";import"./ActivePoints-qZlMEdOF.js";import"./Dot-CeoPT2zv.js";import"./Symbols-DvLknyR9.js";import"./symbol-D2mHl5_S.js";import"./getRadiusAndStrokeWidthFromDot-DIgm2Flo.js";import"./useElementOffset-KsdSYS8B.js";import"./uniqBy-CzEHPKx1.js";import"./iteratee-CEqHQ8un.js";import"./Cross-BYGgjkzq.js";import"./Sector-DAFfY2-U.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
