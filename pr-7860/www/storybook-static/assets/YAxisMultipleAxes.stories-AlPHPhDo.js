import{R as t}from"./iframe-C_u1NPXq.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DvXa0gRB.js";import{R as l}from"./zIndexSlice-D4vNODax.js";import{C as x}from"./ComposedChart-C2EFUFrY.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CWY-7dfL.js";import{L as a}from"./Line-Do5qQsI6.js";import{X as c}from"./XAxis-5AKDuUiC.js";import{T as g}from"./Tooltip-qNiYugKv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-4YL6LIZD.js";import"./Text-V-XbkyPz.js";import"./resolveDefaultProps-Du-QS2vu.js";import"./DOMUtils-COAF9wVa.js";import"./isWellBehavedNumber-BXJecvkc.js";import"./useId-DJNZORW6.js";import"./useBackwardsCompatibleTheme-nG_PFK3f.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D3gVBGpt.js";import"./index-C5_PYkqz.js";import"./index-BAmjystd.js";import"./RechartsWrapper-BFhYeyxK.js";import"./axisSelectors-ClVjVkSn.js";import"./throttle-B6uw1bdh.js";import"./d3-scale-CA32_7ZH.js";import"./index-DFS_VDHO.js";import"./index-BGZsApoZ.js";import"./renderedTicksSlice-7TbUk5kV.js";import"./index-ChjG3lJf.js";import"./CartesianAxis-CfxEFnrg.js";import"./Layer-B3fcXYMK.js";import"./types-CMh3udVy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CHKIuE1P.js";import"./chartDataContext-CkGBCjv4.js";import"./CategoricalChart-B7Ubj1Y5.js";import"./AnimatedItems-BBge8Oki.js";import"./useAnimationId-GgyVLnbG.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DgloZmA0.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BCBUr_LW.js";import"./tooltipContext-BDqwHA3G.js";import"./RegisterGraphicalItemId-eQxwtpTA.js";import"./ErrorBarContext-BDzlZSzL.js";import"./GraphicalItemClipPath-j2cLfrt9.js";import"./SetGraphicalItem-DbKh9IZb.js";import"./getZIndexFromUnknown-BArEYc4K.js";import"./useGraphicalItemIdentity-DhPf_S2E.js";import"./Curve-CaQ3Xb8z.js";import"./step-Dh3cXytf.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CI6FJtyy.js";import"./Dot-CycumfnH.js";import"./getRadiusAndStrokeWidthFromDot-tymVsWd9.js";import"./useElementOffset-Cn_Ipt4K.js";import"./uniqBy-C0r4dBBH.js";import"./iteratee-DI25ZzqD.js";import"./Cross-DAPDO_TP.js";import"./Sector-DhupiDx1.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
