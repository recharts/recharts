import{R as t}from"./iframe-D4SWC0C9.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DZiEXhVb.js";import{R as l}from"./zIndexSlice-DtLu2rz0.js";import{C as x}from"./ComposedChart-CixY_uah.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DjEKp3Kk.js";import{L as a}from"./Line-BMXJqgb8.js";import{X as c}from"./XAxis-DY95kjca.js";import{T as g}from"./Tooltip-CKtfPjFs.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-B4GKK3W-.js";import"./Text-K3oqQ0qr.js";import"./resolveDefaultProps-CuPg7ygH.js";import"./DOMUtils-_TTo3kuP.js";import"./ZIndexLayer-DpB3cuZ0.js";import"./index-o5eRcHSQ.js";import"./index-Bm9m5_PU.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-5Is9yWXM.js";import"./throttle-i1uEXwfS.js";import"./axisSelectors-D7bj-nZi.js";import"./d3-scale-CqqO4xMX.js";import"./CartesianAxis-jJfvsanR.js";import"./Layer--YLSv_ie.js";import"./types-BULmlw12.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BWlvISfj.js";import"./index-BzqOahcD.js";import"./index-BdcBqhlp.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-B-nLjLBG.js";import"./index-BOyzEbCc.js";import"./CartesianChart-D2bJStRT.js";import"./ZIndexPortal-Dz8Csonx.js";import"./CategoricalChart-Cyf0p9sz.js";import"./LabelList-D_z7ECQv.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C8mkpCGv.js";import"./useAnimationId-DKXEwRJj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CKN1RXI0.js";import"./tooltipContext-Pbh55R0H.js";import"./dataEntryStyles-Df562HAt.js";import"./ErrorBarContext-CkfaNLfH.js";import"./activeStyles-DGXStsvL.js";import"./SetGraphicalItem-CmNEMHt3.js";import"./getZIndexFromUnknown-Dr9Ow_Kt.js";import"./themeFill-BkM1x4hA.js";import"./useEffectiveDataKey-B-O25Qiu.js";import"./fillDefinitions-C6BynYXf.js";import"./omit-Bf-WxhgY.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CLAbzDX3.js";import"./step-DJAY54DS.js";import"./path-DyVhHtw_.js";import"./ActivePoints-D3cp_ck3.js";import"./Dot-fLjTiyXC.js";import"./Symbols-mjJ7TtB9.js";import"./symbol-IW8UYWs4.js";import"./getRadiusAndStrokeWidthFromDot-DOd7rr-G.js";import"./useElementOffset-BNAtca7y.js";import"./uniqBy-9w4q5yQd.js";import"./iteratee-DZT4M3pu.js";import"./Cross-CSn-JXVK.js";import"./Sector-C172RoTQ.js";const Wt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
