import{R as t}from"./iframe-Cw8P3hI7.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Bx4FAtcu.js";import{R as l}from"./zIndexSlice-B6SrSko1.js";import{C as x}from"./ComposedChart-D83sxKrW.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-v_v98X2S.js";import{L as a}from"./Line-B7HdxR7c.js";import{X as c}from"./XAxis-C7unxNtQ.js";import{T as g}from"./Tooltip-CPfSIqpr.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-D8Ksb0Iz.js";import"./Text-lKkTsdpR.js";import"./resolveDefaultProps-CZK0CaSv.js";import"./pageBackground-DDrjrzvM.js";import"./isWellBehavedNumber--H7puUW6.js";import"./useId-QOeP90DB.js";import"./useBackwardsCompatibleTheme-CjwvaY8l.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BaFHUXpS.js";import"./index-hRfftI4p.js";import"./index-eEhk_OBC.js";import"./axisSelectors-BdH8dG4d.js";import"./throttle-DncpYTAI.js";import"./d3-scale-Col4_9gh.js";import"./CartesianAxis-D3FnIIlC.js";import"./Layer-B6WOVeAl.js";import"./types-Cja1RPDM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-0hkvmYyZ.js";import"./index-DNE8XmUi.js";import"./index-7P4EwiS4.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DvLLBked.js";import"./index-C3ZLhd8h.js";import"./CartesianChart-D3LhbEp8.js";import"./chartDataContext-BishGWYu.js";import"./CategoricalChart-D-nlxD4a.js";import"./activeStyles-BMrFolB2.js";import"./useAnimationId-DEkX1hYZ.js";import"./dataEntryStyles-Bh3IKYdr.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CJCELj9r.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DrIy4kMk.js";import"./tooltipContext-DQ2wWc1J.js";import"./ErrorBarContext-CRE-8iE1.js";import"./GraphicalItemClipPath-DihUhOiW.js";import"./SetGraphicalItem-CCZzXSeX.js";import"./getZIndexFromUnknown-CJpURh_o.js";import"./useEffectiveDataKey-Dh15qlQo.js";import"./Curve-H-3Cg0VG.js";import"./step-Owe5mevZ.js";import"./path-DyVhHtw_.js";import"./ActivePoints-D1HAeebE.js";import"./Dot-BPPIvgtF.js";import"./getRadiusAndStrokeWidthFromDot-0OZopViH.js";import"./useElementOffset-DWhd5hY4.js";import"./uniqBy-DaOwrvky.js";import"./iteratee-Co4kz4Ct.js";import"./Cross-CtfH2Hv1.js";import"./Sector-ChKHNoHV.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
