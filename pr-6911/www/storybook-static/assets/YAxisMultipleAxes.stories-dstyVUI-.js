import{e as t}from"./iframe-BJE3gYiz.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CNrfi_Sb.js";import{Y as r}from"./YAxis-DFb5sVBj.js";import{R as l}from"./arrayEqualityCheck-DOpOKb7k.js";import{C as x}from"./ComposedChart-CjmpYIzW.js";import{B as o}from"./Bar-DelEJCyZ.js";import{L as a}from"./Line-Cl4Kd4w4.js";import{X as c}from"./XAxis-CiUlidyy.js";import{T as A}from"./Tooltip-DvJ-I219.js";import{R as g}from"./RechartsHookInspector-CmJjyPOL.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BKNlGFt8.js";import"./CartesianAxis-DYQqdQ0S.js";import"./Layer-BpHZQDe5.js";import"./Text-CV7Ey6jK.js";import"./DOMUtils-DGjslG0U.js";import"./Label-8Du7WhKH.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-PGry8EqE.js";import"./zIndexSlice-CPc0PYoJ.js";import"./types-BgpWyLLK.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-CzpWgTi2.js";import"./axisSelectors-BAfv6-Wm.js";import"./RechartsWrapper-6YVSs0X2.js";import"./CartesianChart-Dvfq7kHx.js";import"./chartDataContext-dCefmzkT.js";import"./CategoricalChart-BCQDahMf.js";import"./tooltipContext-CEFht0ON.js";import"./ReactUtils-DpOzmnGs.js";import"./ActiveShapeUtils-D_XtSxMo.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-oe8iNjEY.js";import"./useAnimationId-xUHk75MJ.js";import"./Trapezoid-wLmtEI-B.js";import"./Sector-D1swSw6R.js";import"./Symbols-CA9SXzw3.js";import"./Curve-9wsGsorR.js";import"./RegisterGraphicalItemId-DDZY4GcH.js";import"./ErrorBarContext-CmxXk9PG.js";import"./GraphicalItemClipPath-VPQqj0Oy.js";import"./SetGraphicalItem-Bs3LcTS6.js";import"./getZIndexFromUnknown-BhNn_Mt_.js";import"./graphicalItemSelectors-SX_V_YVq.js";import"./ActivePoints-B4GG4aUL.js";import"./Dot-ELwl5DRr.js";import"./getRadiusAndStrokeWidthFromDot-T6tgT4MC.js";import"./useElementOffset-AxHRwjYB.js";import"./iteratee-CDq5lI64.js";import"./Cross-B75I7rUJ.js";import"./index-BZmliZtD.js";import"./ChartSizeDimensions-kmApRxRi.js";import"./OffsetShower-Cu7vEAUz.js";import"./PlotAreaShower-3gxA0MT2.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
