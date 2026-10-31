import{R as t}from"./iframe-CSurJGXt.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-COz_c9GE.js";import{R as l}from"./zIndexSlice-DeOoXCvu.js";import{C as x}from"./ComposedChart-Bt02-7JT.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DTR8tN3_.js";import{L as a}from"./Line-D3qfJJbK.js";import{X as c}from"./XAxis-DPspp0Rg.js";import{T as g}from"./Tooltip-D8ynDSqg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-B_q4DRvh.js";import"./Text-D1wUWC9f.js";import"./resolveDefaultProps-CLiXTxMl.js";import"./DOMUtils-Ch0i58SB.js";import"./ZIndexLayer-7wO-Br8Q.js";import"./index-BLu4PMPi.js";import"./index-DXQ1HyAX.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D8qEX0kp.js";import"./throttle-BimBWg8F.js";import"./axisSelectors-BTded_EU.js";import"./d3-scale-wNVR4pxp.js";import"./CartesianAxis-CCV5sIGf.js";import"./Layer-CuCaFJUW.js";import"./types-DAGGFXxQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BulAjXaG.js";import"./index-DL-0zMUZ.js";import"./index-By1e8KSj.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C5uJkji8.js";import"./index-BUjegfsF.js";import"./fillDefinitions-Dy2IhL03.js";import"./CartesianChart-BYJBOySk.js";import"./ZIndexPortal-B_GPxKbG.js";import"./CategoricalChart-CMXRpEe-.js";import"./LabelList-Dzy6Gaop.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D1IvnXW0.js";import"./useAnimationId-BxuBL60s.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-lYTYoEV1.js";import"./tooltipContext-DxTbI9zA.js";import"./dataEntryStyles-DMbzXUIb.js";import"./ErrorBarContext-ORq27qm1.js";import"./activeStyles-DIe-HGPn.js";import"./SetGraphicalItem-S8ZD9BPZ.js";import"./getZIndexFromUnknown-DJ6dv0rU.js";import"./useEffectiveDataKey-DXY519D2.js";import"./omit-CQ7623FA.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BWOdKf-d.js";import"./step-CH-YMzWr.js";import"./path-DyVhHtw_.js";import"./ActivePoints-C03BB4pX.js";import"./Dot-B5x_6AZj.js";import"./Symbols-C4saACxL.js";import"./symbol-XqakD_BN.js";import"./getRadiusAndStrokeWidthFromDot-BU1Ag6Bu.js";import"./useElementOffset-D_rvnf9W.js";import"./uniqBy-E8SwNtbJ.js";import"./iteratee-C1NgR1np.js";import"./Cross-NkGHjTsd.js";import"./Sector-CAKaDj7I.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
