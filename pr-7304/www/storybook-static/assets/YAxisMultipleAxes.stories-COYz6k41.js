import{e as t}from"./iframe-C1XJGX3t.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-BS-4hm0t.js";import{R as l}from"./arrayEqualityCheck-BpeTDNly.js";import{C as x}from"./ComposedChart-lM7HGj1N.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C4zuY2eN.js";import{L as a}from"./Line-CdDOB73K.js";import{X as A}from"./XAxis-F1KgXCzm.js";import{T as g}from"./Tooltip-C1sK7C4M.js";import{R as f}from"./RechartsHookInspector-GAphqeRz.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CUdmmf-V.js";import"./Layer-Dk6O6-C9.js";import"./resolveDefaultProps-DoOIdNyO.js";import"./Text-CHym7YYQ.js";import"./DOMUtils-PN4-Wh3o.js";import"./Label-B-UiuQeI.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-f3tuaVy9.js";import"./zIndexSlice-YaBRx6kS.js";import"./immer-DdA_cEFp.js";import"./types-BO06-FVT.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-ROonkpc2.js";import"./hooks-DkyxLj8R.js";import"./axisSelectors-0L8Hl7-Q.js";import"./d3-scale-DfhtN67L.js";import"./RechartsWrapper-Jcx6MylA.js";import"./index-BMIXdyLv.js";import"./CartesianChart-DfX14VSl.js";import"./chartDataContext-COU-oqyF.js";import"./CategoricalChart-B6tCsX7-.js";import"./tooltipContext-ChwlOZgT.js";import"./ReactUtils-DetlFOn3.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-C4hn4FRv.js";import"./isPlainObject-NaqmG00y.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DhXh8lWP.js";import"./useAnimationId-Bi2kUagW.js";import"./Trapezoid-CN-9c4Ka.js";import"./Sector-CK40XgG2.js";import"./Symbols-DjZQJjpC.js";import"./symbol-BPY5wxKC.js";import"./step-BSNAUXbk.js";import"./Curve-B6o2gEbs.js";import"./RegisterGraphicalItemId-brpvqGPp.js";import"./ErrorBarContext-DDoiyoEo.js";import"./GraphicalItemClipPath-BPrExOyo.js";import"./SetGraphicalItem-VIgAq4Q4.js";import"./getZIndexFromUnknown-BrNS4L_z.js";import"./graphicalItemSelectors-B1l2Nl-L.js";import"./ActivePoints-CpaNcRJG.js";import"./Dot-CY448ZsK.js";import"./getRadiusAndStrokeWidthFromDot-wpqoSr7D.js";import"./useElementOffset-B9PeTQil.js";import"./uniqBy-CnQjPYor.js";import"./iteratee-FcCCYeqO.js";import"./Cross-BJyfnACz.js";import"./index-FCQIpD8D.js";import"./ChartSizeDimensions-B31rA8_p.js";import"./OffsetShower-bDh9UTlF.js";import"./PlotAreaShower-ByyJWnzF.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=i.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Tt=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,Tt as __namedExportsOrder,kt as default};
