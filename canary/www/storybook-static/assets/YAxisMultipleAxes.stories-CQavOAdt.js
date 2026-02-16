import{e as t}from"./iframe-DvRa5dgx.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-DMMOmwli.js";import{Y as r}from"./YAxis-CxgNkaty.js";import{R as l}from"./arrayEqualityCheck-Bp8MITA_.js";import{C as x}from"./ComposedChart-BwcJtZel.js";import{B as o}from"./Bar-ByrRzTR2.js";import{L as a}from"./Line-CtYOVvfN.js";import{X as c}from"./XAxis-B9F7R6N6.js";import{T as A}from"./Tooltip-DSiZxK6c.js";import{R as g}from"./RechartsHookInspector-BA8H9BQA.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-SoldR4SX.js";import"./CartesianAxis-EG33R3Ra.js";import"./Layer-D1P67DdH.js";import"./Text-IC-RDuuN.js";import"./DOMUtils-BAfLzr3t.js";import"./Label-Btvu6YdH.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DYz5TQmP.js";import"./zIndexSlice-DOVBAap6.js";import"./types-B9z2jnxG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-wIA-0A8I.js";import"./hooks-BvcgOwyj.js";import"./axisSelectors-s-qGbPsD.js";import"./RechartsWrapper-BMf934kH.js";import"./CartesianChart-c-FJQtIa.js";import"./chartDataContext-C7Yjh1uz.js";import"./CategoricalChart-_E9QNV-R.js";import"./tooltipContext-XxmaSwiQ.js";import"./ReactUtils-CmHVY68G.js";import"./ActiveShapeUtils-CAuhGApT.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BNOkSbEV.js";import"./useAnimationId-BFi3XFtV.js";import"./Trapezoid-BUi5_O3W.js";import"./Sector-BF6BfHlW.js";import"./Symbols-DZMMgp9J.js";import"./Curve-DLYOuSdb.js";import"./RegisterGraphicalItemId-CIANtz7R.js";import"./ErrorBarContext-RHRezGW4.js";import"./GraphicalItemClipPath-mIkxvXlB.js";import"./SetGraphicalItem-C9-rzWMm.js";import"./getZIndexFromUnknown-wuejp92i.js";import"./graphicalItemSelectors-BMXMKkAx.js";import"./ActivePoints-BV7tIsyM.js";import"./Dot-DZhZY6Yk.js";import"./getRadiusAndStrokeWidthFromDot-Djbc36Ny.js";import"./useElementOffset-DaJBl-QG.js";import"./iteratee-BmaGSJR8.js";import"./Cross-BoRkc8PB.js";import"./index-B2ipCF0h.js";import"./ChartSizeDimensions-CDS5iqbY.js";import"./OffsetShower-Dle6B9Mj.js";import"./PlotAreaShower-CGSCgxJv.js";const It={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Et=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,Et as __namedExportsOrder,It as default};
