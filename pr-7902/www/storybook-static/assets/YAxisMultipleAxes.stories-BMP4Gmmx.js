import{R as t}from"./iframe-BnuuYCdy.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-C9KSlBTW.js";import{R as l}from"./zIndexSlice-BbvX8GRP.js";import{C as x}from"./ComposedChart-BSlw0HFk.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CHZjzYVB.js";import{L as a}from"./Line-B-ErwV6g.js";import{X as c}from"./XAxis-SZJEJq9X.js";import{T as g}from"./Tooltip-wqiY6G_B.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-B4GoECSR.js";import"./Text-CGVn4Fi7.js";import"./resolveDefaultProps-BKuWdgA8.js";import"./DOMUtils-uoptzxcb.js";import"./isWellBehavedNumber-Bo6YgW7B.js";import"./useId-DfmsLig3.js";import"./useBackwardsCompatibleTheme-B5XCxlLZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-exEMosZg.js";import"./index-BBLVSC9o.js";import"./index-DGdfhc42.js";import"./RechartsWrapper-yuVx-GfW.js";import"./axisSelectors-LqE-nBKd.js";import"./throttle-hzsPLVCI.js";import"./d3-scale-Xitmtu6a.js";import"./index-B7n-SwGH.js";import"./index-Bpn4eiX5.js";import"./renderedTicksSlice-BB-WXCKZ.js";import"./index-Co63ZXDS.js";import"./CartesianAxis-D94E5CAk.js";import"./Layer-CdUwTkt1.js";import"./types-CkU7DeC5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Csg_49y8.js";import"./chartDataContext-Cfs5ZB_U.js";import"./CategoricalChart-D69sax0F.js";import"./AnimatedItems-DduhreQ3.js";import"./useAnimationId-DPByLvsu.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BvS7JAyC.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-7-0YNMZJ.js";import"./tooltipContext-BPbc6Zci.js";import"./RegisterGraphicalItemId-DPzJCfll.js";import"./ErrorBarContext-Bs4CO-eU.js";import"./GraphicalItemClipPath-Dkj0uJsh.js";import"./SetGraphicalItem-DVMg4m0V.js";import"./getZIndexFromUnknown-CXpxDvsd.js";import"./useGraphicalItemIdentity-C2Y0PCNK.js";import"./dataEntryStyles-BmilyqJ9.js";import"./Curve-DLpdI-qq.js";import"./step-CQAloss-.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DSOuOqL1.js";import"./Dot-DZr8LyTD.js";import"./getRadiusAndStrokeWidthFromDot-3avq4t8Q.js";import"./useElementOffset-BPllDPPS.js";import"./uniqBy-M64kr61G.js";import"./iteratee-UDge6fuf.js";import"./Cross-zZRBXVwz.js";import"./Sector-CHdVGYza.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
