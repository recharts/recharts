import{R as t}from"./iframe-D1iFT1mY.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CW-ZNT8W.js";import{R as l}from"./zIndexSlice-B6TgBQrN.js";import{C as x}from"./ComposedChart-oca7_NcQ.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-xg32_Y6M.js";import{L as a}from"./Line-CqxTaPcW.js";import{X as c}from"./XAxis-zY-Ami2t.js";import{T as g}from"./Tooltip-D59ySJwP.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-HsnRG105.js";import"./Layer-FA9hcod8.js";import"./resolveDefaultProps-BMIUma5c.js";import"./Text-J63_ff7W.js";import"./DOMUtils-BANERqy9.js";import"./isWellBehavedNumber-Du8M38U_.js";import"./Label-DT6YPp8b.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-8c0NuDUK.js";import"./index-DpDzEI56.js";import"./index-rDbSE8GI.js";import"./types-DXiAmoHC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bf_HC71D.js";import"./throttle-CzPbu-Ix.js";import"./RechartsWrapper-BlluAAtZ.js";import"./index-DvHXLyo3.js";import"./index-BBsSvonK.js";import"./axisSelectors-CxzN54IZ.js";import"./d3-scale-DpibCxtP.js";import"./CartesianChart-D2tBODZW.js";import"./chartDataContext-CYm6jQFo.js";import"./CategoricalChart-D5N5XyOw.js";import"./tooltipContext-C2c4wP3L.js";import"./AnimatedItems-LcNNhy-w.js";import"./useAnimationId-CoQh4DtZ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-V-255kdt.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BKYrsUZj.js";import"./RegisterGraphicalItemId-DRA4KH43.js";import"./ErrorBarContext-mOiZNw9f.js";import"./GraphicalItemClipPath-DfjPk2Kq.js";import"./SetGraphicalItem-B34_j8RK.js";import"./getZIndexFromUnknown-Rvr_Rduc.js";import"./graphicalItemSelectors-Dkxb8D4R.js";import"./Curve-DI4m1DQG.js";import"./step-Bh5OwxZ-.js";import"./path-DyVhHtw_.js";import"./ActivePoints-ukxKvv9l.js";import"./Dot-CXZOPICM.js";import"./getRadiusAndStrokeWidthFromDot-BnvNbbpg.js";import"./useElementOffset-BL3e6iYA.js";import"./uniqBy-VJyTBDYH.js";import"./iteratee-XPzf7EjH.js";import"./Cross-DzXfERyt.js";import"./Sector-CRPzSp_9.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
