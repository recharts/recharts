import{R as t}from"./iframe-DG1yZPWZ.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-D8fDz-Jg.js";import{R as l}from"./zIndexSlice-asfAkO72.js";import{C as x}from"./ComposedChart-Bg3J3jLh.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BWw69e6a.js";import{L as a}from"./Line-DiHguxZv.js";import{X as c}from"./XAxis-Cx1v_iob.js";import{T as g}from"./Tooltip-Br9DqoGC.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CP0s7Q77.js";import"./Text-jtW7RKFp.js";import"./resolveDefaultProps-zC97C8Ii.js";import"./DOMUtils-CnKUAWGq.js";import"./ZIndexLayer-Bf1pNdwz.js";import"./index-B8R5wD7Q.js";import"./index-Cm9Dvuha.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D8A3KxdK.js";import"./throttle-QLzPTGhw.js";import"./axisSelectors-BLyrYAI0.js";import"./d3-scale-p1mp5kit.js";import"./CartesianAxis-D2CTuJLk.js";import"./Layer-DzG8YxQe.js";import"./types-DqMoKlmp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DtyZfQXr.js";import"./index-BlTUNZQc.js";import"./index-Bt1QYmkD.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Bchp_o7p.js";import"./index-D_9rD6su.js";import"./CartesianChart-JxE9ej3_.js";import"./ZIndexPortal-iKAZRpeg.js";import"./CategoricalChart-C_RyWiZg.js";import"./LabelList-DDOiPfis.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BvctkOLL.js";import"./useAnimationId-C_9VGehw.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dl04D47U.js";import"./tooltipContext-BFoc-4sQ.js";import"./dataEntryStyles-B8PPCs32.js";import"./fillDefinitions-C7BJRYTP.js";import"./themeFill-D_uX30kF.js";import"./ErrorBarContext-C4LHoflN.js";import"./activeStyles-BM7qy7T1.js";import"./SetGraphicalItem-Cvt15Nbt.js";import"./getZIndexFromUnknown-D7VqBCD9.js";import"./useEffectiveDataKey-Qa_0ZIQ7.js";import"./omit-TH1DhSSY.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DcJDRZ_G.js";import"./step-U1uI6C26.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CGsYeesF.js";import"./Dot-BvOm6Swm.js";import"./Symbols-0F73g9aR.js";import"./symbol-B3qgj-xo.js";import"./getRadiusAndStrokeWidthFromDot-Bzdqwx5x.js";import"./useElementOffset-gChE2lz3.js";import"./uniqBy-BMDahjm8.js";import"./iteratee-Bd2duUdb.js";import"./Cross-Or7waBDb.js";import"./Sector-Y0udpFtU.js";const Wt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Xt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Xt as __namedExportsOrder,Wt as default};
