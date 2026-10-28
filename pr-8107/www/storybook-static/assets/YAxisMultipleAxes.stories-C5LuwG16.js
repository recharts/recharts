import{R as t}from"./iframe-CExY2eWA.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-B_hjfjB_.js";import{R as l}from"./zIndexSlice-C37XV2sv.js";import{C as x}from"./ComposedChart-jeltTTaE.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BIzrW_0f.js";import{L as a}from"./Line-D1ZVA3ri.js";import{X as c}from"./XAxis-CfGhwt3z.js";import{T as g}from"./Tooltip-eFT7inFD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DKiyvKzI.js";import"./Text-B8G25q0u.js";import"./resolveDefaultProps-CjbXNHQ5.js";import"./pageBackground-DZSWUMfw.js";import"./ZIndexLayer-DlXNWMXh.js";import"./index-8pYktU8Y.js";import"./index-FNceUiie.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-YwnVtORU.js";import"./throttle-BBNIp7bK.js";import"./axisSelectors-DD16TRVI.js";import"./d3-scale-0yyW8T9p.js";import"./CartesianAxis-BL500t0F.js";import"./Layer-Bau4eIyO.js";import"./types-Dc-N9olf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DrzyKYB4.js";import"./index-AsSutFXR.js";import"./index-CUE47Bel.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DLH4YKyL.js";import"./index-Da9Adtew.js";import"./CartesianChart-BC6n1rn7.js";import"./ZIndexPortal-noF9F7eD.js";import"./CategoricalChart-CTKTm7QW.js";import"./LabelList-jPGn2qdg.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BbDfzF7k.js";import"./useAnimationId-DqJ2hXPF.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C53NOjZd.js";import"./tooltipContext--EjU2Cgd.js";import"./dataEntryStyles-iq_Y384c.js";import"./ErrorBarContext-CwvWWbXd.js";import"./activeStyles-DJMtR5DX.js";import"./SetGraphicalItem-BdGwDqMG.js";import"./getZIndexFromUnknown-C-aErwO8.js";import"./useEffectiveDataKey-CZSLIZ23.js";import"./omit-Ds15kvGd.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DQpSgZo6.js";import"./step-BYC0RXYs.js";import"./path-DyVhHtw_.js";import"./ActivePoints-hvZNmfX7.js";import"./Dot-DFSECcE9.js";import"./Symbols-BL7s7DpT.js";import"./symbol-DETtOMtn.js";import"./getRadiusAndStrokeWidthFromDot-D9OCaedM.js";import"./useElementOffset-C39tezyP.js";import"./uniqBy-Crl5fHd8.js";import"./iteratee--CMPcs_W.js";import"./Cross-CO7Xs6dQ.js";import"./Sector-BxZajP91.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
