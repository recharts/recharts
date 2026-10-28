import{R as t}from"./iframe-D0WJBe8B.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Hb99A8N1.js";import{R as l}from"./zIndexSlice-BC6IeYNi.js";import{C as x}from"./ComposedChart-BlH1ARqS.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-B9eOoC47.js";import{L as a}from"./Line-DbeSK1IG.js";import{X as c}from"./XAxis-BEoxl3pM.js";import{T as g}from"./Tooltip-BrlnzokM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-B4KodQcW.js";import"./Text-CgQ4MHqj.js";import"./resolveDefaultProps-Ct4EK5_T.js";import"./pageBackground-Dio0HZ8z.js";import"./ZIndexLayer-DSGy4-C8.js";import"./index-Dp8m-Do0.js";import"./index-BtpfRbVN.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-2QOn0rl8.js";import"./throttle-TSOlYDju.js";import"./axisSelectors-D5taf4lI.js";import"./d3-scale-50ivSU0v.js";import"./CartesianAxis-C6mWkihq.js";import"./Layer-aO3gvgqI.js";import"./types-CgDj6Pcv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DMh9haUn.js";import"./index-DWGmacRx.js";import"./index-B5HS6UVy.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Y1sNfJdv.js";import"./index-CMOK-p3U.js";import"./CartesianChart-Be7keNxh.js";import"./ZIndexPortal-BSZE-89G.js";import"./CategoricalChart-HCg9oVJT.js";import"./LabelList-fY2HN2fJ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-7LooK13L.js";import"./useAnimationId-C0s3vBtu.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Bceipj14.js";import"./tooltipContext-B-_BmjfO.js";import"./dataEntryStyles-BPWJkcwq.js";import"./ErrorBarContext-CAdmSJ6x.js";import"./activeStyles-DLjK0T5T.js";import"./SetGraphicalItem-B8qCLUCf.js";import"./getZIndexFromUnknown-C9hLLlRx.js";import"./useEffectiveDataKey-D37O0kkX.js";import"./omit-DuIyEhDA.js";import"./isArguments-yB-y1yaH.js";import"./Curve-D1Sg03qQ.js";import"./step-C85hYdLD.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B12s-f_1.js";import"./Dot-B5ivztlh.js";import"./Symbols-CFkQIAvh.js";import"./symbol-Dfoy6GJs.js";import"./getRadiusAndStrokeWidthFromDot-D5udBmOW.js";import"./useElementOffset-evYz5hyu.js";import"./uniqBy-CnYb87CD.js";import"./iteratee-ph4JQmwi.js";import"./Cross-boJjnotO.js";import"./Sector-BxtngjTW.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Tt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Tt as __namedExportsOrder,Lt as default};
