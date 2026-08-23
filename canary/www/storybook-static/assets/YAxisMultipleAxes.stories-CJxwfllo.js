import{R as t}from"./iframe-sd_X8bAz.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-C2ggo4hE.js";import{R as l}from"./zIndexSlice-DbArepHL.js";import{C as x}from"./ComposedChart-CKHYOg18.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-K3xhMzRz.js";import{L as a}from"./Line-8sAwTSHM.js";import{X as c}from"./XAxis-DWsFwFJj.js";import{T as g}from"./Tooltip-RRKnfJED.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BPdPutID.js";import"./Text-BxgHUkK-.js";import"./resolveDefaultProps-bueunEgf.js";import"./DOMUtils-koMSW9nS.js";import"./isWellBehavedNumber-D-FFIB2G.js";import"./useId-D6dXaFl8.js";import"./useBackwardsCompatibleTheme-CIVTy4Me.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DVaVbWL-.js";import"./index-DQHeaU2g.js";import"./index-B4I4wfZA.js";import"./RechartsWrapper-DMlKTkdw.js";import"./index-zmb0gbyG.js";import"./index-DZ983I6W.js";import"./throttle-2gz7Gpxn.js";import"./axisSelectors-DssFyd1_.js";import"./d3-scale-C-KqVawR.js";import"./renderedTicksSlice-BaC5qXRY.js";import"./CartesianAxis-BBBNYOHg.js";import"./Layer-D66jRg_t.js";import"./types-BfsDnBCz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BDbsS6IT.js";import"./chartDataContext-B6Fdiy4W.js";import"./CategoricalChart-Cqi_maR-.js";import"./AnimatedItems-B5JWoVFx.js";import"./useAnimationId-iF8C_Nzd.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BTlwV0De.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CFyZWuxn.js";import"./tooltipContext-CmXZvicq.js";import"./RegisterGraphicalItemId-1K3qw_t6.js";import"./ErrorBarContext-CETtzPB_.js";import"./GraphicalItemClipPath-CoP9pSKP.js";import"./SetGraphicalItem-DN7uVNhv.js";import"./getZIndexFromUnknown-Cygexnhn.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-rD-nYf5o.js";import"./Curve-VFw1Cyl5.js";import"./step-SkwaH9zG.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Bx0X1g0d.js";import"./Dot-JozVq32O.js";import"./getRadiusAndStrokeWidthFromDot-Bvk01GUs.js";import"./useElementOffset-B-jJqGvW.js";import"./uniqBy-C6azmfxA.js";import"./iteratee-BS0tXoF4.js";import"./Cross-C91zbasP.js";import"./Sector-BIc-uq9p.js";const Mt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Rt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
