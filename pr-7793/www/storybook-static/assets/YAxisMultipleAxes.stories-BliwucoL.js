import{R as t}from"./iframe-DqI8fZWc.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BOv489WA.js";import{R as l}from"./zIndexSlice-9oYbhSdQ.js";import{C as x}from"./ComposedChart-C5b2LV09.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Vs-PJM9K.js";import{L as a}from"./Line-B1PViTKj.js";import{X as c}from"./XAxis-DN7qZjW9.js";import{T as g}from"./Tooltip-DIfzN9Q7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-B6t_CsQ4.js";import"./Text-9XM6GnGO.js";import"./resolveDefaultProps-DCvOVDv2.js";import"./DOMUtils-C2uAcB2d.js";import"./isWellBehavedNumber-nhVdkpqH.js";import"./useId-BEya5Sow.js";import"./useBackwardsCompatibleTheme-Cdm9q7mi.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CmCgphBH.js";import"./index-MGrO6GOL.js";import"./index-CocOIjDa.js";import"./RechartsWrapper-DQO3SMEw.js";import"./axisSelectors-Degnf0cl.js";import"./throttle-BTCEGSKU.js";import"./d3-scale-dm0sSvQ9.js";import"./index-DPzk3hMl.js";import"./index-iQ4O5AGP.js";import"./renderedTicksSlice-DO7ESVP5.js";import"./index-DPm6oXEP.js";import"./CartesianAxis-BLk0unaa.js";import"./Layer-Ckim_S0G.js";import"./types-D6uFqDQP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CVIppYKX.js";import"./chartDataContext-bZQzIS86.js";import"./CategoricalChart-Dc9zhX9p.js";import"./AnimatedItems-rYif9Enh.js";import"./useAnimationId-sXalVax-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-scNawCgP.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Ba4zh4k1.js";import"./tooltipContext-U_eZN8dc.js";import"./RegisterGraphicalItemId-BfKE_Ywq.js";import"./ErrorBarContext-CkD9Qczk.js";import"./GraphicalItemClipPath-BYdmvJgQ.js";import"./SetGraphicalItem-BIIukDTU.js";import"./getZIndexFromUnknown-Cp53NV_h.js";import"./useGraphicalItemIdentity-iLjVYJ7t.js";import"./Curve-BfuijxKL.js";import"./step-CpsUov4P.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BpZWKXXH.js";import"./Dot-D3i3k8Cq.js";import"./getRadiusAndStrokeWidthFromDot-Bz_0HqQj.js";import"./useElementOffset-BmnmgRHV.js";import"./uniqBy-D9j1xmZr.js";import"./iteratee-Dfs9TkuY.js";import"./Cross-D9YNJK_K.js";import"./Sector-CYr5d1sJ.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
