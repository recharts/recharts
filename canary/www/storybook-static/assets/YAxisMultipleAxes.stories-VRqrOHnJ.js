import{e as t}from"./iframe-CsBbFWpF.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisProps-ByMyQu0r.js";import{Y as r}from"./YAxis-Ctuh_Y30.js";import{R as l}from"./arrayEqualityCheck-jcy1YLjA.js";import{C as x}from"./ComposedChart-BxAEf0za.js";import{B as o}from"./Bar-DnPRHuD-.js";import{L as a}from"./Line-8NeaciPU.js";import{X as c}from"./XAxis-n00lD-aM.js";import{T as A}from"./Tooltip-B8PRtCZT.js";import{R as f}from"./RechartsHookInspector-Ce0vrec4.js";import{p as g}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./SharedAxisProps-DKzkaa4t.js";import"./resolveDefaultProps-Di-bRFCz.js";import"./CartesianAxis-DTyJ3mcB.js";import"./Layer-B5pUJ7d6.js";import"./Text-CXOTFpC0.js";import"./DOMUtils-DCk3Ra7U.js";import"./Label-vO0tFBMQ.js";import"./PolarUtils-DudrDAyL.js";import"./ZIndexLayer-DoHUAHyH.js";import"./zIndexSlice-CXgHVliP.js";import"./types-DZkoNYJ-.js";import"./hooks-51EGl8Fk.js";import"./axisSelectors-C8uaVJja.js";import"./RechartsWrapper-M1yD5X0u.js";import"./CartesianChart-DlU5PpKX.js";import"./chartDataContext-C4MvfWzW.js";import"./CategoricalChart-BoRcIHlb.js";import"./tooltipContext-BJ3STaWo.js";import"./ReactUtils-B73M-NEp.js";import"./ActiveShapeUtils-Cp7opGs8.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CRfJXidx.js";import"./useAnimationId-DQyCpAJd.js";import"./Trapezoid-CqG9LomH.js";import"./Sector-DZ4anR9n.js";import"./Symbols-GutgQl5i.js";import"./Curve-BV6casI8.js";import"./RegisterGraphicalItemId-DEKbhPBq.js";import"./ErrorBarContext-UJH6PLVM.js";import"./GraphicalItemClipPath-BGGubKyF.js";import"./SetGraphicalItem-D-yEZ2eQ.js";import"./getZIndexFromUnknown-BgxLqYAp.js";import"./graphicalItemSelectors-p0H2OFb-.js";import"./ActivePoints-BtxRiwR-.js";import"./Dot-pAY9JTIt.js";import"./getRadiusAndStrokeWidthFromDot-Dzk2HrW3.js";import"./useElementOffset-DKVHg2OE.js";import"./iteratee-DG0CEwld.js";import"./Cross-eYJkkoHv.js";import"./index-30ex7hAw.js";import"./ChartSizeDimensions-BxqurYlH.js";import"./OffsetShower-Cz9yhNvC.js";import"./PlotAreaShower-CYw1ViUZ.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:g},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
