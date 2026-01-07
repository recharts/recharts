import{e as t}from"./iframe-2t9JIeSz.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisProps-ByMyQu0r.js";import{Y as r}from"./YAxis-DOtUVqzp.js";import{R as l}from"./arrayEqualityCheck-Ne24Ckb0.js";import{C as x}from"./ComposedChart-CKj3iGz6.js";import{B as o}from"./Bar-kr-FpNRo.js";import{L as a}from"./Line-BuJmFTie.js";import{X as c}from"./XAxis-RUsgvceF.js";import{T as A}from"./Tooltip-DAiegNE1.js";import{R as f}from"./RechartsHookInspector-l9P1RfFo.js";import{p as g}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./SharedAxisProps-DKzkaa4t.js";import"./resolveDefaultProps-CwSOlvvS.js";import"./CartesianAxis-nSSqg5TL.js";import"./Layer-CYDA86pH.js";import"./Text-QtvFI3Y4.js";import"./DOMUtils-BaCwwoZ6.js";import"./Label-D1Z20PQg.js";import"./PolarUtils-Bz6vuuVH.js";import"./ZIndexLayer-B4A1m3pC.js";import"./zIndexSlice-CQpntV3l.js";import"./types-D5gHJUP5.js";import"./hooks-DDv3wssX.js";import"./axisSelectors-ELUvGx1F.js";import"./RechartsWrapper-C_G63Drq.js";import"./CartesianChart-DBgS_hM4.js";import"./chartDataContext-CjpiQJqz.js";import"./CategoricalChart-f3TADWMW.js";import"./tooltipContext-DXRb-iKi.js";import"./ReactUtils-3f6_sZO7.js";import"./ActiveShapeUtils-CFUB8TRB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C8Ra0xJ2.js";import"./useAnimationId-BJoNxofQ.js";import"./Trapezoid-BU2FReUY.js";import"./Sector-BmtUKRUo.js";import"./Symbols-CU3qyqsb.js";import"./Curve-DIMaTG8J.js";import"./RegisterGraphicalItemId-DXz7HuqF.js";import"./ErrorBarContext-BR1ah_yR.js";import"./GraphicalItemClipPath-D7leeg0p.js";import"./SetGraphicalItem-BT3CB0sc.js";import"./getZIndexFromUnknown-Bb1Ut4if.js";import"./graphicalItemSelectors-CaWQswDA.js";import"./ActivePoints-DcFveFLp.js";import"./Dot-Cgrjcqkr.js";import"./getRadiusAndStrokeWidthFromDot-Xho2r0bU.js";import"./useElementOffset-Dgi8y477.js";import"./iteratee-BMq1dSJo.js";import"./Cross-B8nhDlPB.js";import"./index-DUuuQEHh.js";import"./ChartSizeDimensions-DxYmbnCC.js";import"./OffsetShower-2v-BX8n-.js";import"./PlotAreaShower-D4PK9QSt.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:g},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
              <RechartsHookInspector />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <h4>
          {\`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element\`}
        </h4>
      </article>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisProps)
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const It=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,It as __namedExportsOrder,ut as default};
