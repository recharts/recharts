import{R as t}from"./iframe-NH2HoEvn.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-DayohGi9.js";import{R as l}from"./zIndexSlice-CCMkrqvp.js";import{C as x}from"./ComposedChart-BnMLy3JL.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C_3vssuF.js";import{L as a}from"./Line-B-WZkr-r.js";import{X as c}from"./XAxis-CWamoSoZ.js";import{T as g}from"./Tooltip-oyWUi0pB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Bo5cNVvp.js";import"./CartesianAxis-BKNqtnIf.js";import"./Layer-CmQSLVxb.js";import"./resolveDefaultProps-BGihd8_H.js";import"./Text-Dxh69SU_.js";import"./DOMUtils-DIF_Gs9K.js";import"./isWellBehavedNumber-DL2i4yQU.js";import"./Label-DT7zDdgZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-4vtT6ix2.js";import"./index-C8dhIkrl.js";import"./index-B6meFPDo.js";import"./types-CyGlxecW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C1ge3ajN.js";import"./immer-SVzhbtzF.js";import"./RechartsWrapper-DYZBcomz.js";import"./index-DwDUEQ_a.js";import"./index-KEn5cK9h.js";import"./axisSelectors-BVEg60Nu.js";import"./d3-scale-BOfgX5mI.js";import"./CartesianChart-n5KlOJWr.js";import"./chartDataContext-DOG-KHg0.js";import"./CategoricalChart-r18o97_M.js";import"./tooltipContext-CLNFwDtj.js";import"./AnimatedItems-GETRY_YP.js";import"./useAnimationId-BkMnFoWD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-OLM2G5r9.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C_uRJL3Z.js";import"./RegisterGraphicalItemId-QTMlMqrn.js";import"./ErrorBarContext-DlMVuBVO.js";import"./GraphicalItemClipPath-C94rECFA.js";import"./SetGraphicalItem-DpdjJmMm.js";import"./getZIndexFromUnknown-COdG0M0W.js";import"./graphicalItemSelectors-B7y1crlL.js";import"./Curve-7UCJoGzD.js";import"./step-D8rYwkpZ.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DP4Q2WUd.js";import"./Dot-4iBWGC61.js";import"./getRadiusAndStrokeWidthFromDot-DfNtTuJE.js";import"./useElementOffset-dSnxC0p_.js";import"./uniqBy-Bxb6tPL4.js";import"./iteratee-B0XxpJgf.js";import"./Cross-CuzgB31v.js";import"./Sector-DEgeb_w6.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
