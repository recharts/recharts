import{R as t}from"./iframe-CNzr7bRc.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-B3tsMqyp.js";import{R as l}from"./zIndexSlice-BXquQra7.js";import{C as x}from"./ComposedChart-CHYxJs3d.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Dx1aQTnl.js";import{L as a}from"./Line-C5pEban5.js";import{X as c}from"./XAxis-BqePxvtA.js";import{T as g}from"./Tooltip-BCC0qlIK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DK5ffKtI.js";import"./Text-DNGP5VRJ.js";import"./resolveDefaultProps-eALPB1-k.js";import"./DOMUtils-BNEhIoeS.js";import"./ZIndexLayer-iNGo5aF5.js";import"./index-BpBfKZ0c.js";import"./index-7EmzVii1.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CghHQQ-X.js";import"./throttle-D60XWAz6.js";import"./axisSelectors-Cj1w7XZO.js";import"./d3-scale-BaY54_t1.js";import"./CartesianAxis-D3YDV11n.js";import"./Layer-CQb-3uv7.js";import"./types-VNEWdd_i.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DwMt-YUq.js";import"./index-vccdfSpl.js";import"./index-DkjLLMk5.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BDCqiBvb.js";import"./index-DPDqa0dF.js";import"./CartesianChart-9mx21EaK.js";import"./ZIndexPortal-DSFpx_T8.js";import"./CategoricalChart-B30IE8DU.js";import"./LabelList-BM4oqAMz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-_7pUXE0L.js";import"./useAnimationId-CDC5NaEo.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BTkV1P67.js";import"./tooltipContext-a3REC5wT.js";import"./dataEntryStyles-fZ5_Gy6u.js";import"./ErrorBarContext-CNXHKdeb.js";import"./activeStyles-DoMnj4mo.js";import"./SetGraphicalItem-Dt3t9-Yy.js";import"./getZIndexFromUnknown-Bv68oPR7.js";import"./useEffectiveDataKey-CeL4hQha.js";import"./fillDefinitions-BZnJYQev.js";import"./omit-Ct2YI-7D.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BKrC7pl3.js";import"./step-DQr3R_vt.js";import"./path-DyVhHtw_.js";import"./ActivePoints-K0chRQ_g.js";import"./Dot-CUKZE6AE.js";import"./Symbols-CJLh5GL-.js";import"./symbol-CTtPmk_0.js";import"./getRadiusAndStrokeWidthFromDot-COyF9q3U.js";import"./useElementOffset-BRAQ4wcr.js";import"./uniqBy-rckpUkc6.js";import"./iteratee-C6pzj2S7.js";import"./Cross-kZkGTP7N.js";import"./Sector-DNATorIr.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
