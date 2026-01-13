import{e as t}from"./iframe-CUnLgpW-.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisProps-ByMyQu0r.js";import{Y as r}from"./YAxis-BiZg32ce.js";import{R as l}from"./arrayEqualityCheck-CGwnIdvG.js";import{C as x}from"./ComposedChart-dHSji5Me.js";import{B as o}from"./Bar-_0n3XGuT.js";import{L as a}from"./Line-C6zgdqmO.js";import{X as c}from"./XAxis-Ca50gTOu.js";import{T as A}from"./Tooltip-E9gUrVei.js";import{R as f}from"./RechartsHookInspector-Bx_AeU2-.js";import{p as g}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./SharedAxisProps-DKzkaa4t.js";import"./resolveDefaultProps-3A21IoT3.js";import"./CartesianAxis-tcRV1YVy.js";import"./Layer-DqDgkHbR.js";import"./Text-Bzx_mpBH.js";import"./DOMUtils-rOWW9V75.js";import"./Label-BFTmbefL.js";import"./PolarUtils-B2H8NKZh.js";import"./ZIndexLayer-CIJpz3dT.js";import"./zIndexSlice-COAwGY7D.js";import"./types-Cya9OZ_P.js";import"./hooks-BodQywHm.js";import"./axisSelectors-CesYX3jk.js";import"./RechartsWrapper-DlEqFuyr.js";import"./CartesianChart-BId6Bjz9.js";import"./chartDataContext-C42Wd2jm.js";import"./CategoricalChart-BBiN7XHJ.js";import"./tooltipContext-J2Mqx9dW.js";import"./ReactUtils-ubByZwRx.js";import"./ActiveShapeUtils-CaB32_zp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D-fUf-OO.js";import"./useAnimationId-DVbvIVcC.js";import"./Trapezoid-D3rvFnZU.js";import"./Sector-CCBcQdor.js";import"./Symbols-B7Txi7cb.js";import"./Curve-BFHPlIj0.js";import"./RegisterGraphicalItemId-BTAKxoZt.js";import"./ErrorBarContext-cEGm4-dJ.js";import"./GraphicalItemClipPath-DI1arc73.js";import"./SetGraphicalItem-BRf4oXtZ.js";import"./getZIndexFromUnknown-C1iZLaZo.js";import"./graphicalItemSelectors-BoTLxpYp.js";import"./ActivePoints-pdYEbr7r.js";import"./Dot-b-hZt1Z5.js";import"./getRadiusAndStrokeWidthFromDot-CLXj6G0s.js";import"./useElementOffset-g6bXIJAX.js";import"./iteratee-DpJPEM-F.js";import"./Cross-DA8hwZR2.js";import"./index-F2EJmSFt.js";import"./ChartSizeDimensions-BZ4xctFr.js";import"./OffsetShower-DfQZxxZ8.js";import"./PlotAreaShower-ajA77Kx1.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:g},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
