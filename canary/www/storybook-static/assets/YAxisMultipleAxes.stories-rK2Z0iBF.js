import{e as t}from"./iframe-C2m-yPM5.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisProps-ByMyQu0r.js";import{Y as r}from"./YAxis-UtKchpqB.js";import{R as l}from"./arrayEqualityCheck-TbGkdOW0.js";import{C as x}from"./ComposedChart-CnOpfs4O.js";import{B as o}from"./Bar-BQH173y3.js";import{L as a}from"./Line-DQZ-cp1P.js";import{X as c}from"./XAxis-pwIeR2Z_.js";import{T as A}from"./Tooltip-CASLOoZ8.js";import{R as f}from"./RechartsHookInspector-hZPAuXLN.js";import{p as g}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./SharedAxisProps-DKzkaa4t.js";import"./resolveDefaultProps-BmyS9k2s.js";import"./CartesianAxis-BexRodkO.js";import"./Layer-Iud-sCq9.js";import"./Text-DUKp4QGC.js";import"./DOMUtils-CU85nTnD.js";import"./Label-BXoaurZ0.js";import"./PolarUtils-CURfmLFn.js";import"./ZIndexLayer-Cl-H5N7h.js";import"./zIndexSlice-C6669BzF.js";import"./types-8dUwYk5q.js";import"./hooks-DAeXdWPb.js";import"./axisSelectors-DcRH2ohT.js";import"./RechartsWrapper-Cw8RxtHF.js";import"./CartesianChart-DhCLRkDZ.js";import"./chartDataContext-BYudZTMM.js";import"./CategoricalChart-DyutkFbX.js";import"./tooltipContext-Dk1JFYuD.js";import"./ReactUtils-DmzHw7gD.js";import"./ActiveShapeUtils-BOZBV2Pi.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BQHai8ZT.js";import"./useAnimationId-Du8Fxdxx.js";import"./Trapezoid-CwALKVJk.js";import"./Sector-DFUU7h0Y.js";import"./Symbols-vGEzJ5HY.js";import"./Curve-Bma3Kx5X.js";import"./RegisterGraphicalItemId-DCftStFv.js";import"./ErrorBarContext-DcTW_4BU.js";import"./GraphicalItemClipPath-DhdF9Via.js";import"./SetGraphicalItem-qvQ4SGUj.js";import"./getZIndexFromUnknown-Buy4j8bv.js";import"./graphicalItemSelectors-VTE2OvX4.js";import"./ActivePoints-VAc3oi-v.js";import"./Dot-CZbIvFZH.js";import"./getRadiusAndStrokeWidthFromDot-j4oCpZf6.js";import"./useElementOffset-CEtPZLws.js";import"./iteratee-C4HdVpvy.js";import"./Cross-C4JN4moc.js";import"./index-Dd7KOolC.js";import"./ChartSizeDimensions-DjDyxBi1.js";import"./OffsetShower-DXH-cEhk.js";import"./PlotAreaShower-lLRwtmjO.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:g},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
