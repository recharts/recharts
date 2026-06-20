import{R as t}from"./iframe-BT2fAbbB.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-ChrnpRQE.js";import{R as l}from"./zIndexSlice-0bHXttbZ.js";import{C as x}from"./ComposedChart-DdVrflO2.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-uUcUXSAk.js";import{L as a}from"./Line-D6orMjMD.js";import{X as c}from"./XAxis-BoVnFGs6.js";import{T as g}from"./Tooltip-Bfhr633F.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C017lSC3.js";import"./CartesianAxis-BeeS8R2V.js";import"./Layer-CwmO2g8o.js";import"./resolveDefaultProps-C3R0rg6J.js";import"./Text-Bl7vRhlA.js";import"./DOMUtils-BAS9saz0.js";import"./isWellBehavedNumber-LZ0iz-Mn.js";import"./Label-BKr83VYg.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-vZErJXnS.js";import"./index-CVxrCFbF.js";import"./index-Doyfjfw4.js";import"./types-UgUXQeZV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CiEsNdJ7.js";import"./immer-Cs_HwjFQ.js";import"./RechartsWrapper-BdzpqzJC.js";import"./index-BploPkwU.js";import"./index-DkhzDGLz.js";import"./axisSelectors-BROcexci.js";import"./d3-scale-DCH5M94w.js";import"./CartesianChart-kqjinDmq.js";import"./chartDataContext-BrLfw6WI.js";import"./CategoricalChart-CkHyoyCb.js";import"./tooltipContext-ftJi64Sx.js";import"./AnimatedItems-B9eraKkz.js";import"./useAnimationId-B9b4cNZQ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BI2jxxVC.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-aZ-707nn.js";import"./RegisterGraphicalItemId-rv099XyT.js";import"./ErrorBarContext-Dl3pruuO.js";import"./GraphicalItemClipPath-BtLAGmDV.js";import"./SetGraphicalItem-C_0DsyJ6.js";import"./getZIndexFromUnknown-CUuyWpoA.js";import"./graphicalItemSelectors-BFCuQBJA.js";import"./Curve-5RTqUT5x.js";import"./step-CJvEyRUy.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DVgNgNPk.js";import"./Dot-BCEb4Rzy.js";import"./getRadiusAndStrokeWidthFromDot-CAQ9ByQw.js";import"./useElementOffset-DxfqGQMG.js";import"./uniqBy-CE3wruLK.js";import"./iteratee-JLoe2DiT.js";import"./Cross-DbWE21IQ.js";import"./Sector-BxOoJOCl.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
