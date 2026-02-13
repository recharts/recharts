import{e as t}from"./iframe-KPAXLOLU.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-BQIKrjqI.js";import{Y as r}from"./YAxis-CAPsonmh.js";import{R as l}from"./arrayEqualityCheck-C56QUJ1f.js";import{C as x}from"./ComposedChart-DeZSIAh0.js";import{B as o}from"./Bar-zxBToTfD.js";import{L as a}from"./Line-CBxA7gKU.js";import{X as c}from"./XAxis-C4HchdwG.js";import{T as A}from"./Tooltip-420Xnvft.js";import{R as g}from"./RechartsHookInspector-kpgbJjbF.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DoONYDR5.js";import"./CartesianAxis-Fwh7n2FF.js";import"./Layer-Da82H4oD.js";import"./Text-bc5Wvmbt.js";import"./DOMUtils-tqc8lMYW.js";import"./Label-BCITgdoX.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DGM-MLqc.js";import"./zIndexSlice-BZZRXwbi.js";import"./types-Bf6Uuk4n.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-BSsx0bCA.js";import"./axisSelectors-BryM1FYj.js";import"./RechartsWrapper-DbDiUXBh.js";import"./CartesianChart-DFX2Z7FU.js";import"./chartDataContext-T6w2KyJs.js";import"./CategoricalChart-Dk9GNXPU.js";import"./tooltipContext-CHrD_CwG.js";import"./ReactUtils-DU0YFNnG.js";import"./ActiveShapeUtils-CGbu2e04.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BzpXjes6.js";import"./useAnimationId-CcLJkYYw.js";import"./Trapezoid-CVMTG_aU.js";import"./Sector-2YnOnij-.js";import"./Symbols-B8OFT3tL.js";import"./Curve-DKnP5GEK.js";import"./RegisterGraphicalItemId-DhvOJqxy.js";import"./ErrorBarContext-DSh5xxoF.js";import"./GraphicalItemClipPath-CMapYqoy.js";import"./SetGraphicalItem-DnuvD-SA.js";import"./getZIndexFromUnknown-j63xAmTD.js";import"./graphicalItemSelectors-CbNq9yul.js";import"./ActivePoints-Be3meqdm.js";import"./Dot-Bzj5Rswh.js";import"./getRadiusAndStrokeWidthFromDot-HFeMNqJA.js";import"./useElementOffset-BgJqWN_p.js";import"./iteratee-OJWbNbsR.js";import"./Cross-BHtgWNX_.js";import"./index-DScL8g0g.js";import"./ChartSizeDimensions-DvlPtCXc.js";import"./OffsetShower-DO6TyZAZ.js";import"./PlotAreaShower-Cm4MMGxs.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const It=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,It as __namedExportsOrder,ut as default};
