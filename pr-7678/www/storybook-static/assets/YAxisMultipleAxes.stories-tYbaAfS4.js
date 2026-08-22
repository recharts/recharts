import{R as t}from"./iframe-ZEpSIPPd.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DcukXRO0.js";import{R as l}from"./zIndexSlice-BjIiWKqJ.js";import{C as x}from"./ComposedChart-DfYyrCdH.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DcX8kG5v.js";import{L as a}from"./Line-CI-w3eB1.js";import{X as c}from"./XAxis-rWesO0MY.js";import{T as g}from"./Tooltip-BXklL5Cj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DozjEBv8.js";import"./Text-BkbZubVW.js";import"./resolveDefaultProps-BfzNSowR.js";import"./DOMUtils-DDyTL2Su.js";import"./isWellBehavedNumber-BXmyHjL9.js";import"./useId-DFrG6yke.js";import"./useBackwardsCompatibleTheme-6dZyRN7A.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BvS-888Y.js";import"./index-DwRwpWpN.js";import"./index-BYZIueV1.js";import"./RechartsWrapper-BN48ENvM.js";import"./index-BaEUmZiD.js";import"./index-GhGxj3CA.js";import"./throttle-c8LVmlRW.js";import"./axisSelectors-kRjPN5q_.js";import"./d3-scale-BCV9yzNX.js";import"./renderedTicksSlice-DKo3nyKY.js";import"./CartesianAxis-B5C14IH-.js";import"./Layer-BhDP8tdE.js";import"./types-PAtN0CzN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BcBN8Odf.js";import"./chartDataContext-6sDrIT9e.js";import"./CategoricalChart-DKY1LJu7.js";import"./AnimatedItems-BTDiJp51.js";import"./useAnimationId-DTOSNt54.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CSNmICnV.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D9QeB7oI.js";import"./tooltipContext-BI5bZPXd.js";import"./RegisterGraphicalItemId-gZSXozCr.js";import"./ErrorBarContext-CVqGi1a9.js";import"./GraphicalItemClipPath-DI_H7WUy.js";import"./SetGraphicalItem-C95qHxIx.js";import"./getZIndexFromUnknown-CYhE65Wg.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Ck4Z32za.js";import"./Curve-BJ_Zw60j.js";import"./step-C4QDvCzF.js";import"./path-DyVhHtw_.js";import"./ActivePoints-LnlHxcy0.js";import"./Dot-YOcb-22K.js";import"./getRadiusAndStrokeWidthFromDot-BLf7D-Zv.js";import"./useElementOffset-DQwuldho.js";import"./uniqBy-CJQjOwF2.js";import"./iteratee-9quGMIsm.js";import"./Cross-BCEMcaNt.js";import"./Sector-DmVcb_8a.js";const Mt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Rt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
