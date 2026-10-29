import{R as t}from"./iframe-BmCEaXnl.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-wM7iKB0B.js";import{R as l}from"./zIndexSlice-CCSErHLO.js";import{C as x}from"./ComposedChart-X5OSzv7C.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-XQvoAjlB.js";import{L as a}from"./Line-BEG7jfGv.js";import{X as c}from"./XAxis-u0XIPlGG.js";import{T as g}from"./Tooltip-Clx9dABt.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BMv4awTg.js";import"./Text-CVqIJR2f.js";import"./resolveDefaultProps-CFAPbmi-.js";import"./DOMUtils-C4PB-VGE.js";import"./ZIndexLayer-CQzpYkd8.js";import"./index-BqP1aJDu.js";import"./index-F6n6DaVK.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-pAXQteq7.js";import"./throttle-qcDxTsLf.js";import"./axisSelectors-jGKN6-F9.js";import"./d3-scale-DOe-rCGU.js";import"./CartesianAxis-MWIUmivx.js";import"./Layer-BpXqwf7v.js";import"./types-_yr4vfnQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-2egCQc0E.js";import"./index-BTkbJW8j.js";import"./index-B6BvyTbH.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-e4k-RA_5.js";import"./index-C_f_Jppx.js";import"./CartesianChart-r4VMNRon.js";import"./ZIndexPortal-QH_cbCJt.js";import"./CategoricalChart-DB6XzEGw.js";import"./LabelList-BgUgtMai.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CcFLRt9n.js";import"./useAnimationId-DcrGLg07.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DMtsKFiW.js";import"./tooltipContext-DSyzjZp1.js";import"./dataEntryStyles-D18H_t3x.js";import"./fillDefinitions-Cf5kf7-L.js";import"./ErrorBarContext-D_xcSKmk.js";import"./activeStyles-D5gryLfg.js";import"./SetGraphicalItem-CsEqG3iP.js";import"./getZIndexFromUnknown-CQIvZbrs.js";import"./useEffectiveDataKey-CdWL-HwP.js";import"./omit-BMQg-LFW.js";import"./isArguments-yB-y1yaH.js";import"./Curve-03O0PZm6.js";import"./step-Ci6oOROy.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CcCwLUJA.js";import"./Dot-BKYa8qvg.js";import"./Symbols-CZzsW6XG.js";import"./symbol-CysJXLfa.js";import"./getRadiusAndStrokeWidthFromDot-CTKwmZ8b.js";import"./useElementOffset-DK0hqOaX.js";import"./uniqBy-QNfb45Jk.js";import"./iteratee-DozicGBj.js";import"./Cross-CPCMMMp1.js";import"./Sector-C1JqqJYO.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Wt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Wt as __namedExportsOrder,Tt as default};
