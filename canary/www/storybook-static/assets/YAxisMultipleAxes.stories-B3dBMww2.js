import{R as t}from"./iframe-DZAd3BLm.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CI4kUv4b.js";import{R as l}from"./zIndexSlice-DDhKiy1V.js";import{C as x}from"./ComposedChart-CXjXh9x0.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DgCqI40_.js";import{L as a}from"./Line-CAxB2TgS.js";import{X as c}from"./XAxis-5nXxnrK2.js";import{T as g}from"./Tooltip-D3BArYy6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-Cc4EZfV0.js";import"./Layer-BfiQlN-H.js";import"./resolveDefaultProps-D9KqOm2-.js";import"./Text-Q1Wur-Yf.js";import"./DOMUtils-DWsppMFw.js";import"./isWellBehavedNumber-dz6lCIva.js";import"./Label-Dx7t0PWj.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CmOHtK31.js";import"./index-DpSoO6Ha.js";import"./index-Cx0mUDGV.js";import"./types-CcoYjlf-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CX0U1NQS.js";import"./throttle-CxrkEaDJ.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-C3K_a1sL.js";import"./index-CrgUN8tp.js";import"./index-DE0KsAyL.js";import"./axisSelectors-BxAq0Acb.js";import"./d3-scale-CqJYvWj_.js";import"./CartesianChart-D6ylJNpo.js";import"./chartDataContext-qN5e6uaD.js";import"./CategoricalChart-CsBU8lh_.js";import"./tooltipContext-CHJOFWzV.js";import"./AnimatedItems-C7LWLCES.js";import"./useAnimationId-CWfIJf2v.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-HzHPhy_K.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Tj5AoBDs.js";import"./RegisterGraphicalItemId-DxWgL3YR.js";import"./ErrorBarContext-BoJHJa4K.js";import"./GraphicalItemClipPath-CynJPOAi.js";import"./SetGraphicalItem-Bs1R-JeP.js";import"./getZIndexFromUnknown-wXXwAT4q.js";import"./graphicalItemSelectors-ku3eRdW-.js";import"./Curve-BGXYHzuU.js";import"./step-CHKBUDm2.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DJ9bpUbD.js";import"./Dot-DlyPxXLd.js";import"./getRadiusAndStrokeWidthFromDot-DGJvqL22.js";import"./useElementOffset-CU9nLeay.js";import"./uniqBy-DA442kbh.js";import"./iteratee-DghfLlN_.js";import"./Cross-DJaJNlOI.js";import"./Sector-DYSWp28k.js";const Yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const vt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,vt as __namedExportsOrder,Yt as default};
