import{R as t}from"./iframe-DfzMHjuD.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CYvNJGV-.js";import{R as l}from"./zIndexSlice-D65nx7n2.js";import{C as x}from"./ComposedChart-BZJdnfJq.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Cf7SOWEu.js";import{L as a}from"./Line-CXIUk8YQ.js";import{X as c}from"./XAxis-CcmvQ4-M.js";import{T as g}from"./Tooltip-C55DSjup.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DHYmqyDD.js";import"./Text-KIvPk-oI.js";import"./resolveDefaultProps-BhiSE-fR.js";import"./DOMUtils-DZvMhBn7.js";import"./isWellBehavedNumber-B84GX6Iq.js";import"./useId-jHWdyPm9.js";import"./useBackwardsCompatibleTheme-BN8Sccns.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DjEP4vsT.js";import"./index-DQvdEvgc.js";import"./index-CHbvF_w5.js";import"./RechartsWrapper-Btc41qHc.js";import"./axisSelectors-Dv8-JHab.js";import"./throttle-B4jaia1x.js";import"./d3-scale-DkoGb7PH.js";import"./index-CrtWwB5P.js";import"./index-CHqtXhJ0.js";import"./renderedTicksSlice-YMBm5Aq7.js";import"./index-D-FQmlHp.js";import"./CartesianAxis-B2_CRuSv.js";import"./Layer-BgMBl2n9.js";import"./types-BoXpTlVd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CgfuN-gF.js";import"./chartDataContext-BU-za_rr.js";import"./CategoricalChart-BaFSqBAh.js";import"./AnimatedItems-D8ukjbdC.js";import"./useAnimationId-BwLSFp-D.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D_LZlwBF.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CUP96Mlj.js";import"./tooltipContext-DrzzqN4f.js";import"./RegisterGraphicalItemId-FhHKtG3E.js";import"./ErrorBarContext-CbViVQBZ.js";import"./GraphicalItemClipPath-qYVsG-0u.js";import"./SetGraphicalItem-CfEkxgRj.js";import"./getZIndexFromUnknown-B6OJjnBR.js";import"./useGraphicalItemIdentity-CnOmH2BL.js";import"./dataEntryStyles-n1cjPY1K.js";import"./Curve-BLtOpFAf.js";import"./step-9PcWzaJ_.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CQoPkIu-.js";import"./Dot-CVblHFHD.js";import"./getRadiusAndStrokeWidthFromDot-BDWnIHrh.js";import"./useElementOffset-WbfHTGT4.js";import"./uniqBy-BbVKU46e.js";import"./iteratee-Biw9ni9t.js";import"./Cross-DIR6xrIW.js";import"./Sector-D806wobg.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
