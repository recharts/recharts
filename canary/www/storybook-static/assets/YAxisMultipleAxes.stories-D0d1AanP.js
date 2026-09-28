import{R as t}from"./iframe-C0xznG0O.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-B6DY9sl9.js";import{R as l}from"./zIndexSlice-DJPgYMzR.js";import{C as x}from"./ComposedChart-Bphih_7C.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CjOMNEca.js";import{L as a}from"./Line-Dnaet704.js";import{X as c}from"./XAxis-3Gc-ze43.js";import{T as g}from"./Tooltip-DiFOpZfZ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CdEwuWhi.js";import"./Text-DqaiwO2M.js";import"./resolveDefaultProps-BUVviTw0.js";import"./DOMUtils-CfITjNXH.js";import"./isWellBehavedNumber-LB6DsCms.js";import"./useId-CG9ImVhA.js";import"./useBackwardsCompatibleTheme-Dw2k0O31.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dqy54YGG.js";import"./index-3uxIGkdF.js";import"./index-D3C5hy7v.js";import"./RechartsWrapper-CVCjkFWi.js";import"./axisSelectors-KY5G3glE.js";import"./throttle-ca9JXI34.js";import"./d3-scale-D_nuk9af.js";import"./index-_lyS6R2I.js";import"./index-DGO5Pcl1.js";import"./renderedTicksSlice-Bn386d_U.js";import"./index-BsyGVjbB.js";import"./CartesianAxis-CXWr6EGM.js";import"./Layer-DEw218Et.js";import"./types-CAt-4Uam.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BilL1rox.js";import"./chartDataContext-r0-EMCxL.js";import"./CategoricalChart-AELfSP8z.js";import"./AnimatedItems-ykdNzwWW.js";import"./useAnimationId-DxkHkn8_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BUlwcvxX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-s_Kx4tDI.js";import"./tooltipContext-BDMF1Ufc.js";import"./RegisterGraphicalItemId-CHswFd-U.js";import"./ErrorBarContext-BMmbs1Vg.js";import"./GraphicalItemClipPath-BwjkPZ9S.js";import"./SetGraphicalItem-BcdUc_t-.js";import"./getZIndexFromUnknown-DmpJeP7G.js";import"./useGraphicalItemIdentity-BPVVk20a.js";import"./Curve-BhnG6nXS.js";import"./step-GNpLhVcs.js";import"./path-DyVhHtw_.js";import"./ActivePoints-sJpS3tVi.js";import"./Dot-BWAKHyTE.js";import"./getRadiusAndStrokeWidthFromDot-MXaDMjOJ.js";import"./useElementOffset-CJZMOgR9.js";import"./uniqBy-Ck71NLZs.js";import"./iteratee-B2v99DCQ.js";import"./Cross-BP0FfHwZ.js";import"./Sector-DmMCKaPf.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
