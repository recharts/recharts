import{R as t}from"./iframe-CSFRbakT.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DYaDbF01.js";import{R as l}from"./zIndexSlice-DpZcKFY3.js";import{C as x}from"./ComposedChart-_ImOSsn2.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-zt5_IDi8.js";import{L as a}from"./Line-D5ifXaPa.js";import{X as c}from"./XAxis-qtAkwMmZ.js";import{T as g}from"./Tooltip-DQdZxL4G.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-wJcYTwit.js";import"./Text-D8YyLcux.js";import"./resolveDefaultProps-C2JgeEZu.js";import"./DOMUtils-DF5CrQ-h.js";import"./isWellBehavedNumber-93OW3PM3.js";import"./useId-BBLcWa_d.js";import"./useBackwardsCompatibleTheme-BSlqd8DY.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CRsGh2jd.js";import"./index-LyfzYazm.js";import"./index-_5SE_e0D.js";import"./RechartsWrapper-CTT8y5Ry.js";import"./index-Kfu3TRgb.js";import"./index-DiZSJisN.js";import"./throttle-DU_ACcBv.js";import"./axisSelectors-KHPqbB-J.js";import"./d3-scale-DhuPkMBe.js";import"./renderedTicksSlice-BfSTwOrr.js";import"./CartesianAxis-BE0DelqG.js";import"./Layer-Cas4KfrT.js";import"./types-63Ql-Qpj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BCRGB0c7.js";import"./chartDataContext-BSDgfmf3.js";import"./CategoricalChart-DTfC0HTb.js";import"./AnimatedItems-fBpE1aA1.js";import"./useAnimationId-CTzy6jqJ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DOmjHg1E.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-r1PbrWOo.js";import"./tooltipContext-Dy7lrOE6.js";import"./RegisterGraphicalItemId-BifFS_04.js";import"./ErrorBarContext-B0XwT2-o.js";import"./GraphicalItemClipPath-BvYnrcJ_.js";import"./SetGraphicalItem-w8PwKgIn.js";import"./getZIndexFromUnknown-C1CqSoWs.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Dr-Kh0al.js";import"./Curve-CfossU1f.js";import"./step-CyAEPMCA.js";import"./path-DyVhHtw_.js";import"./ActivePoints-D10Gw0-N.js";import"./Dot-pcaRJ9oP.js";import"./getRadiusAndStrokeWidthFromDot-Dzv_bsMb.js";import"./useElementOffset-DJQtsn9U.js";import"./uniqBy-Ccjwpzh7.js";import"./iteratee-NArAVAmk.js";import"./Cross-CceAOFwE.js";import"./Sector-CiYrENtI.js";const Mt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
