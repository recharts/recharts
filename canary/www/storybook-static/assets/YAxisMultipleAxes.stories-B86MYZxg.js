import{R as t}from"./iframe-CO2wOmL3.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DEg_MfYL.js";import{R as l}from"./zIndexSlice-CjYLmU03.js";import{C as x}from"./ComposedChart-BmaCVHl6.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DYYXxPHv.js";import{L as a}from"./Line-C3rvXVP2.js";import{X as c}from"./XAxis-D8l1zj0t.js";import{T as g}from"./Tooltip-CDtXcQXw.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DQLK-wuU.js";import"./Text-D02hyY3C.js";import"./resolveDefaultProps-jUsiawGP.js";import"./DOMUtils-C9bi6LZn.js";import"./isWellBehavedNumber-BQRlzWpP.js";import"./useBackwardsCompatibleTheme-DeUToV_i.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-hD4R9Zay.js";import"./index-C2bFqevd.js";import"./index-vFvBy9sc.js";import"./RechartsWrapper-QtML1m_J.js";import"./index-di8y7Hm0.js";import"./index-_W7z4BVf.js";import"./throttle-BF_C9j3I.js";import"./axisSelectors-CX7Lxi19.js";import"./d3-scale-C9Gp2SJN.js";import"./renderedTicksSlice-BFOY10tL.js";import"./CartesianAxis-B8e0zgyu.js";import"./Layer-wYmixdFE.js";import"./types-m7U1KOoZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CWwcrxvU.js";import"./chartDataContext-XcRgiNTG.js";import"./CategoricalChart-shIifM_V.js";import"./AnimatedItems-D8MD0Tf6.js";import"./useAnimationId-C-2OrkuN.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-a3w511z3.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CGE1F6kM.js";import"./tooltipContext-CvUp6qIL.js";import"./RegisterGraphicalItemId-CYj5gZOD.js";import"./ErrorBarContext-CkVZ1uFV.js";import"./GraphicalItemClipPath-Bz34Vg6G.js";import"./SetGraphicalItem-BUOFB7Tk.js";import"./getZIndexFromUnknown-CrwaNoqv.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DjoIhJtf.js";import"./Curve-C6VcPqEA.js";import"./step-Cwr2l1xw.js";import"./path-DyVhHtw_.js";import"./ActivePoints-MUpudru6.js";import"./Dot-CFoQsseu.js";import"./getRadiusAndStrokeWidthFromDot-XN5RTrZo.js";import"./useElementOffset-U-2NXguD.js";import"./uniqBy-DnW7J1Px.js";import"./iteratee-BI2qvuKr.js";import"./Cross-Cq2Shus-.js";import"./Sector-BuW1e-GL.js";const Kt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Mt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Mt as __namedExportsOrder,Kt as default};
