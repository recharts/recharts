import{R as t}from"./iframe-jjE6mnhE.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-lyfbCDEa.js";import{R as l}from"./zIndexSlice-BF8b2iUS.js";import{C as x}from"./ComposedChart-CT0KVNUw.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CEhwSuW_.js";import{L as a}from"./Line-B1oFq1NW.js";import{X as c}from"./XAxis-BmSvbO1p.js";import{T as g}from"./Tooltip-BwV4328f.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CLl4R84L.js";import"./Text-yk6NtqvR.js";import"./resolveDefaultProps-DrW6c44U.js";import"./DOMUtils-ClCL_aT_.js";import"./isWellBehavedNumber-D962mg0S.js";import"./useId-qpgQMwe5.js";import"./useBackwardsCompatibleTheme-UPDRFRx4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-OM7L_4ys.js";import"./index-4Q1Js_Gc.js";import"./index-CHxyqgyq.js";import"./RechartsWrapper-G0-O6wcd.js";import"./axisSelectors-Da2-5Qyb.js";import"./throttle-DkPV1tJ5.js";import"./d3-scale-BsTwUgiH.js";import"./index-wKhQr2dB.js";import"./index-CQ_ODmEo.js";import"./renderedTicksSlice-B5bTJB_6.js";import"./index-SutJufb7.js";import"./CartesianAxis-Ce-_Po8B.js";import"./Layer-DvjfGsuf.js";import"./types-D-bzS3aM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Bv2YRKvd.js";import"./chartDataContext-BtBmRnZH.js";import"./CategoricalChart-CHDbAtKm.js";import"./AnimatedItems-CKtAdJL6.js";import"./useAnimationId-B8D6e613.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BtzXAEUx.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Bi6thO6h.js";import"./tooltipContext-Bk4sh4kD.js";import"./RegisterGraphicalItemId-DLqbcJJV.js";import"./ErrorBarContext-CT6ZQdcj.js";import"./GraphicalItemClipPath-Cb68eAOX.js";import"./SetGraphicalItem-BUG0SFHa.js";import"./getZIndexFromUnknown-B1lKYXZR.js";import"./useGraphicalItemIdentity-D5HmZ81h.js";import"./Curve-CIYNdT84.js";import"./step-Bkxoj6hz.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DAEG3IaC.js";import"./Dot-D5qpHCDc.js";import"./getRadiusAndStrokeWidthFromDot-B-GOq11T.js";import"./useElementOffset-BncKUbAl.js";import"./uniqBy-BRtWYXzE.js";import"./iteratee-BRoualQB.js";import"./Cross-DHYc7gvr.js";import"./Sector-CG0jHGWJ.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
