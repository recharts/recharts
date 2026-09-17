import{R as t}from"./iframe-Bz2BdfN4.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BsNZ_B30.js";import{R as l}from"./zIndexSlice-CrpvQ3cZ.js";import{C as x}from"./ComposedChart-BId0bh4a.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CPuLU6xL.js";import{L as a}from"./Line-05lQBnag.js";import{X as c}from"./XAxis-Dd1a0uMa.js";import{T as g}from"./Tooltip-BD_wy8eu.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CorAy009.js";import"./Text-BBc8PFQR.js";import"./resolveDefaultProps-CwyxmUze.js";import"./DOMUtils-DYVcve-D.js";import"./isWellBehavedNumber-CN1l9n-g.js";import"./useId-BTmP1k4h.js";import"./useBackwardsCompatibleTheme-CuJrnw16.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CfRVDFXb.js";import"./index-m3Fpm_2g.js";import"./index-C_HDr07T.js";import"./RechartsWrapper-BKy4IHB9.js";import"./axisSelectors-DHqPZzoA.js";import"./throttle-B-XPotXa.js";import"./d3-scale-BYzlom2n.js";import"./index-Coj5AO7r.js";import"./index-D7YhX5lQ.js";import"./renderedTicksSlice-BaDfPCVK.js";import"./index-CC0XKx94.js";import"./CartesianAxis-CSM2PXhl.js";import"./Layer-DzdETfRU.js";import"./types-DhKwB64F.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D9Oal9EV.js";import"./chartDataContext-BjNcuyRP.js";import"./CategoricalChart-Bq1JSSY0.js";import"./AnimatedItems-CrHQSA2B.js";import"./useAnimationId-DBdf0eRq.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cg4r9N9p.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Ds6IyY6j.js";import"./tooltipContext-Bl3LsZVk.js";import"./RegisterGraphicalItemId-T7-fSXxk.js";import"./ErrorBarContext-CeKdQ828.js";import"./GraphicalItemClipPath-DlHTJze-.js";import"./SetGraphicalItem-BSvf_Zq8.js";import"./getZIndexFromUnknown-n_ivOQfH.js";import"./useGraphicalItemIdentity-Ccoked2c.js";import"./Curve-Di-YqH3x.js";import"./step-BuRQ76GT.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CCokz9Hm.js";import"./Dot-l8R5dmYj.js";import"./getRadiusAndStrokeWidthFromDot-DcpCddvL.js";import"./useElementOffset-DQacgx_s.js";import"./uniqBy-DfpjFZky.js";import"./iteratee-Dk6qS1Wc.js";import"./Cross-DtjLt1X8.js";import"./Sector-BHAOOcL0.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
