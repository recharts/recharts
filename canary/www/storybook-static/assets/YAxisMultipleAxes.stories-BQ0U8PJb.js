import{R as t}from"./iframe-CjAZXmgk.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CunYyPtb.js";import{R as l}from"./zIndexSlice-DZ6wU0kL.js";import{C as x}from"./ComposedChart-C9HbEoPU.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-I4IqMcPO.js";import{L as a}from"./Line-Bqm35VQZ.js";import{X as c}from"./XAxis-XXYcX2bn.js";import{T as g}from"./Tooltip-BMETZi0y.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DnpXC07H.js";import"./Text-VSZhuuVN.js";import"./resolveDefaultProps-B3dy_A6W.js";import"./pageBackground-CYQU4eM8.js";import"./isWellBehavedNumber-CbOfPh0Q.js";import"./useId-UofRKXbz.js";import"./useBackwardsCompatibleTheme-C26HYKO8.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-maUeBX7p.js";import"./index-CXqdHhNs.js";import"./index-D72PX-EN.js";import"./axisSelectors-DVMe8D3h.js";import"./throttle-aHpS-uJF.js";import"./d3-scale-Cdy5oRLL.js";import"./CartesianAxis-CNPqH8LV.js";import"./Layer-CMYvDThQ.js";import"./types-BUTy-eCs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DRvvM2hj.js";import"./index-CgP4dGwF.js";import"./index-DoglCRE6.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-C1tX5Xq9.js";import"./index-jRxYEVM9.js";import"./CartesianChart-Bi3Tf3h4.js";import"./chartDataContext-Brj1C6P1.js";import"./CategoricalChart-ChU13xsV.js";import"./activeStyles-BjWwonc4.js";import"./useAnimationId-BxmhNVS4.js";import"./dataEntryStyles-BHBmvArk.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cg0Vumjf.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Lt_dXYUR.js";import"./tooltipContext-BjJ9NNny.js";import"./ErrorBarContext-CzSreuRh.js";import"./GraphicalItemClipPath-uyo9nSDN.js";import"./SetGraphicalItem-D6iWzq9o.js";import"./getZIndexFromUnknown-BvIR26nO.js";import"./useEffectiveDataKey-NmC8up5p.js";import"./Curve-BAdd7Cc7.js";import"./step-DNHn4BEu.js";import"./path-DyVhHtw_.js";import"./ActivePoints-C5jmgdLT.js";import"./Dot-C4dqO9Kj.js";import"./getRadiusAndStrokeWidthFromDot-B3WoL_Uu.js";import"./useElementOffset-B7ar2O_j.js";import"./uniqBy-DzMYEmyq.js";import"./iteratee-BZjhhQST.js";import"./Cross-Mi64MTa2.js";import"./Sector-P4GUkmMC.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Rt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
