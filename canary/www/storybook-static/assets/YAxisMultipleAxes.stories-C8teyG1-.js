import{R as t}from"./iframe-TzfrCimv.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-B2Z4R-y-.js";import{R as l}from"./zIndexSlice-Dp5v9G1Y.js";import{C as x}from"./ComposedChart-0zP4qBoW.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CXvna7-5.js";import{L as a}from"./Line-zx4GEwVd.js";import{X as c}from"./XAxis-5FjHsuX0.js";import{T as g}from"./Tooltip-CdpIOour.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-ORziBLCU.js";import"./Text-Cq_y2tEB.js";import"./resolveDefaultProps-CsgnMNsn.js";import"./DOMUtils-BXdig0h8.js";import"./isWellBehavedNumber-z9eNMbuG.js";import"./useBackwardsCompatibleTheme-6HIvPrWs.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-LDMTKG6P.js";import"./index-31yWppKy.js";import"./index-I3E5SGvw.js";import"./RechartsWrapper-d5Ajpv94.js";import"./index-ououzFTQ.js";import"./index-DNVn7Vry.js";import"./throttle-BM90P8P9.js";import"./axisSelectors-Cg7dZLHA.js";import"./d3-scale-DDwg_EuX.js";import"./renderedTicksSlice-DA0LErEZ.js";import"./CartesianAxis-BGRgt604.js";import"./Layer-D26e-s_C.js";import"./types-GCQJUCAo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CBcHGY17.js";import"./chartDataContext-C9PL5caj.js";import"./CategoricalChart-NmYFScnM.js";import"./AnimatedItems-q6ooW_4r.js";import"./useAnimationId-4hu6-jhP.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DYFDa40n.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dw86rWrG.js";import"./tooltipContext-NUCe4P_t.js";import"./RegisterGraphicalItemId-ByzXvOvt.js";import"./ErrorBarContext-C3TPTEby.js";import"./GraphicalItemClipPath-DpRNkFFw.js";import"./SetGraphicalItem-B-6zq9YL.js";import"./getZIndexFromUnknown-B0R1yX0s.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DnxSRBj2.js";import"./Curve-DI4o0w5Q.js";import"./step-D4kT1-OM.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Dbb31mNE.js";import"./Dot-Dvt3Xsey.js";import"./getRadiusAndStrokeWidthFromDot-Cf3g7qVi.js";import"./useElementOffset-DFpTBv-U.js";import"./uniqBy-C9EHRlA6.js";import"./iteratee-CCNscPsm.js";import"./Cross-ehNKCi8Z.js";import"./Sector-CIdOQ1ps.js";const Kt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
