import{R as t}from"./iframe-BysHx74D.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BuISev1J.js";import{R as l}from"./zIndexSlice-B9_IIDSS.js";import{C as x}from"./ComposedChart-B85hU3af.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-mf8qlkvb.js";import{L as a}from"./Line-BsJW2aoa.js";import{X as c}from"./XAxis-Bu0Olx-M.js";import{T as g}from"./Tooltip-3BnByDB6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BN43rvaR.js";import"./Text-BCrIO-O-.js";import"./resolveDefaultProps-C5vv7I0d.js";import"./DOMUtils-CXQBBarz.js";import"./isWellBehavedNumber-oHvlto0K.js";import"./useId-Bj8s3C04.js";import"./useBackwardsCompatibleTheme-Dm-8fXUv.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-lKptmcsL.js";import"./index-BJxLMgN-.js";import"./index-H0SrxT4N.js";import"./RechartsWrapper-DUyJnBgS.js";import"./axisSelectors-BPfQ7z4G.js";import"./throttle-BvXCXgu9.js";import"./d3-scale-DD00swLB.js";import"./index-CB_yz375.js";import"./index-DNsScqoB.js";import"./renderedTicksSlice-3X1ncpqb.js";import"./index-r38g0wHW.js";import"./CartesianAxis-CKvkK8kD.js";import"./Layer-BF34dHnr.js";import"./types-DGXblPho.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DmPHp5IF.js";import"./chartDataContext-9O_0ckbs.js";import"./CategoricalChart-Cn_rERmH.js";import"./AnimatedItems-DsYEWi_U.js";import"./useAnimationId-COzQNsPr.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BgPukjWy.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-OXeos-xf.js";import"./tooltipContext-DyL0Ssur.js";import"./RegisterGraphicalItemId-B5UvF8cg.js";import"./ErrorBarContext-C3rhr1lE.js";import"./GraphicalItemClipPath-D2pDNvXJ.js";import"./SetGraphicalItem-CewCaUrF.js";import"./getZIndexFromUnknown-BUi5wy88.js";import"./useGraphicalItemIdentity-rkAwppzN.js";import"./Curve-BmDlaXTG.js";import"./step-B4vU2sA2.js";import"./path-DyVhHtw_.js";import"./ActivePoints--qrMkUyO.js";import"./Dot-D1W-oosg.js";import"./getRadiusAndStrokeWidthFromDot-BA8MWWaF.js";import"./useElementOffset-BInCcsaq.js";import"./uniqBy-JC9DBpsi.js";import"./iteratee-laF-f1n6.js";import"./Cross-Cj3dyoIf.js";import"./Sector-D0PQPCWS.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
