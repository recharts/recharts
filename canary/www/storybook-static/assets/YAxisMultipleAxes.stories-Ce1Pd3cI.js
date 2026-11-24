import{R as t}from"./iframe-Be1JwYLB.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-B8XW_V0R.js";import{R as l}from"./zIndexSlice-CgSPm-wc.js";import{C as x}from"./ComposedChart-aW1EvLk8.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D0_Qv8Ct.js";import{L as a}from"./Line-BfWisHme.js";import{X as c}from"./XAxis-BsHOKRoe.js";import{T as g}from"./Tooltip-CBedYJZV.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-vtDVNmS9.js";import"./get-CjriyByo.js";import"./Label-Cm4G9M_4.js";import"./Text-BqUDv62U.js";import"./ZIndexLayer-ByAD4IkB.js";import"./index-ueUT9Xj6.js";import"./index-Bkv44dvd.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-petp68tp.js";import"./throttle-DjxQctYo.js";import"./axisSelectors-rS5FKSRX.js";import"./d3-scale-C_iM0uvU.js";import"./CartesianAxis-CBnwQrVI.js";import"./Layer-L6JSSqUT.js";import"./types-DiTos3ch.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DiKCMxPA.js";import"./index-Dg9s7T6j.js";import"./index-m2EJzzBW.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BztyyuwI.js";import"./index-B-llFuKq.js";import"./fillDefinitions-Be1jCOoc.js";import"./CartesianChart-C7B4dY_Y.js";import"./chartDataContext-DDExTKyo.js";import"./CategoricalChart-C-aFkl_F.js";import"./dataEntryStyles-BkzBQ6X2.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bp6UvdPI.js";import"./useAnimationId-DZ7icYC0.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C6jNLipX.js";import"./tooltipContext-Q0tCFVpq.js";import"./ErrorBarContext-CuYC5cVX.js";import"./activeStyles-CdOMMJXp.js";import"./SetGraphicalItem-CZx3vw8X.js";import"./getZIndexFromUnknown-XUvIdfpL.js";import"./useEffectiveDataKey-dwd_hOHx.js";import"./omit-CPopItf9.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-B_Y3WA9D.js";import"./Curve-DQRadQHz.js";import"./step-Dq96qlXf.js";import"./path-BBMZd4YL.js";import"./ActivePoints-BUYZbsLY.js";import"./Dot-C-gvMhjL.js";import"./Symbols-34MkMdpP.js";import"./symbol-CfD9aVNT.js";import"./useElementOffset-BXttSKBy.js";import"./uniqBy-CpAKF5a4.js";import"./iteratee-Bcb_cbmN.js";import"./Cross-Bk-II5U1.js";import"./Sector-CdCkKvGS.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
