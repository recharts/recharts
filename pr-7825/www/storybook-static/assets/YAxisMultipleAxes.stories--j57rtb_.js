import{R as t}from"./iframe-DlBA_NHD.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-B5aZasbZ.js";import{R as l}from"./zIndexSlice-BOYVZGeR.js";import{C as x}from"./ComposedChart-C_8xlH-x.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BTZv4eW8.js";import{L as a}from"./Line-apD60rO_.js";import{X as c}from"./XAxis-CN5TgDqJ.js";import{T as g}from"./Tooltip--Y-ls0Bw.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Bdz7xSee.js";import"./Text-CICH4fLL.js";import"./resolveDefaultProps-C8Ozokz2.js";import"./DOMUtils-B-Y8jIku.js";import"./isWellBehavedNumber-BHQR8F7C.js";import"./useId-DfZYzD58.js";import"./useBackwardsCompatibleTheme-DZYIoyAk.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-R1mFVhfI.js";import"./index-2M50Q2uq.js";import"./index-CsNZB3UM.js";import"./RechartsWrapper-hVJCe5PM.js";import"./axisSelectors-CON7ryxt.js";import"./throttle-EeT9c_n_.js";import"./d3-scale-nBoiSLy0.js";import"./index-Bc4bnspn.js";import"./index-BgT2sRhI.js";import"./renderedTicksSlice-BAGWAjRI.js";import"./index-B9Sew5zo.js";import"./CartesianAxis-C833i1Hp.js";import"./Layer-DLKMiHzQ.js";import"./types-CqsOLULy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DNfpc-WW.js";import"./chartDataContext-Dz5AUJl-.js";import"./CategoricalChart-YMws6pgL.js";import"./AnimatedItems-KG4Q9B6N.js";import"./useAnimationId-ZOIa2F-P.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-oI5YaF0F.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BF0jq83h.js";import"./tooltipContext-Dmktbw-7.js";import"./RegisterGraphicalItemId-DYXz-Xt3.js";import"./ErrorBarContext-ZM-eyTPM.js";import"./GraphicalItemClipPath-CLhUFps9.js";import"./SetGraphicalItem-0kKuUivG.js";import"./getZIndexFromUnknown-BfBejeMq.js";import"./useGraphicalItemIdentity-DwrMS_39.js";import"./Curve-DRH1VSH_.js";import"./step-BzPuQicN.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B_ryvrm8.js";import"./Dot-coVzMkTm.js";import"./getRadiusAndStrokeWidthFromDot-CuoUyQpF.js";import"./useElementOffset-CqxEVlyX.js";import"./uniqBy-1Xh4LtIK.js";import"./iteratee-D-EbqcpX.js";import"./Cross-7WT4Tp6d.js";import"./Sector-JXpynQLH.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Rt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
