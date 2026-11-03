import{R as t}from"./iframe-BL3cqs0v.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-SEmBBB09.js";import{R as l}from"./zIndexSlice-Bp5UfHlJ.js";import{C as x}from"./ComposedChart-CuwCdTLA.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DXbtI2Zw.js";import{L as a}from"./Line-DBcBAmaO.js";import{X as c}from"./XAxis-B7WybKMv.js";import{T as g}from"./Tooltip-ByxcRZ11.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DWi9EbQl.js";import"./Text-BwMtBvSi.js";import"./resolveDefaultProps-BsbZKCB4.js";import"./DOMUtils-BPtMjC5_.js";import"./ZIndexLayer-DgWY8WnK.js";import"./index-Xo9PhSCx.js";import"./index-M6yM2tbI.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BgHDg8wg.js";import"./throttle-CFuBzL7d.js";import"./axisSelectors-Df4vXTv0.js";import"./d3-scale-DqPJ3v9v.js";import"./CartesianAxis-Pi3KV9RP.js";import"./Layer-ClHABKOt.js";import"./types-CCfYuf_x.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B58pSaah.js";import"./index-f4nmOf8P.js";import"./index-BMIlL233.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-rjJlKnXT.js";import"./index-DXhLf1tc.js";import"./fillDefinitions-qZuxFB6J.js";import"./CartesianChart-CNDb6X0a.js";import"./ZIndexPortal-Bl3Dp53e.js";import"./CategoricalChart-BgL_VXFO.js";import"./LabelList-BS_WlUTo.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-a8ObDMaW.js";import"./useAnimationId-BsAm0EGv.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-LmfHqNO3.js";import"./tooltipContext-DaNosn_S.js";import"./dataEntryStyles-Bb2gxxNt.js";import"./ErrorBarContext-D_171Q9R.js";import"./activeStyles-Dkfygl3t.js";import"./SetGraphicalItem-D9rioP3I.js";import"./getZIndexFromUnknown-CARNx7Hq.js";import"./useEffectiveDataKey-BKKoQF-4.js";import"./omit-CU9Usmlz.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DMXMUvkb.js";import"./step-CWn_2b8s.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BtVWL3FZ.js";import"./Dot-BjMYYrUI.js";import"./Symbols-0PXADWR-.js";import"./symbol-gdXBWq8v.js";import"./getRadiusAndStrokeWidthFromDot-BV_EEgVN.js";import"./useElementOffset-Cr1zyTGS.js";import"./uniqBy-QjbMwiHY.js";import"./iteratee-Ce9VvF2y.js";import"./Cross-BNm-sW4O.js";import"./Sector-BOhMEM58.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
