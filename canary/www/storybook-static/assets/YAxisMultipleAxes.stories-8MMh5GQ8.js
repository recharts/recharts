import{R as t}from"./iframe-DmqRNFpA.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-BVwyU1u1.js";import{R as l}from"./zIndexSlice-B1K-Cx6E.js";import{C as x}from"./ComposedChart-C16lvRll.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BigJiKPB.js";import{L as a}from"./Line-gXpEv3sk.js";import{X as c}from"./XAxis-D3OnHsd5.js";import{T as g}from"./Tooltip-D2Z3majm.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CGOHFUUI.js";import"./Text-CUDSRJfa.js";import"./resolveDefaultProps-BjqyIxlF.js";import"./ZIndexLayer-Rp2F5wBf.js";import"./index-DLLiFttT.js";import"./index-DKIkITg9.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DfZjHeTi.js";import"./throttle-DniwHdPI.js";import"./axisSelectors-CgQoXC7y.js";import"./d3-scale-a0YrBx9c.js";import"./CartesianAxis-B7FOD29F.js";import"./Layer-BMG2yPM5.js";import"./types-ClR1fgnQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-rJsNFgC5.js";import"./index-DugFJa8I.js";import"./index-D2BlTs7T.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CTNqlU94.js";import"./index-7-eYjlBn.js";import"./fillDefinitions-D0KLDOLI.js";import"./CartesianChart-DvjgB_s_.js";import"./chartDataContext-7iFWy2pv.js";import"./CategoricalChart-BK3tVtDO.js";import"./dataEntryStyles-ClWs31k0.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D2jF24kk.js";import"./useAnimationId-BfPOVraS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-wD2P373B.js";import"./tooltipContext-DRFTWGzc.js";import"./ErrorBarContext-BaRUKqrY.js";import"./activeStyles-2GMTQ11y.js";import"./SetGraphicalItem-B1qkE8Ui.js";import"./getZIndexFromUnknown-BPyNJBsM.js";import"./useEffectiveDataKey-1IVWV8C0.js";import"./omit-GwFxkX5l.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-GdhkPv0Q.js";import"./Curve-DXM7d3l8.js";import"./step-KG3W8n3J.js";import"./path-BBMZd4YL.js";import"./ActivePoints-G7jUCSXZ.js";import"./Dot-BXNT0rJn.js";import"./Symbols-DJo18KTa.js";import"./symbol-BhHhN8K0.js";import"./useElementOffset-CeDnXL_W.js";import"./uniqBy-DGhKd4sh.js";import"./iteratee-CQuB2rq_.js";import"./Cross-DCqromoO.js";import"./Sector-C6utI8br.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
