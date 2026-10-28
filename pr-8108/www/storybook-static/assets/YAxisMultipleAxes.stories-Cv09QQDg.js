import{R as t}from"./iframe-D0jufW3D.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-D7roMtR7.js";import{R as l}from"./zIndexSlice-BoierTw-.js";import{C as x}from"./ComposedChart-CHSW6wo4.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-uWAAMv6p.js";import{L as a}from"./Line-RjAMMhdd.js";import{X as c}from"./XAxis-DbxDHf11.js";import{T as g}from"./Tooltip-BQ0fqtX9.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-L5bBHry2.js";import"./Text-CJ7ZV5G-.js";import"./resolveDefaultProps-CwNNBflB.js";import"./pageBackground-D6LTNenr.js";import"./ZIndexLayer-B9tL4Ye-.js";import"./index-DuN5ZfYO.js";import"./index-CnAESQjM.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-eVHebS17.js";import"./throttle-BRaHJfbv.js";import"./axisSelectors-Dx__qMJ7.js";import"./d3-scale-CK6BpS5A.js";import"./CartesianAxis-xT0IlJ0n.js";import"./Layer-D5IjCwFP.js";import"./types-KyGzz8Fo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CqZoa4E3.js";import"./index-Bf3oFgb9.js";import"./index-BopMBIHA.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DTMB1NV8.js";import"./index-DpQX8-G9.js";import"./CartesianChart-D_2FRpkc.js";import"./ZIndexPortal-B4KRqmjs.js";import"./CategoricalChart-D4TUwcq3.js";import"./LabelList-BSqidkx_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BcLE3h-E.js";import"./useAnimationId-BckzpxH4.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-dLVute71.js";import"./tooltipContext-B_0Qk7xj.js";import"./dataEntryStyles-L1JX3I7t.js";import"./ErrorBarContext-DD4Me9w9.js";import"./activeStyles-CKVoF1Mf.js";import"./SetGraphicalItem-Cnoug-d_.js";import"./getZIndexFromUnknown-DjXH6rxy.js";import"./useEffectiveDataKey-D47_79bJ.js";import"./omit-CZTm-iJG.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CbdawudC.js";import"./step-ClRjxL_f.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BXYidu17.js";import"./Dot-CcvERK0Y.js";import"./Symbols-C7TjFguZ.js";import"./symbol-Cehhuj0X.js";import"./getRadiusAndStrokeWidthFromDot-DIU63BSP.js";import"./useElementOffset-Cmh5XwmF.js";import"./uniqBy-Dx1aoyhy.js";import"./iteratee-CPaJ8F08.js";import"./Cross-CYoxeUdp.js";import"./Sector-Auh1s1yj.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
