import{R as t}from"./iframe-CuGhPmlk.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DLBgWodt.js";import{R as l}from"./zIndexSlice-BOf55cXv.js";import{C as x}from"./ComposedChart-BaRxWhmE.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DWTid5V3.js";import{L as a}from"./Line-DF_AoKL_.js";import{X as c}from"./XAxis-CKjURUro.js";import{T as g}from"./Tooltip-DmDIsB-U.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-B62wTY7D.js";import"./Text-L-8TUXNX.js";import"./resolveDefaultProps-JU216Ibw.js";import"./pageBackground-DCo2yzAB.js";import"./ZIndexLayer-BtXB3z2o.js";import"./index-D9ZLEpwh.js";import"./index-CLkWjMz0.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BwdXKLtW.js";import"./throttle-D0-4r1vg.js";import"./axisSelectors-Bzh2qDn8.js";import"./d3-scale-DH8f3Idv.js";import"./CartesianAxis-D0E-Hq6W.js";import"./Layer-C-miwaoG.js";import"./types-B0LhVrLk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DbYgrNox.js";import"./index-pU8qqa02.js";import"./index--76JpPy7.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CkD6y7S6.js";import"./index-CxvEfTaS.js";import"./CartesianChart-CEtK8vTY.js";import"./ZIndexPortal-ClQ_oNM2.js";import"./CategoricalChart-DiUb-iYo.js";import"./LabelList-T4o6_Eqe.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CA1kt8UJ.js";import"./useAnimationId-DwU2Zwh7.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BpXA90LR.js";import"./tooltipContext-DBELoiW1.js";import"./dataEntryStyles-DpUTp7qZ.js";import"./ErrorBarContext-B35UIqZH.js";import"./activeStyles-U82greWp.js";import"./SetGraphicalItem-Csvl1Ioj.js";import"./getZIndexFromUnknown-DzCSh5Gk.js";import"./useEffectiveDataKey-Q10jxXsl.js";import"./omit-AMeldnD3.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Cv9VJ7_-.js";import"./step-Bpop3Ls-.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Bn3lQzBu.js";import"./Dot-DK7HsTYP.js";import"./Symbols-DiagS28o.js";import"./symbol-CetSzj0T.js";import"./getRadiusAndStrokeWidthFromDot-CE9VpvC8.js";import"./useElementOffset-DovsWr-R.js";import"./uniqBy-D9UgBzVb.js";import"./iteratee-CkLtFoKx.js";import"./Cross-BREw-WAC.js";import"./Sector-ENB_SqU-.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
