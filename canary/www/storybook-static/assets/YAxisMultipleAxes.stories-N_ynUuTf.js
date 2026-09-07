import{R as t}from"./iframe-C0h7cDRB.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-C8YuU25K.js";import{R as l}from"./zIndexSlice-qYbn1M2d.js";import{C as x}from"./ComposedChart-Bxc6CdJK.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-B1X53sB-.js";import{L as a}from"./Line-BPh87F_P.js";import{X as c}from"./XAxis-BA_RiYmX.js";import{T as g}from"./Tooltip-VBW21GWi.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-ChRnigpx.js";import"./Text-0LVKVKzy.js";import"./resolveDefaultProps-BkghodIs.js";import"./DOMUtils-CJDZt9Se.js";import"./isWellBehavedNumber-l0bWs0-b.js";import"./useId-mBPRAmCQ.js";import"./useBackwardsCompatibleTheme-BiYiaeUI.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CQRtxHWp.js";import"./index-D1hon26J.js";import"./index-DVJUv_Eo.js";import"./RechartsWrapper-Cw2PyL1_.js";import"./axisSelectors-ao6VSC3T.js";import"./throttle-BTNdvVGL.js";import"./d3-scale-D7rNqaSZ.js";import"./index-aOlaHU4z.js";import"./index-BxvBa7qS.js";import"./renderedTicksSlice-DM87J7gU.js";import"./index-BTP4J2bR.js";import"./CartesianAxis-CojQTbDy.js";import"./Layer-CDasTplA.js";import"./types-BFdAlI3B.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Bz05LL8N.js";import"./chartDataContext-aa0JHiM9.js";import"./CategoricalChart-DJQlgPsa.js";import"./AnimatedItems-_8lABYqi.js";import"./useAnimationId-CdJJ5aJU.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bdav8_u9.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DcbAXTAV.js";import"./tooltipContext-bkrU2p57.js";import"./RegisterGraphicalItemId-DAhv8npK.js";import"./ErrorBarContext-BL4xVqAn.js";import"./GraphicalItemClipPath-DAnL6xzi.js";import"./SetGraphicalItem-BPbhG1jF.js";import"./getZIndexFromUnknown-_ABQYJE8.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Dujy9U26.js";import"./Curve-S0jwBuSa.js";import"./step-imJiFMDF.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BbEboQPa.js";import"./Dot-bF0pyqQk.js";import"./getRadiusAndStrokeWidthFromDot-BL01NReM.js";import"./useElementOffset-CeFmnDth.js";import"./uniqBy-CNP_WPaF.js";import"./iteratee-Csb2m47f.js";import"./Cross-DgIVShaz.js";import"./Sector-DbZszRwY.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
