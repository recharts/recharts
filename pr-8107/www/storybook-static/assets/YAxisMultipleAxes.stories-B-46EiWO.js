import{R as t}from"./iframe-CFREJgKh.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BpqGKlEV.js";import{R as l}from"./zIndexSlice-BlChPiJc.js";import{C as x}from"./ComposedChart-BHYrkphp.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BODMRhRi.js";import{L as a}from"./Line-RQeT_xTt.js";import{X as c}from"./XAxis-C8rslJeD.js";import{T as g}from"./Tooltip-CupqeGY6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CqB5IeGz.js";import"./Text-CdYm4waL.js";import"./resolveDefaultProps-D2NJN12P.js";import"./pageBackground-BhcEVreL.js";import"./ZIndexLayer-C1WGeCae.js";import"./index-BnRinVhV.js";import"./index-9ppQqeZ5.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-U9vqJLN4.js";import"./throttle-D0fuDWYv.js";import"./axisSelectors-BWBf8JbO.js";import"./d3-scale-CSfabLms.js";import"./CartesianAxis-DYae0Cq3.js";import"./Layer-C0qOZ959.js";import"./types-DVbjgkU5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BlPhjOzM.js";import"./index-DNbnfthz.js";import"./index-CXWxUzol.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-i5dbrXIz.js";import"./index-BMrIm2ob.js";import"./CartesianChart-DKqxdz5e.js";import"./ZIndexPortal-CxkIiCll.js";import"./CategoricalChart-wyRiJqKi.js";import"./LabelList-D_a5qFT1.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BcQT3jTk.js";import"./useAnimationId-D_reCqg_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D0KAMjVA.js";import"./tooltipContext-BjGhA_2X.js";import"./dataEntryStyles-D-tUw7To.js";import"./ErrorBarContext-Ckc5teto.js";import"./activeStyles-DZOohqxv.js";import"./SetGraphicalItem-DdrEYt3d.js";import"./getZIndexFromUnknown-C1i7VIOW.js";import"./useEffectiveDataKey-D5PSAWPt.js";import"./omit-BbKQzHDx.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CftG2h3G.js";import"./step-BcalNNwl.js";import"./path-DyVhHtw_.js";import"./ActivePoints-C0jpDbhM.js";import"./Dot-CbZEK9HK.js";import"./Symbols-C448CvWL.js";import"./symbol-nJMR8kbN.js";import"./getRadiusAndStrokeWidthFromDot-C8BFWNtM.js";import"./useElementOffset-D9x3IcJV.js";import"./uniqBy-DeAafqXU.js";import"./iteratee-iRN6k7X2.js";import"./Cross-DBVgOnwX.js";import"./Sector-g9nIfeJI.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
