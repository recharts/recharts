import{R as t}from"./iframe-Bpd2XNWC.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CYnJfJw2.js";import{R as l}from"./zIndexSlice-BTu_B7mV.js";import{C as x}from"./ComposedChart-CzZEMv_V.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-HmII4SBU.js";import{L as a}from"./Line-CpDx9GkF.js";import{X as c}from"./XAxis-BIqIlQ9-.js";import{T as g}from"./Tooltip-CbAFlrXT.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CGyNRxJa.js";import"./Text-DXGXVj-Q.js";import"./resolveDefaultProps-B8bn9Lip.js";import"./DOMUtils-CSQS_b5b.js";import"./isWellBehavedNumber-DYj3VVfL.js";import"./useId-C9UFJlhx.js";import"./useBackwardsCompatibleTheme-BtLkKBFp.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BFtSzcZm.js";import"./index-xC6Bkz7H.js";import"./index-DgsoqgCs.js";import"./RechartsWrapper-Cs-3N8QT.js";import"./axisSelectors-BrNdfEDm.js";import"./throttle-CxmKEgMS.js";import"./d3-scale-C1KyS_uc.js";import"./index-Bvjdo_xp.js";import"./index-3uQaoJQn.js";import"./renderedTicksSlice-BjQ916I1.js";import"./index-Di8Mdcoc.js";import"./CartesianAxis-qQEQr_OK.js";import"./Layer-DWU20C-K.js";import"./types-B5zWJp34.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CGMddJ7u.js";import"./chartDataContext-Ddh2yzQT.js";import"./CategoricalChart-CuTFNTZi.js";import"./AnimatedItems-dPJnsYL3.js";import"./useAnimationId-DbYR-C-O.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-l4QrEY0S.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CE66pmBi.js";import"./tooltipContext-BqHkA-Bu.js";import"./RegisterGraphicalItemId-DEOSTvja.js";import"./ErrorBarContext-BALmliVb.js";import"./GraphicalItemClipPath-CVghwEWn.js";import"./SetGraphicalItem-FT01QPFF.js";import"./getZIndexFromUnknown-CLOLBUIp.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-IaVESyrB.js";import"./Curve-m791ZjIC.js";import"./step-PY4SjMEk.js";import"./path-DyVhHtw_.js";import"./ActivePoints-1vR13631.js";import"./Dot-7gwjjvvE.js";import"./getRadiusAndStrokeWidthFromDot-Bgi6ZhX1.js";import"./useElementOffset-BXSnabaG.js";import"./uniqBy-BNdvCmS_.js";import"./iteratee-__Bf_W0o.js";import"./Cross-CNm2MYhC.js";import"./Sector-CFjm2lmL.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
