import{R as t}from"./iframe-rIGtWy7o.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-CD9Zrxmn.js";import{R as l}from"./zIndexSlice-eSFvIDPB.js";import{C as x}from"./ComposedChart-R6AzKio4.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DqWCqLgY.js";import{L as a}from"./Line-BfyEqFnX.js";import{X as c}from"./XAxis-DpQ4g3Lr.js";import{T as g}from"./Tooltip-DkrQRKNg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BEKXXJOd.js";import"./Text-CUOAySYE.js";import"./resolveDefaultProps-CESzkdGA.js";import"./ZIndexLayer-BQOJSgP1.js";import"./index-DfdBIdkk.js";import"./index-BYEDHt0V.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-bEQ_xhZ6.js";import"./throttle-BAKkGKnI.js";import"./axisSelectors-DWDjUcOc.js";import"./d3-scale-BuxsQdRE.js";import"./CartesianAxis-DicS6pKh.js";import"./Layer-BDOLwd71.js";import"./types-BNwRi5Vr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D_5kFm74.js";import"./index-B3oaotmj.js";import"./index-9mMSGnJG.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CnGTSvJE.js";import"./index-HOvW1MHI.js";import"./fillDefinitions-OByCib8k.js";import"./CartesianChart-CAAztSss.js";import"./chartDataContext-DkD_onqA.js";import"./CategoricalChart-CiwW1p8S.js";import"./dataEntryStyles-BBWs-HQj.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DFHnm19R.js";import"./useAnimationId-BWpujR0E.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CybnivgX.js";import"./tooltipContext-Boptdt3E.js";import"./ErrorBarContext-B8qTxBlT.js";import"./activeStyles-CzQ969KV.js";import"./SetGraphicalItem-iESSYU5M.js";import"./getZIndexFromUnknown-skJ8ipmn.js";import"./useEffectiveDataKey-DGGEUFr6.js";import"./omit-DSNnoq2i.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-DW8ZW_Lt.js";import"./Curve-DqTam_xv.js";import"./step-CBJGjOOI.js";import"./path-BBMZd4YL.js";import"./ActivePoints-B88CEUU0.js";import"./Dot-hlrtitgM.js";import"./Symbols-CZml1OUW.js";import"./symbol-D8O-t0Dg.js";import"./useElementOffset-DvWu6ax_.js";import"./uniqBy-C8XTS8UB.js";import"./iteratee-ByPZHGAt.js";import"./Cross-DCLXQRie.js";import"./Sector-BF6ZW7n9.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
