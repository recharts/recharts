import{e as t}from"./iframe-CoPAm7V1.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisProps-ByMyQu0r.js";import{Y as r}from"./YAxis-BQlirb_K.js";import{R as l}from"./arrayEqualityCheck-b4a3wn0-.js";import{C as x}from"./ComposedChart--N9Ah0Mu.js";import{B as o}from"./Bar-mYqqMHi8.js";import{L as a}from"./Line-D0HoGufp.js";import{X as c}from"./XAxis-DI-YRLnX.js";import{T as A}from"./Tooltip-Wtmd_kNX.js";import{R as f}from"./RechartsHookInspector-CfbHdkme.js";import{p as g}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./SharedAxisProps-DKzkaa4t.js";import"./resolveDefaultProps-OnP709yn.js";import"./CartesianAxis-ksOJ1Son.js";import"./Layer-BHClijQk.js";import"./Text-D8eyFLL7.js";import"./DOMUtils-B7UiVnHW.js";import"./Label-BN0l3Vc3.js";import"./PolarUtils-DGkU6n7f.js";import"./ZIndexLayer-DI7Wag2n.js";import"./zIndexSlice-CV1CLEn_.js";import"./types-BF6A7chk.js";import"./hooks-BDoK-oN_.js";import"./axisSelectors-Cdwi4Gmi.js";import"./RechartsWrapper-DeO9xugK.js";import"./CartesianChart-DHc8LGBh.js";import"./chartDataContext-482lKGc9.js";import"./CategoricalChart-L_hDSvwE.js";import"./tooltipContext-DUgdEMZ_.js";import"./ReactUtils-B2MREsDE.js";import"./ActiveShapeUtils-fJZGBnKb.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CvvJIb6J.js";import"./useAnimationId-BwvCPaTs.js";import"./Trapezoid-f55pqUw3.js";import"./Sector-CfHQ2k9y.js";import"./Symbols-oRqZ57VZ.js";import"./Curve-DDvcpmM9.js";import"./RegisterGraphicalItemId-Cz_MWvVU.js";import"./ErrorBarContext-BY_hX5kq.js";import"./GraphicalItemClipPath-VLyW1X2z.js";import"./SetGraphicalItem-D7kJJVje.js";import"./getZIndexFromUnknown-D4VqWDgG.js";import"./graphicalItemSelectors-BJJxd4bN.js";import"./ActivePoints-BGzQPzt_.js";import"./Dot-Cyp9zk51.js";import"./getRadiusAndStrokeWidthFromDot-BOOk7ozS.js";import"./useElementOffset-eWOG3-7g.js";import"./iteratee-Cq33dU1G.js";import"./Cross-71K9dkTw.js";import"./index-gyMa1MpJ.js";import"./ChartSizeDimensions-BPsfgCbk.js";import"./OffsetShower-CKApfiLz.js";import"./PlotAreaShower-DYf9p6xN.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:g},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
