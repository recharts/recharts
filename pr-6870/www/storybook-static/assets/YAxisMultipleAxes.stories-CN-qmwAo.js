import{e as t}from"./iframe-D2G3HIAp.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisProps-ByMyQu0r.js";import{Y as r}from"./YAxis-C4SLmRp0.js";import{R as l}from"./arrayEqualityCheck-D7f_pFRZ.js";import{C as x}from"./ComposedChart-B3gygK9L.js";import{B as o}from"./Bar-Cba9sfcA.js";import{L as a}from"./Line-CnFjL8nQ.js";import{X as c}from"./XAxis-Cv05-S4d.js";import{T as A}from"./Tooltip-HMhPUFuF.js";import{R as f}from"./RechartsHookInspector-Bl5k7Hvc.js";import{p as g}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./SharedAxisProps-DKzkaa4t.js";import"./resolveDefaultProps-DUSJViu-.js";import"./CartesianAxis-4WuYgukg.js";import"./Layer--_yZLHYD.js";import"./Text-BktKgt0G.js";import"./DOMUtils-CXrXcMzN.js";import"./Label-Dmvkas3w.js";import"./PolarUtils-Dps0SkyA.js";import"./ZIndexLayer-CUBtDPQX.js";import"./zIndexSlice-DJ_SqHH-.js";import"./types-DJ8_iZaM.js";import"./hooks-sNKmgtMM.js";import"./axisSelectors-276H6COd.js";import"./RechartsWrapper-CZfXu9Bm.js";import"./CartesianChart-Cd_D9K81.js";import"./chartDataContext-BdGyYEQ1.js";import"./CategoricalChart-DtaGr5KL.js";import"./tooltipContext-BcWuMro5.js";import"./ReactUtils-BiGt9Rwl.js";import"./ActiveShapeUtils-D_-w_v2b.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BNNRRaL-.js";import"./useAnimationId-P64LV0gd.js";import"./Trapezoid-BPu8z8Hk.js";import"./Sector-CkVMFxgw.js";import"./Symbols-CdOOLS_O.js";import"./Curve-DwXIRY2H.js";import"./RegisterGraphicalItemId-Dydu6q-y.js";import"./ErrorBarContext-BXYRXGCk.js";import"./GraphicalItemClipPath-Ct9ZNJk2.js";import"./SetGraphicalItem-4DzlkcSy.js";import"./getZIndexFromUnknown-CyxbAx5S.js";import"./graphicalItemSelectors-DkJAOwku.js";import"./ActivePoints-BghVk57_.js";import"./Dot-C5hzWh_I.js";import"./getRadiusAndStrokeWidthFromDot-C1YLbI6G.js";import"./useElementOffset-DjRuwiqo.js";import"./iteratee-BWz_WTT_.js";import"./Cross-Y984nfbX.js";import"./index-BwQRywFC.js";import"./ChartSizeDimensions-C1G0XugS.js";import"./OffsetShower-vnVO-R-R.js";import"./PlotAreaShower-8nMbOvlD.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:g},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
