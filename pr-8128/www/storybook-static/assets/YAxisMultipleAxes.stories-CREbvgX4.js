import{R as t}from"./iframe-DwhrPqQ2.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CQHM2D8-.js";import{R as l}from"./zIndexSlice-CpWq1zjb.js";import{C as x}from"./ComposedChart-nvDFRK3z.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CUeW-vwp.js";import{L as a}from"./Line-CzQiNu3A.js";import{X as c}from"./XAxis-DalFir1z.js";import{T as g}from"./Tooltip-BfkiQp9S.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CPQgWsRx.js";import"./Text-C74hS0lU.js";import"./resolveDefaultProps-DjT--ccN.js";import"./DOMUtils-BcceySrU.js";import"./pageBackground-BJp9wwMp.js";import"./ZIndexLayer-BSdSgNTE.js";import"./index-kf961mzr.js";import"./index-CEmaTsjJ.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BuB4o-cj.js";import"./throttle-DfnnAIvE.js";import"./axisSelectors-Co6y6k23.js";import"./d3-scale-C0de4oSn.js";import"./CartesianAxis-ClEu4A1x.js";import"./Layer-vnYdlnEA.js";import"./types-CR-LymQu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-6PXLxRIe.js";import"./index-CsaEib3L.js";import"./index-BEv8RXE2.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DwGtUcHg.js";import"./index-Y2LMv9l3.js";import"./CartesianChart-D8j3jRJC.js";import"./ZIndexPortal-DZJ5tH-i.js";import"./CategoricalChart-j0pVaHBn.js";import"./LabelList-D6fyXhX7.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C3hl6UlM.js";import"./fillDefinitions-Dhc8KNfB.js";import"./themeFill-Dmspdt-4.js";import"./useAnimationId-Cr5bB81Q.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CDAywyE9.js";import"./tooltipContext-BDh8dCep.js";import"./dataEntryStyles-DWHZ8H87.js";import"./ErrorBarContext-ByBJW2kl.js";import"./activeStyles-DZGQwj2F.js";import"./SetGraphicalItem-Dt6F2mBE.js";import"./getZIndexFromUnknown-B0-JXqUO.js";import"./useEffectiveDataKey-D3ULyXZ6.js";import"./omit-DSdpzYC1.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BhXF6Rtc.js";import"./step-BswNGXoJ.js";import"./path-DyVhHtw_.js";import"./ActivePoints-hySilWiE.js";import"./Dot-PaVtx7_L.js";import"./Symbols-CvLu8AuU.js";import"./symbol-4bH2ZeXc.js";import"./getRadiusAndStrokeWidthFromDot-VJH7k67x.js";import"./useElementOffset--RCirzvW.js";import"./uniqBy-C-Hwd9w4.js";import"./iteratee-CMbc4V8B.js";import"./Cross-67wVy07F.js";import"./Sector-CCcig7Va.js";const Xt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},bt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,bt as __namedExportsOrder,Xt as default};
