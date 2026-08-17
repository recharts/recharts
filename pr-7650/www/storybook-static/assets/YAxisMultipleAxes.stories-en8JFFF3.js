import{R as t}from"./iframe-D_SBmach.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DDmw5Iip.js";import{R as l}from"./zIndexSlice-C-84-lKY.js";import{C as x}from"./ComposedChart-D6p63Jnk.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CuhljhLO.js";import{L as a}from"./Line-C9ajzZ_E.js";import{X as c}from"./XAxis-DH-ZgwOK.js";import{T as g}from"./Tooltip-B3XzVpFR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CdDqsnQd.js";import"./Text-Bw10gxla.js";import"./resolveDefaultProps-Bvyrx_D_.js";import"./DOMUtils-DrunKDJC.js";import"./isWellBehavedNumber-CqdfCsRm.js";import"./useBackwardsCompatibleTheme-CD7phNhZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B6Mf8DJp.js";import"./index-cqta4xpR.js";import"./index-B3RrYXmh.js";import"./RechartsWrapper-CFoCu-Y8.js";import"./index-rdN2tPCT.js";import"./index-Dl7bNBwv.js";import"./throttle-Dlx_LjAj.js";import"./axisSelectors-T3miAVW7.js";import"./d3-scale-BqLpL1Tc.js";import"./renderedTicksSlice-D04XWQ7B.js";import"./CartesianAxis-BQ5_-jT8.js";import"./Layer-Be605v_j.js";import"./types-CKo4Bnww.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-TtiOfZnr.js";import"./chartDataContext-DBogxY-2.js";import"./CategoricalChart-lLmfaMcS.js";import"./AnimatedItems-DZGph_C9.js";import"./useAnimationId-BA2h0Ua8.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DL8Pps38.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CZ0w88RB.js";import"./tooltipContext-j8SRSGe2.js";import"./RegisterGraphicalItemId-Cdozmspz.js";import"./ErrorBarContext-B-lCMwxo.js";import"./GraphicalItemClipPath-D8_vcKpW.js";import"./SetGraphicalItem-BiSwI4Xl.js";import"./getZIndexFromUnknown-Dk9H2hpn.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DMdb4hau.js";import"./Curve-Mu286cSN.js";import"./step-DTNf_sWS.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CURbINes.js";import"./Dot-CVIHEjDA.js";import"./getRadiusAndStrokeWidthFromDot-Cq9L4k3r.js";import"./useElementOffset-DsoUZQYy.js";import"./uniqBy-DSeKXx74.js";import"./iteratee-C0hKcmwL.js";import"./Cross-BsquGNoJ.js";import"./Sector-DVBc4NAA.js";const Kt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
