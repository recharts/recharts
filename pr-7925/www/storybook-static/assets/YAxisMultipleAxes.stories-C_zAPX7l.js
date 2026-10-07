import{R as t}from"./iframe-B-iIRDdh.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-D6Burg2S.js";import{R as l}from"./zIndexSlice-xTQiy-H7.js";import{C as x}from"./ComposedChart-aKLJJf8H.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DadnPNFg.js";import{L as a}from"./Line-Cbj4CeQN.js";import{X as c}from"./XAxis-CndG3lfF.js";import{T as g}from"./Tooltip-CVPacDbw.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CwIrwy70.js";import"./Text-CBbsNly8.js";import"./resolveDefaultProps-BKBNf2xS.js";import"./DOMUtils-CixgR7ku.js";import"./isWellBehavedNumber-B6qwBi4A.js";import"./useId-D2WPaoHG.js";import"./useBackwardsCompatibleTheme-C-V51dQO.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CbH1OgN0.js";import"./index-o1PLWRMQ.js";import"./index-DFxGa3DU.js";import"./RechartsWrapper-3KdvU5vS.js";import"./axisSelectors-C60OKlJ4.js";import"./throttle-DMKMego8.js";import"./d3-scale-AYUreAhG.js";import"./index-NNc_ZKUS.js";import"./index-D_yufyJF.js";import"./renderedTicksSlice-DkP6y5za.js";import"./index-BazpKZZl.js";import"./CartesianAxis-D-jVFU-k.js";import"./Layer-Dt4jm0MX.js";import"./types-zJ8KfHt8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CmApzcJx.js";import"./chartDataContext-CX0jNdXw.js";import"./CategoricalChart-BfBkFmEt.js";import"./AnimatedItems-WEAzzrlF.js";import"./useAnimationId-CcMpnWIs.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BOjsrKl9.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-yQdvWiPD.js";import"./tooltipContext-CHGhmnyK.js";import"./RegisterGraphicalItemId-B76epDXu.js";import"./ErrorBarContext-BzZXG9TC.js";import"./GraphicalItemClipPath-DlnJdwTq.js";import"./SetGraphicalItem-BJKoCnbQ.js";import"./getZIndexFromUnknown-D7L5xpEb.js";import"./useGraphicalItemIdentity-B2EBH6VG.js";import"./dataEntryStyles-CRmBcoXI.js";import"./Curve-CjV9ratN.js";import"./step-CLlPrIoa.js";import"./path-DyVhHtw_.js";import"./ActivePoints-D_regA9J.js";import"./Dot-BnQbbHjv.js";import"./getRadiusAndStrokeWidthFromDot-PVXVFp_x.js";import"./useElementOffset-HOhbNBcL.js";import"./uniqBy-BjVxXwWp.js";import"./iteratee-Dwz90aEP.js";import"./Cross-bCDAOaXl.js";import"./Sector-DiKqSUdo.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
