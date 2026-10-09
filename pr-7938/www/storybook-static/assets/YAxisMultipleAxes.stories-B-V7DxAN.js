import{R as t}from"./iframe-B-SNMp2P.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Cm6hvxXf.js";import{R as l}from"./zIndexSlice-MJVhEUVa.js";import{C as x}from"./ComposedChart-CkeRhKHK.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Bq5ybiIa.js";import{L as a}from"./Line-COMV_M1P.js";import{X as c}from"./XAxis-DbFPHXfw.js";import{T as g}from"./Tooltip-DcDDxMTq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-yF0NhCgr.js";import"./Text-3FjWr6Un.js";import"./resolveDefaultProps-D6GIFGnh.js";import"./DOMUtils-CVvGSXS1.js";import"./isWellBehavedNumber-0l1sLwCq.js";import"./useId-DCI_CeQs.js";import"./useBackwardsCompatibleTheme-CE1PvRpo.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DTIKWgf_.js";import"./index-BIs-1f0J.js";import"./index-BZQvw8Sg.js";import"./RechartsWrapper-gPNydgch.js";import"./axisSelectors-_pmBWC24.js";import"./throttle-7fi-ZXpb.js";import"./d3-scale-CF8UPnnv.js";import"./index-Dj60m7pl.js";import"./index-DGXVsrKV.js";import"./renderedTicksSlice-2xqGDKha.js";import"./index-CvUwvd6n.js";import"./CartesianAxis-D1aWQaVv.js";import"./Layer-CVSv3BXM.js";import"./types-BNVaobqj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-K-vFTXTH.js";import"./chartDataContext-BccgPSEz.js";import"./CategoricalChart-BNp-LaIc.js";import"./AnimatedItems-D-Mi-zOF.js";import"./useAnimationId-CiVfXoZZ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DleIA4hH.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BCJOz4d0.js";import"./tooltipContext-CoqzaWf-.js";import"./dataEntryStyles-Bq_a6L7W.js";import"./ErrorBarContext-D0XxzFi4.js";import"./GraphicalItemClipPath-C3pTbqJ4.js";import"./SetGraphicalItem-B2JrzKrx.js";import"./getZIndexFromUnknown-D7c8GwTy.js";import"./useGraphicalItemIdentity-DsWLL8GU.js";import"./Curve-CJXjFqV6.js";import"./step-HC0u4nw9.js";import"./path-DyVhHtw_.js";import"./ActivePoints-0GRfHXwb.js";import"./Dot-CFiUGY51.js";import"./getRadiusAndStrokeWidthFromDot-BOwP_unw.js";import"./useElementOffset-BiHyJ0md.js";import"./uniqBy-B66cnVOa.js";import"./iteratee-BXTpeJD1.js";import"./Cross-DKtnmeHW.js";import"./Sector-BC91dQbQ.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
