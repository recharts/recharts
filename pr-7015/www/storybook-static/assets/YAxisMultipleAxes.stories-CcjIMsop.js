import{e as t}from"./iframe-BI7oaA_G.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-DMMOmwli.js";import{Y as r}from"./YAxis-RsyqFzC6.js";import{R as l}from"./arrayEqualityCheck-CqFOZzs4.js";import{C as x}from"./ComposedChart-Bmljd1qJ.js";import{B as o}from"./Bar-CTPhFxIv.js";import{L as a}from"./Line-CisjuVcw.js";import{X as c}from"./XAxis-CapxM4jv.js";import{T as A}from"./Tooltip-87W6LZYY.js";import{R as g}from"./RechartsHookInspector-B5lL4wmf.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BmsjXKM6.js";import"./CartesianAxis-maHjO968.js";import"./Layer-_hLoKUUt.js";import"./Text-uzPlC_zS.js";import"./DOMUtils-D_254HoM.js";import"./Label-CW-OXdCr.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ow9Mnhy6.js";import"./zIndexSlice-BJBRf06a.js";import"./types-BMyhg35s.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-C7y0xKdM.js";import"./hooks-BYYSr3I0.js";import"./axisSelectors-CGdfGHmv.js";import"./RechartsWrapper-o4Mh8MkL.js";import"./CartesianChart-C-ZN2oGk.js";import"./chartDataContext-Bvker2sK.js";import"./CategoricalChart-Cgi21fgg.js";import"./tooltipContext-WDXGlhXg.js";import"./ReactUtils-CElkG0RD.js";import"./ActiveShapeUtils-BLY2D3T7.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ICwvq_9q.js";import"./useAnimationId-DTs7L-5Q.js";import"./Trapezoid-DmJQSZ1N.js";import"./Sector-CLQqFD3N.js";import"./Symbols-BV4zxwPS.js";import"./Curve-DhRTsi0L.js";import"./RegisterGraphicalItemId-D0nTrYTJ.js";import"./ErrorBarContext-Cfw2K8JX.js";import"./GraphicalItemClipPath-BcJbyhsI.js";import"./SetGraphicalItem-C9Na75Z3.js";import"./getZIndexFromUnknown-D5nBbLu1.js";import"./graphicalItemSelectors-Czqo4CT5.js";import"./ActivePoints-BR-wKGMx.js";import"./Dot-DtG9WkmN.js";import"./getRadiusAndStrokeWidthFromDot-DsJx8dx0.js";import"./useElementOffset-Cs90PYbu.js";import"./iteratee-Bl6YWlFc.js";import"./Cross-HJItOYqe.js";import"./index-DJbyc3-8.js";import"./ChartSizeDimensions-DfSqX2vT.js";import"./OffsetShower-DIooMjVh.js";import"./PlotAreaShower-9a9xIQCa.js";const It={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
