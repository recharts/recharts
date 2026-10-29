import{R as t}from"./iframe-EeI-1j8u.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BRal3r11.js";import{R as l}from"./zIndexSlice-DHZxeEos.js";import{C as x}from"./ComposedChart-pRvTQeS0.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-J9fPx4i9.js";import{L as a}from"./Line-DEXoNnz0.js";import{X as c}from"./XAxis-CIWygb1G.js";import{T as g}from"./Tooltip-Dn_vDD_U.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BhnhNpXu.js";import"./Text-BY4Mp6iu.js";import"./resolveDefaultProps-nYBnVSVd.js";import"./DOMUtils-CO7WypWi.js";import"./ZIndexLayer-D_EbKSUX.js";import"./index-pgwVXRJO.js";import"./index-jJDdBZp4.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D7djmlhq.js";import"./throttle-CXPRMSpL.js";import"./axisSelectors-Cv1-8nVO.js";import"./d3-scale-DCtxOwfO.js";import"./CartesianAxis-Qxk-B3SK.js";import"./Layer-U6GYHWx5.js";import"./types-DqUdmTjU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Y-CkzfGU.js";import"./index-BylysGcb.js";import"./index-BCOZ7QjH.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BS1aWGo0.js";import"./index-DKT02nAj.js";import"./CartesianChart-e1TnBbHn.js";import"./ZIndexPortal-pivMB2CQ.js";import"./CategoricalChart-BQ46uFlP.js";import"./LabelList-D0m07rKR.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CCoDLphy.js";import"./useAnimationId-CIis84-o.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B2Xd3mgO.js";import"./tooltipContext-C5ItyuzL.js";import"./dataEntryStyles-RarJtqD3.js";import"./ErrorBarContext-Cxsgmfrf.js";import"./activeStyles-T-Ne1kjI.js";import"./SetGraphicalItem-DIh7Z4HQ.js";import"./getZIndexFromUnknown-B1ltCxHN.js";import"./useEffectiveDataKey-Ce4gQ9XU.js";import"./FillDefinition-DuMwyIxx.js";import"./omit-CKFdUnHM.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CyFTZwtt.js";import"./step-DC-9QXp9.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BbQX7U_s.js";import"./Dot-LqOCFWRI.js";import"./Symbols-CDnC4YnR.js";import"./symbol-DRSGvgE-.js";import"./getRadiusAndStrokeWidthFromDot-C5z_N8Pp.js";import"./useElementOffset-BM2TfUnu.js";import"./uniqBy-v3RdXdow.js";import"./iteratee-BmmzoLEb.js";import"./Cross-WnLTnECd.js";import"./Sector-CiNF6rG5.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
