import{R as t}from"./iframe-5rlHu5E0.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-tXVCruoC.js";import{R as l}from"./zIndexSlice-Dvv9j-PL.js";import{C as x}from"./ComposedChart-02LDQCPf.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CB9JjzxX.js";import{L as a}from"./Line-DqGhY_qo.js";import{X as c}from"./XAxis-QaJfpBkQ.js";import{T as g}from"./Tooltip-CA8byynu.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-dTTzfWAl.js";import"./Text-BWBZmFaQ.js";import"./resolveDefaultProps-DMzoBuFc.js";import"./DOMUtils-Cgsp7qZK.js";import"./isWellBehavedNumber-CtQc_19S.js";import"./useBackwardsCompatibleTheme-CU4QNWlg.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CC4VGBXC.js";import"./index-De9KIq3f.js";import"./index-CPjGkxRF.js";import"./RechartsWrapper-B_1S-WX9.js";import"./index-CRexnrp9.js";import"./index-CgDVIgvd.js";import"./throttle-BEcUjoVL.js";import"./axisSelectors-XpGDVkFI.js";import"./d3-scale-DQPeDNzN.js";import"./renderedTicksSlice-BU2rLD4L.js";import"./CartesianAxis-C1R_DLLS.js";import"./Layer-B7qTvwXJ.js";import"./types-_FdMQlV7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CTBAwDjg.js";import"./chartDataContext-_d8W5FBB.js";import"./CategoricalChart-fg3LMOIt.js";import"./AnimatedItems-CcRowb6W.js";import"./useAnimationId-9v2us4V5.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-asU9eCg1.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DcbSHq-a.js";import"./tooltipContext-DQG3ys6L.js";import"./RegisterGraphicalItemId-DiVn-hPt.js";import"./ErrorBarContext-B7azcaum.js";import"./GraphicalItemClipPath-BY5WrhEA.js";import"./SetGraphicalItem-B4wCJH3k.js";import"./getZIndexFromUnknown--EE_dzZC.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-7tXAQg_z.js";import"./Curve-D7O-jO1k.js";import"./step-BcoQtodi.js";import"./path-DyVhHtw_.js";import"./ActivePoints-uOYRpmEx.js";import"./Dot-jf28pyfo.js";import"./getRadiusAndStrokeWidthFromDot-DgCt5gXI.js";import"./useElementOffset-BaEggssM.js";import"./uniqBy-DHtefDuc.js";import"./iteratee-Ckui7P-a.js";import"./Cross-BmUo9Dmn.js";import"./Sector-Czfvu02u.js";const Kt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Mt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Mt as __namedExportsOrder,Kt as default};
