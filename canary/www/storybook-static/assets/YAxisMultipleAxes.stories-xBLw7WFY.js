import{e as t}from"./iframe-BlTD-rim.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisProps-ByMyQu0r.js";import{Y as r}from"./YAxis-CzxGswUN.js";import{R as l}from"./arrayEqualityCheck-rFMbtr9X.js";import{C as x}from"./ComposedChart-rwI72tz9.js";import{B as o}from"./Bar-DtSTN1J_.js";import{L as a}from"./Line-9EEW6LJO.js";import{X as c}from"./XAxis-9FZ95w2s.js";import{T as A}from"./Tooltip-gQubTM6T.js";import{R as f}from"./RechartsHookInspector-AxC62fMg.js";import{p as g}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./SharedAxisProps-DKzkaa4t.js";import"./resolveDefaultProps-CYyTkUJ3.js";import"./CartesianAxis-bTSyVw2P.js";import"./Layer-COV8jJuI.js";import"./Text-CcLFuzDB.js";import"./DOMUtils-JUKIsz3X.js";import"./Label-DeeiiEOU.js";import"./PolarUtils-uT4ExAHg.js";import"./ZIndexLayer-D1uFjBFZ.js";import"./zIndexSlice-Ir6gglyl.js";import"./types-DTlxByIq.js";import"./hooks-ZIQpvDbg.js";import"./axisSelectors-BTk9q0tB.js";import"./RechartsWrapper-BRiCuj44.js";import"./CartesianChart-CytP6aLk.js";import"./chartDataContext-BDSmG94B.js";import"./CategoricalChart-DNOtZmhb.js";import"./tooltipContext-D31RXlBy.js";import"./ReactUtils-cgJBm0o5.js";import"./ActiveShapeUtils-TxWRIrWJ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DYtDJsJv.js";import"./useAnimationId-Cp6XJ64u.js";import"./Trapezoid-YZMZwo4M.js";import"./Sector-BWZ0U6hI.js";import"./Symbols-CPbquqjE.js";import"./Curve-BUANm7-q.js";import"./RegisterGraphicalItemId-7-yGWLdn.js";import"./ErrorBarContext-952cRcfJ.js";import"./GraphicalItemClipPath-D9Dgqofo.js";import"./SetGraphicalItem-BzR4HcCN.js";import"./getZIndexFromUnknown-CoMBE9bU.js";import"./graphicalItemSelectors-CzrM9QyT.js";import"./ActivePoints-CPWPbj6O.js";import"./Dot-C6jOffNH.js";import"./getRadiusAndStrokeWidthFromDot-ByE9rINe.js";import"./useElementOffset-DPOkcJvF.js";import"./iteratee-Ca5LyscH.js";import"./Cross-zV6Ljm1M.js";import"./index-BN3nPK1K.js";import"./ChartSizeDimensions-DjKj5CZH.js";import"./OffsetShower-BJ7VFhTL.js";import"./PlotAreaShower-DLdCBikg.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:g},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
