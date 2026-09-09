import{R as t}from"./iframe-VXxHrawH.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DtlJkghU.js";import{R as l}from"./zIndexSlice-DgTA0TxE.js";import{C as x}from"./ComposedChart-DtvVrtdx.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-TERryxcl.js";import{L as a}from"./Line-DomHnjvQ.js";import{X as c}from"./XAxis-D4xzCV5d.js";import{T as g}from"./Tooltip-DB9KHRHu.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-KqVvCdTF.js";import"./Text-DwkoCOGf.js";import"./resolveDefaultProps-D5Zdg-cB.js";import"./DOMUtils-xAHEQowW.js";import"./isWellBehavedNumber-CkFzhS37.js";import"./useId-poNdh1JU.js";import"./useBackwardsCompatibleTheme-CAqean3d.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ChcfhIs7.js";import"./index-Cou_EQ7F.js";import"./index-Ci4a_PyE.js";import"./RechartsWrapper-CQIlqS7p.js";import"./axisSelectors-BQNA_-kz.js";import"./throttle-BWlQSnjt.js";import"./d3-scale-CUjoKVS8.js";import"./index-BrnOmBWl.js";import"./index-CdTW_BBW.js";import"./renderedTicksSlice-S6Tl6gbL.js";import"./index-CcyipSPh.js";import"./CartesianAxis-Dhdcn9ZL.js";import"./Layer-B3kAMod2.js";import"./types-DHxYQYQn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BwhDl5kl.js";import"./chartDataContext-CR1OC3WJ.js";import"./CategoricalChart-CT9rs-6L.js";import"./AnimatedItems-DqmSFpoj.js";import"./useAnimationId-UYFwfxUz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DH4DXc0Y.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C7gHs5iI.js";import"./tooltipContext-DhxFmNWz.js";import"./RegisterGraphicalItemId-DSKBKWtn.js";import"./ErrorBarContext-DOLZMgYM.js";import"./GraphicalItemClipPath-DKgFqHTa.js";import"./SetGraphicalItem-DwIcSm4l.js";import"./getZIndexFromUnknown-DM4_h6GQ.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-B5hnsjtf.js";import"./Curve-WFRVj-wP.js";import"./step-DGUF12xu.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CibEdzP4.js";import"./Dot-lnLlnOqd.js";import"./getRadiusAndStrokeWidthFromDot-Csruxjgw.js";import"./useElementOffset-DVcYrHEz.js";import"./uniqBy-C4BhnRCt.js";import"./iteratee-C-nIvaib.js";import"./Cross-Bd5rULmC.js";import"./Sector-CGI8Z1To.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
