import{e as t}from"./iframe-BtpSaGeD.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CtpClMsJ.js";import{Y as r}from"./YAxis-Bmepm0jT.js";import{R as l}from"./arrayEqualityCheck-csfjq8mV.js";import{C as x}from"./ComposedChart-D3TQl5Wu.js";import{B as o}from"./Bar-BXGMP6_N.js";import{L as a}from"./Line-Cf2UA-3o.js";import{X as c}from"./XAxis-iLH9P-hU.js";import{T as A}from"./Tooltip-625Ae52e.js";import{R as g}from"./RechartsHookInspector-Dh2n9Wob.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DkARaCDv.js";import"./CartesianAxis-B74-p-s1.js";import"./Layer-CYyvuKkx.js";import"./Text-DH63q3ed.js";import"./DOMUtils-CVzw1QbG.js";import"./Label-BOlhuZqt.js";import"./PolarUtils-5F1_zZA0.js";import"./ZIndexLayer-BcDwNHGX.js";import"./zIndexSlice-ydm78BYW.js";import"./types-245F3-IH.js";import"./hooks-DULxqo3A.js";import"./axisSelectors-CQvuHlQI.js";import"./RechartsWrapper-BQPGXXGO.js";import"./CartesianChart-2vMAanpf.js";import"./chartDataContext-D1JeIz7Q.js";import"./CategoricalChart-BIOH4Ga_.js";import"./tooltipContext-DDmowHlH.js";import"./ReactUtils-TAFDop8V.js";import"./ActiveShapeUtils-D3Igja4T.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D3A1KPVj.js";import"./useAnimationId-Be_3bM2l.js";import"./Trapezoid-xDGlDRMK.js";import"./Sector-NNIkOagX.js";import"./Symbols-Dt8Khp4u.js";import"./Curve-BC2lzeAQ.js";import"./RegisterGraphicalItemId-CJ_I0CZl.js";import"./ErrorBarContext-D_YNM0zR.js";import"./GraphicalItemClipPath-CmYuvuXv.js";import"./SetGraphicalItem-CMYrG93h.js";import"./getZIndexFromUnknown-BueqNB3u.js";import"./graphicalItemSelectors-CuKPbzwY.js";import"./ActivePoints-Djg9xCE5.js";import"./Dot-BgtKn9fG.js";import"./getRadiusAndStrokeWidthFromDot-BgQkEg5F.js";import"./useElementOffset-BXGnihpP.js";import"./iteratee-C4eAhDSk.js";import"./Cross-BmtGXc1D.js";import"./index-o2N_x1RI.js";import"./ChartSizeDimensions-9kzbcyaa.js";import"./OffsetShower-DBzvXmYz.js";import"./PlotAreaShower-BzkhZKlK.js";const yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const ut=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,ut as __namedExportsOrder,yt as default};
