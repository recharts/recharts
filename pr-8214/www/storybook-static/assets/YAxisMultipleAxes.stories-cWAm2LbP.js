import{R as t}from"./iframe-DhvgJ3Tw.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-BAhPmXz7.js";import{R as l}from"./zIndexSlice-DT7jNbQo.js";import{C as x}from"./ComposedChart-Dp8vMI0e.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-VV6I011L.js";import{L as a}from"./Line-ly6ORB0G.js";import{X as c}from"./XAxis-DydSoLLm.js";import{T as g}from"./Tooltip-SbVZ5Q-y.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-lswEF7zo.js";import"./Text-oQHtFAiE.js";import"./resolveDefaultProps-CKLGeLep.js";import"./ZIndexLayer-jkdgENMR.js";import"./index-CU5o85y3.js";import"./index-CQNEDz1o.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-AqVQ4mq9.js";import"./throttle-BWeAvDIL.js";import"./axisSelectors-aIh5be-p.js";import"./d3-scale-DUY8Yxll.js";import"./CartesianAxis-CudRQX5X.js";import"./Layer-B7fk7F56.js";import"./types-L33J7ZDL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bh9hRh5k.js";import"./index-BtmI4qTy.js";import"./index-D2OmVz2d.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-683IwuKd.js";import"./index-D8T5pADG.js";import"./fillDefinitions-Ckysr9fo.js";import"./CartesianChart-BOsacCQH.js";import"./chartDataContext-OAAhd7eo.js";import"./CategoricalChart-C0ZN3rz5.js";import"./dataEntryStyles-CJFnAm-4.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-I38bp9Fj.js";import"./useAnimationId-DBeWeQl6.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-pVPcv2XP.js";import"./tooltipContext-B9Aw5mks.js";import"./ErrorBarContext-rAqCLm-Y.js";import"./activeStyles-Dbg52UlV.js";import"./SetGraphicalItem-FYK4izOM.js";import"./getZIndexFromUnknown-DCj51Q3j.js";import"./useEffectiveDataKey-NorWb4gC.js";import"./omit-DTYvo1mc.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CM-2NJGX.js";import"./step-IHXDW0UX.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DpArZmW3.js";import"./Dot-Bpcl5rlN.js";import"./Symbols-BU6SDWGm.js";import"./symbol-Dj9V0gE5.js";import"./getRadiusAndStrokeWidthFromDot-Cdk2wNTs.js";import"./useElementOffset-CtSBl7eX.js";import"./uniqBy-DUpMmWDv.js";import"./iteratee-CCYpPsyY.js";import"./Cross-DsL1RXxj.js";import"./Sector-mLpt5KCS.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Lt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
