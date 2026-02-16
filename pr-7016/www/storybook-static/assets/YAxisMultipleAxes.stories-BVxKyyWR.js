import{e as t}from"./iframe-Ch6AeBvd.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-DMMOmwli.js";import{Y as r}from"./YAxis-CBFbjxfR.js";import{R as l}from"./arrayEqualityCheck-DGZ3teMN.js";import{C as x}from"./ComposedChart-CZ_B4iUN.js";import{B as o}from"./Bar-nlGAf4mV.js";import{L as a}from"./Line-DAy7X0Tg.js";import{X as c}from"./XAxis-Ct6CHpvF.js";import{T as A}from"./Tooltip-DO9oNv_9.js";import{R as g}from"./RechartsHookInspector-B8QYXaP3.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DY5EHtdJ.js";import"./CartesianAxis-DGiGQ4zb.js";import"./Layer-4QzHj9sV.js";import"./Text-CZ2eqhTp.js";import"./DOMUtils-LXYYMBTJ.js";import"./Label-BhgECJNB.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CX8R-8Lg.js";import"./zIndexSlice-iERq52j6.js";import"./types-Do_qsLRQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-m0x3riPF.js";import"./hooks-CgjYUNQl.js";import"./axisSelectors-Du_flrq7.js";import"./RechartsWrapper-DrY4pfOn.js";import"./CartesianChart-Ash0799N.js";import"./chartDataContext-BY2eQbCt.js";import"./CategoricalChart-DYUSwV_N.js";import"./tooltipContext-DgLUObry.js";import"./ReactUtils-DkszlIgF.js";import"./ActiveShapeUtils-bE4blCx8.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-IGKhP2jD.js";import"./useAnimationId-YtLKjIEe.js";import"./Trapezoid-r21rfNHm.js";import"./Sector-nTDBGNXx.js";import"./Symbols-WE9lD8Kq.js";import"./Curve-Bln8u_qs.js";import"./RegisterGraphicalItemId-B-1y75Pt.js";import"./ErrorBarContext-mxMpkgJh.js";import"./GraphicalItemClipPath-DE5lF0mO.js";import"./SetGraphicalItem-B8Is7A4s.js";import"./getZIndexFromUnknown-CxHu1T5X.js";import"./graphicalItemSelectors-CqQUOiKD.js";import"./ActivePoints-CM9crGmK.js";import"./Dot-66bsVwqe.js";import"./getRadiusAndStrokeWidthFromDot-Ccoz4H_8.js";import"./useElementOffset-CGEO9Zqm.js";import"./iteratee-CkJe_Kei.js";import"./Cross-CWdh06dN.js";import"./index-Bzb6Yeqp.js";import"./ChartSizeDimensions-DPpuKktz.js";import"./OffsetShower-BBFXLy0z.js";import"./PlotAreaShower-D4ARrmD5.js";const It={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
